import { useBlockProps } from '@wordpress/block-editor';
import { chipStyleForContext } from '../utils/editor';
import { isValidLabel } from '../utils/validation';

interface UseFieldPropsOptions {
	className?: string;
	[key: string]: unknown;
}

type UseFieldPropsAttributes = {
	label?: string;
	width?: number;
	context?: string;
};

export default function useFieldProps(
	attributes: UseFieldPropsAttributes,
	options: UseFieldPropsOptions = {},
) {
	const { label, width, context } = attributes;

	const isLabelValid = isValidLabel(label);
	const hasError = !isLabelValid;
	const { className = '', ...restOptions } = options;
	const contextColor = context ? chipStyleForContext(context) : undefined;

	return useBlockProps({
		...restOptions,
		style: {
			gridColumn: `auto / span ${width || 6};`,
			boxShadow: hasError
				? 'inset 0 0 0 1px var(--wp--preset--color--danger)'
				: contextColor
					? `inset 0 0 0 1px ${contextColor.color}`
					: undefined,
		},
		className: [
			'ctx-form-field components-placeholder block-editor-media-placeholder is-large',
			`ctx-form-field--${width || 6}`,
			hasError ? 'ctx-form-field--error' : '',
			context ? `ctx-form-field--${context}` : '',
			className,
		]
			.filter(Boolean)
			.join(' '),
	});
}
