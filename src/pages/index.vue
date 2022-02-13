<template>
  <section class="min-w-screen min-h-screen">
    <WhatsNew />
    <Hero />
    <WhyMinima/>
  </section>
</template>

<script lang="ts">
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';
import WhyMinima from "../components/WhyMinima.vue"
export default {
  components: { WhatsNew, Hero, WhyMinima},
};
</script>
