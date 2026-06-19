import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icons from './icons';

const { name, title, description } = metadata;

const settings: any = {
	...metadata,
	title: __(title, 'gutenberg-form'),
	description: __(description, 'gutenberg-form'),
	icon: icons.icon,
	edit: Edit,
	save: () => {
		return null;
	},
};

registerBlockType(name, settings);

export { name, settings };
