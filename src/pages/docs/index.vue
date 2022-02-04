<template>
	<Navbar />
	<div class="flex items-stretch flex-col m-auto">
		<article
			class="bg-mainbg mx-7 font-sans flex flex-col py-2.5 pb-2.5 pr-4 pl-4 mt-3.5 border-b border-solid border-gray-400 dark:border-dark-primary hover:shadow-md rounded-lg"
		>
			<div class="font-sans text-white p-px">
				<div v-html="readme"></div>
			</div>
		</article>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { parseMarkdown } from '~/util';
export default defineComponent({
	data() {
		return {
			readme: '',
		};
	},
	async created() {
		await this.getReadme();
	},
	methods: {
		async getReadme() {
			const text = await (
				await fetch('https://raw.githubusercontent.com/gominima/minima/main/README.md')
			).text();
			this.readme = parseMarkdown(text);
		},
	},
});
</script>
