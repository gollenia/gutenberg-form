import { InspectorControls } from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const {
		attributes: {
			width,
			required,
			help,
			error,
			options,
			hasEmptyOption,
			hint,
			multiSelect,
		},
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Data', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'gutenberg-form' ) }
					checked={ required }
					onChange={ ( value ) =>
						setAttributes( {
							required: value,
							hasEmptyOption: value,
						} )
					}
				/>
				<CheckboxControl
					label={ __( 'Empty option', 'gutenberg-form' ) }
					help={ __(
						'An empty option ist shown and selected as default',
						'gutenberg-form'
					) }
					checked={ hasEmptyOption }
					disabled={ required }
					onChange={ ( value ) =>
						setAttributes( { hasEmptyOption: value } )
					}
				/>

				<TextareaControl
					label={ __( 'Options', 'gutenberg-form' ) }
					value={ options.join( '\n' ) }
					onChange={ ( value ) =>
						setAttributes( { options: value.split( '\n' ) } )
					}
					help={ __(
						'Options for the select control. Each line represents one option',
						'gutenberg-form'
					) }
				/>

				<CheckboxControl
					label={ __( 'Multi select', 'gutenberg-form' ) }
					checked={ multiSelect }
					onChange={ ( value ) =>
						setAttributes( { multiSelect: value } )
					}
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
