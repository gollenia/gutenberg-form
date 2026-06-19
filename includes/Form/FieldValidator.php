<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

final class FieldValidator
{
	public function validate(array $fields, array $data): array
	{
		$isValid = true;

		foreach ($fields as $name => $field) {
			if (($field['type'] ?? '') === 'submit' || ($field['type'] ?? '') === 'html') {
				continue;
			}

			if (!(new FieldVisibility())->isVisible($field, $data)) {
				$fields[$name]['value'] = $field['defaultValue'] ?? null;
				continue;
			}

			$value = $data[$name] ?? ($field['defaultValue'] ?? null);
			$fields[$name]['value'] = $value;

			if (!$this->validateField($field, $value)) {
				$isValid = false;
				$fields[$name]['error'] = $this->getErrorMessage($field, $value);
			}
		}

		return [
			'success' => $isValid,
			'fields' => array_values($fields),
			'fieldMap' => $fields,
		];
	}

	private function validateField(array $field, mixed $value): bool
	{
		$isValid = true;

		if (($field['required'] ?? false) && ($value === null || $value === '' || $value === false)) {
			$isValid = false;
		}

		if ($value === null || $value === '') {
			return $isValid;
		}

		return match ($field['type'] ?? '') {
			'email' => filter_var($value, FILTER_VALIDATE_EMAIL) !== false && $isValid,
			'number' => is_numeric($value) && $isValid,
			'date' => strtotime((string) $value) !== false && $isValid,
			'checkbox' => is_bool($value) && $isValid,
			'radio' => is_string($value) && $isValid,
			default => $isValid,
		};
	}

	private function getErrorMessage(array $field, mixed $value): string
	{
		if (!empty($field['customErrorMessage'])) {
			return (string) $field['customErrorMessage'];
		}

		if (($field['required'] ?? false) && ($value === null || $value === '' || $value === false)) {
			return __('This field is required', 'gutenberg-form');
		}

		return __('Please check your input', 'gutenberg-form');
	}
}
