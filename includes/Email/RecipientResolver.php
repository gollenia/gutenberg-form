<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

use Contexis\GutenbergForm\Form\FormFields;

final class RecipientResolver
{
	public function getAdminRecipients(FormFields $form): string
	{
		$addresses = (string) get_post_meta($form->id, '_mail_recipients', true);
		$adminEmail = (string) get_bloginfo('admin_email');

		if ($addresses === '') {
			$addresses = $adminEmail;
		}

		if (
			get_post_meta($form->id, '_send_to_admin', true) &&
			strpos($addresses, $adminEmail) === false
		) {
			$addresses .= ', ' . $adminEmail;
		}

		return $addresses;
	}
}
