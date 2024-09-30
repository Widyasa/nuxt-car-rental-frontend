<script setup lang="ts">
import {carValidation} from "~/validations/carValidation";
import InputCrud from "~/components/dashboard/input-crud.vue";
import BaseTextarea from "~/components/dashboard/base-textarea.vue";
import InputFile from "~/components/dashboard/input-file.vue";
const car = useCarStore()
const carType = useCarTypeStore()
const carBrand = useCarBrandStore()
const isLoading = ref(false)
const props = defineProps(['id'])
const emit = defineEmits(['actionSuccess'])
if (car.car.image) {
  imgPreview.value = imageUrl+car.car.image
}
const carPrice = rupiah.format(car.car.price_per_day)
</script>

<template>
  <VeeForm enctype="text/plain">
    <div class="mt-5 grid grid-cols-2 gap-5">
      <input-crud
          read-only
          v-model="car.car.name"
          input-type="text"
          input-title="Car Name"
          input-name="name"
          input-placeholder="input car name..."
      />
      <input-crud
          read-only
          v-model="car.car.license_plate"
          input-type="text"
          input-title="License Plate"
          input-name="license_plate"
          input-placeholder="input license plate..."
      />
      <input-crud
          read-only
          v-model="carPrice"
          input-type="text"
          input-title="Price per Day"
          input-name="price_per_day"
          input-placeholder="input price per day..."
      />
      <input-crud
          read-only
          v-model="car.car.car_type.name"
          input-type="text"
          input-title="Car Type"
          input-name="car_type"
          input-placeholder="input car type..."
      />
      <input-crud
          read-only
          v-model="car.car.car_brand.name"
          input-type="text"
          input-title="Car Brand"
          input-name="car_brand"
          input-placeholder="input car brand..."
      />
      <input-crud
          read-only
          v-model="car.car.car_status"
          input-type="text"
          input-title="Car Status"
          input-name="car_status"
          input-placeholder="input car status..."
      />
      <base-textarea
          read-only
          v-model="car.car.description"
          class="col-span-2"
          input-title="Description"
          input-name="description"
          input-type="text"
          input-placeholder="input car description..."
      />
      <input-file input-title="Image" input-name="image" read-only />
    </div>
  </VeeForm>
</template>

<style scoped>
</style>