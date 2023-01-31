import { __ } from '@wordpress/i18n';
import { FC, useEffect, useState } from 'react';

interface GutenFormProps {
	id: string
}


const GutenForm: FC<GutenFormProps> = (props) => {
	const {id} = props

	const [status, setStatus] = useState(1)
	const [fields, setFields] = useState<Array<any>>([])

	useEffect(() => {
		if(!id) return;
		fetch(`wp-json/gbf-form/v2/form/${id}`).then(response => response.json()).then(data => {
			setFields(data);
			setStatus(2);
		})
	}, [])

	console.log(fields)

	if(status == 0) return <>{ __('Form is beeing loaded', 'gutenberg-form') }</>
	
	return (
		<form>
			{fields.map((field, index) => {
				return <p key={index}>hihi: {field.settings.label}</p>
			})}
		</form>
	)
}

export default GutenForm