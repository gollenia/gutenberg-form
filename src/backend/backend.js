/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Blocks dependencies.
 */
import * as formCheckbox from './blocks/checkbox/index.js';
import * as formContainer from './blocks/container/index.js';
import * as formCountry from './blocks/country/index.js';
import * as formDate from './blocks/date/index.js';
import * as formEmail from './blocks/email/index.js';
import * as formBlock from './blocks/form/index.js';
import * as formHTML from './blocks/html/index.js';
import * as formPhone from './blocks/phone/index.js';
import * as formRadio from './blocks/radio/index.js';
import * as formSelect from './blocks/select/index.js';
import * as formText from './blocks/text/index.js';
import * as formTextarea from './blocks/textarea/index.js';

import mailEditor from './plugins/maileditor';
import mailSettings from './plugins/mailsettings';

console.log( '👋Hello from backend.js' );

const registerBlock = ( block ) => {
	if ( ! block ) return;
	const { name, settings } = block;
	registerBlockType( name, settings );
};

let blocks = [
	formBlock,
	formContainer,
	formText,
	formEmail,
	formTextarea,
	formDate,
	formCheckbox,
	formSelect,
	formCountry,
	formPhone,
	formRadio,
	formHTML,
];

const plugins = [ mailEditor, mailSettings ];

const registerPlugins = () => {
	plugins.forEach( ( plugin ) => registerPlugin( plugin.name, plugin.meta ) );
};

if ( window.eventBlocksLocalization?.post_type === 'event' ) {
	blocks = [ ...blocks, details, booking ];
}

const registerBlocks = () => {
	blocks.forEach( registerBlock );
};

registerBlocks();
registerPlugins();
