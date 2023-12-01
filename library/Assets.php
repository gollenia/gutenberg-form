<?php
namespace Contexis\GutenbergForm;

class Assets {

	public $assets = [
		'style'         => 'gbf-block',
		'editor_script' => 'gbf-form-editor',
		'editor_style'  => 'gbf-form-style',
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
		
		add_action('admin_enqueue_scripts', function() {
			
			//if(get_post_type() !== 'gbf-form') return;
			wp_enqueue_script('gbf-form-editor');
		});

       	add_action('wp_enqueue_scripts', function() {
			if(is_admin()) return;
        	wp_enqueue_script('gbf-frontend', plugin_dir_url(__FILE__) . "../build/frontend.js", [], false, true);
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
		$dir = __DIR__ . "/../build/";

		if ( ! file_exists( $dir . "backend.asset.php" ) || ! file_exists( $dir . "frontend.asset.php" ) ) return;

		$script_asset = require( $dir . "backend.asset.php" );

		wp_register_script(
			$this->assets['editor_script'],
			plugins_url( '../build/backend.js', __FILE__ ),
			$script_asset['dependencies'],
			$script_asset['version']
		);
		wp_set_script_translations( $this->assets['editor_script'], 'gutenberg-form', plugin_dir_path( __FILE__ ) . '../languages' );

		wp_register_style(
			$this->assets['editor_style'],
			plugins_url( '../build/backend.css', __FILE__ ),
			array(),
			$script_asset['version']
		);
		
	}

	public function get_current_post_type() {
	
			global $post, $typenow, $current_screen;
			
			if ($post && $post->post_type) return $post->post_type;
			
			elseif($typenow) return $typenow;
			
			elseif($current_screen && $current_screen->post_type) return $current_screen->post_type;
			
			elseif(isset($_REQUEST['post_type'])) return sanitize_key($_REQUEST['post_type']);
			
			return null;
			
		
	}

}

   

