import { createRoot } from 'react-dom/client';
import Form from '@contexis/wp-react-form/form';
import './frontend.scss';

const gbfInit = (): void => {
	const forms = document.querySelectorAll<HTMLElement>('.gbf-form');

	if (forms.length === 0) {
		return;
	}

	forms.forEach((form) => {
		const id = form.getAttribute('data-id');
		const pageId = form.getAttribute('data-page') ?? '';
		const formUrl = form.getAttribute('data-form-url') ?? '';
		const submitUrl = form.getAttribute('data-submit-url') ?? '';

		if (!id || !formUrl || !submitUrl) {
			return;
		}

		createRoot(form).render(
			<Form
				data={[]}
				formUrl={formUrl}
				onSubmit={undefined}
				submitUrl={submitUrl}
				extraData={{ id, page_id: pageId }}
				validate={true}
			/>,
		);
	});
};

gbfInit();
