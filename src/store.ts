import { DocumentationJSON } from "./types/Docs";

const Docs = new Map();

export async function getDocs(key: string): Promise<DocumentationJSON> {
	let returnJSON = {} as DocumentationJSON;
	let cached = true;
	if (Docs.has(key)) {
		cached = false;
		returnJSON = Docs.get(key);
	} else {
		const json = await (
			await fetch(`https://raw.githubusercontent.com/gominima/docs/main/${key}.json`)
		).json();
        Docs.set(key, json)
        returnJSON = json;
	}
	console.log(`FETCH[${key}]: Cached: ${cached}`)
	console.log(returnJSON)
	return returnJSON;
}
