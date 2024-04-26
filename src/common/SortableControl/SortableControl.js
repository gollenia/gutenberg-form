import { Icon, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useRef, useState } from 'react';
import './SortableControl.scss';
const SortableControl = ({ items, onChange, label, help }) => {
	const ghostItemRef = useRef();
	const dragOverItemRef = useRef();
	const [draggedItem, setDraggedItem] = useState(null);
	const [currentDragOverItem, setCurrentDragOverItem] = useState(null);
	const [mousePosition, setMousePosition] = useState([0, 0]);

	const handleDragStart = (e, index) => {
		setDraggedItem(index);
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', null);
		e.dataTransfer.setDragImage(ghostItemRef.current, 0, 0);
		setMousePosition([e.clientX, e.clientY]);
	};

	const handleDragEnter = (e, index) => {
		e.preventDefault();

		setCurrentDragOverItem(index);
	};

	const handleDragEnd = (e) => {
		const newItems = [...items];
		const item = newItems[draggedItem];
		newItems.splice(draggedItem, 1);
		newItems.splice(currentDragOverItem, 0, item);
		onChange(newItems);
		setCurrentDragOverItem(null);
		setDraggedItem(null);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleMove = (e) => {
		e.preventDefault();
	};

	return (
		<div className="sortable-list">
			{label && <label>{label}</label>}
			<TextControl
				className="sortable-list__input"
				onKeyUp={(e) => {
					if (e.key === 'Enter') {
						onChange([...items, e.target.value]);
						e.target.value = '';
					}
				}}
				placeholder={__('Add item', 'gutenberg-form')}
			/>
			<div className="sortable-list__items">
				{items.map((item, index) => (
					<div
						key={index}
						draggable
						onDragStart={(e) => handleDragStart(e, index)}
						onDragEnter={(e) => handleDragEnter(e, index)}
						onDragMove={(e) => handleMove(e)}
						onDragEnd={handleDragEnd}
						onDragOver={(e) => handleDragOver(e)}
						className={
							'sortable-list__item' +
							(draggedItem === index ? ' dragging' : '') +
							(currentDragOverItem !== draggedItem &&
							currentDragOverItem === index
								? ' drag-over'
								: '')
						}
					>
						<div className="sortable-list__item__inner">
							<span>{item}</span>
							<button
								onClick={() => {
									onChange(
										items.filter((_, i) => i !== index)
									);
								}}
							>
								<Icon
									size={20}
									className="sortable-list__item__icon"
									icon={
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											aria-hidden="true"
											focusable="false"
										>
											<path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path>
										</svg>
									}
								></Icon>
							</button>
						</div>
					</div>
				))}
			</div>
			<div class="sortable-list__help">{help}</div>
			<div className="hidden">
				<div ref={ghostItemRef} className="sortable-list__ghost">
					{items[draggedItem]}
				</div>
			</div>
		</div>
	);
};

export default SortableControl;
