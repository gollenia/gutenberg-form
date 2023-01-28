/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icon from './icon';

/**
 * Wordpress dependencies
 */
import { withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __( title, 'gutenberg-form' ),
	description: __( description, 'gutenberg-form' ),
	icon,
	edit: withColors( { buttonColor: 'buttonColor' } )( Edit ),
	save: () => {
		return null;
	},
};

export { name, settings };
