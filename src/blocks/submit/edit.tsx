import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { FieldHeader, useFieldName, useFieldProps } from '../_shared';
import icon from './icon';
import Inspector from './inspector';
import Toolbar from './toolbar';

type SubmitAttributes = {
	label: string;
	name: string;
	alignment?: string;
};

type SubmitEditProps = {
	attributes: SubmitAttributes;
	setAttributes: (attributes: Partial<SubmitAttributes>) => void;
	clientId: string;
	[key: string]: unknown;
};

const SubmitEdit = (props: SubmitEditProps & Record<string, unknown>) => {
	const { attributes, setAttributes } = props;
	const { label } = attributes;

	useFieldName(attributes, setAttributes);

	const blockProps = useFieldProps(attributes);

	return (
		<div {...blockProps}>
			<Toolbar {...props} />
			<Inspector {...props} />
			<FieldHeader
				attributes={props.attributes}
				setAttributes={props.setAttributes}
				clientId={props.clientId}
				icon={icon}
				onAlignmentChange={(value: string) =>
					props.setAttributes({ alignment: value })
				}
			/>
			<div
				style={{
					textAlign: attributes.alignment as 'left' | 'center' | 'right',
				}}
				className="gutenberg-form-submit-button"
			>
				<RichText
					tagName="span"
					value={label}
					allowedFormats={[]}
					placeholder={__('Submit', 'gutenberg-form')}
					onChange={(value: string) => props.setAttributes({ label: value })}
				/>
			</div>
		</div>
	);
};

export default SubmitEdit;
