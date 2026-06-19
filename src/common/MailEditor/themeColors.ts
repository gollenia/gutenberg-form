import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import type { ThemeColor } from './types';

const DEFAULT_TEXT_COLORS: ThemeColor[] = [
	{ name: __('Text', 'gutenberg-form'), color: '#1d2327', slug: 'text' },
	{ name: __('Blue', 'gutenberg-form'), color: '#0b57d0', slug: 'blue' },
	{ name: __('Green', 'gutenberg-form'), color: '#137333', slug: 'green' },
	{ name: __('Orange', 'gutenberg-form'), color: '#b06000', slug: 'orange' },
	{ name: __('Red', 'gutenberg-form'), color: '#b42318', slug: 'red' },
];

type BlockEditorSettings = {
	colors?: Array<{ name?: string; color?: string; slug?: string }>;
};

export const getThemeTextColors = (): ThemeColor[] => {
	const settings = (select('core/block-editor' as never) as any)?.getSettings?.() as
		| BlockEditorSettings
		| undefined;
	const colors = settings?.colors ?? [];
	const normalizedColors = colors
		.filter((item) => typeof item?.color === 'string' && item.color.trim() !== '')
		.map((item) => ({
			name: item.name?.trim() || item.slug?.trim() || item.color!.trim(),
			color: item.color!.trim(),
			slug: item.slug?.trim(),
		}));

	return normalizedColors.length ? normalizedColors : DEFAULT_TEXT_COLORS;
};
