<?php

namespace Contexis\GutenbergForm;

class Field {

	const AVAILABLE_FIELDS = [
		"text", "email", "number", "textarea", "select", "checkbox", "radio", "hidden", "submit", "reset", "button", "country", "date", "tel", "html"
	];

	public array $input_fields = [
		"text", "email", "tel"
	];

	private array $available_args = [
		"class", "placeholder", "required", "min", "max", "step", "value", "label", "width", "options", "fieldid"
	];

	private $args = [];
	private $name = "";
	private $required = false;

	public function __construct($type, $args) {
		$this->name = $args['fieldid'];
		$this->required = isset($args['required']) ? $args['required'] : false;
		$this->args = $this->build_args($args);
	}

	public static function render($type, $args ) {
		
		if(!in_array($type, self::AVAILABLE_FIELDS)) return "";
		$instance = new self($type, $args);
		
		if(in_array($type, $instance->input_fields)) return $instance->text($type, $args);
		
		if(!method_exists($instance, $type)) return "";
		
		return call_user_func([$instance, $type], $args);
	}

	public function build_args($args) {
		$final_args = [];
		
		foreach($this->available_args as $arg) {
			if(isset($args[$arg])) {
				
				$final_args[$arg] = $args[$arg];
			}
		}
		
		return $final_args;
	}

	private function get_arg($arg) {
		if(isset($this->args[$arg])) {
			return $this->args[$arg];
		}
		return "";
	}

	public function text($type, $args) {
		
		$result = "<div class='input {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>{$args['label']}</label>";
		$result .= "<input type='{$type}' name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}' /></div>";
		return $result;
	}

	public function get_width() {
		$spans = [0,2,3,6];
		if(!isset($this->args['width']) || $this->args['width'] > 3) return "grid__column--span-6";

		return "grid__column--span-{$spans[$this->args['width']]}";
	}

	public function select($args) {
		if(!isset($args['fieldid'])) return "";
		if(!isset($args['options'])) return "";


		$result = "<div class='select mb-8 {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>" . $args['label'] . "</label>";
		$result .= "<select name='{$this->name}'>";
		foreach($args['options'] as $option) {
			$result .= "<option value='{$option}'>{$option}</option>";
		}
		$result .= "</select></div>";

		return $result;
	}

	public function date($args) {
		$min = isset($args['min']) ? "min='{$args['min']}'" : "";
		$max = isset($args['max']) ? "max='{$args['max']}'" : "";
		
		$result = "<div class='input {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>{$args['label']}</label>";
		$result .= "<input type='date' {$min} {$max} {$this->required} name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}' /></div>";
		return $result;
	}

	public function textarea($args) {
		$result = "<div class='input {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>{$args['label']}</label>";
		$result .= "<textarea name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}'></textarea></div>";
		return $result;
	}

	public function checkbox($args) {
		$result = "<div class='checkbox {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>";
		$result .= "<input type='checkbox' name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}' />{$args['help']}	</label></div>";
		return $result;
	}

	public function radio($args) {
		$result = "<div class='radio {$this->get_width()}'><fieldset>";
		$result .= "<legend>{$args['label']}</legend>";
		foreach($args['options'] as $option) {
			$result .= "<label for='{$this->name}'>";
			$result .= "<input type='radio' value='{$option}' name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}' />{$option}	</label>";
		}
		$result .= "</fieldset></div>";
		return $result;
	}

	public function number($args) {
		$min = isset($args['min']) ? "min='{$args['min']}'" : "";
		$max = isset($args['max']) ? "max='{$args['max']}'" : "";
		$step = isset($args['step']) ? "step='{$args['step']}'" : "";
		
		$result = "<div class='input {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>{$args['label']}</label>";
		$result .= "<input type='number' {$min} {$max} {$step} {$this->required} name='{$this->name}'" . ($this->required ? ' required' : '') . " placeholder='{$this->get_arg('placeholder')}' /></div>";
		return $result;
	}

	public function country($args) {
		$countries = ['Deutschland', 'Österreich', 'Schweiz'];
		$result = "<div class='select mb-8 {$this->get_width()}'>";
		$result .= "<label for='{$this->name}'>" . $args['label'] . "</label>";
		$result .= "<select name='{$this->name}'>";
		foreach($countries as $country) {
			$result .= "<option value='{$country}'>{$country}</option>";
		}
		$result .= "</select></div>";

		return $result;
	}

	

	

}