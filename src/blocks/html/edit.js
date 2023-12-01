/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

import Inspector from './inspector.js';

export default function Edit( { ...props } ) {
	const {
		attributes: { width },
	} = props;

	const template = [ [ 'core/paragraph' ] ];
	const allowedBlocks = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/quote',
		'core/image',
		'core/group',
	];

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{ allowedBlocks, template, templateLock: false }
	);

	const blockProps = useBlockProps( {
		className: [ 'ctx:form-html', 'ctx:form-html--' + width ]
			.filter( Boolean )
			.join( ' ' ),
	} );

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />

			<div { ...innerBlocksProps }></div>
		</div>
	);
}
