<script setup lang="ts">

import BaseInput from "~/components/dashboard/base-input.vue";
const props = defineProps([ 'getFunction'])
const emit = defineEmits(['searchData'])
const keyword = ref('')
</script>

<template>
  <div class="search-wrapper relative w-full">
    <div class="absolute z-10 right-4 top-4">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div class="relative w-full">
      <base-input v-model="keyword" @keyup="emit('searchData', keyword)" @change="props.getFunction" custom-class="pr-10" input-type="search" input-placeholder="search here..."/>
    </div>
  </div>
</template>

<style scoped>

</style>