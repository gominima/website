<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Ref, ref } from "vue";
export default defineComponent({
  name: "Navbar",
  setup() {
    const Visible: Ref<boolean> = ref<boolean>(false);
    const Toggle = () => {
      Visible.value = !Visible.value;
    };
    window.addEventListener("resize", () => {
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
  <header class="p-4">
    <div class="container flex justify-between h-16 mx-auto">
      <div class="flex items-center py-3">
        <a href="#" class="text-blue-500 hover:text-blue-600">
          <span class="text-2xl font-bold tracking-tight">Minima</span>
        </a>
      </div>

      <div class="items-center flex-shrink-0 hidden lg:flex">
        <a
          href="#"
          class="self-center py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Documentation
        </a>
        <a
          href="#"
          class="self-center px-8 py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Guide
        </a>
        <a
          href="#"
          class="self-center px-8 py-3 font-semibold rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Get started
        </a>
      </div>

      <!-- Mobile menu -->
      <!-- FIX: Toggle element on mobile -->

      <div
        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right sm:visible md:hidden lg:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >Documentation</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >Guide</a
            >
          </div>
          <a
            href="#"
            class="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
          >
            Get started
          </a>
        </div>
      </div>

      <!-- Close Menu button on mobile -->
      <!-- FIX: Toggle element on mobile -->

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
