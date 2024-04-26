import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const {
		attributes: { width, required, options, customErrorMessage },
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					onChange={(value) => setAttributes({ required: value })}
				/>

				<TextareaControl
					label={__('Options', 'gutenberg-form')}
					value={options.join('\n')}
					onChange={(value) =>
						setAttributes({ options: value.split('\n') })
					}
					help={__(
						'Options for the radio control. Each line represents one option',
						'gutenberg-form'
					)}
				/>

				<TextControl
					label={__('Custom Error Message', 'gutenberg-form')}
					value={customErrorMessage}
					onChange={(value) =>
						setAttributes({ customErrorMessage: value })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
