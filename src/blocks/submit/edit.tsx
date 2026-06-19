import * as blockEditor from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icon from './icon';
import Inspector from './inspector';
import Toolbar from './toolbar';

const {
	getColorClassName,
	RichText,
	useBlockProps,
	withColors,
	__experimentalUseBorderProps: useBorderProps,
} = blockEditor as any;

type SubmitAttributes = {
	label: string;
	alignment?: string;
	buttonBackgroundColor?: string;
	buttonTextColor?: string;
	style?: {
		spacing?: {
			padding?: {
				left?: string;
				right?: string;
				top?: string;
				bottom?: string;
			};
		};
	};
};

type SubmitEditProps = {
	attributes: SubmitAttributes;
	setAttributes: (attributes: Partial<SubmitAttributes>) => void;
	buttonBackgroundColor?: { color?: string };
	buttonTextColor?: { color?: string };
	style?: SubmitAttributes['style'];
	clientId: string;
	[key: string]: unknown;
};

const SubmitEdit = (props: SubmitEditProps & Record<string, unknown>) => {
	const { label, alignment } = props.attributes;
	const { setAttributes } = props;

	const blockProps = useBlockProps({
		className: 'ctx:form-field ctx:form-field--6 ctx:form-submit',
	});

	const borderProps = useBorderProps(props.attributes as Record<string, unknown>);
	const buttonStyle = {
		...borderProps.style,
		backgroundColor: props.attributes.buttonBackgroundColor,
		color: props.attributes.buttonTextColor,
		paddingLeft: props.style?.spacing?.padding?.left ?? '1rem',
		paddingRight: props.style?.spacing?.padding?.right ?? '1rem',
		paddingTop: props.style?.spacing?.padding?.top ?? '0.6rem',
		paddingBottom: props.style?.spacing?.padding?.bottom ?? '0.6rem',
	};

	const buttonClasses = [
		'ctx:form-submit__button',
		getColorClassName(
			'background-color',
			props.attributes.buttonBackgroundColor,
		),
		getColorClassName('color', props.attributes.buttonTextColor),
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div {...blockProps}>
			<Toolbar {...props} />
			<Inspector {...props} />
			<div className="ctx:form-field__caption">
				<div className="ctx:form-field__info">
					<Icon icon={icon} />
					<div className="ctx:form-field__description">
						<span>{__('Submit button', 'gutenberg-form')}</span>
					</div>
				</div>
			</div>
			<div
				className="ctx:form-field__submit-wrapper"
				style={{ justifyContent: alignment }}
			>
				<RichText
					tagName="span"
					style={buttonStyle}
					className={buttonClasses}
					value={label}
					allowedFormats={[]}
					placeholder={__('Submit', 'gutenberg-form')}
					onChange={(value: string) => setAttributes({ label: value })}
				/>
			</div>
		</div>
	);
};

export default withColors({
	buttonBackgroundColor: 'button-background-color',
	buttonTextColor: 'button-text-color',
})(SubmitEdit) as typeof SubmitEdit;
