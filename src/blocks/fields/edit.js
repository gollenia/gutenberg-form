/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { select, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function Edit({ ...props }) {
	if (props.context?.postType !== 'gbf-form') {
		return (
			<div className="gbf-alert">
				<h3>
					{__(
						'This block is only usable in the forms post type',
						'gutenberg-form'
					)}
				</h3>
				<p>
					{__(
						'If you want to add a form to this page, use the Form block',
						'gutenberg-form'
					)}
				</p>
			</div>
		);
	}
	const { clientId } = props;
	const blockProps = useBlockProps({ className: 'ctx:form' });

	const postType = useSelect(select('core/editor').getCurrentPostType);
	if (['gbf-form'].includes(postType)) {
		document
			.getElementsByClassName('edit-post-fullscreen-mode-close')[0]
			?.setAttribute('href', 'edit.php?post_type=gbf-form');
	}

	const allowedBlocks = [
		'gutenberg-form/form-text',
		'gutenberg-form/form-email',
		'gutenberg-form/form-textarea',
		'gutenberg-form/form-select',
		'gutenberg-form/form-country',
		'gutenberg-form/form-phone',
		'gutenberg-form/form-radio',
		'gutenberg-form/form-checkbox',
		'gutenberg-form/form-date',
		'gutenberg-form/form-html',
		'gutenberg-form/form-hidden',
		'gutenberg-form/submit',
	];

	const template = [
		[
			'gutenberg-form/form-text',
			{
				name: 'prename',
				width: 6,
				label: __('Name', 'gutenberg-form'),
			},
			[],
		],
		[
			'gutenberg-form/form-text',
			{
				name: 'surname',
				width: 6,
				label: __('Name', 'gutenberg-form'),
			},
			[],
		],
		[
			'gutenberg-form/form-email',
			{ name: 'email', label: __('Email', 'gutenberg-form') },
			[],
		],
		[
			'gutenberg-form/form-textarea',
			{ name: 'message', label: __('Message', 'gutenberg-form') },
			[],
		],
		[
			'gutenberg-form/submit',
			{ name: 'submit', label: __('Submit', 'gutenberg-form') },
			[],
		],
	];

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks,
		template,
	});

	return <form autocomplete="off" {...innerBlocksProps}></form>;
}
