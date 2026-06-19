<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

final class TemplateDefaults
{
	public static function admin(): string
	{
		$template = __('A new message has been sent from a form on your website.', 'gutenberg-form');
		$template .= '<br/><br/>';
		$template .= '{all_fields}';
		$template .= '<br/><br/>';
		$template .= __('The form has been sent from the {form_name} form:', 'gutenberg-form');
		$template .= ' <a href={page_url}>{page_title}</a>';

		return $template;
	}

	public static function user(): string
	{
		$template = __('Thank you for your message.', 'gutenberg-form');
		$template .= '<br/><br/>';
		$template .= '{all_fields}';
		$template .= '<br/><br/>';
		$template .= __('You will hear from us as soon as possible', 'gutenberg-form');

		return $template;
	}
}
