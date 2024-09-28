<script setup lang="ts">
import {useCarTypeStore} from "#imports";
import BaseButton from "~/components/dashboard/base-button.vue";
import BaseInput from "~/components/dashboard/base-input.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
import {carTypeValidation} from "~/validations/carTypeValidation";
import Spinner from "~/components/dashboard/spinner.vue";
const carType = useCarTypeStore()
const isLoading = ref(false)
const props = defineProps(['id', 'isLoading'])
const emit = defineEmits(['actionSuccess'])
const updateData = async (values) => {
  isLoading.value = true
  await carType.updateCarType(values, props.id)
  if (carType.isSuccess == true) {
    carType.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <VeeForm v-if="props.isLoading == false" @submit="updateData" class="bg-white" :validation-schema="carTypeValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          v-model="carType.carType.name"
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
  </VeeForm>
  <div class="flex justify-center" v-else>
    <spinner />
  </div>
</template>

<style scoped>

</style>