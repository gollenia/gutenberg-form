<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form\WordPress;

use Contexis\GutenbergForm\Email\TemplateDefaults;
use Contexis\GutenbergForm\Form\FormPost;

final class FormMeta
{
	public function register(): void
	{
		$metaItems = [
			['_mail_recipients', 'string', get_bloginfo('admin_email')],
			['_send_to_admin', 'boolean', false],
			['_mail_subject', 'string', sprintf(__('New form submission on %s', 'gutenberg-form'), get_bloginfo('name'))],
			['_user_mail_subject', 'string', sprintf(__('Your form submission on %s', 'gutenberg-form'), get_bloginfo('name'))],
			['_user_mail_template', 'string', TemplateDefaults::user()],
			['_user_mail_enabled', 'boolean', false],
			['_mail_template', 'string', TemplateDefaults::admin()],
			['_form_submit_title', 'string', __('Send', 'gutenberg-form')],
			['_form_submit_align', 'string', 'right'],
			['_feedback_form_collapse', 'boolean', false],
		];

		foreach ($metaItems as $meta) {
			register_post_meta(FormPost::POST_TYPE, $meta[0], [
				'type' => $meta[1],
				'single' => true,
				'default' => $meta[2],
				'sanitize_callback' => '',
				'auth_callback' => static function () {
					return current_user_can('edit_posts');
				},
				'show_in_rest' => [
					'schema' => [
						'default' => $meta[2],
						'style' => $meta[1],
					],
				],
			]);
		}
	}
}
