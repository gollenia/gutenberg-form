/**
 * Wordpress dependencies
 */
import {
	Inserter,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { select, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function Edit( { ...props } ) {
	console.log( props.context );
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
	const { clientId } = props;
	const blockProps = useBlockProps();

	const postType = useSelect( select( 'core/editor' ).getCurrentPostType );
	if ( [ 'gbf-form' ].includes( postType ) ) {
		document
			.getElementsByClassName( 'edit-post-fullscreen-mode-close' )[ 0 ]
			?.setAttribute( 'href', 'edit.php?post_type=gbf-form' );
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
	];

	const template = [
		[
			'gutenberg-form/form-text',
			{ fieldid: 'name', label: __( 'Name', 'gutenberg-form' ) },
			[],
		],
		[
			'gutenberg-form/form-email',
			{ fieldid: 'email', label: __( 'Email', 'gutenberg-form' ) },
			[],
		],
		[
			'gutenberg-form/form-textarea',
			{ fieldid: 'message', label: __( 'Message', 'gutenberg-form' ) },
			[],
		],
	];

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks,
		template,
		renderAppender: false,
	} );

	function SectionAppender( { rootClientId } ) {
		return (
			<Inserter
				rootClientId={ rootClientId }
				renderToggle={ ( { onToggle, disabled } ) => (
					<a
						className="components-button is-primary"
						onClick={ onToggle }
					>
						{ __( 'Add Field', 'gutenberg-form' ) }
					</a>
				) }
				isAppender
			/>
		);
	}

	return (
		<form autocomplete="off" className="ctx:form-form">
			<div
				{ ...innerBlocksProps }
				className="ctx:form-form__container"
			></div>
			<div className="ctx:form-form__appender">
				<SectionAppender rootClientId={ clientId } />
			</div>
		</form>
	);
}
