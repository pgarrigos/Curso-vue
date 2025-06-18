<template>
  <div>
    <!-- component -->
    <!-- Header Navbar -->
    <top-menu />

    <!-- RouterView -->
    <router-view />

    <!-- Footer -->
    <custom-footer />
  </div>
</template>

<script lang="ts" setup>
import TopMenu from "../../../modules/shop/components/TopMenu.vue";
import CustomFooter from "../components/CustomFooter.vue";
</script>
