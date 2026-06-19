import { InspectorControls } from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { type VisibilityRule, VisibilityRules } from '../_shared';

type SelectAttributes = {
	width: number;
	required: boolean;
	options: string[];
	hasEmptyOption: boolean;
	visibilityRule?: VisibilityRule | null;
};

interface InspectorProps {
	attributes: SelectAttributes;
	setAttributes: (attributes: Partial<SelectAttributes>) => void;
	clientId: string;
}

const Inspector = (props: InspectorProps) => {
	const {
		attributes: { width, required, options, hasEmptyOption, visibilityRule },
		setAttributes,
		clientId,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					onChange={(value) =>
						setAttributes({ required: value, hasEmptyOption: value })
					}
				/>
				<CheckboxControl
					label={__('Empty option', 'gutenberg-form')}
					help={__(
						'An empty option ist shown and selected as default',
						'events',
					)}
					checked={hasEmptyOption}
					disabled={required}
					onChange={(value) => setAttributes({ hasEmptyOption: value })}
				/>

				<TextareaControl
					label={__('Options', 'gutenberg-form')}
					value={options.join('\n')}
					onChange={(value) => setAttributes({ options: value.split('\n') })}
					help={__(
						'Options for the select control. Each line represents one option',
						'events',
					)}
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
					clientId={clientId}
					visibilityRule={visibilityRule ?? null}
					onChange={(nextRule) =>
						setAttributes({ visibilityRule: nextRule ?? undefined })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
