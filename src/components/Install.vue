<template>
	<div
		class="min-h-screen min-w-full flex flex-col justify-center items-center space-y-6 pb-16 pt-16"
	>
		<div class="text-5xl text-primary md:text-7xl font-mons pt-12">Install Minima</div>
		<div class="md:w-1/2 font-semibold md:text-xl text-center">
			No dependencies, pure net/http with custom handler. Can be used as a net/http wrapper or as an
			independent framework
		</div>
		<div class="text-2xl font-bold pt-2">Install minima as go package</div>
		<div class="mockup-code bg-code w-3/5">
			<pre data-prefix="$"><code>go get github.com/gominima/minima</code></pre>
		</div>
		<div class="text-2xl font-bold pt-2">Create simple minima server</div>
		<div class="mockup-code bg-code w-3/5">
			<pre>
<code v-html="setupRelatedCode"></code></pre>
		</div>
		<a
			class="btn text-4xl border border-transparent tansition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
			href="https://guide.gominima.studio"
		>
			Get Started
		</a>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { parseMarkdownColors } from '~/util';
export default defineComponent({
	data() {
		return {
			setupRelatedCode: '',
		};
	},
	created() {
		this.getCode();
	},
	methods: {
		async getCode() {
			this.setupRelatedCode = parseMarkdownColors(
				`
	package main

	import "github.com/gominima/minima"
	
	func main() {
		app := minima.New()
		app.Listen(":3000")
	}
			`.trim(),
				'go',
			);
		},
	},
});
</script>
