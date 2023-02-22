import { RichText } from '@wordpress/block-editor';
import {
	Button,
	CheckboxControl,
	Icon,
	TextControl,
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const User = ( props ) => {
	const {
		meta,
		setMeta,
		visible,
		setVisible,
		getAvailableFields,
		insertCode,
	} = props;

	console.log( meta );

	return (
		<>
			{ visible && (
				<div className="ctx:mail-editor-backdrop">
					<div className="ctx:mail-editor-window">
						<div className="ctx:mail-editor-title">
							<b className="ctx:title-bar-text">
								{ __( 'User Mail', 'gutenberg-form' ) }
							</b>
							<Button
								className="ctx:close-buttin"
								onClick={ () => setVisible( ! visible ) }
							>
								<Icon icon="no-alt" />
							</Button>
						</div>

						<div className="ctx:mail-editor-header">
							<CheckboxControl
								label={ __(
									'Send mail to website visitor',
									'gutenberg-form'
								) }
								checked={ meta._user_mail_enabled }
								onChange={ ( value ) => {
									setMeta( {
										...meta,
										_user_mail_enabled: value,
									} );
								} }
							/>
							<TextControl
								label={ __( 'Subject', 'gutenberg-form' ) }
								value={ meta._user_mail_subject }
								placeholder={ __( '', 'gutenberg-form' ) }
								onChange={ ( value ) => {
									setMeta( {
										...meta,
										_user_mail_subject: value,
									} );
								} }
							/>
						</div>
						<div className="ctx:mail-editor-body">
							<label
								class="ctx:mail-editor-label"
								for="inspector-text-control-1"
							>
								{ __( 'Mail Content', 'gutenberg-form' ) }
							</label>
							<RichText
								tagName="div"
								className="ctx:mail-editor-code code"
								value={ meta._user_mail_template }
								onChange={ ( value ) =>
									setMeta( {
										...meta,
										_user_mail_template: value,
									} )
								}
							/>
						</div>
						<div className="ctx:mail-editor-fields">
							{ getAvailableFields().map( ( field ) => (
								<span
									className={
										'ctx:mail-editor-field ctx:mail-editor-field-' +
										field.type
									}
									onMouseDown={ ( event ) => {
										event.preventDefault();
										event.stopPropagation();
									} }
									onMouseUp={ ( event ) => {
										insertCode(
											event,
											`{${ field.value }}`
										);
									} }
								>
									{ field.label }
								</span>
							) ) }
						</div>
						<div className="ctx:mail-editor-footer">
							<Button
								variant="primary"
								onClick={ () => setVisible( ! visible ) }
							>
								{ __( 'Save', 'gutenberg-form' ) }
							</Button>
						</div>
					</div>
				</div>
			) }
		</>
	);
};

export default User;
