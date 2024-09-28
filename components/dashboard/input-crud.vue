<script setup lang="ts">
import {useField} from "vee-validate";

const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputStep' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' :  { type : [String, Number]},
  'customClass': [String],
  'readOnly' : Boolean,
  'required' : Boolean
})
function preventScrollChange(event:any) {
  event.preventDefault();
}


</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <VeeField :step="inputStep" @wheel="preventScrollChange" :name="props.inputName" v-slot="{ field }" @input="$emit('update:modelValue', $event.target.value)" :value="props.modelValue">
      <input v-bind="field" :required="props.required" :readonly="props.readOnly" :class="props.customClass" :name="props.inputName" :type="props.inputType" class="input-text" :placeholder="props.inputPlaceholder"/>
    </VeeField>
    <vee-error-message :name="props.inputName" class="text-red-500 text-[13px]"/>
  </div>
</template>

<style scoped>

</style>