import { InspectorControls } from '@wordpress/block-editor';
import {
	CheckboxControl,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import dateDiff from './dateDiff';

const Inspector = ( props ) => {
	const {
		attributes: { width, required, min, max, help, error },
		setAttributes,
	} = props;

	const [ referenceDate, setReferenceDate ] = useState( Date() );

	const minAge = dateDiff( min, referenceDate );
	const maxAge = dateDiff( max, referenceDate );

	const ageInfo = () => {
		if ( minAge === 0 && maxAge !== 0 ) {
			return `${ __( 'at best', 'gutenberg-form' ) } ${
				maxAge.result
			} }`;
		}
		if ( minAge !== 0 && maxAge === 0 ) {
			return `${ __( 'at least', 'gutenberg-form' ) } ${
				minAge.result
			} }`;
		}
		if ( minAge === maxAge ) {
			return `${ minAge.result }`;
		}
		return (
			<>
				{ __( 'from', 'gutenberg-form' ) } { maxAge.result }
				<br />
				{ __( 'to', 'gutenberg-form' ) } { minAge.result }
			</>
		);
	};

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

				<CheckboxControl
					label={ __( 'Help', 'gutenberg-form' ) }
					help={ __( 'Treat as birthday', 'gutenberg-form' ) }
					checked={ help }
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
				<TextControl
					label={ __( 'Lowest Date', 'gutenberg-form' ) }
					help={ __(
						'e.g. maximal age for an attendee',
						'gutenberg-form'
					) }
					value={ min }
					onChange={ ( value ) => setAttributes( { min: value } ) }
					type="date"
				/>
				<TextControl
					label={ __( 'Highest Date', 'gutenberg-form' ) }
					help={ __(
						'e.g. minimal age for an attendee',
						'gutenberg-form'
					) }
					value={ max }
					onChange={ ( value ) => setAttributes( { max: value } ) }
					type="date"
				/>
				<p className="age-info">
					<TextControl
						label={ __( 'Reference Date', 'gutenberg-form' ) }
						help={ __( 'Only for testing', 'gutenberg-form' ) }
						value={ referenceDate }
						onChange={ ( value ) => {
							setReferenceDate( value );
						} }
						type="date"
					/>
					{ ageInfo() }
				</p>
			</PanelBody>
			<PanelBody
				title={ __( 'Appearance', 'gutenberg-form' ) }
				initialOpen={ true }
			>
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
