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

require_once plugin_dir_path( __FILE__ ) . 'library/Form.php';

require_once plugin_dir_path( __FILE__ ) . 'library/Assets.php';
$assets = Contexis\GutenbergForm\Assets::init();

require_once plugin_dir_path( __FILE__ ) . 'library/Block.php';
//Add translation
function ctx_form_plugin_textdomain() {
    load_plugin_textdomain('gutenberg-form', false, dirname( plugin_basename( __FILE__ ) ).'/languages');
}
add_action('plugins_loaded', 'ctx_form_plugin_textdomain');

$blocks_to_register = [
	"form",
	"text",
	"textarea",
	"select",
	"checkbox",
	"radio",
	"email",
	"number",
	"submit",
	"hidden",
	"file",
	"date",
	"range",
	"password",
	"tel",
	"url"
];


