import { __ } from '@wordpress/i18n';
import { FC, useEffect, useRef, useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

interface GutenFormProps {
	id: string;
	lang: string;
	page: string;
}

type Field = {
	type: string;
	value: any;
	settings: any;
};

type Status = 'LOADING' | 'LOADED' | 'ERROR' | 'SUBMITTING' | 'SUCCESS';

type Fields = { [ key: string ]: Field[] };

const GutenForm: FC< GutenFormProps > = ( props ) => {
	const { id, lang, page } = props;

	const [ status, setStatus ] = useState< Status >( 'LOADING' );
	const [ fields, setFields ] = useState< Array< any > >( [] );
	const [ form, setForm ] = useState< any >( {} );
	const [ submitButton, setSubmitButton ] = useState< any >( {} );

	const formRef = useRef( null );

	useEffect( () => {
		if ( ! id ) return;
		fetch( `/wp-json/gbf-form/v2/form/${ id }` )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setFields( data.fields );
				setSubmitButton( data.submit );
				setStatus( 'LOADED' );

				const fieldTemplate = {};
				Object.entries( data ).map(
					( [ key, field ]: [ string, any ] ) => {
						fieldTemplate[ key ] = field.settings.defaultValue;
					}
				);

				setForm( fieldTemplate );
			} );
	}, [] );

	if ( fields.length == 0 ) return <></>;

	console.log( fields );

	const handleSubmit = ( event: any ) => {
		event.preventDefault();
		const data = { fields: form, id, page };
		setStatus( 'SUBMITTING' );
		fetch( `/wp-json/gbf-form/v2/submit/`, {
			method: 'POST',
			body: JSON.stringify( data ),
			headers: {
				'Content-Type': 'application/json',
			},
		} )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				console.log( data );
				setStatus( data.success ? 'SUCCESS' : 'ERROR' );
			} );
	};

	if ( status == 'LOADING' )
		return <>{ __( 'Form is beeing loaded', 'gutenberg-form' ) }</>;

	const classes = [
		'form grid xl:grid--columns-6 grid--gap-8',
		status == 'LOADED' ? 'form--loaded' : '',
		status == 'ERROR' ? 'form--error' : '',
		status == 'SUBMITTING' ? 'form--submitting' : '',
		status == 'SUCCESS' ? 'form--submitted' : '',
	].join( ' ' );
	return (
		<form className={ classes } ref={ formRef } onSubmit={ handleSubmit }>
			{ Object.entries( fields ).map( ( [ key, field ], index ) => {
				return (
					<InputField
						disabled={ status == 'SUBMITTING' }
						lang={ lang }
						key={ index }
						type={ field.type }
						settings={ field.settings }
						onChange={ ( value ) => {
							console.log( key, value );
							setForm( ( fields: any ) => {
								return {
									...fields,
									[ key ]: value,
								};
							} );
						} }
					/>
				);
			} ) }
			<SubmitButton
				{ ...submitButton }
				status={ status }
				onClick={ handleSubmit }
			/>
		</form>
	);
};

export default GutenForm;
