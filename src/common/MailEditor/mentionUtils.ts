import type { Editor } from '@tiptap/react';
import { COMMAND_MENTION_ITEMS, getTokenMentionItems } from './tiptap';
import type {
	AvailableField,
	BodyCommandState,
	EmailTemplateMentionItem,
	SubjectCommandState,
} from './types';

export const getBodyCommandState = (editor: Editor): BodyCommandState | null => {
	const { from, empty, $from } = editor.state.selection;

	if (!empty) {
		return null;
	}

	const textBeforeCursor = $from.parent.textBetween(0, $from.parentOffset, '\0', '\0');
	const match = /(^|\s)([@/])([^\n@/]*)$/.exec(textBeforeCursor);

	if (!match) {
		return null;
	}

	const trigger = match[2] as '@' | '/';
	const query = match[3] ?? '';

	return {
		trigger,
		query,
		from: from - query.length - 1,
		to: from,
	};
};

export const getSubjectCommandState = (
	value: string,
	selectionStart: number | null,
): SubjectCommandState | null => {
	const cursor = selectionStart ?? value.length;
	const textBeforeCursor = value.slice(0, cursor);
	const match = /(^|\s)@([^\n@]*)$/.exec(textBeforeCursor);

	if (!match) {
		return null;
	}

	const query = match[2] ?? '';

	return {
		query,
		from: cursor - query.length - 1,
		to: cursor,
	};
};

export const getBodyMentionItems = (
	commandState: BodyCommandState | null,
	availableFields: AvailableField[],
): EmailTemplateMentionItem[] => {
	const normalizedQuery = commandState?.query.trim().toLowerCase() ?? '';
	const items =
		commandState?.trigger === '/'
			? COMMAND_MENTION_ITEMS
			: getTokenMentionItems(availableFields);

	return items
		.filter((item) =>
			normalizedQuery === '' ? true : item.searchText.includes(normalizedQuery),
		)
		.slice(0, 8);
};

export const getSubjectMentionItems = (
	commandState: SubjectCommandState | null,
	availableFields: AvailableField[],
): EmailTemplateMentionItem[] => {
	const normalizedQuery = commandState?.query.trim().toLowerCase() ?? '';

	return getTokenMentionItems(availableFields)
		.filter((item) =>
			normalizedQuery === '' ? true : item.searchText.includes(normalizedQuery),
		)
		.slice(0, 8);
};
