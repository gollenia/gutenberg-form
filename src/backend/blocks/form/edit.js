/**
 * Wordpress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { ExternalLink, Icon, SelectControl } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import icon from './icon';

/**
 * Internal dependencies
 */

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = ( props ) => {
	const {
		attributes: { formPost },
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: [ 'ctx-form-placeholder' ].filter( Boolean ).join( ' ' ),
	} );

	const forms = useSelect( ( select ) => {
		const { getEntityRecords } = select( coreStore );
		const rawData = getEntityRecords( 'postType', 'gbf-form', {
			per_page: -1,
		} );

		if ( ! rawData ) {
			return [
				{
					value: '',
					label: __( 'No forms found', 'gutenberg-form' ),
					disabled: true,
				},
			];
		}

		let result = rawData.map( ( form ) => {
			return {
				value: form.id,
				label: form.title.raw,
			};
		} );

		result.unshift( {
			value: '',
			label: __( 'No form selected', 'gutenberg-form' ),
			disabled: true,
		} );

		return result;
	}, [] );

	console.log( forms );

	return (
		<>
			<div { ...blockProps }>
				<div>
					<div class="components-placeholder__label">
						<Icon icon={ icon } />
						{ __( 'Select a form', 'gutenberg-form' ) }
					</div>
					<form>
						<SelectControl
							value={ formPost }
							onChange={ ( value ) => {
								setAttributes( { formPost: value } );
							} }
							placeholder={ __(
								'Select a form',
								'gutenberg-form'
							) }
							options={ forms }
						/>
					</form>
				</div>

				<div className="components-placeholder__learn-more">
					<ExternalLink href="/wp-admin/edit.php?post_type=gbf-form#general"	>
						{ __( 'Create a new form', 'gutenberg-form' ) }
					</ExternalLink>
				</div>
			</div>
		</>
	);
};

export default edit;
