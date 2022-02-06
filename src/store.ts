const Docs = new Map();

export async function getDocs(key: string) {
	if (Docs.has(key)) {
		return Docs.get(key);
	} else {
		const json = await (
			await fetch(`https://raw.githubusercontent.com/gominima/docs/main/${key}.json`)
		).json();
        Docs.set(key, json)
        return json;
	}
}
