<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

final class FieldParser
{
	private const ALLOWED_FIELDS = ['text', 'email', 'html', 'select', 'country', 'tel', 'textarea', 'checkbox', 'date', 'number', 'radio', 'submit', 'hidden', 'combobox'];

	public function parse(int $formId, int $pageId = 0): array
	{
		$form = get_post($formId);
		if (!$form || $form->post_type !== FormPost::POST_TYPE) {
			return [];
		}

		$blocks = parse_blocks($form->post_content);
		$fieldBlocks = $this->extractFieldBlocks($blocks);
		$fields = [];

		foreach ($fieldBlocks as $block) {
			$type = $this->getFieldType($block);
			if (!in_array($type, self::ALLOWED_FIELDS, true)) {
				continue;
			}

			$attrs = array_merge($this->loadBlockDefaults($type), $block['attrs'] ?? []);
			$field = $attrs;
			$field['type'] = array_key_exists('type', $field) ? $field['type'] : $type;
			$field['name'] = $this->getFieldName($attrs, $type);
			$field['visibilityRule'] = $this->sanitizeVisibilityRule($field['visibilityRule'] ?? null);
			$field['pattern'] = $this->sanitizePattern($field['pattern'] ?? null);

			if ($type === 'html') {
				$field['content'] = render_block($block);
			}

			if ($type === 'hidden') {
				$field['defaultValue'] = $this->getHiddenFieldValue($field, $pageId);
			}

			$fields[$field['name']] = $field;
		}

		$fields['id'] = [
			'type' => 'hidden',
			'label' => 'ID',
			'name' => 'id',
			'defaultValue' => $formId,
		];

		$fields['page_id'] = [
			'type' => 'hidden',
			'label' => 'Page ID',
			'name' => 'page_id',
			'defaultValue' => $pageId,
		];

		return $fields;
	}

	private function extractFieldBlocks(array $blocks): array
	{
		foreach ($blocks as $block) {
			if (($block['blockName'] ?? null) !== 'gutenberg-form/form-container') {
				continue;
			}

			foreach ($block['innerBlocks'] ?? [] as $innerBlock) {
				if (($innerBlock['blockName'] ?? null) === 'gutenberg-form/form-fields') {
					return $innerBlock['innerBlocks'] ?? [];
				}
			}
		}

		return [];
	}

	private function getFieldType(array $block): string
	{
		[$namespace, $type] = explode('/', $block['blockName']);

		return $namespace === 'gutenberg-form' ? $type : '';
	}

	private function getFieldName(array $attrs, string $type): string
	{
		if ($type === 'submit') {
			return 'submit';
		}

		if ($type === 'html' || !array_key_exists('name', $attrs)) {
			return substr(str_shuffle('abcdefghijklmnopqrstuvwxyz'), 0, 7);
		}

		return (string) $attrs['name'];
	}

	private function sanitizeVisibilityRule(mixed $rule): ?array
	{
		if (!is_array($rule) || empty($rule['field'])) {
			return null;
		}

		$operator = $rule['operator'] ?? 'equals';
		if (!in_array($operator, ['equals', 'not_equals', 'not_empty'], true)) {
			$operator = 'equals';
		}

		return [
			'field' => sanitize_key((string) $rule['field']),
			'value' => $rule['value'] ?? '',
			'operator' => $operator,
		];
	}

	private function sanitizePattern(mixed $pattern): ?string
	{
		if (!is_string($pattern)) {
			return null;
		}

		$pattern = trim($pattern);

		return $pattern === '' ? null : $pattern;
	}

	private function getHiddenFieldValue(array $field, int $pageId): mixed
	{
		if (($field['type'] ?? null) !== 'hidden') {
			return null;
		}

		return match ($field['valueType'] ?? '') {
			'token' => wp_create_nonce('wp_rest'),
			'page_id' => $pageId,
			'user_id' => get_current_user_id(),
			default => $field['defaultValue'] ?? null,
		};
	}

	private function loadBlockDefaults(string $type): array
	{
		$path = dirname(__DIR__, 2) . '/build/blocks/' . $type . '/block.json';
		if (!file_exists($path)) {
			return [];
		}

		$blockData = json_decode((string) file_get_contents($path));
		$defaults = [];

		foreach ($blockData->attributes as $key => $value) {
			if (!property_exists($value, 'default')) {
				continue;
			}

			$defaults[$key] = $value->default;
		}

		return $defaults;
	}
}
