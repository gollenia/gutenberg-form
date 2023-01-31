import ReactDOM from 'react-dom';

import GutenForm from './GutenForm';

const gbf_init = () => {
    const forms = document.getElementsByClassName('gbf-form')

	if (!forms.length) return;
	console.log(forms)
    Array.from(forms).forEach(form => {
        const data = form.getAttribute('data-id');
		if(!data) return;
        ReactDOM.render(<GutenForm id={data} />, form)
    });
}

gbf_init();