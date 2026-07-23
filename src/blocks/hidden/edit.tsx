import { useBlockProps } from '@wordpress/block-editor';
import { Flex, Icon, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import lockIcon from '../_shared/components/lockIcon';
import icon from './icon';
import Inspector from './inspector';

type HiddenAttributes = {
	label: string;
	name: string;
	defaulValue: string;
	valueType?: string;
	width?: number;
	required?: boolean;
	pattern?: string;
	help?: string;
	error?: string;
};

interface EditProps {
	attributes: HiddenAttributes;
	setAttributes: (attributes: Partial<HiddenAttributes>) => void;
}

const valueTypeOptions = [
	{ label: __('Select Type', 'gutenberg-form'), value: '' },
	{ label: __('Page ID', 'gutenberg-form'), value: 'page_id' },
	{ label: __('Security Token', 'gutenberg-form'), value: 'sectok' },
	{ label: __('User (if logged in)', 'gutenberg-form'), value: 'user_id' },
	{ label: __('Custom Value', 'gutenberg-form'), value: 'custom' },
];

const isValidFieldId = (name: string): boolean =>
	new RegExp('([a-zA-Z0-9_]){3,40}').test(name);

const Edit = ({ attributes, setAttributes }: EditProps) => {
	const { label, name, defaulValue, valueType = '' } = attributes;

	const blockProps = useBlockProps({
		className: [
			'ctx-form-field',
			!isValidFieldId(name) || label === '' ? 'ctx-form-field--error' : '',
		]
			.filter(Boolean)
			.join(' '),
	});

	return (
		<div {...blockProps}>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div className="ctx-form-field__caption">
				<div className="ctx-form-field__info">
					<Icon icon={icon} />
					<div className="ctx-form-field__description">
						<span>{__('Hidden field', 'gutenberg-form')}</span>
						<span className="ctx-form-field__label">
							{__('Label for the field', 'gutenberg-form')}
						</span>
					</div>
				</div>
				<div className="ctx-form-field__name">
					<span className="ctx-form-details__label--lock">
						{name} <Icon icon={lockIcon} size={14} />
					</span>
					{!isValidFieldId(name) ? (
						<span className="ctx-form-field__error-message">
							{__(
								'Please type in a unique itentifier for the field',
								'gutenberg-form',
							)}
						</span>
					) : (
						<span className="ctx-form-field__label">
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
						onChange={(value) => setAttributes({ valueType: value })}
						options={valueTypeOptions}
					/>
					{valueType === 'custom' && (
						<TextControl
							label={__('Custom Value', 'gutenberg-form')}
							value={defaulValue}
							onChange={(value) => setAttributes({ defaulValue: value })}
						/>
					)}
					{valueType === 'page_id' && (
						<span>
							{__(
								'Show the page where the form is submitted from',
								'gutenberg-form',
							)}
						</span>
					)}
					{valueType === 'sectok' && (
						<span>
							{__(
								'Add a security token to prevent spam',
								'gutenberg-form',
							)}
						</span>
					)}
					{valueType === 'user_id' && (
						<span>
							{__(
								'Show the user id of the user who submitted the form',
								'gutenberg-form',
							)}
						</span>
					)}
				</Flex>
			</form>
		</div>
	);
};

export default Edit;
