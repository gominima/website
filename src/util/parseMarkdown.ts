import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { marked } from 'marked';

export function parseMarkdown(text: string) {
	return marked.setOptions({
		highlight: function (code, lang) {
			return parseMarkdownColors(code, lang)
		},
	})(text);
}

export function parseMarkdownColors(text: string, lang: string) {
	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
	return hljs.highlight(text, { language }).value;
}
