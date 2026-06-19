import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import useOtherFormFields from '../hooks/useOtherFormFields';

type VisibilityRuleValue = 'checked' | 'unchecked';

export type VisibilityRule = Readonly<{
	field: string;
	value: VisibilityRuleValue;
}>;

interface VisibilityRulesProps {
	clientId: string;
	visibilityRule: VisibilityRule | null;
	onChange: (rule: VisibilityRule | null) => void;
}

const allowedFieldTypes = [
	'gutenberg-form/checkbox',
	'gutenberg-form/radio',
	'gutenberg-form/select',
];

const VisibilityRules = ({
	clientId,
	visibilityRule,
	onChange,
}: VisibilityRulesProps): React.ReactElement => {
	const availableFields = [
		{ label: __('Select a field', 'gutenberg-form'), value: '' },
		...useOtherFormFields(clientId).filter((field) =>
			allowedFieldTypes.includes(field.type),
		),
	];

	const handleFieldChange = (field: string): void => {
		onChange(
			field === ''
				? null
				: { field, value: visibilityRule?.value ?? 'checked' },
		);
	};

	const handleValueChange = (value: string): void => {
		if (
			!visibilityRule?.field ||
			(value !== 'checked' && value !== 'unchecked')
		) {
			return;
		}
		onChange({ field: visibilityRule.field, value });
	};

	return (
		<>
			<SelectControl
				label={__('Field', 'gutenberg-form')}
				value={visibilityRule?.field ?? ''}
				options={availableFields}
				onChange={handleFieldChange}
			/>
			<SelectControl
				label={__('Value', 'gutenberg-form')}
				value={visibilityRule?.value ?? 'checked'}
				disabled={!visibilityRule?.field}
				options={[
					{ label: __('Checked', 'gutenberg-form'), value: 'checked' },
					{ label: __('Unchecked', 'gutenberg-form'), value: 'unchecked' },
				]}
				onChange={handleValueChange}
			/>
		</>
	);
};

export default VisibilityRules;
