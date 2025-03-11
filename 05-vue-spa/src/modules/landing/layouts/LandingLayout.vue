<template>

    <div class="flex flex-col h-screen">
      <!-- Header -->
      <header class="flex items-center px-4 border-b border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
        <div>
          <a class="flex items-center gap-2 font-semibold" href="#">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
          </a>
        </div>
        <nav class="flex flex-col items-end h-10 ml-auto space-x-4 sm:space-x-6">
          <div class="space-x-4">
          <router-link :to="{ name: 'home' }"> Home </router-link>

          <!-- exact-active-class="font-semibold underline" -->


          <router-link to="/features"> Features </router-link>
          <router-link :to="'/pricing'"> Pricing </router-link>
          <router-link to="/contact"> Contact </router-link>
          </div>

          <div class="space-x-4">
            <router-link to="/pokemon/2"> Pokémons </router-link>
            <router-link to="/auth"> Login </router-link>
          </div>
        </nav>
      </header>
      <!-- Fin Header -->

      <!-- Main -->
      <main class="flex items-center justify-center flex-1">

        <router-view v-slot="{ Component }">
         <keep-alive>
           <component :is="Component" />
         </keep-alive>
        </router-view>


        <!-- <router-view /> -->
      </main>
      <!-- Fin Main -->

      <!-- Footer -->
      <footer class="flex items-center px-4 border-t border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
        <p class="flex-1 text-sm text-center text-gray-500">
          © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
        </p>
      </footer>
      <!-- Fin Footer -->
    </div>

</template>
