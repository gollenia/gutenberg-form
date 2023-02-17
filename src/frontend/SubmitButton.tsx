type Props = {
	label: string;
	width: number;
	alignment: 'left' | 'center' | 'right';
	disabled: boolean;
	status: string;
};

const SubmitButton = ( props: Props ) => {
	const { label, width, alignment, disabled, status } = props;

	const classes = [
		'flex',
		'grid__column--span-' + width,
		'flex--align-center',
		alignment == 'right' ? 'flex--justify-end' : '',
	].join( ' ' );

	const buttonClasses = [
		'button',
		status == 'LOADED' ? 'button--primary' : '',
		status == 'SUCCESS' ? 'button--icon button--success' : '',
		status == 'SUBMITTING'
			? 'button--icon button--primary button--icon-animated'
			: '',
	].join( ' ' );

	const buttonLabel = () => {
		if ( status == 'LOADED' ) return label;
		if ( status == 'SUCCESS' )
			return <i className="material-icons">done</i>;
		if ( status == 'SUBMITTING' )
			return <i className="material-icons">mail</i>;
		if ( status == 'ERROR' ) return <i className="material-icons">error</i>;
	};

	return (
		<div className={ classes }>
			<button
				className={ buttonClasses }
				type="submit"
				disabled={ disabled }
			>
				{ buttonLabel() }
			</button>
		</div>
	);
};

SubmitButton.defaultProps = {
	label: '',
	width: 6,
};

export default SubmitButton;
