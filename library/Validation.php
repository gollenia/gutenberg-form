<?php

namespace Contexis\GutenbergForm;

class Validation {

	public function validate($field, $value) {
		if($field['required'] && !$value) return false;
	}

	private function text($field, $value) {
		return true;
	}

	private function email($field, $value) {
		if(!is_email()) return false;
		return true;
	}
}