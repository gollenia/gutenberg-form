import { CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import TemplateEditor from '../../common/MailEditor/TemplateEditor';

type MailMeta = {
	_user_mail_enabled?: boolean;
	_user_mail_subject?: string;
	_user_mail_template?: string;
	[key: string]: unknown;
};

type AvailableField = {
	label: string;
	value: string;
	type: string;
};

interface UserProps {
	meta: MailMeta;
	setMeta: (meta: MailMeta) => void;
	visible: boolean;
	setVisible: (visible: boolean) => void;
	getAvailableFields: () => AvailableField[];
}

const User = ({
	meta,
	setMeta,
	visible,
	setVisible,
	getAvailableFields,
}: UserProps) => {
	if (!visible) {
		return null;
	}

	return (
		<TemplateEditor
			title={__('User Mail', 'gutenberg-form')}
			visible={visible}
			setVisible={setVisible}
			subject={(meta._user_mail_subject as string) ?? ''}
			onSubjectChange={(value) =>
				setMeta({
					...meta,
					_user_mail_subject: value,
				})
			}
			body={(meta._user_mail_template as string) ?? ''}
			onBodyChange={(value) =>
				setMeta({
					...meta,
					_user_mail_template: value,
				})
			}
			availableFields={getAvailableFields()}
			extraControls={
				<CheckboxControl
					label={__('Send mail to website visitor', 'gutenberg-form')}
					checked={Boolean(meta._user_mail_enabled)}
					onChange={(value) =>
						setMeta({
							...meta,
							_user_mail_enabled: value,
						})
					}
				/>
			}
		/>
	);
};

export default User;
