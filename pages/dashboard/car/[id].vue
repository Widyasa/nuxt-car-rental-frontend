<script setup lang="ts">
import UpdateCarForm from "~/components/dashboard/forms/car/update-car-form.vue";
import DetailCarForm from "~/components/dashboard/forms/car/detail-car-form.vue";
definePageMeta({
  layout:'dashboard-layout',
  name: 'Detail Car',
  middleware: 'auth'
})
const route = useRoute()
const id = route.params.id
const car = useCarStore()
await car.getCarById(id)
const toast = useToast()
</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <div class="" v-if="car.car !== undefined">
      <detail-car-form :id="id"/>
    </div>
  </div>

</template>

<style scoped>

</style>