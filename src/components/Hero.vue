<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
	name: 'Hero',
});
</script>

<template>
	<div class="flex justify-center pt-8 flex-col items-center pb-12">
		<div class="text-center">
			<div
				class="text-5xl tracking-tight text-base-content sm:text-5xl md:text-6xl text-center"
			>
				<span class="inline-flex">The</span>
				<i class="text-7xl relative top-3 px-3 mr-2 -ml-2 fa-brands fa-golang inline-flex"></i>
				<span class="inline-flex">framework</span>
				<span class="text-primary block">to scale</span>
			</div>
		</div>
		<div
			class="mt-3 text-basepl-4 pr-4 md:p-2 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center font-open"
		>
			Minima is a reliable and lightweight framework for Go to carve the web. Developed with core
			<code>net/http</code>
			and other native packages, and with
			<span class="italic">zero</span>
			external dependencies.
		</div>
		<div
			class="mt-3 text-base text-center sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-open"
		>
			Start using Minima with your existing projects!
		</div>
		<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
			<div class="rounded-md shadow">
				<a
					href="https://guide.gominima.studio"
					class="w-full flex items-center justify-center px-8 text-lg btn btn-primary border border-transparent tansition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
				>
					Get started
				</a>
			</div>
			<div class="mt-3 sm:mt-0 sm:ml-3">
				<router-link
					class="w-full flex items-center justify-center px-6 text-lg btn border border-transparent tansition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case md:py-4 lg:py-0 md:text-lg md:px-6"
					to="/docs"
				>
					Documentation
				</router-link>
			</div>
		</div>
		<footer class="text-sm text-center pt-8">DEVELOPED BY MINIMA CORE TEAM™</footer>
	</div>
</template>
