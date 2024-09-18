
<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' : [String, Number],
  'customClass': [String],
  'readOnly' : Boolean,
  'required' : Boolean
})
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <textarea :required="props.required" :readonly="props.readOnly" :class="props.customClass" :name="props.inputName"  class="input-text" :placeholder="props.inputPlaceholder" @input="$emit('update:modelValue', $event.target.value)">{{props.modelValue}}</textarea>
  </div>
</template>

<style scoped>

</style>
