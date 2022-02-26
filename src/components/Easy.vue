<template>
 <div class="bg-neutral min-h-screen min-w-full text-neutral-content  flex justify-center items-center">
  <div class="flex flex-col justify-center items-center space-y-6 pl-1.5 pr-1.5 pt-16 pb-16">
  <div class="text-5xl md:text-7xl font-mons">Easy to understand</div>
  <div class="tet-3xl md:text-4xl font-mons">using minima's utility layer on top of net/http</div>
  <div class="w-2/3 md:w-1/2 font-semibold md:text-lg text-center">Minima is based on hash table which makes it impressivly fast and the framework itself is fully based on net/http with 0 external dependencies.</div>
  <div class="mockup-code bg-code w-2/3  text-sm ml-4">
  <pre ><code v-html="setupRelatedCode"></code></pre>
 </div> 
 <div class="divider text-neutral-content text-opacity-30">↓</div>
   <div class="border mockup-window border-base-900 w-2/3">
  <div class="flex justify-center px-4 py-16 border-t border-base-300 text-5xl md:text-7xl">Hello World!</div>
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
`
	package main
	import "github.com/gominima/minima"
	func main() {
		app := minima.New()
		app.Get("/", func(res *minima.Response, req *minima.Request) {	
			res.OK().Send("Hello World")
		})
		app.Listen(":3000")
	}
			`.trim(), 'go');
		}}
});
</script>