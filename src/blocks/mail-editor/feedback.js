/**
 * Wordpress dependencies
 */
import { useInnerBlocksProps } from '@wordpress/block-editor';
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

export default function Edit({ ...props }) {
	const { setAttributes, isVisible } = props;

	const allowedBlocks = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/image',
		'core/quote',
		'core/seperator',
	];

	const template = [
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

	const [isOpen, setIsOpen] = useState(false);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks,
		template,
	});

	return (
		<>
			{isVisible && (
				<Modal title="This is my modal" onRequestClose={closeModal}>
					<div {...innerBlocksProps} />
				</Modal>
			)}
		</>
	);
}
