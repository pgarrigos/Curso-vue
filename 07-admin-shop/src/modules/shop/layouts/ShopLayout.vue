<template>
  <div>
    <!-- component -->

    <!-- Header Navbar -->
    <TopMenu />

    <!-- RouterView -->
    <router-view />

    <!-- Footer -->
    <CustomFooter />
  </div>
</template>

<script lang="ts" setup>
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>
