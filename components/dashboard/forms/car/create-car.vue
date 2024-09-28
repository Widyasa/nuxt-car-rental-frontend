<script setup lang="ts">
definePageMeta({
  layout:'dashbaord-layout',
  name: 'Tambah Mobil',
  middleware: 'auth'
})
const doctor = useDoctorStore()
const toast = useToast()
const isLoading = ref(false)
const isError = ref(false)
const inputType = ref('password')
const changeInputType = () => {
  if(inputType.value === 'password') {
    inputType.value = 'text'
  } else {
    inputType.value = 'password'
  }
}
const inputData = reactive({
  name: '',
  code: '',
  username: '',
  password: '',
  email: ''
})
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const createData = async () => {
  isLoading.value = true
  console.log(inputData)
  try {
    const fd = new FormData()
    fd.append('image', file.value)
    await doctor.createDoctor(inputData)
    console.log(doctor.response.id)
    if (doctor.status_code == 201) {
      await doctor.uploadImage(fd, doctor.response.id)
      imgPreview.value = baseImage.value
      doctor.status_code = 0
      showSuccess()
      return navigateTo('/dashboard/dokter')
    }

  } catch (e) {
    isError.value = true
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form action="" @submit.prevent="createData()" enctype="text/plain">
    <div class="mt-5 grid grid-cols-2 gap-5">
      <base-input v-model="inputData.name" input-placeholder="masukkan nama..." input-type="text" input-title="Nama" input-name="nama" />
      <base-input v-model="inputData.code" input-placeholder="masukkan kode karyawan..." input-type="text" input-title="Kode Karyawan" input-name="code" />
      <base-input v-model="inputData.username" input-placeholder="masukkan username..." input-type="text" input-title="Username" input-name="username" />
      <base-input v-model="inputData.email" input-placeholder="masukkan email..." input-type="email" input-title="Email" input-name="email" />
      <div class="relative">
        <div class="absolute z-10 top-1/2 right-[10px]">
          <i type="button" class="fa-regular fa-eye" @click="changeInputType"></i>
        </div>
        <div class="position-relative">
          <BaseInput v-model="inputData.password" input-name="password" input-placeholder="masukkan password..." input-title="Password" :input-type="inputType" />
        </div>
      </div>
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
  </form>
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