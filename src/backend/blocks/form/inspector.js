import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Inspector = ( props ) => {
	const {
		setAttributes,
		attributes: { buttonIcon, buttonIconSuffix, bookNow },
	} = props;

	const forms = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'gbf-form' );
	}, [] );

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Button Settings', 'gutenberg-form' ) }
				initialOpen={ true }
			></PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
