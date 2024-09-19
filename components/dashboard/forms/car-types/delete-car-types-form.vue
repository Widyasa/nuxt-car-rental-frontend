<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import {useCarTypeStore} from "#imports";

const carType = useCarTypeStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['id'])
const deleteData = async () => {
  await carType.deleteCarType(props.id);
  emit('actionSuccess')
}
</script>

<template>
  <p>
    Confirm Deletion of car type: Are you sure you want to delete this car type permanently? If you are sure, please click the delete button, otherwise you can cancel by clicking the cross above
  </p>
  <div class="flex justify-end gap-2 w-full mt-3">
    <base-button custom-class="btn-primary"  @click="deleteData">Delete Car Type</base-button>
  </div>
</template>

<style scoped>

</style>