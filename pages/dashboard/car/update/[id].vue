<script setup lang="ts">
import UpdateCarForm from "~/components/dashboard/forms/car/update-car-form.vue";
definePageMeta({
  layout:'dashboard-layout',
  name: 'Update Car',
  middleware: 'auth'
})
const route = useRoute()
const id = route.params.id
const car = useCarStore()
const carType = useCarTypeStore()
const carBrand = useCarBrandStore()
await car.getCarById(id)
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
    <div class="" v-if="car.car !== undefined">
      <update-car-form :id="id" :car-status="status" @actionSuccess="showSuccess"/>
    </div>
  </div>

</template>

<style scoped>

</style>