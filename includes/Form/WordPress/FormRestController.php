<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form\WordPress;

use Contexis\GutenbergForm\Form\FormFields;

final class FormRestController
{
	public function register(): void
	{
		register_rest_route('gbf-form/v2', '/form/(?P<id>\d+)', [
			'method' => 'GET',
			'callback' => [$this, 'get_rest_data'],
			'args' => [
				'id' => [
					'validate_callback' => static function ($param) {
						return is_numeric($param);
					},
				],
			],
			'permission_callback' => '__return_true',
		], true);
	}

	public function get_rest_data($params)
	{
		$id = (int) ($params['id'] ?? 0);
		$page_id = (int) ($params['page_id'] ?? 0);

		if (!$id) {
			return false;
		}

		return [
			'fields' => array_values(FormFields::get_form_data($id, $page_id)),
			'submit' => [
				'label' => get_post_meta($id, '_form_submit_title', true),
				'alignment' => get_post_meta($id, '_form_submit_align', true),
			],
		];
	}
}
