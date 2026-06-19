import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/image',
	'core/quote',
	'core/group',
];

const TEMPLATE = [
	['core/heading', { content: __('Thank you', 'gutenberg-form') }, []],
	[
		'core/paragraph',
		{ content: __('Your message has been sent', 'gutenberg-form') },
		[],
	],
] as const;

export default function Edit() {
	const blockProps = useBlockProps({ className: 'gbf-response' });
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE as any,
	});

	return <div {...innerBlocksProps}>{innerBlocksProps.children}</div>;
}
