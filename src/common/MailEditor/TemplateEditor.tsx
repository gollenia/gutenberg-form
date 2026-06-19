import { EditorContent } from '@tiptap/react';
import { Flex, FlexBlock, Modal } from '@wordpress/components';
import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import BodyToolbar from './BodyToolbar';
import MentionPopover from './MentionPopover';
import SubjectField from './SubjectField';
import { getThemeTextColors } from './themeColors';
import type { TemplateEditorProps } from './types';
import useBodyEditor from './useBodyEditor';
import useSubjectMentions from './useSubjectMentions';
import './style.scss';

const TemplateEditor = ({
	title,
	visible,
	setVisible,
	subject,
	onSubjectChange,
	body,
	onBodyChange,
	availableFields,
	extraControls = null,
}: TemplateEditorProps) => {
	const editorSurfaceRef = useRef<HTMLDivElement | null>(null);
	const subjectInputRef = useRef<HTMLInputElement | null>(null);
	const bodyEditor = useBodyEditor({ body, onBodyChange, availableFields });
	const subjectMentions = useSubjectMentions({
		subject,
		onSubjectChange,
		inputRef: subjectInputRef,
		availableFields,
	});
	const themeTextColors = getThemeTextColors();

	if (!visible) {
		return null;
	}

	return (
		<Modal title={title} onRequestClose={() => setVisible(false)} size="large">
			<div className="ctx-email-editor">
				{extraControls}

				<SubjectField
					value={subject}
					inputRef={subjectInputRef}
					commandOpen={
						Boolean(subjectMentions.commandState) && subjectMentions.items.length > 0
					}
					items={subjectMentions.items}
					selectedIndex={subjectMentions.selectedIndex}
					onChange={subjectMentions.handleChange}
					onCursorChange={subjectMentions.updateCommandState}
					onKeyDown={subjectMentions.handleKeyDown}
					onSelectItem={subjectMentions.insertMention}
				/>

				<div className="ctx-email-editor__field">
					<label className="ctx-email-editor__label">{__('Body', 'gutenberg-form')}</label>
					<p className="ctx-email-editor__hint">
						{__('Type @ for tokens and / for formatting commands in the body.', 'gutenberg-form')}
					</p>
					<BodyToolbar editor={bodyEditor.editor} colors={themeTextColors} />
					<div className="ctx-email-editor__surface" ref={editorSurfaceRef}>
						<EditorContent editor={bodyEditor.editor} />
						{bodyEditor.commandState ? (
							<MentionPopover
								anchor={editorSurfaceRef.current}
								items={bodyEditor.items}
								selectedIndex={bodyEditor.selectedIndex}
								popoverClassName="ctx-email-editor__mentions-popover"
								onSelect={bodyEditor.insertMention}
							/>
						) : null}
					</div>
				</div>

				<div className="ctx-email-editor__actions">
					<Flex justify="flex-end">
						<FlexBlock />
					</Flex>
				</div>
			</div>
		</Modal>
	);
};

export default TemplateEditor;
