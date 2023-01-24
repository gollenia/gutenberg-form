<?php

class Form {
	
	const POST_TYPE = 'gfb-form';
	
	public static function init() {
		$instance = new self;
		add_action( 'init', [$instance, "register_post_type"] );
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
}

Form::init();