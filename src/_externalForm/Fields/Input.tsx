import { useRef, useState } from '@wordpress/element';

type InputFieldTypes =
	| 'text'
	| 'email'
	| 'url'
	| 'color'
	| 'tel'
	| 'password'
	| 'search'
	| 'datetime-local'
	| 'select'
	| 'radio'
	| 'textarea'
	| 'checkbox'
	| 'country'
	| 'html'
	| 'hidden'
	| 'range'
	| 'file'
	| 'toggle'
	| 'combobox'
	| 'options'
	| 'date'
	| 'week'
	| 'month'
	| 'number'
	| 'year';

type InputProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	autoComplete: string;
	pattern: string | null;
	width: number;
	disabled: boolean;
	customError: string;
	defaultValue: string;
	min?: number;
	max?: number;
	type: InputFieldTypes;
	onChange: ( value: any ) => void;
};

const TextInput = ( props: InputProps ) => {
	const [ touched, setTouched ] = useState( false );
	const inputRef = useRef< HTMLInputElement >( null );

	const { label, required, width, onChange } = props;

	const onChangeHandler = ( event: any ) => {
		onChange( event.target.value );
	};

	const setInvalidity = ( event: any ) => {
		if ( ! props.customError ) return;
		event.target.setCustomValidity( props.customError );
	};

	const classes = [
		'ctx-form-field',
		'input',
		'input--width-' + width,
		required ? 'input--required' : '',
		! inputRef?.current?.validity.valid && touched ? 'error' : '',
	].join( ' ' );

	return (
		<div className={ classes }>
			<label>{ label }</label>
			<input
				placeholder={ props.placeholder }
				name={ props.name }
				required={ required }
				onBlur={ () => setTouched( true ) }
				type={ props.type }
				autoComplete={ props.autoComplete }
				disabled={ props.disabled }
				pattern={ props.pattern ? props.pattern : undefined }
				defaultValue={ props.defaultValue }
				ref={ inputRef }
				onInvalid={ setInvalidity }
				onChange={ onChangeHandler }
			/>
			{ ! inputRef?.current?.validity.valid && touched && inputRef.current?.validationMessage && (
				<span className="error-message">{ inputRef.current?.validationMessage }</span>
			) }
		</div>
	);
};

TextInput.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	type: 'text',
	pattern: null,
};

export default TextInput;
export type { InputFieldTypes, InputProps };
