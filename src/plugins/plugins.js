/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';

/**
 * Plugin dependencies.
 */
import mailEditor from './mail-editor';
import mailRecipients from './mail-recipients';

const plugins = [ mailEditor, mailRecipients ];

const registerPlugins = () => {
	plugins.forEach( ( plugin ) => {
		registerPlugin( plugin.name, plugin.settings );
	} );
};

export default registerPlugins;
