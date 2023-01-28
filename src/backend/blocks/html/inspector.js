import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const {
		attributes: { width },
		setAttributes,
	} = props;

	return (
		<InspectorControls>
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
