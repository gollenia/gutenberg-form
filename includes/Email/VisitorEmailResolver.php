<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

use Contexis\GutenbergForm\Form\FormFields;

final class VisitorEmailResolver
{
	public function resolve(FormFields $form): string|false {
		foreach (['email', 'mail', 'e-mail'] as $field) {
			$value = $form->get_value($field);
			if ($value) {
				return (string) $value;
			}
		}
		return false;
	}
}

	
