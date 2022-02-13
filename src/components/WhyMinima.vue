<template>
	<div class="pt-12 pb-2">
		<section class="flex flex-col bg-secondbg p-6">
			<div class="flex justify-center font-bold text-5xl bg-clip-text">Why Minima?</div>
			<div class="flex text-center justify-center text-base-content text-xl pt-3">
				Minima has all the tools you need to build a fast and reliable backend, without worrying about any external dependencies. Build the code, and it will handle the rest.
			</div>
		</section>
		<section
			class="grid grid-row-1 md:grid-cols-2 justify-items-center content-center items-center p-6"
		>
			<!-- The <code> and </pre> line must be with 0 tabs to make sure it renders correctly-->
			<div class="mockup-code bg-code w-full max-w-xl text-sm mr-4">
				<pre>
<code v-html="setupRelatedCode"></code>
</pre>
			</div>
			<div class="text-grp flex flex-col pt-4 md:pt-0">
				<div class="text-5xl md:text-6xl font-bold text-base-content">Simple Setup</div>
				<div class="text-xl text-base-content pt-6 pb-6">
					Minima is designed to be a beginner friendly framework to develop all your projects with ease without compromising performance
				</div>
				<router-link
					class="btn btn-primary rounded-md shadow w-1/3 md:w-1/4 flex items-center justify-center px-8 py-3 border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
					to="/docs"
				>
					Documentation
				</router-link>
			</div>
		</section>
		<section
			class="flex flex-col-reverse md:grid md:grid-cols-2 justify-items-center items-center p-6 bg-secondbg"
		>
			<div class="text-grp flex flex-col pt-4 md:pl-10 md:pt-0">
				<div class="text-5xl md:text-6xl font-bold text-base-content">Minimal Routing</div>
				<div class="text-xl text-base-content pt-6 pb-6">
					With Minima, you can set up multiple routes simultaneously, quick and easy and use them in your main instance without any trouble.
				</div>
				<router-link
					class="btn btn-primary rounded-md shadow w-1/3 md:w-1/4 flex items-center justify-center px-8 py-3 border border-transparent transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
					to="/docs"
				>
					Documentation
				</router-link>
			</div>
			<!-- The <code> and </pre> line must be with 0 tabs to make sure it renders correctly-->
			<div class="mockup-code bg-code w-full max-w-xl text-sm ml-4">
				<pre>
<code v-html="routingRelatedCode"></code>
</pre>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { parseMarkdownColors } from '~/util';

export default defineComponent({
	data() {
		return {
			setupRelatedCode: '',
			routingRelatedCode: '',
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

		app.Get("/"), func(res *minima.Response, req *minima.Request) {	
			res.OK().Send("Hello World")
		})
		app.Listen(":3000")
	}
			`.trim(), 'go');
			this.routingRelatedCode = parseMarkdownColors(
`
	router := minima.NewRouter()
	router.Get("/", func(res *minima.Response, req *minima.Request) {
		res.OK().Send("Hello world!")
	})

	router.Get("/:id", func(res *minima.Response, req *minima.Request) {	
		res.OK().Send(req.GetParam("id"))
	})

	app.UseRouter(router())
			`.trim(), 'go');
		},
	},
});
</script>
