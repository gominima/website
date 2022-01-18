<script lang="ts">
import { defineComponent} from "@vue/runtime-core";
import {Ref, ref} from "vue"
export default defineComponent({
 name: "Navbar",
 setup(){
	const Visible:Ref<boolean> = ref<boolean>(false)
	const Toggle = () => {
		Visible.value = !Visible.value
	}
	window.addEventListener("resize", ()=> {
		if(window.innerWidth > 768) {
			Visible.value = false
		}
	})
	return {
	      Visible: Visible,
	      Toggle: Toggle
	}
 }
})
</script>

<template>
<div>
 <div class="flex justify-between p-6 bg-mainbg"> 
	 <div class="Hero text-3xl font-bold text-white">Minima</div>
	 <ul  class="hidden md:flex flex-row  space-x-10">
		 <li class="links text-2xl font-semibold text-gray-200">Documentation</li>
		 <li class="links text-2xl font-semibold text-gray-200">Guide</li>
		 <button class="bg-hero pt-1 pl-2 pr-2 pb-1 text-white font-semibold text-xl text-center rounded-full">Get started</button>
	 </ul>
	 <div class="button flex md:hidden text-3xl">
           <i @click="Toggle" class="fas fa-ellipsis-v rotate-90 text-white"></i>
	 </div>
 </div>
        <ul v-if="Visible"  class="pl-6 space-y-4 justify-start w-32 text-left">
		 <li class="links text-1xl font-bold text-gray-200">Documentation</li>
		 <li class="links text-1xl font-bold text-gray-200">Guide</li>
		 <button class="bg-hero pt-1 pl-2 pr-2 pb-1 text-white text-md text-center rounded-full">Get started</button>
	 </ul>
</div>
</template>