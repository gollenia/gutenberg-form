<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Email;

final class Sender
{
	public function send(string $to, string $subject, string $content): bool
	{
		return wp_mail(
			$to,
			$subject,
			htmlspecialchars_decode($content),
			['Content-Type: text/html; charset=UTF-8']
		);
	}
}
