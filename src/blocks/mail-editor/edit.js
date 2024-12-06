/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Admin from './admin.js';
import icons from './icons.js';
import User from './user.js';
/**
 * Internal dependencies
 */

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = (props) => {
	const [adminVisible, setAdminVisible] = useState(false);
	const [userVisible, setUserVisible] = useState(false);
	const [feedbackVisible, setFeedbackVisible] = useState(false);

	const { context, setAttributes, attributes } = props;
	const { collapsAfterSubmit } = attributes;
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);

	const parentBlock = useSelect(
		(select) =>
			select('core/block-editor').getBlocksByClientId(
				context['gutenberg-form/recordId']
			),
		[]
	);

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
			{
				placeholder: __('Thank you', 'gutenberg-form'),
			},
			[],
		],
		[
			'core/paragraph',
			{
				placeholder: __('Your message has been sent', 'gutenberg-form'),
			},
			[],
		],
	];

	const getAvailableFields = () => {
		if (
			!parentBlock[0].innerBlocks[1].name === 'gutenberg-form/form-fields'
		)
			return [];
		const fields = parentBlock[0].innerBlocks[1].innerBlocks;
		const availableFields = [
			{
				label: __('All fields', 'gutenberg-form'),
				value: 'all_fields',
				type: 'generic',
			},
			{
				label: __('Form title', 'gutenberg-form'),
				value: 'form_title',
				type: 'generic',
			},
			{
				label: __('Page title', 'gutenberg-form'),
				value: 'page_title',
				type: 'generic',
			},
			{
				label: __('Page URL', 'gutenberg-form'),
				value: 'page_url',
				type: 'generic',
			},
		];
		fields.forEach((field) => {
			availableFields.push({
				label: field.attributes.label,
				value: field.attributes.name,
				type: 'field',
			});
		});
		return availableFields;
	};

	const insertCode = (event, code) => {
		event.preventDefault();
		event.stopPropagation();

		if (!window.getSelection()) return;
		let selection = window.getSelection();
		if (selection.getRangeAt && selection.rangeCount) {
			let range = selection.getRangeAt(0);
			range.deleteContents();
			range.insertNode(document.createTextNode(code));
			range.collapse(false);
		}
	};

	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

	const blockProps = useBlockProps({
		className: ['ctx:mail-editor'].filter(Boolean).join(' '),
	});

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
		}
	);

	return (
		<div {...blockProps}>
			<div className="ctx:mail-editor-trigger">
				<Button
					variant="primary"
					icon={icons.admin}
					onClick={() => setAdminVisible(!adminVisible)}
				>
					{__('Admin Mail', 'gutenberg-form')}
				</Button>
				<Button
					variant="secondary"
					icon={icons.user}
					onClick={() => setUserVisible(!userVisible)}
				>
					{__('User Mail', 'gutenberg-form')}
				</Button>
				<Button
					variant="secondary"
					icon={icons.user}
					onClick={() => setFeedbackVisible(!feedbackVisible)}
				>
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
				<div className="ctx:feedback">
					<div {...innerBlocksProps} />
				</div>
			)}
		</div>
	);
};

export default edit;
