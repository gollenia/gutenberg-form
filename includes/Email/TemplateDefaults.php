<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

final class TemplateDefaults
{
	public static function admin(): string
	{
		return self::document([
			self::paragraph([
				self::text(__('A new message has been sent from a form on your website.', 'gutenberg-form')),
			]),
			self::paragraph([
				self::token('{all_fields}', __('All fields', 'gutenberg-form')),
			]),
			self::paragraph([
				self::text(__('The form has been sent from the ', 'gutenberg-form')),
				self::token('{form_name}', __('Form title', 'gutenberg-form')),
				self::text(__(' form:', 'gutenberg-form')),
			]),
			self::paragraph([
				self::token('{page_url}', __('Page URL', 'gutenberg-form')),
			]),
		]);
	}

	public static function user(): string
	{
		return self::document([
			self::paragraph([
				self::text(__('Thank you for your message.', 'gutenberg-form')),
			]),
			self::paragraph([
				self::token('{all_fields}', __('All fields', 'gutenberg-form')),
			]),
			self::paragraph([
				self::text(__('You will hear from us as soon as possible', 'gutenberg-form')),
			]),
		]);
	}

	/**
	 * @param array<int, array<string, mixed>> $content
	 */
	private static function document(array $content): string
	{
		return (string) wp_json_encode([
			'type' => 'doc',
			'content' => $content,
		]);
	}

	/**
	 * @param array<int, array<string, mixed>> $content
	 * @return array<string, mixed>
	 */
	private static function paragraph(array $content): array
	{
		return [
			'type' => 'paragraph',
			'content' => $content,
		];
	}

	/** @return array<string, string> */
	private static function text(string $text): array
	{
		return [
			'type' => 'text',
			'text' => $text,
		];
	}

	/** @return array<string, mixed> */
	private static function token(string $token, string $label): array
	{
		return [
			'type' => 'mailToken',
			'attrs' => [
				'token' => $token,
				'label' => $label,
			],
		];
	}
}
