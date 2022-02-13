<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
  name: 'Hero'
});
</script>

<template>
  <div class="flex justify-center pt-8 flex-col items-center pb-12">
    <div class="sm:text-center lg:text-left">
      <h1
        class="text-4xl tracking-tight text-base-content sm:text-5xl md:text-6xl text-center"
      >
        <span class="inline-flex">The</span>
        <i
          class="text-7xl font-thin relative top-3 px-2 mr-2 fa-brands fa-golang inline-flex"
        ></i>
        <span class="inline-flex">framework</span>
        <span class="text-primary block">to scale</span>
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
    <div
      class="mt-5 sm:space-x-0 md:space-x-8 lg:space-x-8 sm:mt-8 sm:mx-24 sm:flex sm:justify-center lg:justify-start"
    >
      <router-link
        class="btn btn-primaryborder border-transparent hover:scale-105 normal-case"
        to="/docs"
      >
        Documentation
      </router-link>

      <a
        class="btn btn-primary border border-transparent tansition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200 normal-case"
        href="https://guide.gominima.studio"
      >
        Get Started
      </a>
    </div>
    <footer class="text-sm text-gray-500 pt-8">
      DEVELOPED BY MINIMA CORE TEAM™
    </footer>
  </div>
</template>
