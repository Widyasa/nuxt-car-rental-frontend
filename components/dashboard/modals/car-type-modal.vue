<script setup lang="ts">

import {useCarTypeStore} from "#imports";
import CreateCarTypesForm from "~/components/dashboard/forms/car-types/create-car-types-form.vue";
import UpdateCarTypesForm from "~/components/dashboard/forms/car-types/update-car-types-form.vue";
import DetailCarTypesForm from "~/components/dashboard/forms/car-types/detail-car-types-form.vue";
import DeleteCarTypesForm from "~/components/dashboard/forms/car-types/delete-car-types-form.vue";
const carType = useCarTypeStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['modalAction', 'id'])
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    await carType.getCarTypeById(props.id);
  }
})
</script>

<template>
  <Dialog modal :header=" props.modalAction + ' Car Type'" class="w-[600px] capitalize">
    <div v-if="modalAction == 'create'">
      <create-car-types-form @actionSuccess="emit('action-success')" />
    </div>
    <div v-if="modalAction == 'detail'">
      <detail-car-types-form :id="id"/>
    </div>
    <div v-if="modalAction == 'update'">
      <update-car-types-form @actionSuccess="emit('action-success')" :id="id"/>
    </div>
    <div v-if="modalAction == 'delete'">
      <delete-car-types-form @actionSuccess="emit('action-success')" :id="id"/>
    </div>
  </Dialog>
</template>

<style scoped>

</style>