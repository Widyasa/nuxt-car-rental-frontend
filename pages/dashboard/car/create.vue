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
const toast = useToast()
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <create-car-form :car-status="status" @actionSuccess="showSuccess"/>
  </div>
</template>

<style scoped>

</style>