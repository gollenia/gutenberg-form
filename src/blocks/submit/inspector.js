import {
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	InspectorControls,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Inspector = (props) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			name,
			label,
			help,
			error,
			customButtonBackgroundColor,
			customButtonTextColor,
		},
		setAttributes,
		clientId,
		buttonTextColor,
		buttonBackgroundColor,
		setButtonBackgroundColor,
		setButtonTextColor,
	} = props;

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	return (
		<>
			<InspectorControls></InspectorControls>
			<InspectorControls group="color">
				<ColorGradientSettingsDropdown
					settings={[
						{
							label: __('Button Background', 'events'),
							colorValue:
								buttonBackgroundColor.color ||
								customButtonBackgroundColor,
							onColorChange: (value) => {
								setButtonBackgroundColor(value);

								setAttributes({
									customButtonBackgroundColor: value,
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
				<ColorGradientSettingsDropdown
					settings={[
						{
							label: __('Button Text Color', 'events'),
							colorValue:
								buttonTextColor.color || customButtonTextColor,
							onColorChange: (value) => {
								setButtonTextColor(value);

								setAttributes({
									buttonTextColor: value,
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
