
export type HTMLBlockProps = {
	content: string;
	width: number;
};

const HTMLBlock = ( props: HTMLBlockProps ) => {
	const { content, width } = props;
	const classes = [ 'core-block', 'ctx-form-field-w' + width, ].join( ' ' );

	return (
		<div
			className={ classes }
			dangerouslySetInnerHTML={ { __html: content } }
		/>
	);
};

export default HTMLBlock;
