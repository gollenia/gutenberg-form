import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ContextControl, VisibilityRules } from '../_shared';

import type { TextAttributes, TextValidation } from './edit';

interface InspectorProps {
	attributes: TextAttributes;
	setAttributes: (attributes: Partial<TextAttributes>) => void;
	clientId: string;
}

const Inspector = (props: InspectorProps) => {
	const {
		attributes: { width, required, validation, name, visibilityRule, context },
		setAttributes,
		clientId,
	} = props;

	const lockName = ['first_name', 'last_name'].includes(name);

	return (
		<InspectorControls>
			<PanelBody title={__('Data', 'gutenberg-form')} initialOpen={true}>
				<ToggleControl
					label={__('Required', 'gutenberg-form')}
					checked={required}
					disabled={lockName}
					onChange={(value) => setAttributes({ required: value })}
				/>
				<SelectControl
					label={__('Input restriction', 'gutenberg-form')}
					value={validation}
					options={[
						{ label: __('No restriction', 'gutenberg-form'), value: 'none' },
						{ label: __('Digits only', 'gutenberg-form'), value: 'digits' },
						{
							label: __('Letters and numbers only', 'gutenberg-form'),
							value: 'alphanumeric',
						},
					]}
					onChange={(value) =>
						setAttributes({ validation: value as TextValidation })
					}
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
			<PanelBody
				title={__('Dependencies', 'gutenberg-form')}
				initialOpen={false}
			>
				<VisibilityRules
					clientId={clientId}
					visibilityRule={visibilityRule ?? null}
					onChange={(nextRule) =>
						setAttributes({ visibilityRule: nextRule ?? undefined })
					}
				/>

				<ContextControl
					value={context}
					clientId={clientId}
					onChange={(value: string) => {
						setAttributes({ context: value });
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
