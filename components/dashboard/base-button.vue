<script setup lang="ts">
const props = defineProps(['customClass', 'label'])
</script>

<template>
  <button :class="customClass" class="btn"><slot></slot></button>
</template>

<style scoped>

</style>