<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Http;

use Contexis\GutenbergForm\Email\Mailer;
use Contexis\GutenbergForm\Form\FormFields;
use WP_REST_Request;
use WP_REST_Response;

class Submit
{
	public static function init(): void
	{
		$instance = new self();
		add_action('rest_api_init', [$instance, 'register_rest'], 10, 1);
	}

	public function register_rest(): void
	{
		register_rest_route('gbf-form/v2', 'submit', [
			'methods' => 'POST',
			'callback' => [$this, 'get_rest_data'],
			'permission_callback' => '__return_true',
		], true);
	}

	public function get_rest_data(WP_REST_Request $request): WP_REST_Response
	{
		$data = $request->get_json_params();
		if (!array_key_exists('id', $data)) {
			$response = new WP_REST_Response(['success' => false, $data]);
			$response->set_status(400);
			return $response;
		}

		$formFields = new FormFields($data['id'], $data['page_id']);
		$validation = $formFields->validate($data);

		if (!$validation['success']) {
			$response = new WP_REST_Response($validation);
			$response->set_status(403);
			return $response;
		}

		$result = (new Mailer())->send($formFields);
		$content = ResponseContent::get_html($data['id']);

		if (!$result) {
			$content = ['html' => '<h2>' . __('There has been an error sending your mail. Please try again later.', 'gbf-form') . '</h2>'];
		}

		$response = new WP_REST_Response(['success' => $result, 'message' => $content]);
		$response->set_status(200);

		return $response;
	}
}
