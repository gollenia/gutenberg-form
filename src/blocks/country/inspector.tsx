import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { type VisibilityRule, VisibilityRules } from '../_shared';
import { getCountriesByRegion } from '../_shared/utils/countries';

type CountryInspectorProps = {
	attributes: {
		width: number;
		required: boolean;
		region: string;
		help?: string;
		allowedCountries?: string[];
		visibilityRule?: VisibilityRule | null;
	};
	setAttributes: (attributes: Record<string, unknown>) => void;
	clientId: string;
};

const Inspector = (props: CountryInspectorProps) => {
	const {
		attributes: { width, required, region, help, allowedCountries },
		setAttributes,
	} = props;

	const regions = [
		{ value: 'ALL', label: __('World', 'gutenberg-form') },
		{ value: 'DACH', label: __('DACH', 'gutenberg-form') },
		{ value: 'EU', label: __('Europe', 'gutenberg-form') },
		{ value: 'AS', label: __('Asia', 'gutenberg-form') },
		{ value: 'AF', label: __('Africa', 'gutenberg-form') },
		{ value: 'NA', label: __('North America', 'gutenberg-form') },
		{ value: 'SA', label: __('South America', 'gutenberg-form') },
		{ value: 'OC', label: __('Oceania', 'gutenberg-form') },
	];

	useEffect(() => {
		const codesToSave = region === 'ALL' ? [] : getCountriesByRegion(region);
		if (JSON.stringify(codesToSave) !== JSON.stringify(allowedCountries)) {
			setAttributes({ allowedCountries: codesToSave });
		}
	}, [region]);

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					onChange={(value) => setAttributes({ required: value })}
				/>

				<SelectControl
					label={__('Region', 'gutenberg-form')}
					value={region}
					options={regions}
					onChange={(value) => setAttributes({ region: value })}
				/>

				<TextControl
					label={__('Empty option', 'gutenberg-form')}
					help={__(
						'Text to display when no country is selected',
						'gutenberg-form',
					)}
					value={help ?? ''}
					onChange={(value) => setAttributes({ help: value })}
				/>
			</PanelBody>
			<PanelBody title={__('Appearance', 'gutenberg-form')} initialOpen={true}>
				<RangeControl
					label={__('Width', 'gutenberg-form')}
					help={__(
						'Number of columns the input field will occupy',
						'gutenberg-form',
					)}
					value={width}
					max={6}
					min={1}
					onChange={(value) => setAttributes({ width: value })}
				/>
			</PanelBody>
			<PanelBody title={__('Behavior', 'gutenberg-form')} initialOpen={false}>
				<VisibilityRules
					clientId={props.clientId}
					visibilityRule={props.attributes.visibilityRule ?? null}
					onChange={(visibilityRule) => setAttributes({ visibilityRule })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
