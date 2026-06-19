import { CheckboxControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

const coreData = (globalThis as any).wp?.coreData;
const useEntityProp = coreData?.useEntityProp as
	| ((kind: string, name: string, property: string) => [Record<string, unknown>, (meta: Record<string, unknown>) => void])
	| undefined;

const FeedbackOptions = () => {
	const postType = useSelect(
		(select) => (select('core/editor') as any).getCurrentPostType() as string,
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

	return (
		<PluginDocumentSettingPanel
			name="feedback-settings"
			title={__('Feedback', 'gutenberg-form')}
		>
			<CheckboxControl
				label={__(
					'Collapse form when feedback is displayed',
					'gutenberg-form',
				)}
				checked={Boolean(meta['_feedback_form_collapse'])}
				onChange={(value) =>
					setMeta({
						...meta,
						_feedback_form_collapse: value,
					})
				}
			/>
		</PluginDocumentSettingPanel>
	);
};

export default {
	name: 'feedback-settings',
	settings: { render: FeedbackOptions, icon: 'edit' },
};
