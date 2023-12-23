/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Blocks dependencies.
 */
import * as formCheckbox from './checkbox/index.js';
import * as formContainer from './container/index.js';
import * as formCountry from './country/index.js';
import * as formDate from './date/index.js';
import * as formEmail from './email/index.js';
import * as formFields from './fields/index.js';
import * as formBlock from './form/index.js';
import * as formHidden from './hidden/index.js';
import * as formHTML from './html/index.js';
import * as mailEditor from './mail-editor/index.js';
import * as formNumber from './number/index.js';
import * as formRadio from './radio/index.js';
import * as formSelect from './select/index.js';
import * as formSubmit from './submit/index.js';
import * as formPhone from './tel/index.js';
import * as formText from './text/index.js';
import * as formTextarea from './textarea/index.js';

const registerBlock = (block) => {
	if (!block) return;
	const { name, settings } = block;
	registerBlockType(name, settings);
};

const blocks = [
	formBlock,
	formContainer,
	formText,
	formEmail,
	formTextarea,
	formDate,
	formCheckbox,
	formSelect,
	formCountry,
	formPhone,
	formRadio,
	formHTML,
	formSubmit,
	formHidden,
	formNumber,
	mailEditor,
	formFields,
];

const registerBlocks = () => {
	blocks.forEach((block) => {
		registerBlock(block);
	});
};

export default registerBlocks;
