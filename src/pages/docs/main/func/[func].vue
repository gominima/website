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
					</g>
				</svg>
			</label>
			<div class="flex items-stretch flex-col m-auto w-full overflow-hidden bg-base-100">
				<article class="py-2.5 px-6 mt-3.5 hover:shadow-md border-x border-solid border-base-200">
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
						<div>
							<div v-if="(docs as any).Parameters" class="overflow-x-auto">
								<table class="table w-full mt-4">
									<thead>
										<tr>
											<th>Parameter</th>
											<th>Type</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody
										v-for="(param, _index) in (docs as any).Parameters"
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
										><router-link :to="docs.Returns.Type" class="">{{ docs.Returns.Type }}</router-link></span
									>
								</div>
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
					</g>
				</svg>
			</label>
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
			let path = this.$route.params.func as string;
			const docs = await getDocsJson('main');
			this.docsjson = docs;
			this.docs = docs.Functions.find((func: Doc) => func.Name === path);
			if (this.docs.Line.startsWith('<')) return; //return early if line is already formatted
			this.docs.Line = parseMarkdownColors(this.docs.Line, 'go');
		},
	},
});
</script>
