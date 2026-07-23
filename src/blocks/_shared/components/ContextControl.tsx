import { Flex, TextControl } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import useOtherFormFields from '../hooks/useOtherFormFields';
import { chipStyleForContext } from '../utils/editor';
import { extractContextOptions } from '../utils/extractContextOptions';

interface ContextControlProps {
	value: string;
	onChange: (value: string) => void;
	clientId: string;
}

const ContextControl = ({ value, onChange, clientId }: ContextControlProps) => {
	const otherFields = useOtherFormFields(clientId);

	const contextOptions = useMemo(() => {
		return extractContextOptions(otherFields);
	}, [otherFields]);

	return (
		<>
			<TextControl
				className="ctx-form-field__context-combobox"
				label={__('Context', 'gutenberg-form')}
				value={value}
				onChange={(value) => {
					onChange(value);
				}}
			/>

			{contextOptions.length > 0 && (
				<>
					<span className="ctx-form-field__context-suggestions-label">
						{__('Existing contexts:', 'gutenberg-form')}
					</span>
					<Flex justify="flex-start">
						{contextOptions.map((option) => {
							const chipColor = chipStyleForContext(option);
							return (
								<button
									key={option}
									type="button"
									style={chipColor}
									onClick={() => {
										onChange(option);
									}}
								>
									{option}
								</button>
							);
						})}
					</Flex>
				</>
			)}
		</>
	);
};

export default ContextControl;
