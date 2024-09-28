
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
    <VeeField :validate-on-input="false" type="text" :name="props.inputName" v-slot="{ field }"  @input="$emit('update:modelValue', $event.target.value)" :value="props.modelValue">
      <textarea v-bind="field" :required="props.required" :readonly="props.readOnly" :class="props.customClass"   class="input-text" :placeholder="props.inputPlaceholder" ></textarea>
    </VeeField>
    <vee-error-message :name="props.inputName" class="text-red-500 text-[13px]"/>
  </div>
</template>

<style scoped>

</style>
