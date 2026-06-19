/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icon from './icon';

/**
 * Wordpress dependencies
 */

const { name } = metadata;

const settings: any = {
	...metadata,
	icon,
	edit: Edit,
	save: () => {
		return null;
	},
};

registerBlockType(name, settings);

export { name, settings };
