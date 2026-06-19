import { Button, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { lazy, Suspense, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import icons from '../../blocks/mail-editor/icons';

const coreData = (globalThis as any).wp?.coreData;
const useEntityProp = coreData?.useEntityProp as
	| ((kind: string, name: string, property: string) => [Record<string, unknown>, (meta: Record<string, unknown>) => void])
	| undefined;

const Admin = lazy(() => import('../../blocks/mail-editor/admin'));
const User = lazy(() => import('../../blocks/mail-editor/user'));

type BlockNode = {
	name: string;
	attributes: {
		label?: string;
		name?: string;
	};
	innerBlocks?: BlockNode[];
};

type AvailableField = {
	label: string;
	value: string;
	type: string;
};

const EmailSettings = () => {
	const [adminVisible, setAdminVisible] = useState(false);
	const [userVisible, setUserVisible] = useState(false);
	const postType = useSelect(
		(select) => (select('core/editor') as any).getCurrentPostType() as string,
		[],
	);
	const formContainers = useSelect(
		(select) =>
			((select('core/block-editor') as any).getBlocks() as BlockNode[]).filter(
				(block) => block.name === 'gutenberg-form/form-container',
			),
		[],
	);
	const [meta, setMeta] =
		useEntityProp?.('postType', postType || 'post', 'meta') ??
		([{}, () => null] as [
			Record<string, unknown>,
			(meta: Record<string, unknown>) => void,
		]);

	if (postType !== 'gbf-form') {
		return null;
	}

	const insertCode = (
		event: React.MouseEvent<HTMLElement>,
		code: string,
	): void => {
		event.preventDefault();
		event.stopPropagation();

		const selection = window.getSelection();
		if (!selection || !selection.getRangeAt || selection.rangeCount === 0) {
			return;
		}

		const range = selection.getRangeAt(0);
		range.deleteContents();
		range.insertNode(document.createTextNode(code));
		range.collapse(false);
	};

	const getAvailableFields = (): AvailableField[] => {
		const formContainer = formContainers[0];
		const formFieldsBlock = formContainer?.innerBlocks?.find(
			(block) => block.name === 'gutenberg-form/form-fields',
		);
		const fields = formFieldsBlock?.innerBlocks ?? [];
		const availableFields: AvailableField[] = [
			{
				label: __('All fields', 'gutenberg-form'),
				value: 'all_fields',
				type: 'generic',
			},
			{
				label: __('Form title', 'gutenberg-form'),
				value: 'form_name',
				type: 'generic',
			},
			{
				label: __('Page title', 'gutenberg-form'),
				value: 'page_title',
				type: 'generic',
			},
			{
				label: __('Page URL', 'gutenberg-form'),
				value: 'page_url',
				type: 'generic',
			},
		];

		fields.forEach((field) => {
			availableFields.push({
				label: field.attributes.label ?? field.attributes.name ?? '',
				value: field.attributes.name ?? '',
				type: 'field',
			});
		});

		return availableFields;
	};

	return (
		<>
			<PluginDocumentSettingPanel
				name="email-settings"
				title={__('Emails', 'gutenberg-form')}
				icon={icons.icon}
			>
				<p>
					{__(
						'Configure the admin and visitor emails for this form.',
						'gutenberg-form',
					)}
				</p>
				<Button
					variant="primary"
					icon={icons.admin}
					onClick={() => setAdminVisible(true)}
				>
					{__('Edit admin mail', 'gutenberg-form')}
				</Button>
				<Button
					variant="secondary"
					icon={icons.user}
					onClick={() => setUserVisible(true)}
				>
					{__('Edit user mail', 'gutenberg-form')}
				</Button>
			</PluginDocumentSettingPanel>
			{adminVisible || userVisible ? (
				<Suspense fallback={<Spinner />}>
					<Admin
						visible={adminVisible}
					setVisible={setAdminVisible}
					meta={meta}
					setMeta={setMeta}
					getAvailableFields={getAvailableFields}
					insertCode={insertCode}
				/>
					<User
						visible={userVisible}
						setVisible={setUserVisible}
						meta={meta}
						setMeta={setMeta}
						getAvailableFields={getAvailableFields}
						insertCode={insertCode}
					/>
				</Suspense>
			) : null}
		</>
	);
};

export default {
	name: 'email-settings',
	settings: { render: EmailSettings, icon: icons.icon },
};
