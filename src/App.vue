<template>
  <Navbar />
  <router-view />
  <Footer/>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from "./components/Footer.vue"
export default {
  components: { Navbar, Footer }
}
</script>