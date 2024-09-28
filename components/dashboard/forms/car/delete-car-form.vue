<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import {useCarStore} from "#imports";

const car = useCarStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['id'])
const deleteData = async () => {
  await car.deleteCar(props.id);
  emit('actionSuccess')
}
</script>

<template>
  <p class="normal-case">
    Confirm Deletion of car: Are you sure you want to delete this car permanently? If you are sure, please click the delete button, otherwise you can cancel by clicking the cross above
  </p>
  <div class="flex justify-end gap-2 w-full mt-3">
    <base-button custom-class="btn-primary"  @click="deleteData">Delete Car</base-button>
  </div>
</template>

<style scoped>

</style>