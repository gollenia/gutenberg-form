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

const { name, title, description } = metadata;

const settings = {
	icon,
	edit: Edit,
	save: () => {
		return null;
	},
};

export { name, settings };
