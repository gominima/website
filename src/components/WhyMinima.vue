<template>
 <div class="pt-12 pb-2">
  <section class="flex flex-col bg-secondbg p-6">
  <div class="flex justify-center text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">Why Minima?</div> 
  <div class="flex justify-center text-white text-xl pt-3">Minima has all the tools you need to make the Backend but with a minimal feel.</div>
   </section>
   <section class="grid grid-row-1 md:grid-cols-2 justify-items-center content-center items-center p-6">
   <img class="code-img1" src="../assets/intro.png" alt="code-block">
    <div class="text-grp flex flex-col pt-4 md:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white ">Simple Setup</div>
    <div class="text-xl text-white pt-6 pb-6">Made to be minimal yet easy to learn for begginers and easy to understand from other ecosytems like javascript and python</div>
    <router-link
        class="rounded-md shadow w-1/3 md:w-1/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200"
        to="/docs"
      >
        Documentation
      </router-link>
    </div>
   </section>
    <section class="flex flex-col-reverse md:grid md:grid-cols-2 justify-items-center items-center p-6 bg-secondbg">
 
    <div class="text-grp flex flex-col pt-4 md:pl-10 md:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white">Minimal Routing</div>
    <div class="text-xl text-white pt-6 pb-6">Easy to setup minimal routing made to scale, with multiple router instances at once which can be used in main instance!</div>
    <router-link
        class="rounded-md shadow w-1/3 md:w-1/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition ease-in-out transform hover:-translate-y-1 hover:scale-105 duration-200"
        to="/docs"
      >
        Documentation
      </router-link>
    </div>
       <img class="code-img " src="../assets/router.png" alt="code-block ">
   </section>
 </div>

</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "Features",
})
</script>