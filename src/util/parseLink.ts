export const BASE_URL = 'https://pkg.go.dev';

export enum PACKAGE_URL {
	'http' = 'net/http',
	'multipart' = 'mime/multipart',
    'json' = 'encoding/json',
}

export function parseLink(text: string) {
	//eslint-disable-next-line
	const array = text.split(/[\[\]\*\.]/g).filter((key) => key != '');

    const module = array[0] as keyof typeof PACKAGE_URL;

	return PACKAGE_URL[module] ? `${BASE_URL}/${PACKAGE_URL[module]}#${array[1]}` : array[0];
}
