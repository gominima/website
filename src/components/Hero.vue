<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
	name : "Hero",
	setup(){

	}
})
</script>


<template>
<div class="flex justify-center pt-8 flex-col items-center">
  <div class="text-4xl md:text-8xl text-white font-bold">The Golang framework</div>
   <div class="text-4xl md:text-8xl text-white font-bold">to scale</div>
    <div class="text-md md:text-2xl text-gray-300 text-center pt-8">Minima offers you the most minimal developer experience with everything that is needed to scale,</div>
    <div class="text-md md:text-2xl text-gray-300 text-center ">start using minima with your exsisting net/http projects!</div>
    <div class="flex space-x-10 pt-8">
	<button class="p-3 rounded-full text-xl font-semibold text-white bg-hero ">Documentation</button>
	<button class="p-3 rounded-full text-xl font-semibold text-white bg-gray-600">Explore utility</button>
	
    </div>
    <div class="text-sm text-gray-500 pt-8">DEVELOPED BY MINIMA CORE TEAM™</div>
 </div>
</template>