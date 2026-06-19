import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { VisibilityRules } from '../_shared';
import type { DateAttributes } from './edit';

interface InspectorProps {
	attributes: DateAttributes;
	clientId: string;
	setAttributes: (attributes: Partial<DateAttributes>) => void;
}

const Inspector = (props: InspectorProps) => {
	const {
		attributes: { width, required, min, max, description, visibilityRule },
		clientId,
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
					label={__('Description', 'gutenberg-form')}
					help={__('Help text for the date field', 'gutenberg-form')}
					value={description}
					onChange={(value) => setAttributes({ description: value })}
				/>
				<TextControl
					label={__('Lowest Date', 'gutenberg-form')}
					help={__('e.g. maximal age for an attendee', 'gutenberg-form')}
					value={min}
					onChange={(value) => setAttributes({ min: value })}
					type="date"
				/>
				<TextControl
					label={__('Highest Date', 'gutenberg-form')}
					help={__('e.g. minimal age for an attendee', 'gutenberg-form')}
					value={max}
					onChange={(value) => setAttributes({ max: value })}
					type="date"
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
					max={4}
					min={1}
					onChange={(value) => setAttributes({ width: value })}
				/>
			</PanelBody>
			<PanelBody title={__('Behavior', 'gutenberg-form')} initialOpen={false}>
				<VisibilityRules
					clientId={clientId}
					visibilityRule={visibilityRule ?? null}
					onChange={(visibilityRule) =>
						setAttributes({ visibilityRule: visibilityRule ?? undefined })
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
