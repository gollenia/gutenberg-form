import { InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
	RangeControl,
	SelectControl,
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
			name,
			help,
			customErrorMessage,
			autoComplete,
			min,
			max,
		},
		setAttributes,
	} = props;

	const lockFieldId = ['first_name', 'last_name'].includes(name);

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					disabled={lockFieldId}
					onChange={(value) => setAttributes({ required: value })}
				/>
				<SelectControl
					label={__('Pattern', 'gutenberg-form')}
					help={__('Help text for the input field', 'gutenberg-form')}
					options={[
						{
							label: __('Allow all characters', 'gutenberg-form'),
							value: '',
						},
						{
							label: __('Letters only', 'gutenberg-form'),
							value: '[\\p{Letter}\\p{Mark}\\s]+',
						},
						{
							label: __('Numbers only', 'gutenberg-form'),
							value: '[0-9]+',
						},
						{
							label: __('Alphanumeric', 'gutenberg-form'),
							value: '[\\p{Letter}\\p{Mark}0-9\\s]+',
						},
					]}
					value={pattern}
					onChange={(value) => setAttributes({ pattern: value })}
				/>
				<NumberControl
					label={__('Min length', 'gutenberg-form')}
					help={__(
						'Minimum number of characters required',
						'gutenberg-form'
					)}
					value={min}
					onChange={(value) => setAttributes({ min: value })}
				/>

				<NumberControl
					label={__('Max length', 'gutenberg-form')}
					help={__(
						'Maximum number of characters allowed',
						'gutenberg-form'
					)}
					value={max}
					onChange={(value) => setAttributes({ max: value })}
				/>

				<SelectControl
					label={__('Browser hint', 'gutenberg-form')}
					help={__(
						"Give a hint for the browser's autocomplete",
						'gutenberg-form'
					)}
					options={[
						{ value: '', label: __('None', 'gutenberg-form') },
						{
							value: 'off',
							label: __('Disable Autocomplete', 'gutenberg-form'),
						},
						{ value: 'given-name', label: 'Given name' },
						{ value: 'additional-name', label: 'Additional name' },
						{ value: 'family-name', label: 'Family name' },
						{
							value: 'honorific-suffix',
							label: 'Honorific suffix',
						},
						{ value: 'nickname', label: 'Nickname' },
						{
							value: 'organization-title',
							label: 'Organization title',
						},
						{ value: 'organization', label: 'Organization' },
						{ value: 'street-address', label: 'Street address' },
						{ value: 'address-line1', label: 'Address line 1' },
						{ value: 'address-line2', label: 'Address line 2' },
						{ value: 'country-name', label: 'Country name' },
						{ value: 'postal-code', label: 'Postal code' },
						{ value: 'language', label: 'Language' },
					]}
					value={autoComplete}
					onChange={(value) => setAttributes({ autoComplete: value })}
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
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
