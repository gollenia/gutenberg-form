<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

use Contexis\GutenbergForm\Email\Tiptap\MailTokenNode;
use Contexis\GutenbergForm\Email\Tiptap\TextColorMark;
use Contexis\GutenbergForm\Form\FormFields;
use Tiptap\Editor;
use Tiptap\Extensions\StarterKit;
use Tiptap\Marks\Underline;

final class TemplateRenderer
{
	public function render(string $template, FormFields $form): string
	{
		$template = $this->normalizeTemplate($template);

		$template = preg_replace_callback(
			'/<span[^>]*data-type=["\']mail-token["\'][^>]*data-token=["\']([^"\']+)["\'][^>]*>.*?<\/span>/i',
			static fn (array $matches): string => $matches[1],
			$template
		);

		$template = str_replace('{form_title}', get_the_title($form->id), $template);
		$template = str_replace('{page_title}', get_the_title($form->page_id), $template);
		$template = str_replace('{page_url}', get_permalink($form->page_id), $template);
		$template = str_replace('{all_fields}', $form->get_formatted_values(), $template);
		$template = str_replace('{form_name}', get_the_title($form->id), $template);

		return (string) preg_replace_callback(
			'/{(.*?)}/',
			static fn (array $matches): string => $form->get_formatted_value($matches[1]),
			$template
		);
	}

	private function normalizeTemplate(string $template): string
	{
		if ($template === '') {
			return '';
		}

		if (!$this->looksLikeTiptapJson($template)) {
			return $template;
		}

		return (new Editor([
			'extensions' => [
				new StarterKit([
					'heading' => false,
					'blockquote' => false,
					'codeBlock' => false,
					'horizontalRule' => false,
					'strike' => false,
				]),
				new Underline(),
				new TextColorMark(),
				new MailTokenNode(),
			],
			'content' => $template,
		]))->getHTML();
	}

	private function looksLikeTiptapJson(string $template): bool
	{
		try {
			$decoded = json_decode($template, true, 512, JSON_THROW_ON_ERROR);
		} catch (\JsonException) {
			return false;
		}

		return is_array($decoded)
			&& ($decoded['type'] ?? null) === 'doc'
			&& isset($decoded['content']);
	}
}
