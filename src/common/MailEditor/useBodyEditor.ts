import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useRef, useState } from '@wordpress/element';
import { MailTokenNode, TextColorMark, UnderlineMark } from './extensions';
import { getBodyCommandState, getBodyMentionItems } from './mentionUtils';
import type { AvailableField, EmailTemplateMentionItem } from './types';

type Props = {
	body: string;
	onBodyChange: (value: string) => void;
	availableFields: AvailableField[];
};

const isTiptapDocumentString = (value: string): boolean => {
	if (value === '') {
		return false;
	}

	try {
		const parsed = JSON.parse(value) as { type?: string; content?: unknown };
		return parsed.type === 'doc' && Array.isArray(parsed.content);
	} catch {
		return false;
	}
};

const parseBodyContent = (value: string): string | Record<string, unknown> => {
	if (!isTiptapDocumentString(value)) {
		return value;
	}

	return JSON.parse(value) as Record<string, unknown>;
};

const serializeBodyContent = (editor: NonNullable<ReturnType<typeof useEditor>>) =>
	JSON.stringify(editor.getJSON());

const useBodyEditor = ({ body, onBodyChange, availableFields }: Props) => {
	const [commandState, setCommandState] = useState<ReturnType<
		typeof getBodyCommandState
	> | null>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const bodyRef = useRef(body);
	const onBodyChangeRef = useRef(onBodyChange);
	const commandStateRef = useRef(commandState);
	const items = getBodyMentionItems(commandState, availableFields);
	const itemsRef = useRef(items);
	const selectedIndexRef = useRef(selectedIndex);

	useEffect(() => {
		bodyRef.current = body;
		onBodyChangeRef.current = onBodyChange;
		commandStateRef.current = commandState;
		itemsRef.current = items;
		selectedIndexRef.current = selectedIndex;
	}, [body, commandState, items, onBodyChange, selectedIndex]);

	const editor = useEditor({
		immediatelyRender: false,
		extensions: [
			StarterKit.configure({
				heading: false,
				blockquote: false,
				codeBlock: false,
				hardBreak: true,
				horizontalRule: false,
				strike: false,
			}),
			UnderlineMark,
			TextColorMark,
			MailTokenNode,
		],
		content: parseBodyContent(body || ''),
		onUpdate: ({ editor: currentEditor }) => {
			setCommandState(getBodyCommandState(currentEditor));
			setSelectedIndex(0);

			const nextBody = serializeBodyContent(currentEditor);
			if (nextBody === bodyRef.current) {
				return;
			}

			onBodyChangeRef.current(nextBody);
		},
		onSelectionUpdate: ({ editor: currentEditor }) => {
			setCommandState(getBodyCommandState(currentEditor));
			setSelectedIndex(0);
		},
		editorProps: {
			handleKeyDown: (_view, event) => {
				if (!itemsRef.current.length || !commandStateRef.current) {
					return false;
				}

				if (event.key === 'ArrowDown') {
					event.preventDefault();
					setSelectedIndex((current) =>
						current >= itemsRef.current.length - 1 ? 0 : current + 1,
					);
					return true;
				}

				if (event.key === 'ArrowUp') {
					event.preventDefault();
					setSelectedIndex((current) =>
						current <= 0 ? itemsRef.current.length - 1 : current - 1,
					);
					return true;
				}

				if (event.key === 'Enter' || event.key === 'Tab') {
					event.preventDefault();
					insertMention(itemsRef.current[selectedIndexRef.current] ?? null);
					return true;
				}

				if (event.key === 'Escape') {
					event.preventDefault();
					setCommandState(null);
					setSelectedIndex(0);
					return true;
				}

				return false;
			},
		},
	});

	const insertMention = (item: EmailTemplateMentionItem | null) => {
		if (!editor || !commandState || !item) {
			return;
		}

		const chain = editor.chain().focus().deleteRange({
			from: commandState.from,
			to: commandState.to,
		});

		if (item.kind === 'token') {
			chain.insertContent([
				{
					type: 'mailToken',
					attrs: {
						token: item.token,
						label: item.label,
					},
				},
				{
					type: 'text',
					text: ' ',
				},
			]);
		} else if (item.kind === 'command') {
			if (item.command === 'bulletList') {
				chain.toggleBulletList();
			} else {
				chain.toggleOrderedList();
			}
		}

		chain.run();
		setCommandState(null);
		setSelectedIndex(0);
	};

	useEffect(() => {
		if (!editor) {
			return;
		}

		const currentContent = isTiptapDocumentString(body)
			? serializeBodyContent(editor)
			: editor.getHTML();
		const nextContent = parseBodyContent(body || '');

		if (currentContent === body) {
			return;
		}

		editor.commands.setContent(nextContent, false);
	}, [body, editor]);

	return {
		editor,
		commandState,
		items,
		selectedIndex,
		insertMention,
	};
};

export default useBodyEditor;
