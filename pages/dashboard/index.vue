<script setup lang="ts">
import BaseTextarea from "~/components/dashboard/base-textarea.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
import InputSelect from "~/components/dashboard/input-select.vue";

definePageMeta({
  layout: 'dashboard-layout',
  middleware: 'auth'
})
</script>

<template>
  <div class="bg-white p-10">
    <p>ini dashboard</p>
  </div>
</template>

<style scoped>

</style>