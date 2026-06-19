import { useBlockProps } from '@wordpress/block-editor';
import { ComboboxControl, ExternalLink, Icon } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import icon from './icon';

type FormBlockAttributes = {
	formPost: number;
};

type FormEntity = {
	id: number;
	title: { raw: string };
};

type FormSelectOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

interface EditProps {
	attributes: FormBlockAttributes;
	setAttributes: (attributes: Partial<FormBlockAttributes>) => void;
}

const Edit = ({ attributes: { formPost }, setAttributes }: EditProps) => {
	const blockProps = useBlockProps({
		className: 'ctx-form-placeholder',
	});

	const forms = useSelect(
		(selectFn): FormSelectOption[] => {
			const rawData = (selectFn('core') as any).getEntityRecords('postType', 'gbf-form', {
				per_page: -1,
			}) as FormEntity[] | null;

			if (!rawData) {
				return [
					{
						value: '',
						label: __('No forms found', 'gutenberg-form'),
						disabled: true,
					},
				];
			}

			return rawData.map((form) => ({
				value: String(form.id),
				label: form.title.raw,
			}));
		},
		[],
	);

	return (
		<div {...blockProps}>
			<div>
				<div className="components-placeholder__label">
					<Icon icon={icon} />
					{__('Select a form', 'gutenberg-form')}
				</div>
				<form className="components-placeholder__fieldset">
					<ComboboxControl
						value={String(formPost || '')}
						onChange={(value) =>
							setAttributes({ formPost: value ? Number(value) : 0 })
						}
						placeholder={__('Select a form', 'gutenberg-form')}
						options={forms}
					/>
				</form>
			</div>

			<div className="components-placeholder__learn-more">
				<ExternalLink href="/wp-admin/edit.php?post_type=gbf-form#general">
					{__('Create a new form', 'gutenberg-form')}
				</ExternalLink>
			</div>
		</div>
	);
};

export default Edit;
