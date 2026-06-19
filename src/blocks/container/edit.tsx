import { createBlock } from '@wordpress/blocks';
import {
	store as blockEditorStore,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { useDispatch, select, useSelect } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

type ContainerChildBlock = {
	clientId: string;
	name: string;
	innerBlocks?: ContainerChildBlock[];
};

type ContainerEditProps = {
	context?: { postType?: string };
	clientId: string;
	setAttributes: (attributes: { recordId: string }) => void;
	attributes: { recordId?: string };
};

const createDefaultResponseBlock = () =>
	createBlock(
		'gutenberg-form/response',
		{ lock: { remove: true, move: true } },
		[
			createBlock('core/heading', {
				content: __('Thank you', 'gutenberg-form'),
			}),
			createBlock('core/paragraph', {
				content: __('Your message has been sent', 'gutenberg-form'),
			}),
		] as any,
	);

export default function Edit(props: ContainerEditProps) {
	if (props.context?.postType !== 'gbf-form') {
		return (
			<div className="gbf-alert">
				<h3>
					{__(
						'This block is only usable in the forms post type',
						'gutenberg-form',
					)}
				</h3>
				<p>
					{__(
						'If you want to add a form to this page, use the Form block',
						'gutenberg-form',
					)}
				</p>
			</div>
		);
	}

	const { clientId, setAttributes } = props;

	const [activeTab, setActiveTab] = useState<'fields' | 'response'>('fields');
	const lastSelectedTab = useRef<'fields' | 'response' | null>(null);
	const blockProps = useBlockProps();
	const postType = useSelect(
		() => (select('core/editor') as any).getCurrentPostType() as string,
		[],
	);

	if (postType === 'gbf-form') {
		document
			.getElementsByClassName('edit-post-fullscreen-mode-close')[0]
			?.setAttribute('href', 'edit.php?post_type=gbf-form');
	}

	useEffect(() => {
		if (props.attributes.recordId !== clientId) {
			setAttributes({ recordId: clientId });
		}
	}, [clientId, props.attributes.recordId, setAttributes]);

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ['gutenberg-form/response', 'gutenberg-form/form-fields'],
		template: [
			[
				'gutenberg-form/response',
				{ lock: { remove: true, move: true } },
				[],
			],
			[
				'gutenberg-form/form-fields',
				{ lock: { remove: true, move: true } },
				[],
			],
		],
		renderAppender: false as any,
	});

	const childBlocks = useSelect(
		(selectFn) =>
			(selectFn(blockEditorStore) as any).getBlocks(
				clientId,
			) as ContainerChildBlock[],
		[clientId],
	);

	const { replaceInnerBlocks, selectBlock } = useDispatch(blockEditorStore) as any;

	useEffect(() => {
		const hasResponse = childBlocks.some(
			(block) => block.name === 'gutenberg-form/response',
		);
		const hasFields = childBlocks.some(
			(block) => block.name === 'gutenberg-form/form-fields',
		);
		const legacyMailEditor = childBlocks.find(
			(block) => block.name === 'gutenberg-form/mail-editor',
		);

		if (!hasResponse && !legacyMailEditor) {
			const nextBlocks = [
				createDefaultResponseBlock(),
				...childBlocks,
			] as any;

			if (hasFields || childBlocks.length > 0) {
				replaceInnerBlocks(clientId, nextBlocks, false);
			}

			return;
		}

		if (hasResponse || !legacyMailEditor) {
			return;
		}

		const nextBlocks = childBlocks.map((block) =>
			block.clientId !== legacyMailEditor.clientId
				? block
					: createBlock('gutenberg-form/response', {
							lock: { remove: true, move: true },
						}, (block.innerBlocks ?? []) as any),
		) as any;

		replaceInnerBlocks(clientId, nextBlocks as any, false);
	}, [childBlocks, clientId, replaceInnerBlocks]);

	useEffect(() => {
		const responseBlock = childBlocks.find(
			(block) => block.name === 'gutenberg-form/response',
		);

		if (!responseBlock || (responseBlock.innerBlocks?.length ?? 0) > 0) {
			return;
		}

		const nextBlocks = childBlocks.map((block) =>
			block.clientId === responseBlock.clientId ? createDefaultResponseBlock() : block,
		) as any;

		replaceInnerBlocks(clientId, nextBlocks, false);
	}, [childBlocks, clientId, replaceInnerBlocks]);

	useEffect(() => {
		if (lastSelectedTab.current === activeTab) {
			return;
		}

		const targetName =
			activeTab === 'response'
				? 'gutenberg-form/response'
				: 'gutenberg-form/form-fields';
		const targetBlock = childBlocks.find((block) => block.name === targetName);

		if (targetBlock) {
			selectBlock(targetBlock.clientId);
			lastSelectedTab.current = activeTab;
		}
	}, [activeTab, childBlocks, selectBlock]);

	useEffect(() => {
		childBlocks.forEach((block) => {
			if (
				block.name !== 'gutenberg-form/response' &&
				block.name !== 'gutenberg-form/form-fields'
			) {
				return;
			}

			const element = document.querySelector<HTMLElement>(
				`[data-block="${block.clientId}"]`,
			);

			if (!element) {
				return;
			}

			const shouldShow =
				(activeTab === 'response' && block.name === 'gutenberg-form/response') ||
				(activeTab === 'fields' &&
					block.name === 'gutenberg-form/form-fields');

			element.style.display = shouldShow ? '' : 'none';
			element.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
		});
	}, [activeTab, childBlocks]);

	return (
		<form autoComplete="off" className="ctx:form-form">
			<TabPanel
				className="ctx:form-form__tabs"
				activeClass="is-active"
				onSelect={(tabName) =>
					setActiveTab((tabName as 'fields' | 'response') ?? 'fields')
				}
				tabs={[
					{ name: 'fields', title: __('Form', 'gutenberg-form') },
					{ name: 'response', title: __('Feedback', 'gutenberg-form') },
				]}
			>
				{() => (
					<div
						{...innerBlocksProps}
						className={[
							innerBlocksProps.className,
							'ctx:form-form__wrapper',
							`is-editing-${activeTab}`,
						]
							.filter(Boolean)
							.join(' ')}
					/>
				)}
			</TabPanel>
		</form>
	);
}
