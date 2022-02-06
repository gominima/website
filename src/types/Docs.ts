export interface Doc {
	Name: string;
	Line: string;
	Description: string;
	Properties: {
		Name: string;
		Type: string;
		Description: string;
	}[];
	Functions: {
		Name: string;
		Line: string;
		Description: string;
		Parameters: {
			Name: string;
			Type: string;
			Description: string;
		}[];
		Returns: {
			Type: string;
			Description: string;
		};
	}[];
	Returns: {
		Type: string;
		Description: string;
	};
}