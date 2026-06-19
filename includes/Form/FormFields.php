<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

final class FormFields
{
	public array $fields = [];
	public array $recipients = [];
	public int $id = 0;
	public int $page_id = 0;

	public function __construct($id, $page_id = 0)
	{
		$this->id = (int) $id;
		$this->page_id = (int) $page_id;
		$this->fields = self::get_form_data($this->id, $this->page_id);
	}

	public static function get_form_data($id, $page_id = 0): array
	{
		return (new FieldParser())->parse((int) $id, (int) $page_id);
	}

	public function validate($data): array
	{
		$result = (new FieldValidator())->validate($this->fields, (array) $data);
		$this->fields = $result['fieldMap'];
		unset($result['fieldMap']);

		return $result;
	}

	public function get_formatted_values(): string
	{
		return (new FieldFormatter())->formatAll($this->fields);
	}

	public function get_formatted_value($fieldName): string
	{
		return (new FieldFormatter())->formatValue($this->fields, (string) $fieldName);
	}

	public function get_value($fieldName): mixed
	{
		return (new FieldFormatter())->getValue($this->fields, (string) $fieldName);
	}
}
