<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' :  { type : [String, Number]},
  'customClass': [String],
  'options' : {default:[]},
  'optionLabel': String,
  'optionValue': [String, Number],
  'disabled' : Boolean
})
function preventScrollChange(event:any) {
  event.preventDefault();
}
const selectValue = ref()
if (props.modelValue !== undefined) {
  selectValue.value = props.modelValue
}
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <VeeField :name="props.inputName"  v-slot="{ field }"  :value="selectValue.value">
      <Select
          :model-value="props.modelValue"
          :options="props.options"
          :option-label="props.optionLabel"
          :option-value="props.optionValue"
          filter
          v-bind="field"
          :placeholder="props.inputPlaceholder"
          class="w-full input-text text-sm p-1"
          @change="$emit('update:modelValue', $event.value);  field.value = $event.value"
          @input="$emit('update:modelValue', $event.value);  field.value = $event.value"
      />
    </VeeField>
    <vee-error-message :name="props.inputName" class="text-red-500 text-[13px]"/>
  </div>
</template>

<style scoped>

</style>