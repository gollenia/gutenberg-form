import { __ } from '@wordpress/i18n/build-types';
import { useEffect, useState } from 'react';
type Props = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	region: string;
	lang: string;
	help: string;
	disabled: boolean;
	onChange: ( value: string ) => void;
};

type Option = {
	value: string;
	label: string;
};

const Country = ( props: Props ) => {
	const { onChange, lang, help, disabled } = props;

	const classes = [
		'select',
		'grid__column--span-' + props.width,
		props.required ? 'select--required' : '',
	].join( ' ' );

	const [ countries, setCountries ] = useState< Array< any > >( [] );

	const fetchCountries = async () => {
		const response = await fetch(
			`https://countries.kids-team.com/countries/${ props.region }/${ lang }`
		);
		const data = await response.json();

		const countryList = Object.entries( data ).map(
			( [ key, name ], index ) => {
				return { value: key, label: name };
			}
		);

		setCountries( countryList );
	};

	useEffect( () => {
		fetchCountries();
	}, [] );

	const onChangeHandler = (
		event: React.ChangeEvent< HTMLSelectElement >
	) => {
		onChange( event.target.value );
	};

	return (
		<div className={ classes }>
			<label>{ props.label }</label>
			<select
				name={ props.name }
				required={ props.required }
				onChange={ onChangeHandler }
				disabled={ disabled }
			>
				<option value="" disabled selected>
					{ help ?? __( 'Select country', 'gutenberg-form' ) }
				</option>
				{ countries.map( ( country: Option, index ) => {
					return (
						<option key={ index } value={ country.value }>
							{ country.label }
						</option>
					);
				} ) }
			</select>
		</div>
	);
};

Country.defaultProps = {
	label: '',
	placeholder: '',
	name: '',
	required: false,
	width: 6,
	region: 'world',
};

export default Country;
