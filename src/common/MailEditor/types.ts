export type AvailableField = {
	label: string;
	value: string;
	type: string;
};

export type EmailTemplateMentionItem =
	| {
			id: string;
			kind: 'token';
			label: string;
			searchText: string;
			token: string;
	  }
	| {
			id: string;
			kind: 'command';
			label: string;
			searchText: string;
			command: 'bulletList' | 'orderedList';
	  };

export type ThemeColor = {
	name: string;
	color: string;
	slug?: string;
};

export type BodyCommandState = {
	trigger: '@' | '/';
	query: string;
	from: number;
	to: number;
};

export type SubjectCommandState = {
	query: string;
	from: number;
	to: number;
};

export type TemplateEditorProps = {
	title: string;
	visible: boolean;
	setVisible: (visible: boolean) => void;
	subject: string;
	onSubjectChange: (value: string) => void;
	body: string;
	onBodyChange: (value: string) => void;
	availableFields: AvailableField[];
	extraControls?: React.ReactNode;
};
