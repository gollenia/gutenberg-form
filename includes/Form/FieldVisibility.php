<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

final class FieldVisibility
{
	public function isVisible(array $field, array $data): bool
	{
		if (empty($field['visibilityRule']) || !is_array($field['visibilityRule'])) {
			return true;
		}

		$rule = $field['visibilityRule'];
		$fieldName = $rule['field'] ?? '';
		if ($fieldName === '') {
			return true;
		}

		$actual = $this->normalizeValue($data[$fieldName] ?? null);
		$expected = $this->normalizeValue($rule['value'] ?? null);

		return match ($rule['operator'] ?? 'equals') {
			'not_equals' => $actual != $expected,
			'not_empty' => $actual !== null && $actual !== '' && $actual !== false,
			default => $actual == $expected,
		};
	}

	private function normalizeValue(mixed $value): mixed
	{
		if (in_array($value, ['checked', 'on', '1', 1, true], true)) {
			return true;
		}

		if (in_array($value, ['unchecked', 'off', '0', 0, false], true)) {
			return false;
		}

		return $value;
	}
}
