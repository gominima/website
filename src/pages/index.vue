<template>
  <section class="min-w-screen min-h-screen">
    <WhatsNew />
    <Hero />
  </section>
</template>

<script lang="ts">
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';

export default {
  components: { WhatsNew, Hero},
};
</script>
