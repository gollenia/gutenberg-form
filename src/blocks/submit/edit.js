/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Toolbar from './toolbar.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = ( props ) => {
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const blockProps = useBlockProps( {
		className: [
			'ctx:form-field',
			'ctx:form-field--6',
			'ctx:form-submit--' + meta._form_submit_align,
			'ctx:form-submit',
		]
			.filter( Boolean )
			.join( ' ' ),
	} );

	return (
		<div { ...blockProps }>
			<Toolbar meta={ meta } setMeta={ setMeta } />

			<RichText
				tagName="span"
				className="ctx:form-submit__button"
				value={ meta._form_submit_title }
				allowedFormats={ [] }
				placeholder={ __( 'Label', 'gutenberg-form' ) }
				onChange={ ( value ) =>
					setMeta( { ...meta, _form_submit_title: value } )
				}
			/>
		</div>
	);
};

export default edit;
