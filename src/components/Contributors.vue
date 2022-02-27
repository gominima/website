<template>
<div class="pt-24 pb-24 flex justify-center flex-col items-center">
 <div class="text-secondary text-5xl md:text-7xl font-mons">Thanks to Community</div>
  <div v-if="data != null" class="text-center w-1/2 text-2xl pt-4 md:text-3xl font-mons">Due to this amazing community today we are at {{data.stargazers_count}} stars, {{data.forks}} forks and over 8+ contributors</div>
 <a class="pt-6" href="https://github.com/gominima/minima/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gominima/minima" />
</a>
</div>
</template>


<script lang="ts">
 import axios from "axios"
 import {onMounted, ref} from "vue"
 const data = ref()
export default {
	setup(){
		onMounted(()=> {
                  axios.get("https://api.github.com/repos/gominima/minima").then (r => {
			data.value = r.data
		  }).catch(err => {
			console.log(err)
		  })
		})
		return {
                   data
		}
	}
}
</script>