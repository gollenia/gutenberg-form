/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { CheckboxControl, Icon, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icons from './icons.js';
import Inspector from './inspector.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = (props) => {
	const {
		attributes: { width, name, help, placeholder, label, required, toggle },
		setAttributes,
	} = props;

	const validFieldId = () => {
		const validPattern = new RegExp('([a-zA-Z0-9_]){2,40}');
		return validPattern.test(name);
	};

	const setFieldId = (value) => {
		value = value.toLowerCase();
		value = value.replace(/\s/g, '-');
		setAttributes({ name: value.toLowerCase() });
	};

	const blockProps = useBlockProps({
		className: [
			'ctx:form-field',
			'ctx:form-field--' + width,
			validFieldId() == false || help === '' || label === ''
				? 'ctx:form-field--error'
				: '',
		]
			.filter(Boolean)
			.join(' '),
	});

	return (
		<div {...blockProps}>
			<Inspector {...props} />

			<div className="ctx:form-field__caption">
				<div className="ctx:form-field__info">
					<Icon icon={icons.checkbox} />
					<div className="ctx:form-field__description">
						<span>
							<RichText
								tagName="span"
								className="ctx:form-details__label"
								value={label}
								placeholder={__('Label', 'gutenberg-form')}
								onChange={(value) =>
									setAttributes({ label: value })
								}
							/>

							<span>{required ? '*' : ''}</span>
						</span>
						<span className="ctx:form-field__label">
							{__('Label (for emails)', 'gutenberg-form')}
						</span>
					</div>
				</div>

				<div className="ctx:form-field__name">
					<RichText
						tagName="p"
						className="ctx:form-details__label critical"
						value={name}
						placeholder={__('Slug', 'gutenberg-form')}
						onChange={(value) => setFieldId(value)}
					/>
					{validFieldId() == false && (
						<span className="ctx:form-field__error-message">
							{__(
								'Please type in a unique itentifier for the field',
								'gutenberg-form'
							)}
						</span>
					)}
					{validFieldId() && (
						<span className="ctx:form-field__label">
							{__('Unique identifier', 'gutenberg-form')}
						</span>
					)}
				</div>
			</div>

			<div className="label">
				{toggle ? (
					<ToggleControl
						checked={placeholder}
						onChange={(value) =>
							setAttributes({ placeholder: value })
						}
					/>
				) : (
					<CheckboxControl
						checked={placeholder}
						onChange={(value) =>
							setAttributes({ placeholder: value })
						}
					/>
				)}

				<RichText
					tagName="p"
					className="ctx:form-details__label critical"
					value={help}
					required
					placeholder={__(
						'What should your visitor say "yes" to?',
						'gutenberg-form'
					)}
					onChange={(value) => setAttributes({ help: value })}
				/>
			</div>
		</div>
	);
};

export default edit;
