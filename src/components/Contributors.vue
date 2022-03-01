<template>
	<div class="pt-24 pb-24 flex justify-center flex-col items-center">
		<div class="text-secondary text-2xl md:text-7xl font-mons">Thanks to our Community!</div>
		<div
			v-if="data != null"
			class="text-center w-full md:w-1/2 text-xl pt-4 md:text-3xl font-mons"
		>
			We are at {{ data.stargazers_count }} stars,
			{{ data.forks }} forks and over 8+ contributors
		</div>
		<a class="pt-6" href="https://github.com/gominima/minima/graphs/contributors">
			<img src="https://contrib.rocks/image?repo=gominima/minima" />
		</a>
	</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
const data = ref();

export default {
	setup() {
		onMounted(async () => {
			data.value = await (
				await fetch('https://api.github.com/repos/gominima/minima')
			).json();
		});
	},
	data() {
		return {
			data,
		};
	},
};
</script>
