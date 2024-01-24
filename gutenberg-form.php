<?php
/**
 * Plugin Name:     Gutenberg Form
 * Description:     Create Forms easily in Gutenberg
 * Version:         1.0.0
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenberg-form
 *
 */

 //Add translation
function ctx_form_plugin_textdomain() {
    load_plugin_textdomain('gutenberg-form', false, dirname( plugin_basename( __FILE__ ) ).'/languages');
}

require_once plugin_dir_path( __FILE__ ) . 'library/FormFields.php';
require_once plugin_dir_path( __FILE__ ) . 'library/FormPost.php';
require_once plugin_dir_path( __FILE__ ) . 'library/Mailer.php';
require_once plugin_dir_path( __FILE__ ) . 'library/ResponseContent.php';
require_once plugin_dir_path( __FILE__ ) . 'library/Block.php';
require_once plugin_dir_path( __FILE__ ) . 'library/Field.php';
require_once plugin_dir_path( __FILE__ ) . 'library/Submit.php';


add_action('plugins_loaded', 'ctx_form_plugin_textdomain');
