<?php




function gb_forms_block_init() {

	$dir = __DIR__ . "/../build/";
	
	if ( ! file_exists( $dir . "backend.asset.php" ) || ! file_exists( $dir . "frontend.asset.php" ) ) return;

	if(is_admin()) {

		$script_asset = require( $dir . "backend.asset.php" );

		wp_enqueue_script(
			'gbf-form-editor',
			plugins_url( '../build/backend.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);

		wp_set_script_translations( 'gbf-form-editor', 'gutenberg-form', plugin_dir_path( __FILE__ ) . '../languages' );

		wp_register_style(
			'gbf-form-style',
			plugins_url( '../build/backend.css', __FILE__ ),
			array(),
			$script_asset['version']
		);
	}

	if(!is_admin()) {

		$script_asset = require( $dir . "frontend.asset.php" );
        wp_enqueue_script(
			'gbf-frontend', 
			plugin_dir_url(__FILE__) . "../build/frontend.js", 
			$script_asset['dependencies'], 
			$script_asset['version'],
			true);
    	
		wp_enqueue_style(
			'gbf-frontend-style',
			plugins_url( '../build/frontend.css', __FILE__ ),
			[],
			$script_asset['version']
		);
	}
	

	$blocks = [
		'container',
		'form'
	];
	

	foreach($blocks as $block) {
		register_block_type( __DIR__ . '/../build/blocks/'.$block );
	}
	
}

add_action( 'init', 'gb_forms_block_init' );