<script setup lang="ts">

import BaseButton from "~/components/dashboard/base-button.vue";
import {currentPage, definePageMeta, useAuthStore, useCarTypeStore} from "#imports";
import TableComponent from "~/components/dashboard/table-component.vue";
import Spinner from "~/components/dashboard/spinner.vue";
import Searchbar from "~/components/dashboard/Searchbar.vue";
import CarTypeTable from "~/components/dashboard/tables/car-type-table.vue";
import CarTypeModal from "~/components/dashboard/modals/car-type-modal.vue";
definePageMeta({
  layout: 'dashboard-layout',
  name: 'Car Type',
  middleware: 'auth',
})
const carType = useCarTypeStore()
const toast = useToast()
const id = ref(0)
const modalAction = ref('')
const visibleModal = ref(false)
const keyword = ref('')
const isLoading = ref(true)
const getAll = async () => {
  isLoading.value = true
  carType.pages = currentPage.value
  try {
    carType.keyword = keyword.value
    await carType.getAllCarType()
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
currentPage.value = 1
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const getId = (theId:string) => {
  id.value = theId
}
await getAll()
const handleKeyword = (data:string) => {
  keyword.value = data
}
const viewModal =  (modalType:string) => {
  modalAction.value = modalType
  visibleModal.value = true
}
const modalSuccessAction = () => {
  visibleModal.value = false
  showSuccess()
}
</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <div class="flex gap-3 items-center">
      <Searchbar  @searchData="handleKeyword" :get-function="getAll"/>
      <base-button @click="viewModal('create')" custom-class="btn-primary flex gap-3 items-center">
        <i class="fa-regular fa-square-plus text-white"></i>
        <div class="w-max">
          Add New
        </div>
      </base-button>
    </div>
    <div class="mt-5">
      <car-type-table
          :get-data="getAll"
          :is-loading="isLoading"
          @get-id="getId"
          @view-delete="viewModal('delete')"
          @view-update="viewModal('update')"
          @view-detail="viewModal('detail')"
      />
    </div>
  </div>
  <car-type-modal v-model:visible="visibleModal" :modalAction="modalAction" @actionSuccess="modalSuccessAction" :id="id"/>
</template>
<style scoped>
</style>