<?php

namespace Contexis\GutenbergForm\Fields;

class Text {

	public $type = "text";
	public string $label = "";
	public string $name = "";
	public bool $required = false;

	public function __construct($name, $attributes) {
		$this->type = "text";
		$this->label = $attributes['label'];
		$this->name = $name;
		$this->required = $attributes['required'];
		
	}

	public function render() {
		return "Hallo Welt!";
	}
}