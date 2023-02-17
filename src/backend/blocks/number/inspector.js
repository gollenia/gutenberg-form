import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	Icon,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from './icons.js';

const Inspector = ( props ) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			fieldid,
			label,
			name,
			help,
			error,
			range,
			min,
			max,
			step,

			placeholder,
		},
		setAttributes,
	} = props;

	const lockFieldId = [ 'first_name', 'last_name' ].includes( fieldid );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Data', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<ToggleControl
					label={ __( 'Required', 'gutenberg-form' ) }
					checked={ required }
					disabled={ lockFieldId }
					onChange={ ( value ) =>
						setAttributes( { required: value } )
					}
				/>

				<div className="ctx:form__panel-row">
					<NumberControl
						label={ __( 'Minimum value', 'gutenberg-form' ) }
						value={ min }
						onChange={ ( value ) => {
							if ( placeholder < min ) {
								setAttributes( { placeholder: value } );
							}
							setAttributes( { min: value } );
						} }
					/>
					<NumberControl
						label={ __( 'Maximum value', 'gutenberg-form' ) }
						value={ max }
						onChange={ ( value ) => {
							if ( placeholder > max ) {
								setAttributes( { placeholder: max } );
							}
							setAttributes( { max: value } );
						} }
					/>
				</div>
				<NumberControl
					label={ __( 'Step', 'gutenberg-form' ) }
					value={ step }
					max={ max }
					onChange={ ( value ) => setAttributes( { step: value } ) }
				/>
				<TextControl
					label={ __( 'Help', 'gutenberg-form' ) }
					help={ __(
						'Details about how to fill this field',
						'gutenberg-form'
					) }
					value={ help }
					onChange={ ( value ) => setAttributes( { help: value } ) }
				/>
				<TextControl
					label={ __( 'Error message', 'gutenberg-form' ) }
					help={ __(
						'Text to display when the user types in invalid or insufficient data',
						'gutenberg-form'
					) }
					value={ error }
					onChange={ ( value ) => setAttributes( { error: value } ) }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Appearance', 'gutenberg-form' ) }
				initialOpen={ true }
			>
				<div className="styleSelector">
					<Button
						onClick={ () => setAttributes( { range: false } ) }
						className={ range ? '' : 'active' }
					>
						<Icon
							size="40"
							className="icon"
							icon={ icons.number }
						/>
						<span>{ __( 'Input', 'gutenberg-form' ) }</span>
					</Button>
					<Button
						onClick={ () => setAttributes( { range: true } ) }
						className={ range ? 'active' : '' }
					>
						<Icon size="40" className="icon" icon={ icons.range } />

						<span>{ __( 'Range', 'gutenberg-form' ) }</span>
					</Button>
				</div>

				<RangeControl
					label={ __( 'Width', 'gutenberg-form' ) }
					help={ __(
						'Number of columns the input field will occupy',
						'gutenberg-form'
					) }
					value={ width }
					max={ 6 }
					min={ 1 }
					onChange={ ( value ) => setAttributes( { width: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
