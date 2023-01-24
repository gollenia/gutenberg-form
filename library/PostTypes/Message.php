<?php

class Message {

	const POST_TYPE = 'gbf-message';

	public static function init() {
		$instance = new self;
		add_action( 'init', [$instance, "register_post_type"] );
		return $instance;
	}

	public function register_post_type() {
		register_post_type( 'gbf-message', [
			'label' => __('Messages', 'gutenberg-form'),
			'public' => true,
			'show_in_rest' => true,
			'supports' => ['title', 'editor'],
			'rewrite' => ['slug' => 'gbf-form'],
			'has_archive' => true,
			'menu_icon' => 'dashicons-feedback',
			'labels' => [
				'name' => __('Messages', 'gutenberg-form'),
				'singular_name' => __('Message', 'gutenberg-form'),
				'search_items' => __('Search Messages', 'gutenberg-form'),
				'not_found' => __('No Messages found', 'gutenberg-form'),
				'not_found_in_trash' => __('No Messages found in trash', 'gutenberg-form'),
				'all_items' => __('All Messages', 'gutenberg-form'),
				'archives' => __('Message Archives', 'gutenberg-form')
			]
		] );
	}
}