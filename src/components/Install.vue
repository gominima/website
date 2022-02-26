<template>
 <div class="min-h-screen min-w-full flex flex-col justify-center items-center space-y-6">
 <div class="text-5xl md:text-7xl font-mons pt-12">Install Minima</div>
 <div class="w-1/2 md:w-1/2 font-semibold md:text-xl text-center">No dependencies, pure net/http with custom handler. Can be used as a net/http wrapper or as an independent framework</div>
  <div class="text-2xl font-bold pt-2">Install minima as go package</div>
  <div class="mockup-code bg-code">
  <pre data-prefix="$"><code>go get github.com/gominima/minima</code></pre>
 </div>
 <div class="text-2xl font-bold pt-2">Create simple minima server</div>
  <div class="mockup-code bg-code pb-12">
  <pre ><code v-html="setupRelatedCode"></code></pre>
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
`
	package main

	import ("github.com/gominima/minima")
	//main.go file
	func main() {
		app := minima.New()
		app.Listen(":3000")
	}
			`.trim(), 'go');
		}}
});
</script>