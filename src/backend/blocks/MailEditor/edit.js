/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	Icon,
	TextControl,
} from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import icon from './icon.js';
/**
 * Internal dependencies
 */

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = ( props ) => {
	const [ visible, setVisible ] = useState( false );

	const { context } = props;

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const parentBlock = useSelect(
		( select ) =>
			select( 'core/editor' ).getBlocksByClientId(
				context[ 'gutenberg-form/recordId' ]
			),
		[]
	);

	const getAvailableFields = () => {
		if (
			! parentBlock[ 0 ].innerBlocks[ 1 ].name ===
			'gutenberg-form/form-fields'
		)
			return [];
		const fields = parentBlock[ 0 ].innerBlocks[ 1 ].innerBlocks;
		const availableFields = [
			{
				label: __( 'All fields', 'gutenberg-form' ),
				value: 'all_fields',
				type: 'generic',
			},
			{
				label: __( 'Form title', 'gutenberg-form' ),
				value: 'form_title',
				type: 'generic',
			},
			{
				label: __( 'Page title', 'gutenberg-form' ),
				value: 'page_title',
				type: 'generic',
			},
		];
		fields.forEach( ( field ) => {
			availableFields.push( {
				label: field.attributes.label,
				value: field.attributes.fieldid,
				type: 'field',
			} );
		} );
		return availableFields;
	};

	const insertCode = ( event, code ) => {
		event.preventDefault();
		event.stopPropagation();
		console.log( window.getSelection() );
		if ( ! window.getSelection() ) return;
		let selection = window.getSelection();
		if ( selection.getRangeAt && selection.rangeCount ) {
			console.log( selection );
			let range = selection.getRangeAt( 0 );
			range.deleteContents();
			range.insertNode( document.createTextNode( code ) );
			range.collapse( false );
		}
	};

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const blockProps = useBlockProps( {
		className: [ 'ctx:mail-editor' ].filter( Boolean ).join( ' ' ),
	} );

	return (
		<div { ...blockProps }>
			<div className="ctx:mail-editor-trigger">
				<Button
					variant="primary"
					icon={ icon }
					onClick={ () => setVisible( ! visible ) }
				>
					{ __( 'Mail Editor', 'gutenberg-form' ) }
				</Button>
			</div>
			{ visible && (
				<div className="ctx:mail-editor-backdrop">
					<div className="ctx:mail-editor-window">
						<div className="ctx:mail-editor-title">
							<b className="ctx:title-bar-text">
								{ __( 'Mail Editor', 'gutenberg-form' ) }
							</b>
							<Button
								className="ctx:close-buttin"
								onClick={ () => setVisible( ! visible ) }
							>
								<Icon icon="no-alt" />
							</Button>
						</div>
						<div className="ctx:mail-editor-header">
							<TextControl
								label={ __( 'Subject', 'gutenberg-form' ) }
								value={ meta._mail_subject }
								placeholder={ __( '', 'gutenberg-form' ) }
								onChange={ ( value ) => {
									setMeta( {
										...meta,
										_mail_subject: value,
									} );
								} }
							/>
							<TextControl
								label={ __( 'Recipient', 'gutenberg-form' ) }
								placeholder={ __( '', 'gutenberg-form' ) }
								value={ meta._mail_recipients }
								onChange={ ( value ) => {
									setMeta( {
										...meta,
										_mail_recipients: value,
									} );
								} }
							/>
							<CheckboxControl
								label={ __(
									'Send a copy to the site admin',
									'gutenberg-form'
								) }
								checked={ meta._send_to_admin }
								onChange={ ( value ) => {
									setMeta( {
										...meta,
										_send_to_admin: value,
									} );
								} }
							/>
						</div>
						<div className="ctx:mail-editor-body">
							<label
								class="ctx:mail-editor-label"
								for="inspector-text-control-1"
							>
								{ __( 'Mail Content', 'gutenberg-form' ) }
							</label>
							<RichText
								tagName="div"
								className="ctx:mail-editor-code code"
								placeholder={ __(
									'Write your mail content here',
									'gutenberg-form'
								) }
								value={ meta._mail_template }
								onChange={ ( value ) =>
									setMeta( {
										...meta,
										_mail_template: value,
									} )
								}
							/>
						</div>
						<div className="ctx:mail-editor-fields">
							{ getAvailableFields().map( ( field ) => (
								<span
									className={
										'ctx:mail-editor-field ctx:mail-editor-field-' +
										field.type
									}
									onMouseDown={ ( event ) => {
										event.preventDefault();
										event.stopPropagation();
									} }
									onMouseUp={ ( event ) => {
										insertCode(
											event,
											`{${ field.value }}`
										);
									} }
								>
									{ field.label }
								</span>
							) ) }
						</div>
						<div className="ctx:mail-editor-footer">
							<Button
								variant="primary"
								onClick={ () => setVisible( ! visible ) }
							>
								{ __( 'Save', 'gutenberg-form' ) }
							</Button>
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default edit;
