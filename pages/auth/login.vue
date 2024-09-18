<script setup lang="ts">
import {definePageMeta} from "#imports";
import BaseInput from "~/components/dashboard/base-input.vue";
import LoginForm from "~/components/dashboard/auth/loginForm.vue";

definePageMeta({
  layout:'auth-layouts'
})
</script>

<template>
  <h2 class="text-primary font-bold text-5xl text-center">Login</h2>
  <LoginForm />

</template>

<style scoped>

</style>