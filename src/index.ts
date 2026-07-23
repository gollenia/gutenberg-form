import { unregisterBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import registerPlugins from './plugins/plugins';
import './blocks/checkbox';
import './blocks/container';
import './blocks/country';
import './blocks/date';
import './blocks/email';
import './blocks/fields';
import './blocks/form';
import './blocks/hidden';
import './blocks/html';
import './blocks/mail-editor';
import './blocks/number';
import './blocks/phone';
import './blocks/radio';
import './blocks/response';
import './blocks/select';
import './blocks/submit';
import './blocks/text';
import './blocks/textarea';

declare global {
	interface Window {
		typenow?: string;
	}
}

registerPlugins();

domReady(() => {
	const editorPostType = (select('core/editor') as any)?.getCurrentPostType?.();
	const postType = editorPostType ?? window.typenow;

	if (postType && postType !== 'gbf-form') {
		unregisterBlockType('gutenberg-form/form-container');
	}
});
