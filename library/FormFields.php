<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\FormPost;

class FormFields {

	public array $fields = [];
	public array $recipients = [];
	public int $id = 0;
	public int $page_id = 0;

	const ALLOWED_FIELDS = ['text', 'email', 'html', 'select', 'country', 'tel', 'textarea', 'checkbox', 'date', 'number', 'radio', 'submit'];

	public function __construct($id, $page_id) {
		$this->id = $id;
		$this->page_id = $page_id;
		$this->fields = self::get_form_data($id);
	}

	/**
	 * Load post and get form data from parsed blocks
	 *
	 * @param [type] $id
	 * @return void
	 */
	public static function get_form_data($id) {
		$form = get_post($id);
		if(!$form || $form->post_type !== FormPost::POST_TYPE) return false;
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
		
		$cleanedBlocks = [];
		foreach($fieldBlocks as $block) {
			$type = self::get_field_type($block);
			if(!in_array($type, self::ALLOWED_FIELDS)) continue;
			$attrs = array_merge(self::load_block_defaults($type), $block['attrs']);
			$field = ['type' => $type, 'settings' => $attrs];
			if($type === 'html') $field['settings']['content'] = render_block($block);
			$name = self::get_field_name($block, $type);
			$cleanedBlocks[$name] = $field;
		}

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
	private static function get_field_name($block, $type) {
		if(!$type) return;
		if($type == "submit") return "submit";
		if($type == "html") return "html";
		return $block['attrs']['fieldid'];
	}

	public function validate($data) {
		$valid = true;
		$messages = [];
		foreach($this->fields as $name => $field) {
			$this->fields[$name]['value'] = $data[$name];
			if($field['type'] == "submit") continue;
			if($field['type'] == "html") continue;
			$valid = $this->validate_field($field, $data[$name]) && $valid;
			if(!$valid) {
				$messages[$name] = $this->get_error_message($field, $data[$name]);
			}
		}
		return ["success" => $valid, "errors" => $messages];
	}

	/**
	 * Load default values from block.json
	 *
	 * @param string $type
	 * @return void
	 */
	private static function load_block_defaults($type) {
		$defaults = [];
		if(!file_exists(__DIR__ . "/../src/backend/blocks/" . $type . "/block.json")) return $defaults;
		$block_data = json_decode( file_get_contents(__DIR__ . "/../src/backend/blocks/" . $type . "/block.json") );
		foreach($block_data->attributes as $key => $value) {
			$defaults[$key] = $value->default;
		}
		return $defaults;
	}

	private function validate_field($field, $value) {
		$valid = true;
		if(!key_exists('type', $field['settings'])) return true;
		if($field['settings']['required'] && empty($value)) {
			$valid = false;
		}
		if($field['settings']['type'] == "email" && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
			$valid = false;
		}
		if($field['settings']['type'] == "number" && !is_numeric($value)) {
			$valid = false;
		}
		if($field['settings']['type'] == "date" && !strtotime($value)) {
			$valid = false;
		}
		if($field['settings']['type'] == "checkbox" && !is_array($value)) {
			$valid = false;
		}
		if($field['settings']['type'] == "radio" && !is_string($value)) {
			$valid = false;
		}
		return $valid;
	}

	private function get_error_message($field, $value) {
		if($field['settings']['required'] && empty($value)) {
			return $field['settings']['requiredMessage'];
		}
		if($field['settings']['type'] == "email" && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
			return $field['settings']['invalidEmailMessage'];
		}
	}

	public function get_formatted_values() {
		$values = "<ul>";;
		foreach($this->fields as $name => $field) {
			if($field['type'] == "submit") continue;
			if($field['type'] == "html") continue;
			$values .= "<li><strong>" . $field['settings']['label'] . "</strong>: " . $this->get_formatted_value($name) . "</li>";
		}
		$values .= "</ul>";

		return $values;
	}

	public function get_formatted_value($fieldName) {
		$field = $this->fields[$fieldName];
		return $field['value'];
	}

}