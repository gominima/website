<template>
  <section class="min-w-screen min-h-screen bg-mainbg">
    <Navbar />
    <WhatsNew />
    <Hero />
    <WhyMinima/>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import WhatsNew from '../components/WhatsNew.vue';
import Hero from '../components/Hero.vue';
import WhyMinima from "../components/WhyMinima.vue"
export default {
  components: { Navbar, WhatsNew, Hero, WhyMinima},
};
</script>
