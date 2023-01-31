<?php

namespace Contexis\GutenbergForm;

/*
 * Class to register and handle the form post type
 * 
 * @return void
*/
class FormPost {
	
	const POST_TYPE = 'gbf-form';
	const ALLOWED_FIELDS = ['text', 'email', 'html', 'select', 'country', 'tel', 'textarea', 'checkbox', 'date', 'hidden', 'number', 'radio', 'submit'];

	public $meta_array = [
		["_mail_recipients", 'string', ''],
		["_send_to_admin", 'boolean', false],
		["_mail_subject", 'string', ''],
		["_mail_template", 'string', '']
	];
	
	/**
	 * 
	 * hook required actions and filters into wordpress
	 * 
	 * @return Form
	 */
	public static function init() {
		$instance = new self;
		add_action( 'init', [$instance, "register_post_type"] );
		add_action( 'init', [$instance, "register_meta"] );
		add_filter( "manage_gbf-form_posts_columns", [$instance, "add_columns"] );
		add_action( "manage_posts_custom_column", [$instance, 'set_column_data'], 10, 2);
		add_action('rest_api_init',array($instance,'register_rest'),10,1);
		return $instance;
	}

	public function register_post_type() {
		register_post_type( self::POST_TYPE, [
			'label' => __('Forms', 'gutenberg-form'),
			'public' => true,
			'show_in_rest' => true,
			'supports' => ['title', 'editor'],
			'rewrite' => ['slug' => 'gutenberg-form'],
			'has_archive' => true,
			'supports' => ['title', 'editor', 'revisions', 'custom-fields', 'excerpt'],
			'menu_icon' => 'dashicons-feedback',
			'description' => __('Display forms on your blog.','gutenberg-form'),
			'template' => [
				['gutenberg-form/form-container', [], [
					['gutenberg-form/email', ["required" => true, "label" => __('Email', 'gutenberg-form'), "fieldid" => 'user_email']],
					['gutenberg-form/text', ["required" => true, "width" => 3, "label" => __('First Name', 'gutenberg-form'), "fieldid" => 'first_name']],
					['gutenberg-form/text', ["required" => true, "width" => 3, "label" => __('Last Name', 'gutenberg-form'), "fieldid" => 'last_name']]]
				]
			],
			'labels' => [
				'name' => __('Forms', 'gutenberg-form'),
				'singular_name' => __('Form', 'gutenberg-form'),
				'add_new' => __('Add new Form', 'gutenberg-form'),
				'add_new_item' => __('Add new Form', 'gutenberg-form'),
				'edit_item' => __('Edit Form', 'gutenberg-form'),
				'new_item' => __('New Form', 'gutenberg-form'),
				'view_item' => __('View Form', 'gutenberg-form'),
				'view_items' => __('View Forms', 'gutenberg-form'),
				'search_items' => __('Search Forms', 'gutenberg-form'),
				'not_found' => __('No Forms found', 'gutenberg-form'),
				'not_found_in_trash' => __('No Forms found in trash', 'gutenberg-form'),
				'all_items' => __('All Forms', 'gutenberg-form'),
				'archives' => __('Form Archives', 'gutenberg-form'),
				'attributes' => __('Form Attributes', 'gutenberg-form'),
				'insert_into_item' => __('Insert into Form', 'gutenberg-form'),
				'filter_items_list' => __('Filter Forms list', 'gutenberg-form'),
				'items_list_navigation' => __('Forms list navigation', 'gutenberg-form'),
				'items_list' => __('Forms list', 'gutenberg-form'),
				'item_published' => __('Form published', 'gutenberg-form'),
				'item_published_privately' => __('Form published privately', 'gutenberg-form'),
				'item_reverted_to_draft' => __('Form reverted to draft', 'gutenberg-form'),
				'item_scheduled' => 'Form scheduled',
				'item_updated' => 'Form updated',
			]
		] );
	}

	/**
	 * Add columns to the post list
	 * 
	 * @param array $columns
	 * @return array
	 */
	public function add_columns($columns) {
		if(get_post_type() !== self::POST_TYPE) {
			return $columns;
		}
		
		$columns['recipient'] = __('Recipient', 'gutenberg-form');
		$columns['admincopy'] = __('Copy to Admin', 'gutenberg-form');
		return $columns; 
	}

	/**
	 * Set the data for the columns
	 * 
	 * @param string $column
	 * @param int $post_id
	 * @return void
	 */
	public function set_column_data($column, $post_id) {
		if(get_post_type() !== self::POST_TYPE) {
			return;
		}
		
		switch($column) {
			
			case 'recipient':
				$recipient = get_post_meta($post_id, '_mail_recipients', true);
				if($recipient) {
					echo $recipient;
				} else {
					echo get_bloginfo('admin_email');
				}
				break;
			case 'admincopy':
				$admincopy = get_post_meta($post_id, '_send_to_admin', true);
				if($admincopy) {
					echo __('Yes', 'gutenberg-form');
				} else {
					echo __('No', 'gutenberg-form');
				}
				break;
		}
	}

	public function register_meta() {

		foreach($this->meta_array as $meta) {
			register_post_meta( self::POST_TYPE, $meta[0], [
				'type' => $meta[1],
				'single'       => true,
				'default' => $meta[2],
				'sanitize_callback' => '',
				'auth_callback' => function() {
					return current_user_can( 'edit_posts' );
				},
				'show_in_rest' => [
					'schema' => [
						'default' => $meta[2],
						'style' => $meta[1]
					]
				]
			]);
		}
	}

	public static function get_form( $id ) {
		$form = get_post( $id );
		if ( $form->post_type !== self::POST_TYPE ) {
			return false;
		}
		return $form;
	}

	function get_recipients( $form ) {
		$admin = get_bloginfo('admin_email');
		$receivers = get_post_meta( $form->ID, '_mail_receiver', true );
		if(empty($receivers)) {
			return [$admin];
		}
		if(get_post_meta( $form->ID, '_send_to_admin', true )) {
			$receivers .= ", $admin";
		}
		return explode(',', $receivers);
	}

	public function register_rest() {
		register_rest_route( 'gbf-form/v2', '/form/(?P<id>\d+)', [
			'method' => 'GET', 
			'callback' => [$this, 'get_rest_data'], 
			'args' => [
				'id' => [
					'validate_callback' => function($param, $request, $key) {
						return is_numeric( $param );
					}
				]
			],
			'permission_callback' => '__return_true'
		], true );
	}

	
	public function get_rest_data($params) {

		$id = $params['id'];
		if(!$id) return false;

		return $this->get_form_data($id);
	
	}

	public function get_form_data($id) {
		$form = get_post($id);
		if(!$form || $form->post_type !== self::POST_TYPE) return false;
		$blocks = parse_blocks( $form->post_content );

		// extract blocks from form-container
		foreach($blocks as $block) {
			if($block['blockName'] == "gutenberg-form/form-container") {
				$fieldBlocks = $block['innerBlocks'];
			}
		}
		
		$cleanedBlocks = [];
		foreach($fieldBlocks as $block) {
			$type = $this->get_field_type($block);
			if(!in_array($type, self::ALLOWED_FIELDS)) continue;
			$field = ['type' => $type, 'settings' => $block['attrs']];
			if($type === 'html') $field['settings']['content'] = $block['innerHTML'];
			$cleanedBlocks[] = $field;
		}

		return $cleanedBlocks;
	}

	function get_field_type($block) {
		$type = "";
		list($namespace, $type) = explode("/", $block['blockName']);
		if($namespace != "gutenberg-form") return;
		return $type;
	}
}

FormPost::init();