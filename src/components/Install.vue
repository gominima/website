<template>
	<div class="min-h-screen min-w-full flex flex-col justify-center items-center space-y-6 py-16">
		<div class="text-4xl text-primary md:text-6xl font-mons pt-12">Install Minima</div>
		<div class="w-4/5 md:w-1/2 font-semibold md:text-lg text-center">
			No dependencies, just good ol'
			<code class="font-fira">net/http</code> with a custom handler. Use it as a <code class="font-fira">net/http</code> wrapper or as
			an independent framework. Your choice.
		</div>
		<div class="text-2xl font-bold pt-2 text-center">Install Minima as a Go package</div>
		<div class="italic text-center">Run the following code in a terminal</div>
		<div class="mockup-code bg-code w-3/5">
			<pre data-prefix="$"><code class="font-fira">go get github.com/gominima/minima</code></pre>
		</div>
		<div class="text-2xl font-bold pt-2 text-center">Create a simple Minima server</div>
		<div class="italic text-center">Create a Go file and get programming</div>
		<div class="mockup-code bg-code w-3/5">
			<pre>
<code class="font-fira" v-html="setupRelatedCode"></code></pre>
		</div>
		<a
			class="btn btn-secondary text-lg border border-transparent tansition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
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
				`	package main

	import "github.com/gominima/minima"
	
	func main() {
		app := minima.New()
		app.Listen(":3000")
	}
			`,
				'go',
			);
		},
	},
});
</script>
