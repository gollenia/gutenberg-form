import { FC } from 'react';
import DateInput from './Input/DateInput';

import Checkbox from './Input/Checkbox';
import Country from './Input/Country';
import HtmlBlock from './Input/HtmlBlock';
import MailInput from './Input/MailInput';
import NumberInput from './Input/NumberInput';
import Radio from './Input/Radio';
import Select from './Input/Select';

import Telephone from './Input/Telephone';
import TextArea from './Input/TextArea';
import TextInput from './Input/TextInput';

interface InputFieldProps {
	type: string;
	settings: any;
	lang: string;
	disabled: boolean;
	onChange: ( value: any ) => void;
}

const InputField: FC< InputFieldProps > = ( props ) => {
	const { type, settings, onChange, lang, disabled } = props;

	const renderField = ( type: string, settings: any ) => {
		switch ( type ) {
			case 'text':
				return (
					<TextInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'email':
				return (
					<MailInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'select':
				return (
					<Select
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'radio':
				return (
					<Radio
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'date':
				return (
					<DateInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'number':
				return (
					<NumberInput
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'textarea':
				return (
					<TextArea
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'tel':
				return (
					<Telephone
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'checkbox':
				return (
					<Checkbox
						{ ...settings }
						onChange={ onChange }
						disabled={ disabled }
					/>
				);
			case 'country':
				return (
					<Country
						{ ...settings }
						onChange={ onChange }
						lang={ lang }
						disabled={ disabled }
					/>
				);
			case 'html':
				return <HtmlBlock { ...settings } />;

			default:
				return <></>;
		}
	};
	return <>{ renderField( type, settings ) }</>;
};

export default InputField;
