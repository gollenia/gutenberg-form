<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email\Tiptap;

use Tiptap\Core\Node;
use Tiptap\Utils\HTML;

final class MailTokenNode extends Node
{
	public static $name = 'mailToken';

	public function addOptions(): array
	{
		return [
			'HTMLAttributes' => [],
		];
	}

	public function addAttributes(): array
	{
		return [
			'token' => [
				'parseHTML' => static fn ($DOMNode) => $DOMNode->getAttribute('data-token') ?: '',
				'renderHTML' => static fn ($attributes) => [
					'data-token' => $attributes->token ?? '',
				],
			],
			'label' => [
				'parseHTML' => static fn ($DOMNode) => $DOMNode->getAttribute('data-label') ?: '',
				'renderHTML' => static fn ($attributes) => [
					'data-label' => $attributes->label ?? '',
				],
			],
		];
	}

	public function parseHTML(): array
	{
		return [
			[
				'tag' => 'span[data-type="mail-token"]',
			],
		];
	}

	public function renderHTML($node, $HTMLAttributes = []): array
	{
		return [
			'span',
			HTML::mergeAttributes(
				[
					'data-type' => 'mail-token',
					'class' => 'ctx-email-token',
				],
				$this->options['HTMLAttributes'],
				$HTMLAttributes,
			),
			0,
		];
	}

	public function renderText($node): string
	{
		return (string) ($node->attrs->token ?? '');
	}
}
