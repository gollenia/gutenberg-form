import * as blockEditor from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const {
	__experimentalColorGradientSettingsDropdown: ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients:
		useMultipleOriginColorsAndGradients,
	InspectorControls,
} = blockEditor as any;

type ColorObject = {
	color?: string;
};

interface SubmitInspectorProps {
	attributes: {
		label?: string;
		alignment?: string;
		buttonBackgroundColor?: string;
		buttonTextColor?: string;
		customButtonBackgroundColor?: string;
		customButtonTextColor?: string;
	};
	setAttributes: (attributes: Record<string, unknown>) => void;
	clientId: string;
	buttonTextColor?: ColorObject;
	buttonBackgroundColor?: ColorObject;
	setButtonBackgroundColor?: (value?: string) => void;
	setButtonTextColor?: (value?: string) => void;
}

const Inspector = ({
	attributes: {
		customButtonBackgroundColor,
		customButtonTextColor,
	},
	setAttributes,
	clientId,
	buttonTextColor,
	buttonBackgroundColor,
	setButtonBackgroundColor,
	setButtonTextColor,
}: SubmitInspectorProps) => {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<>
			<InspectorControls></InspectorControls>
			<InspectorControls group="color">
				<ColorGradientSettingsDropdown
					settings={[
						{
							label: __('Button Background', 'gutenberg-form'),
							colorValue:
								buttonBackgroundColor?.color || customButtonBackgroundColor,
							onColorChange: (value?: string) => {
								setButtonBackgroundColor?.(value);
								setAttributes({ customButtonBackgroundColor: value });
							},
						},
					]}
					panelId={clientId}
					hasColorsOrGradients={false}
					disableCustomColors={false}
					__experimentalIsRenderedInSidebar
					{...colorGradientSettings}
				/>
				<ColorGradientSettingsDropdown
					settings={[
						{
							label: __('Button Text Color', 'gutenberg-form'),
							colorValue: buttonTextColor?.color || customButtonTextColor,
							onColorChange: (value?: string) => {
								setButtonTextColor?.(value);
								setAttributes({
									buttonTextColor: value,
									customButtonTextColor: value,
								});
							},
						},
					]}
					panelId={clientId}
					hasColorsOrGradients={false}
					disableCustomColors={false}
					__experimentalIsRenderedInSidebar
					{...colorGradientSettings}
				/>
			</InspectorControls>
		</>
	);
};

export default Inspector;
