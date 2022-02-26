<template>
  <section class="min-w-screen min-h-screen">
    <WhatsNew />
    <Hero />
    <Features/>
  </section>
</template>

<script lang="ts">
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue'
export default {
  components: { WhatsNew, Hero, Features},
};
</script>
