import { registerPlugin } from '@wordpress/plugins';
import emails from './emails';
import feedback from './feedback';

type PluginDefinition = {
	name: string;
	settings: Record<string, unknown>;
};

const plugins: PluginDefinition[] = [emails, feedback];

const registerPlugins = (): void => {
	plugins.forEach((plugin) => {
		registerPlugin(plugin.name, plugin.settings);
	});
};

export default registerPlugins;
