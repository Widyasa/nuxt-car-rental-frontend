<script setup lang="ts">


import SidebarNav from "~/components/dashboard/sidebar-nav.vue";
</script>

<template>
  <div class="bg-white min-h-screen h-full">
    <div class="px-8">
      <div class="pt-5 flex-col flex items-center">
        <i class="fa-solid fa-car text-7xl mt-2"></i>
        <div class="mt-10 flex flex-col gap-4 self-start w-full">
            <sidebar-nav nav-route="/dashboard" nav-name="Dashboard">
              <i class="fa-solid fa-table-columns"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/car-type" nav-name="Car Type">
              <i class="fa-solid fa-inbox"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/car-brand" nav-name="Car Brand">
              <i class="fa-solid fa-inbox"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/car" nav-name="Car">
              <i class="fa-solid fa-inbox"></i>
            </sidebar-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>