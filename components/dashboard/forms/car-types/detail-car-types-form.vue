<script setup lang="ts">
import BaseInput from "~/components/dashboard/base-input.vue";
import {useCarTypeStore} from "#imports";
const carType = useCarTypeStore()
</script>

<template>
  <form class="bg-white">
    <div class="grid grid-cols-1 gap-4" >
      <base-input
          required
          v-model="carType.carType.name"
          input-type="text"
          input-title="Car Type"
          input-name="service_type"
          input-placeholder="input car type..."
      />
    </div>
    <div class="modal-action">
      <div class="flex items-center mt-5 border-gray-200 rounded-b gap-3 justify-end">
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>