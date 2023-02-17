type Props = {
	label: string;
	help: string;
	width: number;
	disabled: boolean;
	onChange: ( value: boolean ) => void;
};

const Checkbox = ( props: Props ) => {
	const { label, help, width, onChange, disabled } = props;

	const onChangeHandler = (
		event: React.ChangeEvent< HTMLInputElement >
	) => {
		onChange( event.target.checked );
	};

	const classes = [ 'checkbox', 'grid__column--span-' + width ].join( ' ' );

	return (
		<div className={ classes }>
			<label>
				<input
					type="checkbox"
					onChange={ onChangeHandler }
					disabled={ disabled }
				/>
				{ help }
			</label>
		</div>
	);
};

Checkbox.defaultProps = {
	label: '',
	help: '',
	width: 6,
};

export default Checkbox;
