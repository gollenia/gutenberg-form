<?php
/**
 * Plugin Name:     CTX Form
 * Description:     Create forms easily in Gutenberg
 * Version:         1.3.0
 * Author:          Thomas Gollenia
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     gutenberg-form
 *
 */

declare(strict_types=1);

if (!defined('ABSPATH')) {
	exit;
}

require_once __DIR__ . '/vendor/autoload.php';

add_action('plugins_loaded', static function (): void {
	load_plugin_textdomain(
		'gutenberg-form',
		false,
		dirname(plugin_basename(__FILE__)) . '/languages'
	);
});

\Contexis\GutenbergForm\Form\FormPost::init();
\Contexis\GutenbergForm\Http\Submit::init();

new \Contexis\GutenbergForm\System\Update(
	__FILE__,
	'gollenia',
	'gutenberg-form'
);
