<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

use Contexis\GutenbergForm\Form\FormFields;

final class Mailer
{
	public function __construct(
		private readonly RecipientResolver $recipientResolver = new RecipientResolver(),
		private readonly VisitorEmailResolver $visitorEmailResolver = new VisitorEmailResolver(),
		private readonly TemplateRenderer $templateRenderer = new TemplateRenderer(),
		private readonly Sender $sender = new Sender(),
	) {
	}

	public function send(FormFields $form): bool
	{
		$addresses = $this->recipientResolver->getAdminRecipients($form);
		if ($addresses === '') {
			return false;
		}

		$template = (string) get_post_meta($form->id, '_mail_template', true);
		$subject = (string) get_post_meta($form->id, '_mail_subject', true);

		if ($subject === '') {
			$subject = 'New Mail from ' . get_bloginfo('name');
		}

		$adminMailSuccess = $this->sender->send(
			$addresses,
			$subject,
			$this->templateRenderer->render($template, $form)
		);

		if (!(bool) get_post_meta($form->id, '_user_mail_enabled', true)) {
			return $adminMailSuccess;
		}

		$userMail = $this->visitorEmailResolver->resolve($form);
		if ($userMail === false) {
			return $adminMailSuccess;
		}

		$userTemplate = (string) get_post_meta($form->id, '_user_mail_template', true);
		$userSubject = (string) get_post_meta($form->id, '_user_mail_subject', true);

		$this->sender->send(
			$userMail,
			$userSubject,
			$this->templateRenderer->render($userTemplate, $form)
		);

		return $adminMailSuccess;
	}
}
