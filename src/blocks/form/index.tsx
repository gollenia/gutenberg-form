import { registerBlockType } from '@wordpress/blocks';
import { withColors } from '@wordpress/block-editor';
import metadata from './block.json';
import Edit from './edit';
import './editor.scss';
import icon from './icon';

const { name } = metadata;

const settings = {
	...metadata,
	icon,
	edit: withColors({ buttonColor: 'buttonColor' })(Edit),
	save: () => null,
};

registerBlockType(name, settings);

export { name, settings };
