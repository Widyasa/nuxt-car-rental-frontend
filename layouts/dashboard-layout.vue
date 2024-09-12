<template>
  <div class="flex bg-[#F4F5FA]">
    <div class="max-w-[300px] w-full">
      <sidebar-component />
    </div>
    <div class="w-full">
      <topbar />
      <div class="mt-7 container">
        <Toast />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarComponent from "~/components/dashboard/sidebar-component.vue";
import Topbar from "~/components/dashboard/topbar.vue";

const selectedCountry = ref();
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
