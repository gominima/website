<template>
 <div class="pt-12 pb-2">
  <section class="flex flex-col bg-secondbg p-6 ">
  <div data-aos="zoom-in" data-aos-duration="500" class="flex justify-center text-transparent font-bold text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">Why Minima?</div> 
  <div  data-aos="fade-up" data-aos-duration="750" class="flex justify-center text-white text-xl pt-3">Minima has all the tools you need to make the Backend but with a minimal feel.</div>
   </section>
   <section class="grid grid-row-1 md:grid-cols-2 justify-items-center content-center items-center p-6 pt-8">
   <img class="code-img1" src="../assets/intro.png" alt="code-block">
    <div class="text-grp flex flex-col pt-4 md:items-center justify-centermd:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white">Simple Setup</div>
    <div class="text-xl text-white pt-6 pb-6">Made to be minimal yet easy to learn for begginers and easy to understand from other ecosytems like javascript and python</div>
      <LinkButton to="docs" label="Documentation" />
    </div>
   </section>
    <section   class="flex flex-col-reverse md:grid md:grid-cols-2 justify-items-center items-center p-6 pt-8 bg-secondbg">
    <div class="text-grp flex flex-col pt-4 md:pl-10 md:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white">Minimal Routing</div>
    <div class="text-xl text-white pt-6 pb-6">Easy to setup minimal routing made to scale, with multiple router instances at once which can be used in main instance!</div>
      <LinkButton to="docs" label="Documentation" />
    </div>
       <img class="code-img " src="../assets/router.png" alt="code-block ">
   </section>
   <section class="grid grid-row-1 md:grid-cols-2 justify-items-center content-center items-center p-6 pt-8 bg-secondbg">
   <img class="code-img1" src="../assets/middleware.png" alt="code-block">
    <div class="text-grp flex flex-col pt-4 md:items-center justify-center md:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white">Middlewares</div>
    <div class="text-xl text-white pt-6 pb-6">Middle ware support like none other, supports net/http handlers and minima handlers both initializing before actual route handlers</div>
      <LinkButton to="docs" label="Documentation" />
    </div>
   </section>
    <section  class="flex flex-col-reverse md:grid md:grid-cols-2 justify-items-center items-center p-6 pt-8">
    
    <div class="text-grp flex flex-col pt-4 md:pl-10 md:pt-0">
    <div class="text-5xl md:text-6xl font-bold text-white">Robust Api</div>
    <div class="text-xl text-white pt-6 pb-6">Robust api ready to be implemented in any work space specially made to scale well</div>
      <LinkButton to="docs" label="Documentation" />
    </div>
          <img class="code-img " src="../assets/robust.png" alt="code-block ">
   </section>
 </div>

</template>

<script  lang="ts">
import { defineComponent } from "@vue/runtime-core";
import LinkButton from '../components/LinkButton.vue'

export default defineComponent({
	name: "Features",
  components: { LinkButton }
})
</script>