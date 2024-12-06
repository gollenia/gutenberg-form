/**
 * Adds a metabox for the page color settings
 */

/**
 * WordPress dependencies
 */
import { CheckboxControl } from '@wordpress/components';
import { select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';

import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

const FeedbackOptions = () => {
	const postType = select('core/editor').getCurrentPostType();

	if (postType !== 'gbf-form') return <></>;

	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');

	console.log(meta);
	return (
		<PluginDocumentSettingPanel
			name="feedback-settings"
			title={__('Feedback', 'gbf-forms')}
		>
			<CheckboxControl
				label={__(
					'Collapse form when feedback is displayed',
					'gbf-forms'
				)}
				checked={meta._feedback_form_collapse}
				onChange={(value) =>
					setMeta({
						_feedback_form_collapse: value,
					})
				}
			/>
		</PluginDocumentSettingPanel>
	);
};

export default {
	name: 'mail-editor',
	settings: { render: FeedbackOptions, icon: 'edit' },
};
