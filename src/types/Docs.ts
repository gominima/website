export interface Meta {
	Generator: string;
	Format: string;
	Date: string;
}

export interface Documentation {
	Name: string;
	Line: string;
	Type: string;
	Description: string;
}

export interface _Function extends Documentation {
	Parameters: Documentation[];
	Returns?: {
		Type: string;
	};
}

export interface _Structure extends Documentation {
	Properties: Documentation[];
	Functions: _Function[];
}

export interface DocumentationJSON {
	Meta: Meta;
	Structures: _Structure[];
	Functions: _Function[];
}
