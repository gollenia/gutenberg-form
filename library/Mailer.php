<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\FormFields;

class Mailer {

	private FormFields $form;


	public function __construct(FormFields $formFields) {
		$this->form = $formFields;
	}

	public function get_addresses() {
		$addresses = get_post_meta($this->form->id, '_mail_recipients', true);
		if(empty($addresses)) {
			$addresses = get_bloginfo('admin_email');
		}
		if(get_post_meta($this->form->id, '_send_to_admin', true ) && strpos($addresses, get_bloginfo('admin_email')) === false) {
			$addresses .= ", " . get_bloginfo('admin_email');
		}
		return $addresses;
	}
	

	public function send() {
        $template = get_post_meta($this->form->id, '_mail_template', true);
		$addresses = $this->get_addresses();
		if(empty($addresses)) return false;
		
		$content = $this->render_template($template) ?? "There has been an error with yout mailer template. Please check your settings.";
		$subject = get_post_meta($this->form->id, '_mail_subject', true) ?? "New Mail from " . get_bloginfo('name') . "";

        return wp_mail( $addresses, $subject, $content, array('Content-Type: text/html; charset=UTF-8'));
    }

	public function render_template($template) {
		$template = str_replace("{page_title}", get_the_title($this->form->id), $template);
		$template = str_replace("{form_title}", get_the_title($this->form->id), $template);
		$template = str_replace("{all_fields}", $this->form->get_formatted_values(), $template);

		preg_replace_callback('/{(.*?)}/', function($matches) use (&$template) {
			$template = str_replace($matches[0], $this->form->get_formatted_value($matches[1]), $template);
		}, $template);
		return $template;
	}
}