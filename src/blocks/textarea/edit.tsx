import {
	FieldHeader,
	useFieldName,
	useFieldProps,
	type VisibilityRule,
} from '../_shared';
import { TextareaControl } from '@wordpress/components';
import Inspector from './inspector';

type TextareaAttributes = {
	name: string;
	context: string;
	width: number;
	required: boolean;
	pattern?: string;
	label: string;
	placeholder: string;
	description: string;
	rows: number;
	visibilityRule?: VisibilityRule | null;
};

interface EditProps {
	attributes: TextareaAttributes;
	setAttributes: (attributes: Partial<TextareaAttributes>) => void;
	clientId: string;
}

const edit = (props: EditProps) => {
	const { attributes, setAttributes } = props;

	useFieldName(attributes, setAttributes);

	const blockProps = useFieldProps(attributes);

	return (
		<div {...blockProps}>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={props.clientId}
			/>
			<FieldHeader
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={props.clientId}
			/>

			<TextareaControl
				autoComplete="off"
				value={attributes.placeholder}
				rows={attributes.rows}
				onChange={(value) => setAttributes({ placeholder: value })}
			/>
		</div>
	);
};

export default edit;
