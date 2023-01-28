import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const {
		attributes: {
			width,
			required,
			fieldid,
			pattern,
			label,
			name,
			help,
			error,
		},
		setAttributes,
	} = props;

	const lockFieldId = 'user_email' === fieldid;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Data', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'gutenberg-form' ) }
					checked={ required }
					disabled={ lockFieldId }
					onChange={ ( value ) =>
						setAttributes( { required: value } )
					}
				/>
				<TextControl
					label={ __( 'Help', 'gutenberg-form' ) }
					help={ __(
						'Help text for the input field',
						'gutenberg-form'
					) }
					value={ help }
					onChange={ ( value ) => setAttributes( { help: value } ) }
				/>
				<TextControl
					label={ __( 'Error message', 'gutenberg-form' ) }
					help={ __(
						'Text to display when the user types in invalid or insufficient data',
						'gutenberg-form'
					) }
					value={ error }
					onChange={ ( value ) => setAttributes( { error: value } ) }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Appearance', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<RangeControl
					label={ __( 'Width', 'gutenberg-form' ) }
					help={ __(
						'Number of columns the input field will occupy',
						'gutenberg-form'
					) }
					value={ width }
					max={ 6 }
					min={ 1 }
					onChange={ ( value ) => setAttributes( { width: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
