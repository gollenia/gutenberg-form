<?php
namespace Contexis\GutenbergForms;

class Assets {

	public $assets = [
		'style'         => 'gbf-block',
		'editor_script' => 'gbf-block-editor',
		'editor_style'  => 'gbf-block-editor',
	];

	/**
	 * 
	 * Register shared scripts and styles for all blocks
	 * 
	 * @return Assets
	 */
    public static function init() {
        
		$instance = new self;

        add_action( 'init', [$instance, "register_assets"] );

		add_action('enqueue_gfb_form_editor', function() {
			wp_enqueue_script('gbf-form-editor', plugin_dir_url(__FILE__) . "../assets/admin.js", [], false, true);
		});

       	add_action('init', function() {
        	wp_enqueue_script('gbf-frontend', plugin_dir_url(__FILE__) . "../assets/frontend.js", [], false, true);
    	});

		return $instance;
    }

	/**
	 * Return the array used for block registration
	 *
	 * @return array
	 */
	public function get() {
		return $this->assets;
	}

	/**
	 * Callback function to register the assets in the init hook
	 *
	 * @return void
	 */
    public function register_assets() {
		$dir = __DIR__ . "/../assets/";

		if ( ! file_exists( $dir . "index.asset.php" ) ) {
			  throw new \Error(
					  'You need to run `npm start` or `npm run build` for the timber blocks first.'
			 );
		}

		$script_asset = require( $dir . "index.asset.php" );

		wp_register_script(
			$this->assets['editor_script'],
			plugins_url( '../assets/index.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations( $this->assets['editor_script'], 'ctx-blocks', plugin_dir_path( __FILE__ ) . '../languages' );

		wp_register_style(
			$this->assets['editor_style'],
			plugins_url( '../assets/index.css', __FILE__ ),
			array(),
			$script_asset['version']
		);
		
	}

}

   

