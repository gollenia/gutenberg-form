import { createRoot } from 'react-dom/client';
import './frontend.scss';

const gbfInit = async (): Promise<void> => {
	const forms = document.querySelectorAll<HTMLElement>('.gbf-form');

	if (forms.length === 0) {
		return;
	}

	const { default: Form } = await import('@contexis/wp-react-form/form');

	forms.forEach((form) => {
		const id = form.getAttribute('data-id');
		const pageId = form.getAttribute('data-page') ?? '';

		if (!id) {
			return;
		}

		createRoot(form).render(
			<Form
				data={[]}
				formUrl={`/wp-json/gbf-form/v2/form/${id}?page_id=${pageId}`}
				onSubmit={undefined}
				submitUrl="/wp-json/gbf-form/v2/submit/"
				validate={true}
			/>,
		);
	});
};

void gbfInit();
