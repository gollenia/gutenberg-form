import { useRef } from 'react';

export type ComboboxProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	options?: Array< string >;
	hasEmptyOption?: boolean;
	help: string;
	hint: string;
	disabled: boolean;
	multiple: boolean;
	customError: string;
	onChange: ( value: string ) => void;
};

const Combobox = ( props: ComboboxProps ) => {
	const {
		onChange,
		options,
		hasEmptyOption,
		help,
		hint,
		disabled,
		placeholder,
		multiple,
		required,
		label,
		name,
		width,
	} = props;

	const classes = [
		'ctx-form-field',
		'select',
		'input--width-' + width,
		props.required ? 'select--required' : '',
	].join( ' ' );

	const inputRef = useRef< HTMLSelectElement >( null );

	const onChangeHandler = ( event: any ) => {
		onChange( event.target.value );
	};

	return (
		<div className={ classes }>
			<label>{ label }</label>
			<select
				name={ name }
				required={ required }
				onChange={ onChangeHandler }
				autoComplete={ hint }
				disabled={ disabled }
				multiple={ multiple }
				defaultValue={ placeholder }
			>
				{ hasEmptyOption && (
					<option value="" disabled>
						{ help ?? 'Make a selection' }
					</option>
				) }
				{ options &&
					options.map( ( option, index ) => {
						return <option key={ index }>{ option }</option>;
					} ) }
			</select>
			{ ! inputRef?.current?.validity.valid && inputRef.current?.validationMessage && (
				<span className="input__error">{ inputRef.current?.validationMessage }</span>
			) }
		</div>
	);
};

Combobox.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	region: 'world',
};

export default Combobox;
