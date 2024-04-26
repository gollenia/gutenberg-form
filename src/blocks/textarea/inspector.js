import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			label,
			rows,
			name,
			help,
			customErrorMessage,
		},
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

				<TextControl
					label={__('Error message', 'gutenberg-form')}
					help={__(
						'Text to display when the user types in invalid or insufficient data',
						'gutenberg-form'
					)}
					value={customErrorMessage}
					onChange={(value) =>
						setAttributes({ customErrorMessage: value })
					}
				/>
			</PanelBody>
			<PanelBody
				title={__('Appearance', 'gutenberg-form')}
				initialOpen={true}
			>
				<RangeControl
					label={__('Width', 'gutenberg-form')}
					help={__(
						'Number of columns the input field will occupy',
						'gutenberg-form'
					)}
					value={width}
					max={6}
					min={1}
					onChange={(value) => setAttributes({ width: value })}
				/>
				<RangeControl
					label={__('Height', 'gutenberg-form')}
					help={__('Number of text rows', 'gutenberg-form')}
					value={rows}
					onChange={(value) => setAttributes({ rows: value })}
					min={1}
					max={12}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
