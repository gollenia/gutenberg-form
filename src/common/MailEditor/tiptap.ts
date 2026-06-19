import type { AvailableField, EmailTemplateMentionItem } from './types';

export const getTokenMentionItems = (
	availableFields: AvailableField[],
): EmailTemplateMentionItem[] =>
	availableFields.map((field) => ({
		id: `token:${field.value}`,
		kind: 'token' as const,
		label: field.label,
		searchText: `${field.label} ${field.value}`.toLowerCase(),
		token: `{${field.value}}`,
	}));

export const COMMAND_MENTION_ITEMS: EmailTemplateMentionItem[] = [
	{
		id: 'command:bulletList',
		kind: 'command',
		label: 'Bullets',
		searchText: 'bullets bullet list unordered list',
		command: 'bulletList',
	},
	{
		id: 'command:orderedList',
		kind: 'command',
		label: 'Numbers',
		searchText: 'numbers ordered list numbered list',
		command: 'orderedList',
	},
];
