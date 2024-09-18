<script setup lang="ts">

import BaseInput from "~/components/dashboard/base-input.vue";
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import {useAuthStore} from "~/stores/auth";
const auth = useAuthStore()
const toast = useToast()
const inputType = ref('password')
const changeInputType = (value:string) => {
  inputType.value = value;
}
const inputData = reactive({
  email: '',
  password: ''
})
const showError = () => {
  toast.add({ severity: 'error', summary: 'Login Failed', detail: 'Check email and password', life: 3000 });
}
 const isLoading = ref(false);
const signin = async () => {
  isLoading.value = true;
  try {
    await auth.login(inputData)
    if (auth.loginOutput.success) {
      navigateTo('/dashboard')
    }
  } catch (e) {
    showError()
    console.log(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent = 'signin'>
    <div class="mt-5 flex flex-col gap-4">
      <base-input v-model="inputData.email" input-name="email" input-placeholder="enter your email address" input-title="Email" input-type="email" required/>
      <div class="relative">
        <div class="relative">
          <base-input v-model="inputData.password" input-name="password" input-placeholder="enter your password" input-title="Password" :input-type="inputType" required/>
        </div>
        <div class="absolute z-10 top-1/2 right-4">
          <button type="button" @click="changeInputType('password')" v-if="inputType ==='text'">
            <i class="fa-regular fa-eye text-primary"></i>
          </button>
          <button type="button" @click="changeInputType('text')" v-else>
            <i class="fa-regular fa-eye-slash text-primary "></i>
          </button>
        </div>
      </div>
    </div>
    <button class="btn btn-primary items-center flex gap-2 w-full justify-center mt-8 py-3" type="submit">
      submit
      <sm-spinner v-if="isLoading" />
    </button>
  </form>
</template>

<style scoped>

</style>