/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icons from './icons';

/**
 * Wordpress dependencies
 */

const { name, title, description } = metadata;

const settings = {
	icon: icons.icon,
	edit: Edit,
	save: () => {
		return null;
	},
};

export { name, settings };
