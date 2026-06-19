import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { select, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

type FieldsEditProps = {
	context?: { postType?: string };
	clientId: string;
};

const ALLOWED_BLOCKS = [
	'gutenberg-form/text',
	'gutenberg-form/email',
	'gutenberg-form/textarea',
	'gutenberg-form/select',
	'gutenberg-form/country',
	'gutenberg-form/phone',
	'gutenberg-form/radio',
	'gutenberg-form/checkbox',
	'gutenberg-form/date',
	'gutenberg-form/html',
	'gutenberg-form/number',
	'gutenberg-form/hidden',
	'gutenberg-form/submit',
];

const TEMPLATE = [
	[
		'gutenberg-form/text',
		{
			name: 'prename',
			width: 6,
			label: __('Name', 'gutenberg-form'),
		},
		[],
	],
	[
		'gutenberg-form/text',
		{
			name: 'surname',
			width: 6,
			label: __('Name', 'gutenberg-form'),
		},
		[],
	],
	[
		'gutenberg-form/email',
		{ name: 'email', label: __('Email', 'gutenberg-form') },
		[],
	],
	[
		'gutenberg-form/textarea',
		{ name: 'message', label: __('Message', 'gutenberg-form') },
		[],
	],
	[
		'gutenberg-form/submit',
		{ name: 'submit', label: __('Submit', 'gutenberg-form') },
		[],
	],
] as const;

export default function Edit(props: FieldsEditProps) {
	if (props.context?.postType !== 'gbf-form') {
		return (
			<div className="gbf-alert">
				<h3>
					{__(
						'This block is only usable in the forms post type',
						'gutenberg-form',
					)}
				</h3>
				<p>
					{__(
						'If you want to add a form to this page, use the Form block',
						'gutenberg-form',
					)}
				</p>
			</div>
		);
	}

	const blockProps = useBlockProps({ className: 'ctx:form' });
	const postType = useSelect(
		() => (select('core/editor') as any).getCurrentPostType() as string,
		[],
	);

	if (postType === 'gbf-form') {
		document
			.getElementsByClassName('edit-post-fullscreen-mode-close')[0]
			?.setAttribute('href', 'edit.php?post_type=gbf-form');
	}

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE as any,
	});

	return <form autoComplete="off" {...innerBlocksProps} />;
}
