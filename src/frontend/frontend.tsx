import ReactDOM from 'react-dom';

import GutenForm from './GutenForm';

const gbf_init = () => {
	const forms = document.getElementsByClassName( 'gbf-form' );

	if ( ! forms.length ) return;

	Array.from( forms ).forEach( ( form ) => {
		const data = form.getAttribute( 'data-id' );
		const lang = form.getAttribute( 'data-lang' ) ?? 'en';
		if ( ! data ) return;
		ReactDOM.render( <GutenForm id={ data } lang={ lang } />, form );
	} );
};

gbf_init();
