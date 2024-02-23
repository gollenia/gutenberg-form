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

const { name, title, description } = metadata;

const settings = {
	icon,
	edit: withColors({ buttonColor: 'buttonColor' })(Edit),
	save: () => {
		return null;
	},
};

export { name, settings };
