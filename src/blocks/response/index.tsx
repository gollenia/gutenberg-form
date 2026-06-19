import { InnerBlocks } from '@wordpress/block-editor';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';

const { name } = metadata;

const settings = {
	...metadata,
	icon: 'feedback',
	edit: Edit,
	save: () => <InnerBlocks.Content />,
};

export { name, settings };
