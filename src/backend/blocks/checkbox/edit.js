/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { CheckboxControl, ToggleControl } from '@wordpress/components';
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
			label,
			fieldid,
			help,
			style,
			placeholder,
		},
		setAttributes,
	} = props;

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
			validFieldId() == false || help === ''
				? 'ctx:form-field--error'
				: '',
		]
			.filter( Boolean )
			.join( ' ' ),
	} );

	return (
		<div { ...blockProps }>
			<Inspector { ...props } />

			<div className="ctx:form-field__caption">
				<div className="ctx:form-field__description"></div>

				<div className="ctx:form-field__name">
					<RichText
						tagName="p"
						className="ctx:form-details__label critical"
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

			<div className="label">
				{ style == 'checkbox' && (
					<CheckboxControl
						checked={ placeholder }
						onChange={ ( value ) =>
							setAttributes( { placeholder: value } )
						}
					/>
				) }

				{ style == 'toggle' && (
					<ToggleControl
						checked={ placeholder }
						onChange={ ( value ) =>
							setAttributes( { placeholder: value } )
						}
					/>
				) }
				<RichText
					tagName="p"
					className="ctx:form-details__label critical"
					value={ help }
					required
					placeholder={ __(
						'What should your visitor say "yes" to?',
						'gutenberg-form'
					) }
					onChange={ ( value ) => setAttributes( { help: value } ) }
				/>
			</div>
		</div>
	);
};

export default edit;
