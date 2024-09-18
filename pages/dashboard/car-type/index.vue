<script setup lang="ts">

import BaseButton from "~/components/dashboard/base-button.vue";
import {definePageMeta, useCarTypeStore} from "#imports";
import TableComponent from "~/components/dashboard/table-component.vue";
import Spinner from "~/components/dashboard/spinner.vue";
import Searchbar from "~/components/dashboard/Searchbar.vue";
definePageMeta({
  layout: 'dashboard-layout',
  name: 'Car Type',
  middleware: 'auth',
})
const carType = useCarTypeStore()
const toast = useToast()
const id = ref()
const isLoading = ref(true)
// const visible = ref(false)
// const visibleCreate = ref(false)
// const visibleUpdate = ref(false)
// const visibleDetail = ref(false)
const keyword = ref('')
const thead = ['name', 'Aksi']
const getAll = async () => {
  isLoading.value = true
  try {
    carType.pages = currentPage.value
    carType.keyword = keyword.value
    carType.pages = 1
    await carType.getAllCarType()
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const getId = (theId:string) => {
  id.value = theId
}
await getAll()
currentPage.value = 1
const handleKeyword = (data:string) => {
  keyword.value = data
}
</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <div class="flex gap-3 items-center">
      <Searchbar  @searchData="handleKeyword" :get-function="getAll"/>
      <base-button @click="visibleCreate = true" custom-class="btn-primary flex gap-3 items-center">
        <i class="fa-regular fa-square-plus text-white"></i>
        <div class="w-max">
          Add New
        </div>
      </base-button>
    </div>
    <div class="mt-5">
      <table-component :table-head="thead" :total-items="carType.totalData" @getData="getAll">
        <tr v-if="isLoading">
          <td colspan="6" class="text-center">
            <spinner class="flex justify-center w-full translate-x-[50%]" />
          </td>
        </tr>
        <tr v-if="carType.carTypeList.length > 0 && !isLoading" v-for="(item, index) in carType.carTypeList" :key="index">
          <td class="pl-4">{{ item.name }}</td>
          <td class="flex gap-3">
            <button @click="visibleDetail = true; getId(item.id)" class="bg-[#547DE2] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
              <i class="fa-regular fa-eye text-[#547DE2]"></i>
            </button>
            <button @click="visibleUpdate = true; getId(item.id)"  class="bg-[#F6C46A] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
              <i class="fa-regular fa-pen-to-square text-[#F6C46A]"></i>
            </button>
            <button  @click="getId(item.id); visible = true" class="bg-red-500 bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
              <i class="fa-solid fa-trash text-red-500"></i>
            </button>
          </td>
        </tr>
        <tr v-if="!isLoading && carType.carTypeList.length <= 0">
          <td colspan="6">
            <div class="text-center w-full">DATA EMPTY</div>
          </td>
        </tr>
      </table-component>
    </div>
  </div>
<!--  <delete-animal-type v-model:visible="visible" @show-alert="showSuccess"  @close-modal="visible = false" :id="id"/>-->
<!--  <update-animal-type v-model:visible="visibleUpdate" @show-alert="showSuccess"  @close-modal="visibleUpdate = false" :id="id"/>-->
<!--  <detail-animal-type v-model:visible="visibleDetail" @close-modal="visibleDetail = false" :id="id"/>-->
<!--  <create-animal-type v-model:visible="visibleCreate" @close-modal="visibleCreate = false" @show-alert="showSuccess"/>-->
</template>
<style scoped>
</style>