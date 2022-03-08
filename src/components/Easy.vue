<template>
	<div
		class="bg-neutral min-h-screen min-w-full text-neutral-content flex justify-center items-center"
	>
		<div class="flex flex-col justify-center items-center space-y-6 pt-16 pb-16 w-full">
			<div class="text-3xl md:text-6xl font-bold font-mons text-center text-primary">
				Simple and flexible
			</div>
			<div class="text-2xl text-center md:text-3xl font-medium font-mons text-secondary">
				Use Minima's utility layer on top of <code class="font-fira">net/http</code>
			</div>
			<div class="w-4/5 md:w-1/2 md:text-lg text-center font-open">
				Minima is based on a custom implementation of radix tree which makes it extremely fast and
				efficient. Also, it is fully compatible with <code class="font-fira">net/http</code> which
				makes it a great choice for your next project.
			</div>
			<div class="mockup-code bg-code w-3/5 text-sm">
				<pre><code class="font-fira" v-html="setupRelatedCode"></code></pre>
			</div>
			<div class="divider">↓</div>
			<div class="border mockup-window border-base-900w-3/5 bg-code">
				<div
					class="flex justify-center px-20 py-16 border-t border-base-300 text-3xl md:text-5xl font-mons"
				>
					Hello World!
				</div>
			</div>
		</div>
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

		app.Get("/", func(res *minima.Response, req *minima.Request) {
			res.OK().Send("Hello World")
		})

		app.Listen(":3000")
	}`,
				'go',
			);
		},
	},
});
</script>
