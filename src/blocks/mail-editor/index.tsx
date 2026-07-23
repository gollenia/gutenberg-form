import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icons from './icons';

const { name } = metadata;

const settings = {
	...metadata,
	icon: icons.icon,
	edit: Edit,
	save: () => <InnerBlocks.Content />,
};

registerBlockType(name, settings);

export { name, settings };
