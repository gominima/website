<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
	name: 'WhatsNew',
});
</script>

<template>
	<div
		class="flex justify-center pt-12 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-150"
	>
		<div
			class="flex justify-center items-center w-64 md:w-96 lg:w-96 bg-base-300 py-2 px-2 rounded-full group"
		>
			<div class="pt-1 pb-1 p-4 rounded-full btn-secondary font-semibold">New</div>
			<span class="truncate text-base-content ml-2 font-open">
				<a href="https://github.com/gominima/minima/releases" target="_blank">
					Version 1 has launched! 🚀
				</a>
			</span>
			<font-awesome-icon
				class="text-white flex justify-center items-center ml-2 transition ease-in duration-200 group-hover:flex group-hover:translate-x-1"
				:icon="['fas', 'chevron-right']"
			/>
		</div>
	</div>
</template>
