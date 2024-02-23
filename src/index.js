import registerBlocks from './blocks/blocks.js';

registerBlocks();
//registerPlugins();
import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady( function () {
	if ( window.typenow !== 'gbf-form' )
		unregisterBlockType( 'gutenberg-form/form-container' );
} );
