<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\FormFields;
use ftp;

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
		$send_user_mail = get_post_meta($this->form->id, '_user_mail_enabled', true);
		$addresses = $this->get_addresses();
		if(empty($addresses)) return false;
		
		$content = $this->render_template($template) ?? "There has been an error with yout mailer template. Please check your settings.";
		$subject = get_post_meta($this->form->id, '_mail_subject', true) ?? "New Mail from " . get_bloginfo('name') . "";
		$userMail = $this->get_user_email();

        $adminMailSuccess = wp_mail( $addresses, $subject, htmlspecialchars_decode($content), ['Content-Type: text/html; charset=UTF-8']);
		$userMailSuccess = true;
		if($send_user_mail && $userMail) {
			$content = $this->render_template(get_post_meta($this->form->id, '_user_mail_template', true)) ?? "There has been an error with yout mailer template. Please check your settings.";
			$userMailSuccess = wp_mail( $userMail, get_post_meta($this->form->id, '_user_mail_subject', true), htmlspecialchars_decode($content), array('Content-Type: text/html; charset=UTF-8'));
		}

		return $adminMailSuccess;
    }

	public function get_user_email() {
		if($this->form->get_value('email')) return $this->form->get_value('email');
		if($this->form->get_value('mail')) return $this->form->get_value('mail');
		return false;
	}

	public function render_template($template) {
		$template = str_replace("{page_title}", get_the_title($this->form->page_id), $template);
		$template = str_replace("{page_url}", get_permalink($this->form->page_id), $template);
		$template = str_replace("{all_fields}", $this->form->get_formatted_values(), $template);
		$template =	str_replace("{form_name}", get_the_title($this->form->id), $template);
		preg_replace_callback('/{(.*?)}/', function($matches) use (&$template) {
			$template = str_replace($matches[0], $this->form->get_formatted_value($matches[1]), $template);
		}, $template);
		return $template;
	}

	public static function get_default_admin_template() {
		$template = __('A new message has been sent from a form on your website.', 'gutenberg-form');
		$template .= '<br/><br/>';
		$template .= '{all_fields}';
		$template .= '<br/><br/>';
		$template .= __('The form has been sent from the {form_name} form:', 'gutenberg-form');
		$template .= ' <a href={page_url}>{page_title}</a>';
		return $template;
	}

	public static function get_default_user_template() {
		$template = __('Thank you for your message.', 'gutenberg-form');
		$template .= '<br/><br/>';
		$template .= '{all_fields}';
		$template .= '<br/><br/>';
		$template .= __('You will hear from us as soon as possible', 'gutenberg-form');
		return $template;
	}
}