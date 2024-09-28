<script setup lang="ts">

import CreateCarForm from "~/components/dashboard/forms/car/create-car-form.vue";
definePageMeta({
  layout:'dashboard-layout',
  name: 'Create Car',
  middleware: 'auth'
})
const carType = useCarTypeStore()
const carBrand = useCarBrandStore()
await carType.getAllCarType()
await carBrand.getAllCarBrand()
const status = ref(['active', 'booked', 'inactive'])

</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <create-car-form :car-status="status"/>
  </div>
</template>

<style scoped>

</style>