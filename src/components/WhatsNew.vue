<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "WhatsNew",
  setup() {},
});
</script>

<template>
  <div class="flex justify-center pt-3">
    <div
      class="flex bg-gray-700 w-96 pt-2 pb-2 space-x-2 items-center justify-center rounded-full"
    >
      <div class="bg-hero font-medium pl-2 pr-2 text-white rounded-full">
        New
      </div>
      <div class="text-white rounded-md">
        Added new route system, check it here
        <i class="fas fa-chevron-right text-blue-500"></i>
      </div>
    </div>
  </div>
</template>
