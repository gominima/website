<!-- eslint-disable vue/no-v-html -->
<template>
	<div class="shadow drawer drawer-mobile">
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
					aria-hidden="true"
				>
					<g fill="none">
						<path
							d="M9 5l7 7l-7 7"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g></svg
			></label>
			<div class="flex items-stretch flex-col m-auto w-full overflow-hidden bg-base-100">
				<article ref="article" class="py-2.5 px-6 mt-3.5 hover:shadow-md border-x border-solid border-base-200">
					<div class="card">
						<h1 class="card-title text-3xl py-0">
							{{ docs.Name }}
						</h1>
						<p class="mb-5 text-gray-400">
							{{ docs.Description }}
						</p>
						<!-- The <code> and </pre> line must be with 0 tabs to make sure it renders correctly-->
						<div class="mockup-code bg-code">
							<pre data-prefix="1">
<code v-html="docs.Line"></code>
</pre>
						</div>
						<div class="grid grid-cols-2">
							<details
								v-if="docs.Properties"
								class="prose prose-a:text-link prose-a:no-underline ml-4"
								open
							>
								<summary
									class="text-base-content py-2 text-md font-bold uppercase flex gap-1 items-center"
								>
									PROPERTIES
								</summary>
								<ul
									v-for="(property, index) in docs.Properties"
									:key="property.Name + '_' + index"
									class="ml-8 block list-none p-0"
								>
									<li>
										<router-link :to="docs.Name + '?scrollTo=' + property.Name">{{
											property.Name
										}}</router-link>
									</li>
								</ul>
							</details>
							<details
								v-if="docs.Functions"
								class="prose prose-a:text-link prose-a:no-underline ml-4"
								open
							>
								<summary
									class="text-base-content py-2 text-md font-bold uppercase flex gap-1 items-center"
								>
									FUNCTIONS
								</summary>
								<ul
									v-for="(func, index) in docs.Functions"
									:key="func.Name + '_' + index"
									class="ml-8 block list-none p-0"
								>
									<li>
										<router-link :to="docs.Name + '?scrollTo=' + func.Name">{{
											func.Name
										}}</router-link>
									</li>
								</ul>
							</details>
						</div>
						<div>
							<h1 class="card-title text-2xl py-0 my-4">Properties</h1>
							<div
								v-for="(property, index) in docs.Properties"
								:key="property.Name + '_' + index"
								class="prose prose-a:text-link prose-a:no-underline ml-8 mt-3 mb-2"
							>
								<router-link :to="docs.Name + '?scrollTo=' + property.Name">
									.{{ property.Name }}
								</router-link>
								<div class="mb-4 noprose text-gray-400">
									{{ property.Description }}
								</div>
								<div class="font-semibold">
									Type:
									<div class="inline-block whitespace-pre-wrap">
										<span
											><router-link :to="property.Type" class="">{{
												property.Type
											}}</router-link></span
										>
									</div>
									<hr class="mt-2 mb-6 border-gray-500" />
								</div>
							</div>
						</div>
						<div>
							<h1 class="card-title text-2xl py-0 my-4">Functions</h1>
							<div
								v-for="(func, index) in docs.Functions"
								:key="func.Name + '_' + index"
								class="prose prose-a:text-link prose-a:no-underline ml-8 mt-3"
							>
								<router-link :to="docs.Name + '?scrollTo=' + func.Name">
									.{{ func.Name + '()' }}
								</router-link>
								<p class="mb-5 noprose text-gray-400">
									{{ func.Description }}
								</p>
								<div v-if="func.Parameters" class="overflow-x-auto">
									<table class="table w-full">
										<thead>
											<tr>
												<th>Parameter</th>
												<th>Type</th>
												<th>Description</th>
											</tr>
										</thead>
										<tbody
											v-for="(param, _index) in func.Parameters"
											:key="param.Name + '_' + _index"
										>
											<tr>
												<th>{{ param.Name || 'none' }}</th>
												<td>{{ param.Description || 'none' }}</td>
												<td>
													<router-link :to="param.Type" class="text-link bold">{{
														param.Type
													}}</router-link>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="font-semibold">
									Returns:
									<div class="inline-block whitespace-pre-wrap">
										<span
											><router-link :to="func.Returns.Type" class="">{{
												func.Returns.Type
											}}</router-link></span
										>
									</div>
								</div>
								<hr class="mt-2 mb-6 border-gray-500" />
							</div>
						</div>
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
					aria-hidden="true"
				>
					<g fill="none">
						<path
							d="M9 5l7 7l-7 7"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</g></svg
			></label>
			<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
				<li class="mr-2 text-base font-bold text-base-content">STRUCTURES</li>
				<li v-for="(doc, index) in (docsjson as any).Structures" :key="doc.Name + '_' + index">
					<router-link
						:to="'/docs/main/struct/' + doc.Name"
						class="font-sans text-base-content text-base mr-2"
					>
						{{ doc.Name }}
					</router-link>
				</li>
				<li class="mr-2 text-base font-bold text-base-content">FUNCTIONS</li>
				<li v-for="(doc, index) in (docsjson as any).Functions" :key="doc.Name + '_' + index">
					<router-link
						:to="'/docs/main/func/' + doc.Name"
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
import { getDocs as getDocsJson } from '~/store';
import { Doc } from '~/types/Docs';
import { parseMarkdownColors } from '~/util';

export default defineComponent({
	data() {
		return {
			docs: {} as Doc,
			docsjson: {},
		};
	},

	watch:{
		docs(prevV, currV ){
			if(prevV !== currV) {
				(this.$refs.article as HTMLElement ).scrollIntoView({ behavior: 'smooth', block: 'start' })
		  };
		},
	},

	async created() {
		this.$watch(
			() => this.$route.params,
			() => {
				this.getDocs();
			},
			{ immediate: true },
		);
		await this.getDocs();
	},
	methods: {
		async getDocs() {
			let path = this.$route.params.struct as string;
			const docs = await getDocsJson('main');
			this.docsjson = docs;
			this.docs = docs.Structures.find((struct: Doc) => struct.Name === path);
			if (this.docs.Line?.startsWith('<')) return; //return early if line is already formatted
			this.docs.Line = parseMarkdownColors(this.docs.Line, 'go');
		},
	},
});
</script>
