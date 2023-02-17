/**
 * Wordpress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
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
const edit = ( props ) => {
	const [ adminVisible, setAdminVisible ] = useState( false );
	const [ userVisible, setUserVisible ] = useState( false );

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
			{
				label: __( 'Page URL', 'gutenberg-form' ),
				value: 'page_url',
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

		if ( ! window.getSelection() ) return;
		let selection = window.getSelection();
		if ( selection.getRangeAt && selection.rangeCount ) {
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
					icon={ icons.admin }
					onClick={ () => setAdminVisible( ! adminVisible ) }
				>
					{ __( 'Admin Mail', 'gutenberg-form' ) }
				</Button>
				<Button
					variant="secondary"
					icon={ icons.user }
					onClick={ () => setUserVisible( ! userVisible ) }
				>
					{ __( 'User Mail', 'gutenberg-form' ) }
				</Button>
			</div>
			<Admin
				visible={ adminVisible }
				setVisible={ setAdminVisible }
				meta={ meta }
				setMeta={ setMeta }
				getAvailableFields={ getAvailableFields }
				insertCode={ insertCode }
			/>
			<User
				visible={ userVisible }
				setVisible={ setUserVisible }
				meta={ meta }
				setMeta={ setMeta }
				getAvailableFields={ getAvailableFields }
				insertCode={ insertCode }
			/>
		</div>
	);
};

export default edit;
