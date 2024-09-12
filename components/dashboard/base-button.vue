<script setup lang="ts">
const props = defineProps(['customClass', 'label'])
</script>

<template>
  <button :class="customClass" class="btn">{{props.label}}</button>
</template>

<style scoped>

</style>