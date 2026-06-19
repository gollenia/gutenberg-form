import { getBlockType, registerBlockType } from '@wordpress/blocks';

import * as formCheckbox from './checkbox';
import * as formContainer from './container';
import * as formCountry from './country';
import * as formDate from './date';
import * as formEmail from './email';
import * as formFields from './fields';
import * as formBlock from './form';
import * as formHidden from './hidden';
import * as formHTML from './html';
import * as mailEditor from './mail-editor';
import * as formNumber from './number';
import * as formPhone from './phone';
import * as formRadio from './radio';
import * as formResponse from './response';
import * as formSelect from './select';
import * as formSubmit from './submit';
import * as formText from './text';
import * as formTextarea from './textarea';

type BlockSettings = {
	name: string;
	settings: Record<string, unknown>;
};

const registerBlock = (block: BlockSettings | null | undefined): void => {
	if (!block) return;

	const { name, settings } = block;

	if (getBlockType(name)) return;

	registerBlockType(name, settings);
};

const blocks: BlockSettings[] = [
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
	formResponse,
	formHTML,
	formSubmit,
	formHidden,
	formNumber,
	mailEditor,
	formFields,
];

const registerBlocks = (): void => {
	blocks.forEach(registerBlock);
};

export default registerBlocks;
