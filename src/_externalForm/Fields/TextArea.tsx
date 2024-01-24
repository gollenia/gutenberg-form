import { useRef } from '@wordpress/element';

export type TextAreaProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	disabled: boolean;
	rows: number;
	onChange: ( value: string ) => void;
};

const TextArea = ( props: TextAreaProps ) => {
	const { label, placeholder, name, required, width, rows, disabled, onChange } = props;

	const textInputRef = useRef< HTMLTextAreaElement >( null );

	const onChangeHandler = ( event: any ) => {
		onChange( event.target.value );
	};

	const classes = [ 'ctx-form-field', 'textarea', 'input--width-' + width, required ? 'input--required' : '' ].join(
		' '
	);

	return (
		<div className={ classes }>
			<label>{ label }</label>
			<textarea
				name={ name }
				required={ required }
				disabled={ disabled }
				rows={ rows }
				ref={ textInputRef }
				placeholder={ placeholder }
				onChange={ onChangeHandler }
			></textarea>
			{ ! textInputRef?.current?.validity.valid && textInputRef.current?.validationMessage && (
				<span className="input__error">{ textInputRef.current?.validationMessage }</span>
			) }
		</div>
	);
};

TextArea.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	rows: 3,
};

export default TextArea;
