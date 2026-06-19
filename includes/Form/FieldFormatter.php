<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

final class FieldFormatter
{
	public function __construct(
		private readonly FieldVisibility $visibility = new FieldVisibility(),
	) {
	}

	public function formatAll(array $fields): string
	{
		$values = '<ul>';

		foreach ($this->getVisibleFields($fields) as $name => $field) {
			$values .= '<li><strong>' . $field['label'] . '</strong>: ' . $this->formatValue($fields, $name) . '</li>';
		}

		$values .= '</ul>';

		return $values;
	}

	public function formatValue(array $fields, string $fieldName): string
	{
		if (!array_key_exists($fieldName, $fields)) {
			return '';
		}

		$field = $fields[$fieldName];

		if (!$this->isDisplayableField($field)) {
			return '';
		}

		if (!$this->visibility->isVisible($field, $this->getCurrentValues($fields))) {
			return '';
		}

		if (($field['type'] ?? '') === 'email') {
			return "<a href='mailto:" . $field['value'] . "'>" . $field['value'] . '</a>';
		}

		if (($field['type'] ?? '') === 'checkbox') {
			return !empty($field['value']) ? __('Yes', 'gutenberg-form') : __('No', 'gutenberg-form');
		}

		return (string) ($field['value'] ?? '');
	}

	public function getValue(array $fields, string $fieldName): mixed
	{
		if (!array_key_exists($fieldName, $fields)) {
			return false;
		}

		$field = $fields[$fieldName];

		if (($field['type'] ?? '') === 'checkbox') {
			return !empty($field['value']);
		}

		return $field['value'] ?? false;
	}

	private function getVisibleFields(array $fields): array
	{
		$visibleFields = [];

		foreach ($fields as $name => $field) {
			if (!$this->isDisplayableField($field)) {
				continue;
			}

			if (!$this->visibility->isVisible($field, $this->getCurrentValues($fields))) {
				continue;
			}

			$visibleFields[$name] = $field;
		}

		return $visibleFields;
	}

	private function isDisplayableField(mixed $field): bool
	{
		if (!is_array($field)) {
			return false;
		}

		if (in_array($field['type'] ?? '', ['submit', 'hidden', 'html'], true)) {
			return false;
		}

		return ($field['name'] ?? '') !== 'id';
	}

	private function getCurrentValues(array $fields): array
	{
		$values = [];

		foreach ($fields as $field) {
			if (!is_array($field) || empty($field['name'])) {
				continue;
			}

			$values[$field['name']] = $field['value'] ?? ($field['defaultValue'] ?? null);
		}

		return $values;
	}
}
