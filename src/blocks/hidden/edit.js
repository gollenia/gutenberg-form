/**
 * Wordpress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Flex, Icon, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icon from './icon.js';
import Inspector from './inspector.js';
import lock from './lockIcon.js';

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = (props) => {
	const {
		attributes: { label, name, defaulValue, valueType },
		setAttributes,
	} = props;

	const valueTypeOptions = [
		{
			label: __('Select Type', 'gutenberg-form'),
			value: '',
		},
		{
			label: __('Page ID', 'gutenberg-form'),
			value: 'page_id',
		},
		{
			label: __('Security Token', 'gutenberg-form'),
			value: 'sectok',
		},
		{
			label: __('User (if logged in)', 'gutenberg-form'),
			value: 'user_id',
		},
		{
			label: __('Custom Value', 'gutenberg-form'),
			value: 'custom',
		},
	];

	
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
							{__('Hidden field', 'gutenberg-form')}
						</span>
						<span className="ctx:form-field__label">
							{__('Label for the field', 'gutenberg-form')}
						</span>
					</div>
				</div>
				<div className="ctx:form-field__name">
					{!lockFieldId && (
						<span>{ valueTypeOptions[</span>
					)}
					
					<span className="ctx:form-details__label--lock">
						{name} <Icon icon={lock} size={14} />
					</span>
					
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
			<form>
				<Flex justify="flex-start">
					<SelectControl
						label={__('Value Type', 'gutenberg-form')}
						value={valueType}
						onChange={(value) =>
							setAttributes({ valueType: value })
						}
						options={valueTypeOptions}
					/>
					{valueType === 'custom' && (
						<TextControl
							label={__('Custom Value', 'gutenberg-form')}
							value={defaulValue}
							onChange={(value) =>
								setAttributes({ defaulValue: value })
							}
						/>
					)}
					{valueType === 'page_id' && (
						<span>
							{__(
								'Show the page where the form is submitted from',
								'gutenberg-form'
							)}
						</span>
					)}
					{valueType === 'sectok' && (
						<span>
							{__(
								'Add a security token to prevent spam',
								'gutenberg-form'
							)}
						</span>
					)}
					{valueType === 'user_id' && (
						<span>
							{__(
								'Show the user id of the user who submitted the form',
								'gutenberg-form'
							)}
						</span>
					)}
				</Flex>
			</form>
		</div>
	);
};

export default edit;
