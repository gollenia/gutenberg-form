import { unregisterBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import registerBlocks from './blocks/blocks';
import registerPlugins from './plugins/plugins';

declare global {
	interface Window {
		typenow?: string;
	}
}

registerBlocks();
registerPlugins();

domReady(() => {
	const editorPostType = (select('core/editor') as any)?.getCurrentPostType?.();
	const postType = editorPostType ?? window.typenow;

	if (postType && postType !== 'gbf-form') {
		unregisterBlockType('gutenberg-form/form-container');
	}
});
