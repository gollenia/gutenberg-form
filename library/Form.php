<?php

namespace Contexis\GutenbergForm;

class Form {
	
	const POST_TYPE = 'gfb-form';
	
	public static function init() {
		$instance = new self;
		add_action( 'init', [$instance, "register_post_type"] );
		add_action( 'init', [$instance, "register_meta"] );
		
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
			'menu_icon' => 'dashicons-feedback',
			'description' => __('Display forms on your blog.','gutenberg-form'),
			'template' => [
				['gutenberg-form/form-container', [], [
					['gutenberg-form/form-email', ["required" => true, "label" => __('Email', 'gutenberg-form'), "fieldid" => 'user_email']],
					['gutenberg-form/form-text', ["required" => true, "width" => 2, "label" => __('First Name', 'gutenberg-form'), "fieldid" => 'first_name']],
					['gutenberg-form/form-text', ["required" => true, "width" => 2, "label" => __('Last Name', 'gutenberg-form'), "fieldid" => 'last_name']]]
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

	public function register_meta() {
		register_post_meta( 'gfb-form', '_mail_template', [
			'type' => 'string',
			'single'       => true,
			'default' => '',
			'sanitize_callback' => '',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
			'show_in_rest' => [
				'schema' => [
					'default' => '',
					'style' => "string"
				]
			]
		]);

		register_post_meta( 'gfb-form', '_mail_receiver', [
			'type' => 'string',
			'single' => true,
			'default' => '',
			'sanitize_callback' => '',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
			'show_in_rest' => [
				'schema' => [
					'default' => '',
					'style' => "string"
				]
			]
		]);

		register_post_meta( 'gfb-form', '_send_to_admin', [
			'type' => 'boolean',
			'single' => true,
			'default' => false,
			'sanitize_callback' => '',
			'auth_callback' => function() {
				return current_user_can( 'edit_posts' );
			},
			'show_in_rest' => [
				'schema' => [
					'default' => false,
					'style' => "boolean"
				]
			]
		]);
	}

	public static function get_form( $id ) {
		$form = get_post( $id );
		if ( $form->post_type !== self::POST_TYPE ) {
			return false;
		}
		return $form;
	}
}

Form::init();