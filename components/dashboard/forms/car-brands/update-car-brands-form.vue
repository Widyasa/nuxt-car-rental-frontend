<script setup lang="ts">
import {useCarBrandStore} from "#imports";
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
import {carBrandValidation} from "~/validations/carBrandValidation";
import Spinner from "~/components/dashboard/spinner.vue";

const carBrand = useCarBrandStore()
const isLoading = ref(false)
const props = defineProps(['id', 'isLoading'])
const emit = defineEmits(['actionSuccess'])

const updateData = async (values) => {
  isLoading.value = true
  await carBrand.updateCarBrand(values, props.id)
  if (carBrand.isSuccess == true) {
    carBrand.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <VeeForm v-if="props.isLoading == false" @submit="updateData" class="bg-white" :validation-schema="carBrandValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          v-model="carBrand.carBrand.name"
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
  <div class="flex justify-center" v-else>
    <spinner />
  </div>
</template>

<style scoped>

</style>