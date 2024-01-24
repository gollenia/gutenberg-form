import { useEffect, useRef, useState } from '@wordpress/element';
import InputField from './InputField';
import './style.scss';
type Response = {
	success: boolean;
	message: {
		html: string;
		attributes: {
			class: string;
		};
	};
};
type FormProps = {
	data: Array< any >;
	formUrl: string;
	onSubmit: ( event: any, data: any ) => void | null;
	onSubmissionFinished?: ( response: Response ) => void;
	validate: boolean;
	submitUrl: string;
	extraData?: any;
	onStateChange?: ( state: any ) => void;
	onChange?: ( form: any ) => void;
};

type FormState = 'LOADING' | 'LOADED' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';

const Form = ( props: FormProps ) => {
	const { data, formUrl, onSubmit, submitUrl, onChange, onStateChange, extraData, onSubmissionFinished } = props;
	const [ status, setStatus ] = useState< FormState >( 'LOADING' );
	const [ fields, setFields ] = useState< Array< any > >( [] );
	const [ form, setForm ] = useState< { [ key: string ]: any } >( {} );
	const [ response, setResponse ] = useState< Response >();

	useEffect( () => {
		onStateChange?.( status );
	}, [ status ] );

	const formRef = useRef< HTMLFormElement >( null );

	useEffect( () => {
		if ( ! formUrl && data ) {
			setFields( data );
			setStatus( 'LOADED' );
			return;
		}
		fetch( formUrl )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setFields( data.fields );

				setStatus( 'LOADED' );

				const fieldTemplate: any = {};
				data.fields.forEach( ( field: any ) => {
					fieldTemplate[ field.name ] = field.defaultValue;
				} );

				setForm( fieldTemplate );
			} );
	}, [ data, formUrl ] );

	if ( fields.length == 0 ) return <></>;

	const handleSubmit = ( event: any ) => {
		const formData = { ...form, ...extraData };
		event.preventDefault();
		if ( onSubmit ) {
			onSubmit( event, formData );
			return;
		}

		if ( ! ( formRef.current as HTMLFormElement | null )?.checkValidity() ) {
			if ( formRef.current && ( formRef.current as HTMLFormElement ).reportValidity ) {
				( formRef.current as HTMLFormElement ).reportValidity();
				return;
			}
		}

		if ( ! submitUrl ) {
			console.error( 'wp-react-form', 'No URL or onSubmit callback provided' );
			return;
		}

		if ( status == 'SUBMITTING' || status == 'SUCCESS' ) return;

		setStatus( 'SUBMITTING' );
		fetch( submitUrl, {
			method: 'POST',
			body: JSON.stringify( formData ),
			headers: {
				'Content-Type': 'application/json',
			},
		} )
			.then( ( response ) => response.json() )
			.then( ( data ) => {
				setStatus( data.success ? 'SUCCESS' : 'ERROR' );
				setResponse( data );
				onSubmissionFinished?.( data );
				formRef.current?.reset();
			} );
	};

	const resetForm = () => {
		setStatus( 'LOADED' );
		const fieldTemplate: any = {};
		fields.forEach( ( field: any ) => {
			fieldTemplate[ field.name ] = field.defaultValue;
		} );
		setForm( fieldTemplate );
	};

	if ( status == 'LOADING' ) return <></>;

	const onFormChange = ( event: any ) => {
		if ( onChange ) {
			onChange( form );
		}
	};

	const style = {
		gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
	};

	const classes = [
		'ctx-form',
		status == 'LOADED' ? 'ctx-form--loaded' : '',
		status == 'ERROR' ? 'ctx-form--error' : '',
		status == 'SUBMITTING' ? 'ctx-form--submitting' : '',
		status == 'SUCCESS' ? 'ctx-form--submitted' : '',
	].join( ' ' );

	return (
		<>
			<form
				className={ classes }
				ref={ formRef }
				style={ style }
				onSubmit={ handleSubmit }
				onChange={ onFormChange }
				onReset={ resetForm }
			>
				<div
					className={ `ctx-form__response ${ response?.message?.html ? 'ctx-form__response--show' : '' }` }
					dangerouslySetInnerHTML={ {
						__html: response?.message?.html ?? '',
					} }
				></div>

				{ fields.map( ( field, index ) => {
					return (
						<InputField
							{ ...field }
							status={ status }
							disabled={ status == 'SUBMITTING' }
							key={ index }
							value={ form[ field.name ] }
							onChange={ ( value: any ) => {
								setForm( ( fields ) => {
									return {
										...fields,
										[ field.name ]: value,
									};
								} );
							} }
						/>
					);
				} ) }
			</form>
		</>
	);
};

Form.defaultProps = {
	id: 0,
	lang: 'en',
	data: [],
	formUrl: '',
	onSubmit: null,
	validate: true,
	submitUrl: '',
};

export default Form;
