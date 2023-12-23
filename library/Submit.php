<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\Mail;
use ResponseContent;

class Submit {

	/**
	 * Init class
	 *
	 * @return void
	 */
	public static function init() {
		$instance = new self();
		add_action('rest_api_init',array($instance,'register_rest'),10,1);
	}

	/**
	 * Register rest route
	 *
	 * @return void
	 */
	public function register_rest() {
		register_rest_route( 'gbf-form/v2', 'submit', [
			'methods' => 'POST', 
			'callback' => [$this, 'get_rest_data'], 
			'permission_callback' => '__return_true'
		], true );
	}

	/**
	 * Get data from rest request
	 *
	 * @param [type] $request
	 * @return void
	 */
	public function get_rest_data($request) {
		$data = $request->get_json_params();
		if(!array_key_exists('id', $data)) {
			$response = new \WP_REST_Response( ["success" => false, $data] );
			$response->set_status( 400 );
			return $response;
		}
		$id = $data['id'];
		
		$formFields = new FormFields($data['id'], $data['page_id']);
		$validation = $formFields->validate($data);
		
		if(!$validation['success']) {
			$response = new \WP_REST_Response( $validation );
			$response->set_status( 403 );
			return $response;
		}
		$mail = new Mailer($formFields);
		$result = $mail->send($id, $data);
		$content = ResponseContent::get_html($id);
		if(!$result) {
			$content = ["html" => "<h2>". __("There has been an error sending your mail. Please try again later.", "gbf-form") . "</h2>"];
		}
		$response = new \WP_REST_Response( ["success" => $result, "message" => $content] );
		
		$response->set_status( 200 );
		return $response;

		
		//get get form data by post id
	}

	public function get_response_content() {
		//get get form data by post id
	}

}

Submit::init();