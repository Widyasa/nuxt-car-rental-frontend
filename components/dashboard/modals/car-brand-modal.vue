<script setup lang="ts">

import {useCarBrandStore} from "#imports";
import CreateCarBrandsForm from "~/components/dashboard/forms/car-brands/create-car-brands-form.vue";
import DetailCarBrandsForm from "~/components/dashboard/forms/car-brands/detail-car-brands-form.vue";
import UpdateCarBrandsForm from "~/components/dashboard/forms/car-brands/update-car-brands-form.vue";
import DeleteCarBrandsForm from "~/components/dashboard/forms/car-brands/delete-car-brands-form.vue";
const carBrand = useCarBrandStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['modalAction', 'id'])
const processLoad = ref(true)
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    processLoad.value = true
    await carBrand.getCarBrandById(props.id);
    processLoad.value = false
  }
})
</script>

<template>
  <Dialog modal :header=" props.modalAction + ' Car Brand'" class="w-[600px] capitalize" :draggable=false>
    <div v-if="modalAction == 'create'">
      <create-car-brands-form @actionSuccess="emit('action-success')" />
    </div>
    <div v-if="modalAction == 'detail'">
      <detail-car-brands-form :is-loading="processLoad" :id="id" />
    </div>
    <div v-if="modalAction == 'update'">
      <update-car-brands-form :is-loading="processLoad" @actionSuccess="emit('action-success')" :id="id"/>
    </div>
    <div v-if="modalAction == 'delete'">
      <delete-car-brands-form @actionSuccess="emit('action-success')" :id="id"/>
    </div>
  </Dialog>
</template>

<style scoped>

</style>