<script setup lang="ts">
defineProps({
  navName : {require: true, type: String},
  navRoute:  {require:true, type:String}
})
</script>

<template>
  <NuxtLink active-class="active" :to="navRoute" class="nav-sidebar-wrapper">
    <div class="">
      <slot></slot>
    </div>
    <div class="">
      {{navName}}
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>