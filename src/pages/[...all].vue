<template>
  <div class="pt-8 flex-col items-center grid place-items-center h-screen">
    <div class="sm:text-center lg:text-left">
      <span
        class="block text-7xl font-bold tracking-tight text-center"
        >404</span
      >
      <span
        class="inline-flex mt-24 text-4xl tracking-tight text-base-content text-center"
        >Oops! We couldn't find that page.</span
      >
    </div>
    <div
      class="mt-5 sm:space-x-0 md:space-x-8 lg:space-x-8 sm:mt-8 sm:mx-24 sm:flex sm:justify-center lg:justify-start"
    >
      <div
        class="rounded-md shadow w-full flex items-center justify-center px-8 py-3 mt-10 border border-transparent text-base font-medium text-base-content btn btn-primary transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200"
      >
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <footer class="text-sm text-gray-500 pt-8">
      DEVELOPED BY MINIMA CORE TEAM™
    </footer>
  </div>
</template>
