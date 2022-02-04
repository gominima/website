<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
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
});
</script>

<template>
  <header class="pt-4 pb-4 pr-0 pl-0">
    <div class="bg-mainbg container flex justify-between h-16 mx-auto rounded">
      <div class="flex items-center py-3">
        <router-link to="/">
          <img
            src="../assets/minimaLogo.png"
            class="relative -left-[35%] sm:-left-[35%] md:-left-[40%] lg:-left-[40%] transform scale-[0.3] sm:scale-[0.3] md:scale-[0.15] lg:scale-[0.15]"
          />
        </router-link>
      </div>

      <div class="items-center flex-shrink-0 hidden lg:flex">
        <router-link
          to="/docs"
          class="self-center py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Documentation
        </router-link>
        <a
          href="https://guide.gominima.studio"
          class="self-center px-8 py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Guide
        </a>
      </div>

      <!-- Mobile menu -->
      <!-- FIX: Toggle element on mobile -->

      <!-- <div
        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right sm:visible lg:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-[#0c1f56] ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="-mr-2">
              <button
                type="button"
                class="bg-[#143797] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-[#0f276c]"
              >Documentation</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-100 hover:bg-[#0f276c]"
              >Guide</a
            >
          </div>
          <a
            href="#"
            class="block w-full px-5 py-3 text-center font-medium text-blue-400 bg-[#112f82] hover:bg-[#0f276c]"
          >
            Get started
          </a>
        </div>
      </div> -->

      <!-- Close Menu button on mobile -->

      <button class="p-4 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-blue-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>
