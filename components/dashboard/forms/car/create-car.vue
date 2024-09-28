<script setup lang="ts">
definePageMeta({
  layout:'dashbaord-layout',
  name: 'Tambah Mobil',
  middleware: 'auth'
})
const car = useCarStore()
const toast = useToast()
const isLoading = ref(false)
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const createData = async (values) => {
  isLoading.value = true
  try {
    const fd = new FormData()
    fd.append('image', file.value)
    await car.createCar(values)
    if (car.isSuccess == true) {
      await car.uploadImage(fd, car.response.id)
      imgPreview.value = baseImage.value
      carBrand.isSuccess = false
      showSuccess()
      return navigateTo('/dashboard/car')
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <VeeForm @submit="createData" enctype="text/plain" >
    <div class="mt-5 grid grid-cols-2 gap-5">

    </div>
    <div class="mt-5">
      <p class="p-2">Image</p>
      <div class="img-upload-wrapper">
        <div class="absolute">
          <img :src="imgPreview" id="file-preview" class="img-prev" alt="">
        </div>
        <input type="file" class="w-full relative h-full opacity-0" id="file-input" @change="previewPhoto">
      </div>
    </div>
    <base-button custom-class="btn-primary items-center flex gap-2 w-full justify-center mt-8 py-3" type="submit">
      submit
      <sm-spinner v-if="isLoading" />
    </base-button>
  </VeeForm>
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