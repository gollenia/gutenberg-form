<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form\WordPress;

use Contexis\GutenbergForm\Form\FormPost;

final class FormColumns
{
	public function add($columns)
	{
		if (get_post_type() !== FormPost::POST_TYPE) {
			return $columns;
		}

		$columns['recipient'] = __('Recipient', 'gutenberg-form');
		$columns['admincopy'] = __('Copy to Admin', 'gutenberg-form');

		return $columns;
	}

	public function render($column, $post_id): void
	{
		if (get_post_type() !== FormPost::POST_TYPE) {
			return;
		}

		switch ($column) {
			case 'recipient':
				$recipient = get_post_meta($post_id, '_mail_recipients', true);
				echo $recipient ? $recipient : get_bloginfo('admin_email');
				break;
			case 'admincopy':
				echo get_post_meta($post_id, '_send_to_admin', true)
					? __('Yes', 'gutenberg-form')
					: __('No', 'gutenberg-form');
				break;
		}
	}
}
