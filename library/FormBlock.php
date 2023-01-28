<?php

namespace Contexis\GutenbergForm;
use Contexis\GutenbergForm\Field;

class FormBlock extends Block {

	public array $blocks = [
        "form"
    ];

	public static function init(\Contexis\GutenbergForm\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

	public function render($attributes, $content, $full_data)
	{
		//get correct form
		$fields = $this->get_form($attributes['formPost']);
		//get all fields
		
		$result = "<form class='form grid xl:grid--columns-6 grid--gap-8' action='' id='gbf-form-{$attributes['formPost']}'>";
		foreach($fields as $block) {
			$result .= Field::render($this->get_field_type($block), $block['attrs']);
		}
		$result .= "<form>";
		return $result;
		
	}

	public function get_form($id) {
		$form = get_post($id);
		$blocks = parse_blocks( $form->post_content );

		// extract blocks from form-container
		foreach($blocks as $block) {
			if($block['blockName'] == "gutenberg-form/form-container") {
				$blocks = $block['innerBlocks'];
			}
		}
		return $blocks;
	}

	function get_field_type($block) {
		$type = "";
		list($namespace, $type) = explode("/", $block['blockName']);
		if($namespace != "gutenberg-form") return;
		return $type;
	}

	public function get_fields($block) {
		$fields = [];
		foreach($block as $field) {
			$fields[] = $field;
		}
		return $fields;
	}

	public function has_submit_button($block) {
		foreach($block as $field) {
			if($field['blockName'] == "gutenberg-form/submit") {
				return true;
			}
		}
		return false;
	}
}