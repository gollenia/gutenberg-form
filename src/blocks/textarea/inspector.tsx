import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { type VisibilityRule, VisibilityRules } from '../_shared';

type TextareaAttributes = {
	width: number;
	required: boolean;
	pattern?: string;
	rows: number;
	description: string;
	visibilityRule?: VisibilityRule | null;
};

interface InspectorProps {
	attributes: TextareaAttributes;
	setAttributes: (attributes: Partial<TextareaAttributes>) => void;
	clientId: string;
}

const Inspector = (props: InspectorProps) => {
	const {
		attributes: { width, required, rows, pattern, visibilityRule },
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
					label={__('Pattern', 'gutenberg-form')}
					help={__(
						'Regular expression to prevent wrong or illegal input',
						'gutenberg-form',
					)}
					value={pattern ?? ''}
					onChange={(value) =>
						setAttributes({ pattern: value === '' ? undefined : value })
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
					max={4}
					min={1}
					onChange={(value) => setAttributes({ width: value })}
				/>
				<RangeControl
					label={__('Height', 'gutenberg-form')}
					help={__('Number of text rows', 'gutenberg-form')}
					value={rows}
					onChange={(value) => setAttributes({ rows: value ?? 1 })}
					min={1}
					max={12}
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
