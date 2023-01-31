import { FC } from 'react'

interface InputFieldProps {
	type: string,
	settings: Object
}

const InputField: FC<InputFieldProps> = (props) => {
	const {type, settings} = props

	const renderField = (type: string, settings: Object) => {
		
			switch(type) {
			  	case 'text':
					return <TextInput type={type} {...settings}/>
				case 'email':
					return <MailInput {...settings}/>
				case 'select':
					return <Select {...settings}/>
				case 'radio':
					return <MailInput {...settings}/>
				case 'date':
					return <MailInput {...settings}/>
				case 'number':
					return <MailInput {...settings}/>
				case 'submit':
					return <MailInput {...settings}/>
				case 'textarea':
					return <TextArea {...settings}/>
				case 'tel':
					return <Telephone {...settings}/>						
			  	default:
					return 'foo';
			}
		
	}
	return (
		<>{ renderField(type, settings) }</>
  	)
}

export default InputField