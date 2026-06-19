<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form\WordPress;

use Contexis\GutenbergForm\Form\FormPost;

final class FormPostType
{
	public function register(): void
	{
		register_post_type(FormPost::POST_TYPE, [
			'label' => __('Forms', 'gutenberg-form'),
			'public' => true,
			'show_in_rest' => true,
			'supports' => ['title', 'editor', 'revisions', 'custom-fields', 'excerpt'],
			'rewrite' => ['slug' => 'gutenberg-form'],
			'has_archive' => true,
			'menu_icon' => 'dashicons-feedback',
			'description' => __('Display forms on your blog.', 'gutenberg-form'),
			'template' => [
				['gutenberg-form/form-container', [], [
					['gutenberg-form/response', ['lock' => ['move' => true, 'remove' => true]], [
						['core/heading', ['content' => __('Thank you', 'gutenberg-form')]],
						['core/paragraph', ['content' => __('Your message has been sent', 'gutenberg-form')]],
					]],
					['gutenberg-form/form-fields', ['lock' => ['move' => true, 'remove' => true]], [
						['gutenberg-form/text', ['required' => true, 'width' => 6, 'label' => __('Name', 'gutenberg-form'), 'name' => 'name']],
						['gutenberg-form/email', ['required' => true, 'width' => 6, 'label' => __('Email', 'gutenberg-form'), 'name' => 'email']],
						['gutenberg-form/textarea', ['required' => true, 'width' => 6, 'label' => __('Message', 'gutenberg-form'), 'name' => 'message']],
						['gutenberg-form/submit', ['lock' => ['move' => true, 'remove' => true], 'width' => 6, 'label' => __('Submit', 'gutenberg-form')]],
					]],
				]],
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
			],
		]);
	}
}
