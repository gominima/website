<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
  name: 'WhatsNew',

});
</script>

<template>
  <div class="flex justify-center pt-12">
    <div class="flex justify-center items-center w-64 md:w-96 lg:w-96 bg-base-300 py-2 px-2 rounded-full">
      <div class="pt-1 pb-1 p-4 rounded-full btn-secondary">New</div>
      <span class="truncate text-base-content ml-2">
        <a href="https://github.com/gominima/minima">
        Version 1 is ready to be launched 🚀
        </a>
      </span>
      <i
        class="fas fa-chevron-right flex justify-center items-center ml-2"
      ></i>
    </div>
  </div>
</template>

