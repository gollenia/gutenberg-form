import ReactDOM from 'react-dom';

import GutenForm from './GutenForm';

const gbf_init = () => {
	const forms = document.getElementsByClassName( 'gbf-form' );

	if ( ! forms.length ) return;

	Array.from( forms ).forEach( ( form ) => {
		const id = form.getAttribute( 'data-id' );
		const page = form.getAttribute( 'data-page' );
		const lang = form.getAttribute( 'data-lang' ) ?? 'en';
		if ( ! id || ! page ) return;
		ReactDOM.render(
			<GutenForm id={ id } lang={ lang } page={ page } />,
			form
		);
	} );
};

gbf_init();
