type Props = {
	settings: {
		content: string;
		width: string;
	};
};

const HtmlBlock = ( props: Props ) => {
	const { settings } = props;
	const classes = [
		'core-block',
		'grid__column--span-' + settings.width,
	].join( ' ' );

	return (
		<div
			className={ classes }
			dangerouslySetInnerHTML={ { __html: settings.content } }
		/>
	);
};

export default HtmlBlock;
