/**
 * Wordpress dependencies
 */
import {
	RichText,
	getColorClassName,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	withColors,
} from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icon from './icon.js';
import Inspector from './inspector.js';
import Toolbar from './toolbar.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const SubmitEdit = (props) => {
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostType(),
		[]
	);

	const { label, alignment } = props.attributes;
	const { setAttributes } = props;

	const blockProps = useBlockProps({
		className: ['ctx:form-field', 'ctx:form-field--6', 'ctx:form-submit']
			.filter(Boolean)
			.join(' '),
	});

	const borderProps = useBorderProps(props.attributes);
	const buttonStyle = {
		...borderProps.style,
		backgroundColor: props.attributes.buttonBackgroundColor,
		color: props.attributes.buttonTextColor,
		paddingLeft: props.style?.spacing?.padding?.left ?? '1rem',
		paddingRight: props.style?.spacing?.padding?.right ?? '1rem',
		paddingTop: props.style?.spacing?.padding?.top ?? '0.6rem',
		paddingBottom: props.style?.spacing?.padding?.bottom ?? '0.6rem',
	};

	const test = getColorClassName(
		'background-color',
		props.attributes.backgroundColor
	);

	const buttonClasses = [
		'ctx:form-submit__button',
		getColorClassName(
			'background-color',
			props.attributes.buttonBackgroundColor
		),
		getColorClassName('color', props.attributes.buttonTextColor),
	]
		.filter(Boolean)
		.join(' ');
	console.log(props);

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
					placeholder={__('Label', 'gutenberg-form')}
					onChange={(value) => setAttributes({ label: value })}
				/>
			</div>
		</div>
	);
};

export default compose([
	withColors({
		buttonBackgroundColor: 'button-background-color',
		buttonTextColor: 'button-text-color',
	}),
])(SubmitEdit);
