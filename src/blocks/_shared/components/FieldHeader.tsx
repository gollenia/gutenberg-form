import { RichText } from '@wordpress/block-editor';
import { Flex, FlexItem, Icon, type IconType } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { chipStyleForContext } from '../utils/editor';
import { isValidLabel } from '../utils/validation';

type FieldHeaderAttributes = {
	required: boolean;
	label: string;
	name: string;
	context?: string;
};

interface FieldHeaderProps {
	attributes: FieldHeaderAttributes;
	setAttributes: (attributes: Partial<FieldHeaderAttributes>) => void;
	clientId: string;
	icon?: IconType | null;
	helpText?: string | null;
}

const FieldHeader = ({
	attributes,
	setAttributes,
	icon = null,
}: FieldHeaderProps) => {
	const { label, required, context } = attributes;

	const contextStyle = context ? chipStyleForContext(context) : undefined;

	const isLabelValid = isValidLabel(label);

	return (
		<Flex
			align="center"
			justify="flex-start"
			className="components-placeholder__label"
		>
			{icon && <Icon icon={icon} width={24} height={24} />}
			<FlexItem>
				<RichText
					tagName="span"
					className={`ctx:label-input ${!isLabelValid ? 'ctx:input-error' : ''}`}
					value={label}
					placeholder={__('Enter label here...', 'gutenberg-form')}
					onChange={(value) => setAttributes({ label: value })}
					allowedFormats={[]}
				/>
				<span>{required ? '*' : ''}</span>
			</FlexItem>
			{context && (
				<FlexItem>
					<span
						className="context-slug"
						style={{
							...contextStyle,
							paddingLeft: '4px',
							paddingRight: '4px',
							paddingTop: '1px',
							paddingBottom: '3px',
							borderRadius: '4px',
						}}
					>
						{context}
					</span>
				</FlexItem>
			)}
		</Flex>
	);
};

export default FieldHeader;
