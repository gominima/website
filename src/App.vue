<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar }
}
</script>