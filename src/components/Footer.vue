<template>
<div>
<footer class="p-10 footer bg-base-200 text-base-content">
  <div>
   <img src="../assets/minimaLogo.png" class="w-32" alt="minima">
    <p>GoMinima<br>The Go framework to scale</p>
  </div> 
  <div>
    <span class="footer-title">Projects</span> 
    <a class="link link-hover" href="https://github.com/gominima/minima">Minima</a>
     <a class="link link-hover" href="https://github.com/gominima/mux">Mux Router</a> 
    <a class="link link-hover"  href="https://github.com/gominima/docgen">Docgen</a> 
    <a class="link link-hover"  href="https://github.com/gominima/go-requests">GoRequests</a> 
  </div> 
  <div>
    <span class="footer-title">Github Stats</span> 
    <a class="link link-hover font-bold" href="https://github.com/gominima/minima/stargazers">{{data.stargazers_count}} stars</a> 
    <a class="link link-hover font-bold" href="https://github.com/gominima/minima/fork">{{data.forks}} forks</a> 
    <a class="link link-hover font-bold" href="https://github.com/gominima/minima/graphs/contributors">10+ Contributors</a> 
    <a class="link link-hover font-bold" href="{{data.license.url}}" >{{data.license.name}}</a>
  </div> 
  <div>
    <span class="footer-title">Links</span> 
    <a class="link link-hover" href="https://discord.com/invite/gRyCr5APmg">Discord</a> 
    <a class="link link-hover" href="https://github.com/gominima/minima">Github</a> 
    <a class="link link-hover" href="https://github.com/gominima">Other Projects</a>
  </div>
</footer>
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
                    console.log(r.data)
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