<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { Ref, ref } from 'vue';
export default defineComponent({
  name: 'Navbar',
  setup() {
    const Visible: Ref<boolean> = ref<boolean>(false);
    const Toggle = () => {
      Visible.value = !Visible.value;
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        Visible.value = false;
      }
    });
    return {
      Visible: Visible,
      Toggle: Toggle,
    };
  },
});
</script>

<template>
  <header class="pt-4 pb-4 pr-0 pl-0">
    <div class="bg-mainbg container flex justify-between h-16 mx-auto rounded">
      <div class="flex items-center py-3">
        <router-link to="/">
          <img
            src="../assets/minimaLogo.png"
            class="relative -left-[35%] sm:-left-[35%] md:-left-[40%] lg:-left-[40%] transform scale-[0.3] sm:scale-[0.3] md:scale-[0.15] lg:scale-[0.15]"
          />
        </router-link>
      </div>

      <div class="items-center flex-shrink-0 hidden lg:flex">
        <router-link
          to="/docs"
          class="self-center py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Documentation
        </router-link>
        <a
          href="https://guide.gominima.studio"
          class="self-center px-8 py-3 rounded text-white hover:text-gray-200 hover:underline"
        >
          Guide
        </a>
      </div>
    </div>
  </header>
 </template>