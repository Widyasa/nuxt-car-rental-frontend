<script setup lang="ts">
const props = defineProps({
  'inputTitle' : String,
  'inputName' : String,
  'modelValue' :  { type : [String, Number]},
  'readOnly' : Boolean,
})
</script>

<template>
  <div class="mt-5">
    <p class="p-2">{{ props.inputTitle }}</p>
    <div class="img-upload-wrapper">
      <div class="absolute">
        <img :src="imgPreview" id="file-preview" class="img-prev" alt="">
      </div>
      <VeeField :name="props.inputName" v-slot="{ handleChange }">
        <input
            type="file"
            class="w-full relative h-full opacity-0"
            id="file-input"
            :readonly="props.readOnly"
            :name="props.inputName"
            @change="handleChange($event); previewImage($event)"
        />
      </VeeField>
    </div>
    <vee-error-message :name="props.inputName" class="text-red-500 text-[13px]"/>
  </div>
</template>

<style scoped>
.img-upload-wrapper, .img-prev{
  width: 200px;
  height: 200px;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>