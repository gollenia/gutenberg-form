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
	{ id: 'command:heading1', kind: 'command', label: 'Heading 1', searchText: 'heading headline title h1', command: 'heading1' },
	{ id: 'command:heading2', kind: 'command', label: 'Heading 2', searchText: 'heading headline subtitle h2', command: 'heading2' },
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
	{ id: 'command:horizontalRule', kind: 'command', label: 'Divider', searchText: 'divider separator horizontal line', command: 'horizontalRule' },
	{ id: 'command:infoBox', kind: 'command', label: 'Info box', searchText: 'info box hint notice callout', command: 'infoBox' },
	{ id: 'command:link', kind: 'command', label: 'Link', searchText: 'link url website', command: 'link' },
	{ id: 'command:button', kind: 'command', label: 'Button', searchText: 'button call to action cta', command: 'button' },
	{ id: 'command:allFields', kind: 'command', label: 'Form data', searchText: 'form data all fields submission', command: 'allFields' },
];
