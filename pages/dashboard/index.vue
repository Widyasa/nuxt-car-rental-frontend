<script setup lang="ts">
import BaseTextarea from "~/components/dashboard/base-textarea.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
import InputSelect from "~/components/dashboard/input-select.vue";

definePageMeta({
  layout: 'dashboard-layout',
  middleware: 'auth'
})
function tes(values) {
  values.category = inputData.category
  console.log(values)
}
const inputData = reactive({
  tes: 'apa coba',
  category: 'AU'
})
const countries = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Brazil', code: 'BR' },
  { name: 'China', code: 'CN' },
  { name: 'Egypt', code: 'EG' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'India', code: 'IN' },
  { name: 'Japan', code: 'JP' },
  { name: 'Spain', code: 'ES' },
  { name: 'United States', code: 'US' }
]);
</script>

<template>
  <div class="bg-white p-10">
    <vee-form :on-submit="tes">
      <base-textarea v-model="inputData.tes" input-type="text" input-name="description" input-title="tes"/>
      <input-crud input-title="tes 2" v-model="inputData.tes" input-name="name" input-type="text" />
      <input-select input-name="category" input-title="category" as="select">
        <Select v-model="inputData.category" :options="countries" :option-label="item => item.name"  :option-value="item => item.code" filter placeholder="pilih tipe hewan" class="w-full input-text text-sm p-1" >
        </Select>
      </input-select>
      <button class="btn btn-primary">submit</button>
    </vee-form>
  </div>
</template>

<style scoped>

</style>