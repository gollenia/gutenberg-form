<?php

namespace Contexis\GutenbergForm;

use Contexis\GutenbergForm\Mail;

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
		$result = $request->get_json_params();
		$id = $result['id'];
		$page = $result['page'];
		$formFields = new FormFields($id, $page);
		$validation = $formFields->validate($result['fields']);
		
		if(!$validation['success']) {
			$response = new \WP_REST_Response( $validation );
			$response->set_status( 403 );
			return $response;
		}
		$mail = new Mailer($formFields);
		$result = $mail->send($id, $result['fields']);

		$response = new \WP_REST_Response( ["success" => $result] );
		$response->set_status( 200 );
		return $response;

		
		//get get form data by post id
	}

}

Submit::init();