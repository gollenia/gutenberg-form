import React, { useState } from 'react';

type MailInputProps = {
	label: string;
	placeholder: number;
	name: string;
	required: boolean;
	width: number;
	min: number;
	max: number;
	range: boolean;
	disabled: boolean;
	style: 'input' | 'range';
	onChange: ( value: string ) => void;
};

const MailInput = ( props: MailInputProps ) => {
	const {
		label,
		placeholder,
		name,
		required,
		width,
		min,
		max,
		disabled,
		range,
		style,
		onChange,
	} = props;

	const [ rangeValue, setRangeValue ] = useState( placeholder );

	const onChangeHandler = (
		event: React.ChangeEvent< HTMLInputElement >
	) => {
		event.target.style.backgroundSize =
			( ( parseInt( event.target.value ) - min ) * 100 ) / ( max - min ) +
			'% 100%';
		setRangeValue( parseInt( event.target.value ) );
		onChange( event.target.value );
	};

	const classes = [
		range ? 'range' : 'input',
		'grid__column--span-' + width,
		required ? 'input--required' : '',
	].join( ' ' );
	console.log( style );
	return (
		<div className={ classes }>
			<label>{ label }</label>

			<input
				value={ rangeValue }
				name={ name }
				required={ required }
				disabled={ disabled }
				type={ range ? 'range' : 'number' }
				max={ max }
				min={ min }
				onChange={ onChangeHandler }
			/>
			{ range && <span className="range__value">{ rangeValue }</span> }
		</div>
	);
};

MailInput.defaultProps = {
	label: '',
	placeholder: 0,
	name: '',
	required: false,
	width: 6,
	min: 0,
	max: 100,
	style: 'input',
};

export default MailInput;
