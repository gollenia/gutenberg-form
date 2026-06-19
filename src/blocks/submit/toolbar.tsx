import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

type SubmitToolbarProps = {
	attributes: { alignment?: string };
	setAttributes: (attributes: { alignment?: string }) => void;
};

const Toolbar = ({
	attributes: { alignment },
	setAttributes,
}: SubmitToolbarProps) => {
	return (
		<BlockControls>
			<AlignmentToolbar
				value={alignment}
				onChange={(value) => setAttributes({ alignment: value ?? undefined })}
			/>
		</BlockControls>
	);
};

export default Toolbar;
