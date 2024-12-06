import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import registerBlocks from './blocks/blocks.js';
import registerPlugins from './plugins/plugins.js';

registerBlocks();
registerPlugins();

domReady(function () {
	if (window.typenow !== 'gbf-form')
		unregisterBlockType('gutenberg-form/form-container');
});
