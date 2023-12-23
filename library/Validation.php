<?php

namespace Contexis\GutenbergForm;

class Validation {

	public function validate($field, $value) {
		if($field['required'] && !$value) return false;
	}


}