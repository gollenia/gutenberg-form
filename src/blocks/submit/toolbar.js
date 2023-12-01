import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const Toolbar = ( props ) => {
	const { meta, setMeta } = props;

	return (
		<BlockControls>
			<AlignmentToolbar
				value={ meta._form_submit_align }
				onChange={ ( value ) =>
					setMeta( { _form_submit_align: value } )
				}
			/>
		</BlockControls>
	);
};

export default Toolbar;
