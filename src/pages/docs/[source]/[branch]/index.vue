<!-- eslint-disable vue/no-v-html -->
<template>
	<div class="rounded-lg shadow bg-base-200 drawer drawer-mobile">
		<input id="drawer-button" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content">
			<label for="drawer-button" class="mb-4 btn btn-primary drawer-button lg:hidden"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="1.2em"
					height="1.2em"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					class="h-6 w-6 block"
					aria-hidden="true">
					<g fill="none">
						<path
							d="M9 5l7 7l-7 7"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g>
					</svg>
				</label>
			<div class="flex items-stretch flex-col m-auto w-full overflow-hidden bg-base-100">
				<article
					class="py-2.5 px-4 mt-3.5 hover:shadow-md rounded-lg border-x border-solid border-base-200"
				>
					<div class="font-sans text-base-content p-px">
						<div
							class="prose prose-pre:p-3 prose-pre:rounded prose-pre:overflow-x-auto max-w-none prose-img:inline prose-a:text-link prose-a:no-underline prose-h1:border-border prose-h1:border-b-2 prose-h1:mt-1 prose-h1:text-bold prose-h1:border-solid prose-h2:border-b-2 prose-h2:mt-1 prose-h2:text-bold prose-h2:border-solid prose-h2:border-border"
							v-html="readme"
						></div>
					</div>
				</article>
			</div>
		</div>
		<div class="drawer-side">
			<label for="drawer-button" class="drawer-overlay bg-neutral"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="1.2em"
					height="1.2em"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					class="h-6 w-6 block"
					aria-hidden="true">
					<g fill="none">
						<path
							d="M9 5l7 7l-7 7"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g>
					</svg>
				</label>
			<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
				<li class="mr-2 text-base font-bold text-base-content">STRUCTURES</li>
				<li v-for="(doc, index) in (docsjson as any).Structures" :key="doc.Name + '_' + index">
					<router-link
						:to="'/docs/' + $route.params.source + '/' + $route.params.branch + '/struct/' + doc.Name"
						class="font-sans text-base-content text-base mr-2"
					>
						{{ doc.Name }}
					</router-link>
				</li>
				<li class="mr-2 text-base font-bold text-base-content">FUNCTIONS</li>
				<li v-for="(doc, index) in (docsjson as any).Functions" :key="doc.Name + '_' + index">
					<router-link
						:to="'/docs/' + $route.params.source + '/' + $route.params.branch + '/func/' + doc.Name"
						class="font-sans text-base-content text-base mr-2"
					>
						{{ doc.Name }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { getDocs } from '~/store';
import { parseMarkdown } from '~/util';
export default defineComponent({
	data() {
		return {
			readme: '',
			docsjson: {},
		};
	},
	async created() {
		await this.getReadme();
		await this.getDocJson();
	},
	methods: {
		async getReadme() {
			const path = `${this.$route.params.source}/${this.$route.params.branch}`
			const text = await (
				await fetch(`https://raw.githubusercontent.com/gominima/${path}/README.md`)
			).text();
			this.readme = parseMarkdown(text);
		},
		async getDocJson() {
			const path = `${this.$route.params.source}-${this.$route.params.branch}`
			this.docsjson = await getDocs(path);
		},
	},
});
</script>
