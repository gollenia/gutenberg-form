<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Http;

final class ResponseContent
{
	public static function get_html($id): array|false
	{
		$form = get_post($id);
		if (!$form) {
			return false;
		}

		$blocks = parse_blocks($form->post_content);
		$formContainer = self::searchRecursiveBlock(
			$blocks,
			'gutenberg-form/form-container'
		);

		if (!$formContainer) {
			return false;
		}

		$responseBlock = self::searchRecursiveBlock(
			$formContainer['innerBlocks'] ?? [],
			'gutenberg-form/response'
		);

		if (!$responseBlock) {
			$responseBlock = self::searchRecursiveBlock(
				$formContainer['innerBlocks'] ?? [],
				'gutenberg-form/mail-editor'
			);
		}

		if (!$responseBlock) {
			return false;
		}

		return ['html' => render_block($responseBlock), 'attributes' => $responseBlock['attrs']];
	}

	private static function searchRecursiveBlock(array $blocks, string $blockName): array|false
	{
		foreach ($blocks as $block) {
			if (($block['blockName'] ?? null) === $blockName) {
				return $block;
			}

			$found = self::searchRecursiveBlock($block['innerBlocks'] ?? [], $blockName);
			if ($found) {
				return $found;
			}
		}

		return false;
	}
}
