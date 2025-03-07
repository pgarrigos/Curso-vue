<template>

  <nav>
    <RouterLink to="#/">Home</RouterLink>
    <RouterLink to="#/features">Features</RouterLink>
    <RouterLink to="#/pricing">Pricing</RouterLink>
    <RouterLink to="#/contact">Contact</RouterLink>

  </nav>



  <main class="bg-slate-100">
    <RouterView />
  </main>
</template>





<script lang="ts" setup></script>
