<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Hero",
  setup() {},
});
</script>

<template>
  <div class="flex justify-center pt-8 flex-col items-center">
    <div class="sm:text-center lg:text-left">
      <h1
        class="text-4xl tracking-tight text-white sm:text-5xl md:text-6xl text-center"
      >
        <span class="inline-flex">The</span>
        <i
          class="text-7xl font-thin relative top-3 px-2 mr-2 fa-brands fa-golang inline-flex"
        ></i>
        <span class="inline-flex">framework</span>
        <span class="block text-blue-600 xl:inline">to scale</span>
      </h1>
    </div>
    <div
      class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center"
    >
      Minima 🦄 is a reliable and lightweight framework for Go to carve the web
      💻. Developed with core
      <code class="inline-block text-base font-semibold"> net/http </code>
      and other native packages, and with
      <span class="italic">zero</span>
      external dependencies.
    </div>
    <div
      class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
    >
      Start using minima with your existing projects!
    </div>
    <div class="flex space-x-10 pt-8">
      <button
        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200"
      >
        Documentation
      </button>
      <button
        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200"
      >
        Explore utility</button
      >s
    </div>
    <div class="text-sm text-gray-500 pt-8">DEVELOPED BY MINIMA CORE TEAM™</div>
  </div>
</template>
