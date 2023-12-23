import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const Toolbar = (props) => {
	const {
		attributes: { alignment },
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<AlignmentToolbar
				value={alignment}
				onChange={(value) => setAttributes({ alignment: value })}
			/>
		</BlockControls>
	);
};

export default Toolbar;
