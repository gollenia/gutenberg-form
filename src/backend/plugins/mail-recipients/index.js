/**
 * Adds a metabox for the page color settings
 */

/**
 * WordPress dependencies
 */
import { CheckboxControl, TextControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

const MailRecipients = ( { ...props } ) => {
	const postType = select( 'core/editor' ).getCurrentPostType();

	if ( postType !== 'gbf-form' ) {
		return <></>;
	}

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	return (
		<PluginDocumentSettingPanel
			name="form-recipient-settings"
			title={ __( 'Recipients', 'gutenberg-form' ) }
			className="form-recipient-settings"
		>
			<TextControl
				label={ __( 'Mail addresses', 'gutenberg-form' ) }
				help={ __(
					'Separate multiple addresses with commas',
					'gutenberg-form'
				) }
				value={ meta._mail_recipients }
				onChange={ ( value ) => {
					setMeta( { _mail_recipients: value } );
				} }
			/>

			<CheckboxControl
				label={ __( 'Send copy to admin', 'gutenberg-form' ) }
				checked={ meta._send_to_admin }
				onChange={ ( value ) => {
					setMeta( { _send_to_admin: value } );
				} }
			/>
		</PluginDocumentSettingPanel>
	);
};

export default {
	name: 'mail-recipients',
	settings: { render: MailRecipients, icon: 'email' },
};
