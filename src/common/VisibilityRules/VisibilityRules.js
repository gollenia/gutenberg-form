import { useSelect } from '@wordpress/data';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const allowedBlocks = [
	'gutenberg-form/select',
	'gutenberg-form/radio',
	'gutenberg-form/checkbox',
];

const checkboxValueOptions = [
	{ label: __('Checked', 'gutenberg-form'), value: 'checked' },
	{ label: __('Unchecked', 'gutenberg-form'), value: 'unchecked' },
];

const getFieldKind = (block) => {
	if (block.name === 'gutenberg-form/checkbox') {
		return 'checkbox';
	}

	if (block.name === 'gutenberg-form/select') {
		return 'select';
	}

	if (block.name === 'gutenberg-form/radio') {
		return 'radio';
	}

	return 'text';
};

const VisibilityRules = ({ clientId, visibilityRule, onChange }) => {
	const availableFields = useSelect(
		(select) => {
			const rootClientId =
				select('core/block-editor').getBlockRootClientId(clientId);
			const siblingBlocks =
				select('core/block-editor').getBlocks(rootClientId) ?? [];

				return siblingBlocks
					.filter((block) => block.clientId !== clientId)
					.filter((block) => allowedBlocks.includes(block.name))
					.map((block) => ({
						kind: getFieldKind(block),
						label:
							block.attributes.label ||
							block.attributes.name ||
							block.name.replace('gutenberg-form/', ''),
						value: block.attributes.name || '',
						options: Array.isArray(block.attributes.options)
							? block.attributes.options
							: [],
					}))
					.filter((field) => field.value !== '');
			},
			[clientId]
		);

	const selectedField =
		availableFields.find((field) => field.value === visibilityRule?.field) ??
		null;

	const fieldOptions = [
		{ label: __('Always show', 'gutenberg-form'), value: '' },
		...availableFields,
	];

	const operatorOptions = [
		{ label: __('Equals', 'gutenberg-form'), value: 'equals' },
		{ label: __('Does not equal', 'gutenberg-form'), value: 'not_equals' },
		{ label: __('Is not empty', 'gutenberg-form'), value: 'not_empty' },
	];

	const valueOptions =
		selectedField?.kind === 'checkbox'
			? checkboxValueOptions
			: (selectedField?.options ?? []).map((option) => ({
					label: option,
					value: option,
				}));

	const handleFieldChange = (field) => {
		if (!field) {
			onChange(null);
			return;
		}

		onChange({
			field,
			operator: visibilityRule?.operator ?? 'equals',
			value: visibilityRule?.value ?? '',
		});
	};

	const handleOperatorChange = (operator) => {
		if (!visibilityRule?.field) {
			return;
		}

		onChange({
			...visibilityRule,
			operator,
		});
	};

	const handleValueChange = (value) => {
		if (!visibilityRule?.field) {
			return;
		}

		onChange({
			...visibilityRule,
			value,
		});
	};

	return (
		<PanelBody title={__('Visibility', 'gutenberg-form')} initialOpen={false}>
			<SelectControl
				label={__('Depends on field', 'gutenberg-form')}
				value={visibilityRule?.field ?? ''}
				options={fieldOptions}
				onChange={handleFieldChange}
			/>
				<SelectControl
					label={__('Condition', 'gutenberg-form')}
					value={visibilityRule?.operator ?? 'equals'}
				options={operatorOptions}
				disabled={!visibilityRule?.field}
					onChange={handleOperatorChange}
				/>
				{visibilityRule?.operator !== 'not_empty' &&
				selectedField?.kind === 'checkbox' ? (
					<SelectControl
						label={__('Expected value', 'gutenberg-form')}
						value={visibilityRule?.value ?? 'checked'}
						options={checkboxValueOptions}
						disabled={!visibilityRule?.field}
						onChange={handleValueChange}
					/>
				) : null}
				{visibilityRule?.operator !== 'not_empty' &&
				(selectedField?.kind === 'select' || selectedField?.kind === 'radio') ? (
					<SelectControl
						label={__('Expected value', 'gutenberg-form')}
						value={visibilityRule?.value ?? ''}
						options={[
							{ label: __('Select value', 'gutenberg-form'), value: '' },
							...valueOptions,
						]}
						disabled={!visibilityRule?.field}
						onChange={handleValueChange}
					/>
				) : null}
				{visibilityRule?.operator !== 'not_empty' &&
				(!selectedField ||
					(selectedField.kind !== 'checkbox' &&
						selectedField.kind !== 'select' &&
						selectedField.kind !== 'radio')) ? (
					<TextControl
						label={__('Expected value', 'gutenberg-form')}
						value={visibilityRule?.value ?? ''}
					disabled={!visibilityRule?.field}
					onChange={handleValueChange}
				/>
			) : null}
		</PanelBody>
	);
};

export default VisibilityRules;
