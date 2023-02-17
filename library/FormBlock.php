<?php

namespace Contexis\GutenbergForm;
use Contexis\GutenbergForm\Field;

/**
 * The actual form block which is displayed on the frontend
 */
class FormBlock extends Block {

	public array $blocks = [
        "form"
    ];

	/**
	 * Register the Form block
	 *
	 * @param \Contexis\GutenbergForm\Assets $assets
	 * @param array $blocks
	 * @return void
	 */
	public static function init(\Contexis\GutenbergForm\Assets $assets, array $blocks = []) {
		$instance = new self($assets);
		$instance->register();
	}

	/**
	 * Print out a DIV for the React App to render into
	 *
	 * @param array $attributes
	 * @param string $content
	 * @param array $full_data
	 * @return void
	 */
	public function render($attributes, $content, $full_data)
	{
		//get all fields
		$lang = explode("_", get_locale())[0];
		$result = "</form><div class='gbf-form' data-id='" . $attributes['formPost'] . "' data-lang='" . $lang . "'></div>";
		return $result;
		
	}
}