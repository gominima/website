<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  name: 'WhatsNew',
  setup() {},
});
</script>

<template>
  <div class="flex justify-center pt-3">
    <div class="flex w-64 md:w-96 lg:w-96 bg-gray-700 py-2 px-2 rounded-full">
      <div class="bg-hero font-medium px-2 text-white rounded-full">New</div>
      <p class="truncate text-white ml-2">
        Added new route system, check it here
      </p>
      <i
        class="fas fa-chevron-right flex justify-center items-center text-blue-500 ml-2"
      ></i>
    </div>
  </div>
</template>
