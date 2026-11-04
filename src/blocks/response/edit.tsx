import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'core/list',
	'core/image',
	'core/quote',
	'core/group',
];

const TEMPLATE = [
	[
		'core/group',
		{
			style: {
				spacing: {
					padding: {
						top: 'var:preset|spacing|50',
						bottom: 'var:preset|spacing|50',
						left: 'var:preset|spacing|50',
						right: 'var:preset|spacing|50',
					},
				},
				color: { background: '#e6ffe6' },
			},
			layout: { type: 'constrained' },
		},
		[
			[
				'core/group',
				{ layout: { type: 'flex', flexWrap: 'nowrap' } },
				[
					[
						'core/group',
						{
							style: {
								color: { background: '#46cf3a' },
								border: {
									radius: {
										topLeft: '300px',
										topRight: '300px',
										bottomLeft: '300px',
										bottomRight: '300px',
									},
								},
								spacing: {
									padding: { top: '0', bottom: '0', left: '0', right: '0' },
								},
							},
							layout: { type: 'constrained' },
						},
						[
							[
								'core/icon',
								{
									icon: 'core/check',
									style: {
										elements: {
											link: { color: { text: 'var:preset|color|white' } },
										},
										dimensions: { width: '2.01rem' },
									},
									textColor: 'white',
								},
								[],
							],
						],
					],
					[
						'core/heading',
						{
							placeholder: __('Danke', 'gutenberg-form'),
							content: __('Vielen Dank!', 'gutenberg-form'),
						},
						[],
					],
				],
			],
			[
				'core/paragraph',
				{ placeholder: __('Ihre Nachricht wurde gesendet', 'gutenberg-form') },
				[],
			],
		],
	],
] as const;

export default function Edit() {
	const blockProps = useBlockProps({ className: 'gbf-response' });
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		template: TEMPLATE as any,
	});

	return <div {...innerBlocksProps}>{innerBlocksProps.children}</div>;
}
