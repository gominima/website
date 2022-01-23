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
      <div class="flex items-center">
        <a href="#" class="text-blue-600 hover:text-blue-700">
          <span class="text-2xl font-bold tracking-tight">Minima</span>
        </a>
      </div>
      <div class="items-center flex-shrink-0 hidden lg:flex">
        <button class="self-center px-8 py-3 rounded text-white">
          Documentation
        </button>
        <button
          class="self-center px-8 py-3 font-semibold rounded bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign up
        </button>
      </div>
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
