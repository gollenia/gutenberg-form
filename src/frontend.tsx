import ReactDOM from 'react-dom';

import Form from './_externalForm';

const gbf_init = () => {
	const forms = document.getElementsByClassName('gbf-form');

	if (!forms.length) return;

	Array.from(forms).forEach((form) => {
		const id = form.getAttribute('data-id');
		const lang = form.getAttribute('data-lang') ?? 'en';
		const page_id = form.getAttribute('data-page') ?? '';
		if (!id) return;

		ReactDOM.render(
			<Form
				lang={lang}
				formUrl={`/wp-json/gbf-form/v2/form/${id}?page_id=${page_id}`}
				submitUrl={`/wp-json/gbf-form/v2/submit/`}
			/>,
			form
		);
	});
};

gbf_init();
