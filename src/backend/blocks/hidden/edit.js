/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';
import lock from './lockIcon.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = ( props ) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			placeholder,
			label,
			fieldid,
			help,
			error,
			content,
		},
		setAttributes,
	} = props;

	const lockFieldId = [ 'first_name', 'last_name' ].includes( fieldid );
	const validFieldId = () => {
		const validPattern = new RegExp( '([a-zA-Z0-9_]){3,40}' );
		return validPattern.test( fieldid );
	};

	const setFieldId = ( value ) => {
		value = value.toLowerCase();
		value = value.replace( /\s/g, '-' );
		setAttributes( { fieldid: value.toLowerCase() } );
	};

	const blockProps = useBlockProps( {
		className: [
			'ctx:form-field',
			'ctx:form-field--hidden',
			'ctx:form-field--' + width,
			validFieldId() == false ? 'ctx:form-field--error' : '',
		]
			.filter( Boolean )
			.join( ' ' ),
	} );

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />
			<div className="ctx:form-field__caption">
				<div className="ctx:form-field__description">
					<RichText
						tagName="span"
						className="ctx:form-details__label"
						value={ label }
						placeholder={ __( 'Label', 'gutenberg-form' ) }
						onChange={ ( value ) =>
							setAttributes( { label: value } )
						}
					/>

					<span>{ required ? '*' : '' }</span>
					<br />
					<span className="ctx:form-field__label">
						{ __( 'Label for the field', 'gutenberg-form' ) }
					</span>
				</div>

				<div className="ctx:form-field__name">
					{ ! lockFieldId && (
						<RichText
							tagName="p"
							className="ctx:form-details__label"
							value={ fieldid }
							placeholder={ __( 'Slug', 'gutenberg-form' ) }
							onChange={ ( value ) => setFieldId( value ) }
						/>
					) }
					{ lockFieldId && (
						<span className="ctx:form-details__label--lock">
							{ fieldid } <Icon icon={ lock } size={ 14 } />
						</span>
					) }
					{ validFieldId() == false && (
						<span className="ctx:form-field__error-message">
							{ __(
								'Please type in a unique itentifier for the field',
								'gutenberg-form'
							) }
						</span>
					) }
					{ validFieldId() && (
						<span className="ctx:form-field__label">
							{ __( 'Unique identifier', 'gutenberg-form' ) }
						</span>
					) }
				</div>
			</div>

			<select>
				<option value="current_page">
					{ __( 'Current page', 'gutenberg-form' ) }
				</option>
				<option value="current_user">
					{ __( 'Current user', 'gutenberg-form' ) }
				</option>
			</select>
		</div>
	);
};

export default edit;
