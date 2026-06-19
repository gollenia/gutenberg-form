import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { type VisibilityRule, VisibilityRules } from '../_shared';

type PhoneAttributes = {
	width: number;
	required: boolean;
	description: string;
	visibilityRule?: VisibilityRule | null;
};

interface InspectorProps {
	attributes: PhoneAttributes;
	setAttributes: (attributes: Partial<PhoneAttributes>) => void;
	clientId: string;
}

const Inspector = (props: InspectorProps) => {
	const {
		attributes: { width, required, description, visibilityRule },
		setAttributes,
		clientId,
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
					help={__('Description for the input field', 'gutenberg-form')}
					value={description}
					onChange={(value) => setAttributes({ description: value })}
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
