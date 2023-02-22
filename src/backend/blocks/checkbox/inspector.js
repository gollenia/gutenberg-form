import { InspectorControls } from '@wordpress/block-editor';
import { Button, Icon, PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons.js';

const Inspector = ( props ) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			label,
			options,
			style,
			help,
			error,
			toggle,
		},
		setAttributes,
	} = props;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Data', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'gutenberg-form' ) }
					checked={ required }
					onChange={ ( value ) =>
						setAttributes( { required: value } )
					}
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Appearance', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<div>
					<label
						className="components-base-control__label"
						htmlFor="inspector-range-control-4"
					>
						{ __( 'Style', 'gutenberg-form' ) }
					</label>
					<div className="styleSelector">
						<Button
							onClick={ () => setAttributes( { toggle: false } ) }
							className={ ! toggle ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.checkbox }
							/>
							<div>{ __( 'Box', 'gutenberg-form' ) }</div>
						</Button>
						<Button
							onClick={ () => setAttributes( { toggle: true } ) }
							className={ toggle ? 'active' : '' }
						>
							<Icon
								size="64"
								className="icon"
								icon={ icons.toggle }
							/>
							<div>{ __( 'Toggle', 'gutenberg-form' ) }</div>
						</Button>
					</div>
				</div>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
