import { RichText } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	Modal,
	TextControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const Admin = (props) => {
	const {
		meta,
		setMeta,
		visible,
		setVisible,
		getAvailableFields,
		insertCode,
	} = props;

	console.log(visible);

	return (
		<>
			{visible && (
				<Modal
					className=""
					title={__('Admin Mail', 'gutenberg-form')}
					onRequestClose={() => setVisible(!visible)}
				>
					<TextControl
						label={__('Subject', 'gutenberg-form')}
						value={meta._mail_subject}
						placeholder={__('', 'gutenberg-form')}
						onChange={(value) => {
							setMeta({
								...meta,
								_mail_subject: value,
							});
						}}
					/>
					<TextControl
						label={__('Recipient', 'gutenberg-form')}
						placeholder={__('', 'gutenberg-form')}
						value={meta._mail_recipients}
						onChange={(value) => {
							setMeta({
								...meta,
								_mail_recipients: value,
							});
						}}
					/>
					<CheckboxControl
						label={__(
							'Send a copy to the site admin',
							'gutenberg-form'
						)}
						checked={meta._send_to_admin}
						onChange={(value) => {
							setMeta({
								...meta,
								_send_to_admin: value,
							});
						}}
					/>

					<label
						class="ctx:mail-editor-label"
						for="inspector-text-control-1"
					>
						{__('Mail Content', 'gutenberg-form')}
					</label>
					<RichText
						tagName="div"
						className="ctx:mail-editor-code code"
						value={meta._mail_template}
						onChange={(value) =>
							setMeta({
								...meta,
								_mail_template: value,
							})
						}
					/>

					<div className="ctx:mail-editor-fields">
						{getAvailableFields().map((field) => (
							<span
								className={
									'ctx:mail-editor-field ctx:mail-editor-field-' +
									field.type
								}
								onMouseDown={(event) => {
									event.preventDefault();
									event.stopPropagation();
								}}
								onMouseUp={(event) => {
									insertCode(event, `{${field.value}}`);
								}}
							>
								{field.label}
							</span>
						))}
					</div>
					<div className="ctx:mail-editor-footer">
						<Button
							variant="primary"
							onClick={() => setVisible(!visible)}
						>
							{__('Save', 'gutenberg-form')}
						</Button>
					</div>
				</Modal>
			)}
		</>
	);
};

export default Admin;
