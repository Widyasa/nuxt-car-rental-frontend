<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import { Form } from 'vee-validate';
import {useCarTypeStore} from "#imports";
import InputCrud from "~/components/dashboard/input-crud.vue";
import {carTypeValidation} from "~/validations/carTypeValidation";
const isLoading = ref(false)

const emit = defineEmits(['actionSuccess'])
const carType = useCarTypeStore()
const createData = async (values) => {
  console.log(values)
  isLoading.value = true
  await carType.createCarType(values)
  if (carType.isSuccess == true) {
    carType.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <Form @submit="createData" class="bg-white" :validation-schema="carTypeValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          input-type="text"
          input-title="Car Type"
          input-name="name"
          input-placeholder="input car type..."
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
  </Form>
</template>

<style scoped>

</style>