<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email\Tiptap;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

final class TextColorMark extends Mark
{
	public static $name = 'textColor';

	public function addAttributes(): array
	{
		return [
			'color' => [
				'default' => null,
				'parseHTML' => static function ($DOMNode) {
					$dataColor = $DOMNode->getAttribute('data-color');
					if ($dataColor !== '') {
						return $dataColor;
					}

					$style = $DOMNode->getAttribute('style');
					if ($style === '') {
						return null;
					}

					if (preg_match('/color\s*:\s*([^;]+)/i', $style, $matches) !== 1) {
						return null;
					}

					return trim($matches[1]);
				},
				'renderHTML' => static function ($attributes) {
					$color = $attributes->color ?? null;
					if ($color === null || $color === '') {
						return null;
					}

					return [
						'data-color' => $color,
						'style' => "color: {$color}",
					];
				},
			],
		];
	}

	public function parseHTML(): array
	{
		return [
			['tag' => 'span[data-color]'],
			['tag' => 'span[style*="color"]'],
		];
	}

	public function renderHTML($mark, $HTMLAttributes = []): array
	{
		return ['span', HTML::mergeAttributes($HTMLAttributes), 0];
	}
}
