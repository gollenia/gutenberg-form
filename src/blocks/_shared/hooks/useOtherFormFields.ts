import { useSelect } from '@wordpress/data';
import getFormContainer from '../utils/getFormContainer';

type BlockInstance = {
	clientId: string;
	name: string;
	attributes?: Record<string, unknown>;
	innerBlocks?: BlockInstance[];
};

type NamedBlock = BlockInstance & {
	attributes: { name: string; label?: string; context?: string };
};

const isNamedBlock = (block: BlockInstance): block is NamedBlock =>
	typeof (block as NamedBlock)?.attributes?.name === 'string' &&
	(block as NamedBlock).attributes.name.length > 0;

const useOtherFormFields: (
	clientId: string,
) => Array<{ label: string; value: string; context: string; type: string }> = (
	clientId,
) => {
	return useSelect(
		(select) => {
			const container = getFormContainer(select, clientId);
			if (!container) return [];

			const containerBlocks = container.innerBlocks as unknown as BlockInstance[];
			const fieldsBlock = containerBlocks.find(
				(block) => block.name === 'gutenberg-form/form-fields',
			);

			if (!fieldsBlock?.innerBlocks) {
				return [];
			}

			return fieldsBlock.innerBlocks
				.filter((block) => block.clientId !== clientId)
				.filter(isNamedBlock)
				.map((block) => ({
					label: block.attributes.label ?? block.attributes.name,
					type: block.name,
					value: block.attributes.name,
					context: block.attributes.context ?? '',
				}));
		},
		[clientId],
	);
};

export default useOtherFormFields;
