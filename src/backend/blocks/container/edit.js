/**
 * Wordpress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { select, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function Edit( { ...props } ) {
	if ( props.context?.postType !== 'gbf-form' ) {
		return (
			<div className="gbf-alert">
				<h3>
					{ __(
						'This block is only usable in the forms post type',
						'gutenberg-form'
					) }
				</h3>
				<p>
					{ __(
						'If you want to add a form to this page, use the Form block',
						'gutenberg-form'
					) }
				</p>
			</div>
		);
	}
	const {
		clientId,
		setAttributes,
		attributes: { recordId },
	} = props;
	setAttributes( { recordId: clientId } );

	const blockProps = useBlockProps();

	const postType = useSelect( select( 'core/editor' ).getCurrentPostType );
	if ( [ 'gbf-form' ].includes( postType ) ) {
		document
			.getElementsByClassName( 'edit-post-fullscreen-mode-close' )[ 0 ]
			?.setAttribute( 'href', 'edit.php?post_type=gbf-form' );
	}

	const allowedBlocks = [
		'gutenberg-form/mail-editor',
		'gutenberg-form/submit',
		'gutenberg-form/fields',
	];

	const template = [
		[
			'gutenberg-form/mail-editor',
			{ lock: { remove: true, move: true } },
			[],
		],
		[ 'gutenberg-form/submit', {}, [] ],
	];

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		template,
		renderAppender: false,
	} );

	return (
		<form autocomplete="off" className="ctx:form-form">
			<div
				{ ...innerBlocksProps }
				className="ctx:form-form__wrapper"
			></div>
		</form>
	);
}
