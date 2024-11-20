/**
 * Adds a metabox for the page color settings
 */

/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';

import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

const MailEditor = () => {
	const postType = select('core/editor').getCurrentPostType();

	if (postType !== 'event') return <></>;

	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

	return (
		<PluginDocumentSettingPanel
			name="maileditor-settings"
			title={__('Mail Content', 'gbf-forms')}
			className="events-location-settings"
		>
			<TextControl
				label={__('Subject', 'gbf-forms')}
				value={meta._event_audience}
				onChange={(value) => {
					setMeta({ _event_audience: value });
				}}
			/>
		</PluginDocumentSettingPanel>
	);
};

export default {
	name: 'mail-editor',
	settings: { render: MailEditor, icon: 'edit' },
};
