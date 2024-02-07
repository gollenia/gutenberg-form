import { useRef } from '@wordpress/element';

type Props = {
	label: string;
	width: number;
	disabled: boolean;
	required: boolean;
	defaultChecked: boolean;
	type: 'checkbox' | 'toggle';
	customError: string;
	value: boolean;
	help: string;
	onChange: (value: any) => void;
};

const Checkbox = (props: Props) => {
	const { label, width, onChange, type, value, help } = props;
	console.log('Checkbox', props);
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeHandler = (event: any) => {
		onChange(event.target.checked);
	};

	const setInvalidity = (event: any) => {
		if (!props.customError) return;
		event.target.setCustomValidity(props.customError);
	};

	const reset = () => {
		if (!inputRef.current) return;
		inputRef.current.checked = false;
	};

	const toggle = type === 'toggle';

	const classes = [
		'ctx-form-field',
		toggle ? 'toggle' : 'checkbox',
		'input--width-' + width,
	].join(' ');

	return (
		<div className={classes}>
			<label>
				<div className="toggle__control">
					<input
						disabled={props.disabled}
						required={props.required}
						ref={inputRef}
						checked={value}
						type="checkbox"
						onChange={onChangeHandler}
						onInvalid={setInvalidity}
					/>
					{toggle && <span className="toggle__switch"></span>}
				</div>
				<span>{help ?? label}</span>
			</label>
			{!inputRef?.current?.validity.valid &&
				inputRef.current?.validationMessage && (
					<span className="input__error">
						{inputRef.current?.validationMessage}
					</span>
				)}
		</div>
	);
};

Checkbox.defaultProps = {
	label: '',
	help: '',
	width: 6,
	disabled: false,
	required: false,
	defaultChecked: false,
	type: 'checkbox',
};

export default Checkbox;
export type { Props as CheckboxProps };
