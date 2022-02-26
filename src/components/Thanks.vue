<template>
<div class="min-h-screen min-w-full pt-16 pb-16 flex justify-center items-center flex-col space-x-6">
 <div class="text-4xl md:text-7xl font-mons">Thanks to Community</div>
 <div class="md:text-xl font-mons pt-1 text-center">Due to them we today are at {{data.stargazers_count}} stars, with {{data.forks_count}} forks and 10+ contributors and 5 core maintainors</div>
  <div class="text-3xl md:text-5xl font-mons pt-6">Maintainors</div>
  <ul class="flex flex-row justify-center space-x-6 pt-4">
  <li v-for="user in m" :key="user.name">
    <div class="avatar">
   <a href="{{user.github}}" class="w-18 md:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="{{user.av}}" alt={{user.name}}>
  </a>
</div>
 </li>
</ul>
<div class="text-3xl md:text-5xl font-mons pt-4">Contributors</div>
<img class="p-4" src="https://github.com/gominima/minima/graphs/contributors" alt="minima-contributors">
</div>
</template>

<script lang="ts">
 import axios from "axios"
 import {onMounted, ref} from "vue"
 import maintainors from "../assets/maintainors.json"
const data = ref()
const maintainorsref = ref()
export default {
	setup(){
		onMounted(()=> {
		 maintainorsref.value = maintainors 
                  axios.get("https://api.github.com/repos/gominima/minima").then (r => {
                    console.log(r.data)
			data.value = r.data
		  }).catch(err => {
			console.log(err)
		  })
		})
		return {
                   data: data,
		   m: maintainorsref
		}
	}
}
</script>