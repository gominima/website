<template>
  <section class="min-w-screen min-h-screen">
    <WhatsNew />
    <Hero />
    <EasyToUnderstand/>
    <Install/>
    <Tryit/>
    <Thanks/>
  </section>
</template>

<script lang="ts">
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';
import EasyToUnderstand from '../components/Easy.vue'
import Install from "../components/Install.vue"
import Tryit from "../components/TryIt.vue"
import Thanks from "../components/Thanks.vue"
export default {
  components: { WhatsNew, Hero, EasyToUnderstand, Install, Tryit, Thanks},
};
</script>
