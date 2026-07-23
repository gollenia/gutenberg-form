import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icon from './icon';

const { name, title, description } = metadata;

const settings = {
	...metadata,
	title: __(title, 'gutenberg-form'),
	description: __(description, 'gutenberg-form'),
	icon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
};

registerBlockType(name, settings);

export { name, settings };
