<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import {useCarBrandStore} from "#imports";
import {carBrandValidation} from "~/validations/carBrandValidation";
import InputCrud from "~/components/dashboard/input-crud.vue";
const isLoading = ref(false)
const emit = defineEmits(['actionSuccess'])
const carBrand = useCarBrandStore()
const createData = async (values) => {
  isLoading.value = true
  await carBrand.createCarBrand(values)
  if (carBrand.isSuccess == true) {
    carBrand.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <VeeForm @submit="createData" class="bg-white" :validation-schema="carBrandValidation" validateOnSubmit>
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          input-type="text"
          input-title="Car Brand"
          input-name="name"
          input-placeholder="input car brand..."
      />
    </div>
    <div class="modal-action">
      <div class="flex items-center mt-5 border-gray-200 rounded-b gap-3 justify-end">
        <base-button  custom-class="btn-primary items-center flex gap-2 w-full justify-center py-3" type="submit">
          submit
          <sm-spinner v-if="isLoading" />
        </base-button>
      </div>
    </div>
  </VeeForm>
</template>

<style scoped>

</style>