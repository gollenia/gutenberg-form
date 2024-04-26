import { InspectorControls } from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import SortableControl from './../../common/SortableControl/SortableControl';

const Inspector = (props) => {
	const {
		attributes: {
			width,
			required,
			help,
			customErrorMessage,
			options,
			hasEmptyOption,
			hint,
			type,
		},
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					onChange={(value) =>
						setAttributes({
							required: value,
							hasEmptyOption: value,
						})
					}
				/>
				<CheckboxControl
					label={__('Empty option', 'gutenberg-form')}
					help={__(
						'An empty option ist shown and selected as default',
						'gutenberg-form'
					)}
					checked={hasEmptyOption}
					disabled={required}
					onChange={(value) =>
						setAttributes({ hasEmptyOption: value })
					}
				/>

				<TextControl
					label={__('Custom Error Message', 'gutenberg-form')}
					value={customErrorMessage}
					onChange={(value) =>
						setAttributes({ customErrorMessage: value })
					}
				/>

				<CheckboxControl
					label={__('Combo Box', 'gutenberg-form')}
					help={__(
						'Allow users to enter a custom value',
						'gutenberg-form'
					)}
					checked={type === 'combobox'}
					onChange={(value) =>
						setAttributes({ type: value ? 'combobox' : 'select' })
					}
				/>
			</PanelBody>
			<PanelBody
				title={__('Options', 'gutenberg-form')}
				initialOpen={true}
			>
				<SortableControl
					items={options}
					onChange={(value) => setAttributes({ options: value })}
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
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
