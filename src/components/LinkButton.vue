<template>
	<router-link :class="classes" :to="'/' + to">
		{{ label }}
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
	name: 'LinkButton',
	props: {
		to: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'default' || '',
			required: false,
		},
	},
	setup(props) {
		const classes = (() => {
			const defaultClasses =
				'rounded-md shadow w-fit lg:w-1/3 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200';
			switch (props.type) {
				case 'any':
					break;

				case 'default' || '':
					return defaultClasses;
			}
		})();

		return {
			classes,
		};
	},
});
</script>