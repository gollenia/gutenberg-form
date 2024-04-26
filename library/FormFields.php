<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\FormPost;

class FormFields {

	public array $fields = [];
	public array $recipients = [];
	public int $id = 0;
	public int $page_id = 0;


	const ALLOWED_FIELDS = ['text', 'email', 'html', 'select', 'country', 'tel', 'textarea', 'checkbox', 'date', 'number', 'radio', 'submit', 'hidden', 'combobox'];

	public function __construct($id, $page_id = 0) {
		$this->id = $id;
		$this->page_id = $page_id;
		$this->fields = self::get_form_data($id);
	}

	/**
	 * Load post and get form data from parsed blocks
	 *
	 * @param int $id The ID of the form post
	 * @return array Associative array with field data
	 */
	public static function get_form_data($id, $page_id=0): array {
		$form = get_post($id);
		if(!$form || $form->post_type !== FormPost::POST_TYPE) return [];
		$blocks = parse_blocks( $form->post_content );

		// extract blocks from form-container
		$formContainer = false;
		foreach($blocks as $block) {
			if($block['blockName'] == "gutenberg-form/form-container") {
				$formContainer = $block['innerBlocks'];
			}
		}

		if(!$formContainer) return [];

		// extract fields from form-container
		$fieldBlocks = [];
		foreach($formContainer as $block) {
			if($block['blockName'] == "gutenberg-form/form-fields") {
				$fieldBlocks = $block['innerBlocks'];
			}
		}
		
	
		foreach($fieldBlocks as $block) {
			$type = self::get_field_type($block);
			if(!in_array($type, self::ALLOWED_FIELDS)) continue;
			$attrs = array_merge(self::load_block_defaults($type), $block['attrs']);
			$field = $attrs;
			$field['type'] = $field['type'] ? $field['type'] : $type;
			$field['name'] = self::get_field_name($attrs, $type);
			if($type === 'html') $field['content'] = render_block($block);
			
			$cleanedBlocks[$field['name']] = $field;
			
		}

		$cleanedBlocks['id'] = [
			"type" => "hidden",
			"label" => "ID",
			"name" => "id",
			"defaultValue" => $id,
		];

		$cleanedBlocks['page_id'] = [
			"type" => "hidden",
			"label" => "Page ID",
			"name" => "page_id",
			"defaultValue" => $page_id,
		];

		return $cleanedBlocks;
	}

	/**
	 * Get field type from block name
	 *
	 * @param [type] $block
	 * @return void
	 */
	private static function get_field_type($block) {
		$type = "";
		list($namespace, $type) = explode("/", $block['blockName']);
		if($namespace != "gutenberg-form") return;
		return $type;
	}

	/**
	 * Get block name for field
	 *
	 * @param [type] $block
	 * @param [type] $type
	 * @return void
	 */
	private static function get_field_name($attrs, $type) {
		if(!$type) return;
		if($type == "submit") return "submit";
		if($type == "html" || !key_exists('name', $attrs)) return substr(str_shuffle("abcdefghijklmnopqrstuvwxyz"), 0, 7);
		
		return $attrs['name'];
	}

	public function validate($data) {
		$valid = true;
		$messages = [];
		foreach($this->fields as $name => $field) {
			if($field['type'] == "submit") continue;
			if($field['type'] == "html") continue;
			$this->fields[$name]['value'] = $data[$name];
			$valid = true;
		}
		return ["success" => $valid, $this->fields];
	}

	/**
	 * Load default values from block.json
	 *
	 * @param string $type
	 * @return void
	 */
	private static function load_block_defaults($type) {
		$defaults = [];
		
		if(!file_exists(__DIR__ . "/../build/blocks/" . $type . "/block.json")) return $defaults;
		$block_data = json_decode( file_get_contents(__DIR__ . "/../build/blocks/" . $type . "/block.json") );
		foreach($block_data->attributes as $key => $value) {
			$defaults[$key] = $value->default;
		}
		return $defaults;
	}

	private function validate_field($field, $value) {
		$valid = true;
		if(!key_exists('type', $field)) return true;
		if($field['required'] ?? false && empty($value)) {
			$valid = false;
		}
		if($field['type'] == "email" && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
			$valid = false;
		}
		if($field['type'] == "number" && !is_numeric($value)) {
			$valid = false;
		}
		if($field['type'] == "date" && !strtotime($value)) {
			$valid = false;
		}
		if($field['type'] == "checkbox" && !is_array($value)) {
			$valid = false;
		}
		if($field['type'] == "radio" && !is_string($value)) {
			$valid = false;
		}
		return $valid;
	}

	private function get_error_message($field, $value) {
		
	}

	public function get_formatted_values() {
		$values = "<ul>";;
		foreach($this->fields as $name => $field) {
			if($field['type'] == "submit") continue;
			if($field['type'] == "hidden") continue;
			if($field['type'] == "html") continue;
			if($field['name'] == "id") continue;
			$values .= "<li><strong>" . $field['label'] . "</strong>: " . $this->get_formatted_value($name) . "</li>";
		}
		$values .= "</ul>";

		return $values;
	}

	public function get_formatted_value($fieldName) {
		if(!key_exists($fieldName, $this->fields)) return "";
		$field = $this->fields[$fieldName];
		if($field['type'] == "email") {
			return "<a href='mailto:" . $field['value'] . "'>" . $field['value'] . "</a>";
		}
		if($field['type'] == "checkbox") {
			return $field['value'] ? __("Yes") : __("No");
		}
		return $field['value'];
	}

}