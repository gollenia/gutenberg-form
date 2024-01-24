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

		wp_enqueue_style(
			'gbf-frontend-style',
			plugins_url( '../build/frontend.css', __FILE__ ),
			array(),
			'1.0.0'
		);

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

   

