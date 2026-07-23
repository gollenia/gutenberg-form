import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Admin from './admin';
import icons from './icons';
import User from './user';

type AvailableField = {
	label: string;
	value: string;
	type: string;
};

type InnerBlock = {
	name: string;
	attributes: { label?: string; name?: string };
	innerBlocks?: InnerBlock[];
};

type MailEditorProps = {
	context: Record<string, string>;
};

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/image',
	'core/quote',
	'core/seperator',
	'core/group',
];

const TEMPLATE = [
	[
		'core/heading',
		{ placeholder: __('Thank you', 'gutenberg-form') },
		[],
	],
	[
		'core/paragraph',
		{ placeholder: __('Your message has been sent', 'gutenberg-form') },
		[],
	],
] as const;

const Edit = ({ context }: MailEditorProps) => {
	const [adminVisible, setAdminVisible] = useState(false);
	const [userVisible, setUserVisible] = useState(false);
	const [feedbackVisible, setFeedbackVisible] = useState(false);
	const postType = useSelect(
		(selectFn) => (selectFn('core/editor') as any).getCurrentPostType() as string,
		[],
	);
	const parentBlock = useSelect(
		(select) =>
			(select('core/block-editor') as any).getBlocksByClientId(
				context['gutenberg-form/recordId'],
			) as InnerBlock[],
		[],
	);

	const getAvailableFields = (): AvailableField[] => {
		const formFieldsBlock = parentBlock[0]?.innerBlocks?.find(
			(block) => block.name === 'gutenberg-form/form-fields',
		);
		const fields = formFieldsBlock?.innerBlocks ?? [];
		const availableFields: AvailableField[] = [
			{ label: __('All fields', 'gutenberg-form'), value: 'all_fields', type: 'generic' },
			{ label: __('Form title', 'gutenberg-form'), value: 'form_title', type: 'generic' },
			{ label: __('Page title', 'gutenberg-form'), value: 'page_title', type: 'generic' },
			{ label: __('Page URL', 'gutenberg-form'), value: 'page_url', type: 'generic' },
		];

		fields.forEach((field) => {
			availableFields.push({
				label: field.attributes.label ?? field.attributes.name ?? '',
				value: field.attributes.name ?? '',
				type: 'field',
			});
		});

		return availableFields;
	};

	const insertCode = (event: React.MouseEvent<HTMLElement>, code: string) => {
		event.preventDefault();
		event.stopPropagation();

		const selection = window.getSelection();
		if (!selection || !selection.getRangeAt || selection.rangeCount === 0) {
			return;
		}

		const range = selection.getRangeAt(0);
		range.deleteContents();
		range.insertNode(document.createTextNode(code));
		range.collapse(false);
	};

	const [meta, setMeta] = ((globalThis as any).wp?.coreData?.useEntityProp?.(
		'postType',
		postType,
		'meta',
	) ?? [null, () => null]) as [Record<string, unknown>, (meta: Record<string, unknown>) => void];
	const blockProps = useBlockProps({ className: 'ctx-mail-editor' });
	const innerBlocksProps = useInnerBlocksProps(
		{},
			{
				allowedBlocks: ALLOWED_BLOCKS,
				template: TEMPLATE as any,
			},
		);

	return (
		<div {...blockProps}>
			<div className="ctx-mail-editor-trigger">
				<Button variant="primary" icon={icons.admin} onClick={() => setAdminVisible((visible) => !visible)}>
					{__('Admin Mail', 'gutenberg-form')}
				</Button>
				<Button variant="secondary" icon={icons.user} onClick={() => setUserVisible((visible) => !visible)}>
					{__('User Mail', 'gutenberg-form')}
				</Button>
				<Button variant="secondary" icon={icons.user} onClick={() => setFeedbackVisible((visible) => !visible)}>
					{__('Feedback', 'gutenberg-form')}
				</Button>
			</div>
			<Admin
				visible={adminVisible}
				setVisible={setAdminVisible}
				meta={meta}
				setMeta={setMeta}
				getAvailableFields={getAvailableFields}
				insertCode={insertCode}
			/>
			<User
				visible={userVisible}
				setVisible={setUserVisible}
				meta={meta}
				setMeta={setMeta}
				getAvailableFields={getAvailableFields}
				insertCode={insertCode}
			/>
			{feedbackVisible && (
				<div className="ctx-feedback">
					<div {...innerBlocksProps} />
				</div>
			)}
		</div>
	);
};

export default Edit;
