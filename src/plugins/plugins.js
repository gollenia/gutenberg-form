/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

/**
 * Plugin dependencies.
 */
import feedback from './feedback';

const plugins = [feedback];

const registerPlugins = () => {
	plugins.forEach((plugin) => {
		registerPlugin(plugin.name, plugin.settings);
	});
};

export default registerPlugins;
