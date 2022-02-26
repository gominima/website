import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { marked } from 'marked';

const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const getEscapeReplacement = (ch: string) => escapeReplacements[ch];
export function escape(html: string, encode: boolean) {
	if (encode) {
		if (escapeTest.test(html)) {
			return html.replace(escapeReplace, getEscapeReplacement);
		}
	} else {
		if (escapeTestNoEncode.test(html)) {
			return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
		}
	}

	return html;
}

class myRenderer extends marked.Renderer {
	code(code: string, language: string | undefined, isEscaped: boolean) {
		const lang = ((language || '').match(/\S*/) || '')[0];
		if (this.options.highlight) {
			const out = this.options.highlight(code, lang);
			if (out != null && out !== code) {
				isEscaped = true;
				code = out;
			}
		}

		code = code.replace(/\n$/, '') + '\n';

		if (!lang) {
			return '<pre><code>' + (isEscaped ? code : escape(code, true)) + '</code></pre>\n';
		}

		return (
			'<pre style="background-color: #060404"><code class="' +
			this.options.langPrefix +
			escape(lang, true) +
			'">' +
			(isEscaped ? code : escape(code, true)) +
			'</code></pre>\n'
		);
	}
	constructor() {
		super();
	}
}

export function parseMarkdown(text: string) {
	return marked.setOptions({
		highlight: function (code, lang) {
			return parseMarkdownColors(code, lang)
		},
		renderer: new myRenderer(),
	})(text);
}

export function parseMarkdownColors(text: string, lang: string) {
	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
	return hljs.highlight(text, { language }).value;
}
