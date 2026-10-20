<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email\Tiptap;

use Tiptap\Core\Node;
use Tiptap\Utils\HTML;

final class MailButtonNode extends Node
{
	public static $name = 'mailButton';

	public function addAttributes(): array
	{
		return [
			'href' => [
				'default' => '',
				'parseHTML' => static fn ($DOMNode) => $DOMNode->getAttribute('href') ?: '',
				'renderHTML' => static fn ($attributes) => ['href' => $attributes->href ?? ''],
			],
			'label' => [
				'default' => '',
				'parseHTML' => static fn ($DOMNode) => trim($DOMNode->textContent ?? ''),
			],
		];
	}

	public function parseHTML(): array
	{
		return [['tag' => 'a[data-type="mail-button"]']];
	}

	public function renderHTML($node, $HTMLAttributes = []): array
	{
		return [
			'a',
			HTML::mergeAttributes([
				'data-type' => 'mail-button',
				'style' => 'display:inline-block;padding:10px 16px;background:#3858e9;color:#ffffff;text-decoration:none;border-radius:4px;',
			], $HTMLAttributes),
			0,
		];
	}

	public function renderText($node): string
	{
		return (string) ($node->attrs->label ?? 'Button');
	}
}
