/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';

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
			label,
			fieldid,
			help,
			error,
			region,
		},
		setAttributes,
	} = props;

	const [ countries, setCountries ] = useState( [] );

	const fetchCountries = async () => {
		const response = await fetch(
			'https://countries.kids-team.com/countries/' + region + '/' + 'de'
		);
		const data = await response.json();
		const items = Object.entries( data ).map( ( [ key, value ] ) => {
			return {
				value: key,
				label: value,
			};
		} );
		setCountries( items );
	};

	useEffect( () => {
		fetchCountries();
	}, [ region ] );

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
					<span>
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
					</span>
					<span className="ctx:form-field__label">
						{ __( 'Label for the field', 'gutenberg-form' ) }
					</span>
				</div>

				<div className="ctx:form-field__name">
					<RichText
						tagName="p"
						className="ctx:form-details__label"
						value={ fieldid }
						placeholder={ __( 'Slug', 'gutenberg-form' ) }
						onChange={ ( value ) => setFieldId( value ) }
					/>
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
				{ countries.map( ( country, index ) => {
					if ( ! country ) return <></>;
					return (
						<option key={ index } value={ country.value }>
							{ country.label }
						</option>
					);
				} ) }
			</select>
		</div>
	);
};

export default edit;
