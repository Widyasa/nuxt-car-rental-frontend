<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import {carValidation} from "~/validations/carValidation";
import InputCrud from "~/components/dashboard/input-crud.vue";
import InputSelect from "~/components/dashboard/input-select.vue";
import BaseTextarea from "~/components/dashboard/base-textarea.vue";
import {previewImage} from "~/utils/previewImage";

definePageMeta({
  layout:'dashbaord-layout',
  name: 'Tambah Mobil',
  middleware: 'auth'
})
const inputCategory = reactive ({
  car_brand_id: '',
  car_type_id: '',
  car_status: ''
})
const car = useCarStore()
const carType = useCarTypeStore()
const carBrand = useCarBrandStore()
const toast = useToast()
const isLoading = ref(false)
const props = defineProps(['carStatus'])
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const createData = async (values) => {
  isLoading.value = true
  values.car_status = inputCategory.car_status
  values.car_type_id = inputCategory.car_type_id
  values.car_brand_id = inputCategory.car_brand_id
  try {
    console.log(file.value)
    const fd = new FormData()
    fd.append('image', file.value)
    console.log(fd)
    await car.createCar(values)
    console.log(car.response.id)
    if (car.isSuccess == true) {
      await car.uploadImage(fd, car.response.id)
      imgPreview.value = baseImage.value
      carBrand.isSuccess = false
      showSuccess()
      return navigateTo('/dashboard/car')
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <VeeForm @submit="createData" enctype="text/plain" :validation-schema="carValidation">
    <div class="mt-5 grid grid-cols-2 gap-5">
        <input-crud
            input-type="text"
            input-title="Car Name"
            input-name="name"
            input-placeholder="input car name..."
        />
      <input-crud
          input-type="text"
          input-title="License Plate"
          input-name="license_plate"
          input-placeholder="input license plate..."
      />
      <input-crud
          input-type="number"
          input-title="Price per Day"
          input-name="price_per_day"
          input-placeholder="input price per day..."
      />
      <input-select
        input-title="Car Type"
        input-name="car_type_id"
        v-model="inputCategory.car_type_id"
        value="value"
        :options="carType.carTypeList"
        option-label="name"
        option-value="id"
        input-placeholder="choose car type"
      />
      <input-select
        input-title="Car Brand"
        input-name="car_brand_id"
        v-model="inputCategory.car_brand_id"
        value="value"
        :options="carBrand.carBrandList"
        option-label="name"
        option-value="id"
        input-placeholder="choose car brand"
      />
      <input-select
        input-title="Car Status"
        input-name="car_status"
        v-model="inputCategory.car_status"
        value="value"
        :options="props.carStatus"
        input-placeholder="choose car status"
      />
      <base-textarea
          class="col-span-2"
          input-title="Description"
          input-name="description"
          input-type="text"
          input-placeholder="input car description..."
      />
    </div>
    <div class="mt-5">
      <p class="p-2">Image</p>
      <div class="img-upload-wrapper">
        <div class="absolute">
          <img :src="imgPreview" id="file-preview" class="img-prev" alt="">
        </div>
        <input type="file" class="w-full relative h-full opacity-0" id="file-input" @change="previewImage">
      </div>
    </div>
    <base-button custom-class="btn-primary items-center flex gap-2 w-full justify-center mt-8 py-3" type="submit">
      submit
      <sm-spinner v-if="isLoading" />
    </base-button>
  </VeeForm>
</template>

<style scoped>
.img-upload-wrapper, .img-prev{
  width: 200px;
  height: 200px;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>