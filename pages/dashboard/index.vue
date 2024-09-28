<script setup lang="ts">
import BaseTextarea from "~/components/dashboard/base-textarea.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";

definePageMeta({
  layout: 'dashboard-layout',
  middleware: 'auth'
})
function tes(values) {
  console.log(values)
}
const inputData = reactive({
  tes: 'apa coba'
})
</script>

<template>
  <div class="bg-white p-10">
    <vee-form :on-submit="tes">
      <base-textarea v-model="inputData.tes" input-type="text" input-name="description" input-title="tes"/>
      <input-crud input-title="tes 2" v-model="inputData.tes" input-name="name" input-type="text" />
      <button class="btn btn-primary">submit</button>
    </vee-form>
  </div>
</template>

<style scoped>

</style>