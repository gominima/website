<template>
 <div class="bg-neutral min-h-screen min-w-full text-neutral-content  flex justify-center items-center">
  <div class="flex flex-col justify-center items-center space-y-6 pt-16 pb-16 w-full">
  <div class="text-3xl md:text-7xl font-mons text-primary">Easy to understand</div>
  <div class="tet-2xl text-center md:text-4xl font-mons text-secondary">Use Minima's utility layer on top of net/http</div>
  <div class="w-4/5 md:w-1/2 font-semibold md:text-lg text-center">Minima is based on hash table which makes it impressivly fast and the it is fully based on net/http with 0 external dependencies.</div>
  <div class="mockup-code bg-code w-2/3  text-sm ">
  <pre ><code v-html="setupRelatedCode"></code></pre>
 </div> 
  <div class="divider">↓</div>
   <div class="border mockup-window border-base-900 w-2/3 bg-code">
  <div class="flex justify-center px-4 py-16 border-t border-base-300 text-3xl md:text-7xl">Hello World!</div>
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