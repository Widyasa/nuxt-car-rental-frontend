<script setup lang="ts">


import {VueAwesomePaginate} from "vue-awesome-paginate";
import {currentPage} from "~/utils/globalVariable";

const props = defineProps([
  'tableHead' ,
  'totalItems',
  'pageInfo'
])
const emit = defineEmits(['getData'])
const onClickHandler = (page:any) => {
  currentPage.value = page
  emit('getData')
};


</script>

<template>
  <table class="w-full">
    <thead class="bg-primary rounded text-white">
    <tr>
      <td class="py-2 first:pl-4 first:rounded-l last:rounded-r font-medium" v-for="head in tableHead">{{head}}</td>
    </tr>
    </thead>
    <tbody>
    <slot></slot>
    </tbody>
  </table>
  <vue-awesome-paginate
      :total-items="props.totalItems"
      :items-per-page="10"
      :max-pages-shown="4"
      v-model="currentPage"
      :on-click="onClickHandler"
  />
</template>

<style scoped>

</style>