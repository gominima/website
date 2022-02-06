<template>
	<div class="navbar mb-2 shadow-lg text-base-content">
		<div class="px-2 mx-2 navbar-start">
			<router-link class="text-lg font-bold" to="/"> Minima </router-link>
		</div>
		<div class="hidden navbar-end lg:flex">
			<div class="flex items-stretch">
				<router-link class="btn btn-ghost btn-sm rounded-btn normal-case" to="/docs">
					Documentation
				</router-link>
				<a
					class="btn btn-ghost btn-sm rounded-btn normal-case"
					href="https://guide.gominima.studio"
				>
					Guide
				</a>
			</div>
			<div class="dropdown dropdown-end" title="Theme">
				<div tabindex="0" class="m-1 normal-case btn-ghost btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current md:mr-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
						/>
					</svg>
					<span class="hidden md:inline"> Theme </span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="inline-block w-4 h-4 ml-1 fill-current"
						viewBox="0 0 1792 1792"
					>
						<path
							d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
						/>
					</svg>
				</div>
				<div
					class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box bg-base-200 text-base-content"
				>
					<ul class="p-4 menu compact">
						<li v-for="(theme, index) in themes" :key="theme.name + index">
							<a tabindex="0" :data-set-theme="theme.id" data-act-class="active">{{
								theme.name
							}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { themeChange } from 'theme-change';
import { Ref, ref } from 'vue';
export default defineComponent({
	name: 'Navbar',
	setup() {
		const Visible: Ref<boolean> = ref<boolean>(false);
		const Toggle = () => {
			Visible.value = !Visible.value;
		};
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				Visible.value = false;
			}
		});
		return {
			Visible: Visible,
			Toggle: Toggle,
		};
	},
	data() {
		return {
			scrolled: false,
			themes: [
				{ id: 'light', name: 'Light' },
				{ id: 'forest', name: 'Dark' },
			],
		};
	},
	mounted() {
		themeChange(false);
		window.document.onscroll = () => {
			let navBar = document.getElementById('nav');
			if (navBar && window.scrollY > navBar.offsetTop) {
				this.scrolled = true;
			} else {
				this.scrolled = false;
			}
		};
	},
	methods: {
		toggleNavClass() {
			if (this.scrolled == false) {
				return false;
			} else {
				return true;
			}
		},
	},
});
</script>
