<script setup lang="ts">
import {useCarTypeStore} from "#imports";
import BaseButton from "~/components/dashboard/base-button.vue";
import BaseInput from "~/components/dashboard/base-input.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";

const carType = useCarTypeStore()
const isLoading = ref(false)
const props = defineProps(['id'])
const emit = defineEmits(['actionSuccess'])

const updateData = async () => {
  const inputData = reactive({
    name : carType.carType.name
  })
  isLoading.value = true
  await carType.updateCarType(inputData, props.id)
  if (carType.isSuccess == true) {
    carType.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <form @submit.prevent="updateData" class="bg-white">
    <div class="grid grid-cols-1 gap-4" >
      <base-input
          required
          v-model="carType.carType.name"
          input-type="text"
          input-title="Car Type"
          input-name="service_type"
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
  </form>
</template>

<style scoped>

</style>