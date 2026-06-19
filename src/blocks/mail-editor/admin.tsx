import { CheckboxControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import TemplateEditor from '../../common/MailEditor/TemplateEditor';

type MailMeta = {
	_mail_subject?: string;
	_mail_recipients?: string;
	_send_to_admin?: boolean;
	_mail_template?: string;
	[key: string]: unknown;
};

type AvailableField = {
	label: string;
	value: string;
	type: string;
};

interface AdminProps {
	meta: MailMeta;
	setMeta: (meta: MailMeta) => void;
	visible: boolean;
	setVisible: (visible: boolean) => void;
	getAvailableFields: () => AvailableField[];
}

const Admin = ({
	meta,
	setMeta,
	visible,
	setVisible,
	getAvailableFields,
}: AdminProps) => {
	if (!visible) {
		return null;
	}

	return (
		<TemplateEditor
			title={__('Admin Mail', 'gutenberg-form')}
			visible={visible}
			setVisible={setVisible}
			subject={(meta._mail_subject as string) ?? ''}
			onSubjectChange={(value) =>
				setMeta({
					...meta,
					_mail_subject: value,
				})
			}
			body={(meta._mail_template as string) ?? ''}
			onBodyChange={(value) =>
				setMeta({
					...meta,
					_mail_template: value,
				})
			}
			availableFields={getAvailableFields()}
			extraControls={
				<>
					<TextControl
						label={__('Recipient', 'gutenberg-form')}
						placeholder={__('', 'gutenberg-form')}
						value={(meta._mail_recipients as string) ?? ''}
						onChange={(value: string) =>
							setMeta({
								...meta,
								_mail_recipients: value,
							})
						}
					/>
					<CheckboxControl
						label={__('Send a copy to the site admin', 'gutenberg-form')}
						checked={Boolean(meta._send_to_admin)}
						onChange={(value) =>
							setMeta({
								...meta,
								_send_to_admin: value,
							})
						}
					/>
				</>
			}
		/>
	);
};

export default Admin;
