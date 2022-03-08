<template>
	<div class="pt-24 pb-24 flex justify-center flex-col items-center space-y-3 text-center">
		<div class="text-4xl text-primary md:text-6xl font-bold font-mons pt-12">
			Thanks to our Community!
		</div>
		<div v-if="data != null" class="text-center w-full md:w-1/2 text-xl pt-4 md:text-3xl font-mons">
			We are at <strong>{{ data.stargazers_count }}</strong> stars,
			<strong>{{ data.forks }}</strong> forks and over <strong>8+</strong> contributors
		</div>
		<div
			v-if="data != null"
			class="text-xl text-secondary font-semibold font-mons text-center pt-1"
		>
			Become a part of the contributor list by contributing today!
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
			data.value = await (await fetch('https://api.github.com/repos/gominima/minima')).json();
		});
	},
	data() {
		return {
			data,
		};
	},
};
</script>
