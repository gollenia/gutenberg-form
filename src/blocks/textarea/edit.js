/**
 * Wordpress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import icon from './icon.js';
import Inspector from './inspector.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = (props) => {
	const {
		attributes: {
			width,
			required,
			pattern,
			placeholder,
			label,
			name,
			rows,
			help,
			error,
		},
		setAttributes,
	} = props;

	const validFieldId = () => {
		const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
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
			validFieldId() == false || label === ''
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
					<Icon icon={icon} />
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
							{__('Label for the field', 'gutenberg-form')}
						</span>
					</div>
				</div>

				<div className="ctx:form-field__name">
					<RichText
						tagName="p"
						className="ctx:form-details__label"
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

			<textarea
				rows={rows}
				autocomplete="off"
				type="text"
				onChange={(event) =>
					setAttributes({ placeholder: event.target.value })
				}
			>
				{placeholder}
			</textarea>
		</div>
	);
};

export default edit;
