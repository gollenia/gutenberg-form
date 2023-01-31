<?php

namespace Contexis\GutenbergForm;

class Submit {

	public static function init() {
		$instance = new self();
		add_action('rest_api_init',array($instance,'register_rest'),10,1);
	}

	public function register_rest() {
		register_rest_route( 'gbf-form/v2', '/submit/(?P<id>\d+)', [
			'method' => 'GET', 
			'callback' => [$this, 'get_rest_data'], 
			'args' => [
				'id' => [
					'validate_callback' => function($param, $request, $key) {
						return is_numeric( $param );
					}
				]
			],
			'permission_callback' => '__return_true'
		], true );
	}

	public function get_rest_data() {

	}

}

Submit::init();