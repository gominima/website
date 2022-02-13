<script lang="ts">
import { defineComponent } from 'vue-demi';
export default defineComponent({
  name: 'WhatsNew'
});
</script>

<template>
  <div class="flex justify-center pt-3">
    <div class="flex w-64 md:w-96 lg:w-96 bg-base-300 py-2 px-2 rounded-full">
      <div class="indicator-item badge badge-primary font-medium px-2 rounded-full">New</div>
      <span class="truncate text-base-content ml-2">
        Added new route system, check it here
      </span>
      <i
        class="fas fa-chevron-right flex justify-center items-center ml-2"
      ></i>
    </div>
  </div>
</template>
