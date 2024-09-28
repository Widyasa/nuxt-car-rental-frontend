<script setup lang="ts">
import {useField} from "vee-validate";

const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'inputStep' : String,
  'inputPlaceholder' : String,
  'inputType' : String,
  'modelValue' :  { type : [String, Number], default: ''},
  'customClass': [String],
  'readOnly' : Boolean,
  'required' : Boolean
})
function preventScrollChange(event:any) {
  event.preventDefault();
}
const emit = defineEmits(['update:modelValue']);
const name = toRef(props, 'inputName');
const {
  value: inputValue,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});
watchEffect(() => {
  inputValue.value = props.modelValue;
});
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <label :for="props.inputName">{{props.inputTitle}}</label>
    <VeeField :validate-on-input="false" :step="inputStep" @wheel="preventScrollChange" :required="props.required" :readonly="props.readOnly" :class="props.customClass" :name="props.inputName" :type="props.inputType" class="input-text" :placeholder="props.inputPlaceholder"></VeeField>
    <p class="text-red-500 text-[13px]" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>

</style>