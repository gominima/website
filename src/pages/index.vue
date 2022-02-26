<template>
  <section class="min-w-screen min-h-screen">
    <WhatsNew />
    <Hero />
    <EasyToUnderstand/>
    <Install/>
  </section>
</template>

<script lang="ts">
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';
import EasyToUnderstand from '../components/Easy.vue'
import Install from "../components/Install.vue"
export default {
  components: { WhatsNew, Hero, EasyToUnderstand, Install},
};
</script>
