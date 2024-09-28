<script setup lang="ts">

import {useCarTypeStore} from "#imports";
import CreateCarTypesForm from "~/components/dashboard/forms/car-types/create-car-types-form.vue";
import UpdateCarTypesForm from "~/components/dashboard/forms/car-types/update-car-types-form.vue";
import DetailCarTypesForm from "~/components/dashboard/forms/car-types/detail-car-types-form.vue";
import DeleteCarTypesForm from "~/components/dashboard/forms/car-types/delete-car-types-form.vue";
import DeleteCarForm from "~/components/dashboard/forms/car/delete-car-form.vue";
const carType = useCarTypeStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['modalAction', 'id'])
const processLoad = ref(true)
// watch(() => props.id, async (newValue, oldValue) => {
//   if (newValue) {
//     processLoad.value = true
//     await carType.getCarTypeById(props.id);
//     processLoad.value = false
//   }
// })
</script>

<template>
  <Dialog modal :header=" props.modalAction + ' Car'" class="w-[600px] capitalize" :draggable=false>
    <div v-if="modalAction == 'delete'">
      <delete-car-form @actionSuccess="emit('action-success')" :id="id"/>
    </div>
  </Dialog>
</template>

<style scoped>

</style>