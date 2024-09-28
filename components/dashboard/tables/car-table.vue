<script setup lang="ts">

import Spinner from "~/components/dashboard/spinner.vue";
import TableComponent from "~/components/dashboard/table-component.vue";
import {useCarTypeStore} from "~/stores/carType";
import {currentPage} from "~/utils/globalVariable";
import {rupiah} from "../../../utils/moneyFormat";
const car = useCarStore()
const props = defineProps(['isLoading', 'getData'])
const emit = defineEmits(['getId', 'viewDetail', 'viewUpdate', 'viewDelete', ])
const thead = ['name', 'brand', 'price', 'status', 'image', 'action']
</script>

<template>
  <div class="mt-5">
    <table-component :table-head="thead" :total-items="car.totalData" @getData="props.getData">
      <tr v-if="props.isLoading">
        <td colspan="6" class="text-center">
          <spinner class="flex justify-center w-full translate-x-[50%]" />
        </td>
      </tr>
      <tr v-if="car.carList.length > 0 && !props.isLoading" v-for="(item, index) in car.carList" :key="index">
        <td class="pl-4">{{ item.name }}</td>
        <td class="">{{ item.car_brand.name }}</td>
        <td class="">{{ rupiah.format(item.price_per_day) }}</td>
        <td>{{item.car_status}}</td>
        <td>
          <img :src="`http://localhost:8000/${item.image}`" :alt="item.name + 'image'" class="aspect-video object-cover w-[200px]">
        </td>
        <td class="flex gap-3">
          <button @click="emit('viewDetail'); emit('getId', item.id)" class="bg-[#547DE2] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-regular fa-eye text-[#547DE2]"></i>
          </button>
          <button @click="emit('viewUpdate'); emit('getId', item.id)"  class="bg-[#F6C46A] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-regular fa-pen-to-square text-[#F6C46A]"></i>
          </button>
          <button  @click="emit('viewDelete'); emit('getId', item.id)" class="bg-red-500 bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-solid fa-trash text-red-500"></i>
          </button>
        </td>
      </tr>
      <tr v-if="!props.isLoading && car.carList.length <= 0">
        <td colspan="6">
          <div class="text-center w-full">DATA EMPTY</div>
        </td>
      </tr>
    </table-component>
  </div>
</template>

<style scoped>

</style>