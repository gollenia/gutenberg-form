import { useEffect, useRef, useState } from '@wordpress/element';
type CountryProps = {
	label: string;
	placeholder: string;
	name: string;
	required: boolean;
	width: number;
	region:
		| 'world'
		| 'europe'
		| 'german'
		| 'english'
		| 'spanish'
		| 'french'
		| 'asia'
		| 'africa'
		| 'oceania'
		| 'americas';
	emptyOption: string;
	disabled: boolean;
	customError: string;
	onChange: (value: string) => void;
};

type Option = {
	value: string;
	label: string;
};

const browserLanguage = navigator.language.split('-')[0];

const Country = (props: CountryProps) => {
	const {
		onChange,
		emptyOption,
		disabled,
		placeholder,
		required,
		name,
		label,
		width,
		region,
	} = props;

	const classes = [
		'select',
		'input--width-' + width,
		props.required ? 'select--required' : '',
	].join(' ');

	const inputRef = useRef<HTMLSelectElement>(null);

	const [countries, setCountries] = useState<Array<any>>([]);
	const [selectedCountry, setSelectedCountry] = useState(placeholder);

	const fetchCountries = async () => {
		const response = await fetch(
			`https://countries.kids-team.com/countries/${region}/${browserLanguage}`
		);
		const data = await response.json();

		const countryList = Object.entries(data).map(([key, name], index) => {
			return { value: key, label: name };
		});

		setCountries(countryList);
	};

	useEffect(() => {
		fetchCountries();
	}, []);

	const onChangeHandler = (event: any) => {
		setSelectedCountry(event.target.value);
		onChange(event.target.value);
	};

	return (
		<div className={classes}>
			<label>{label}</label>
			<select
				name={name}
				required={required}
				disabled={disabled}
				onChange={onChangeHandler}
				ref={inputRef}
				value={selectedCountry}
			>
				<option value="" disabled>
					{emptyOption ?? 'Make a selection'}
				</option>
				{countries.map((country: Option, index) => {
					return (
						<option key={index} value={country.value}>
							{country.label}
						</option>
					);
				})}
			</select>
			{!inputRef?.current?.validity.valid &&
				inputRef.current?.validationMessage && (
					<span className="input__error">
						{inputRef.current?.validationMessage}
					</span>
				)}
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
export type { CountryProps };
