<template>
  <h1 class="mb-4 text-2xl font-semibold">Register</h1>
  <form action="#" method="POST">
    <!-- Name Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Remember Me Checkbox -->
    <div class="flex items-center mb-4">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
      <label for="remember" class="ml-2 text-gray-600">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button
      type="submit"
      class="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      Login
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-center text-blue-500">
    <router-link :to="{ name: 'login' }" class="hover:underline">Login Here</router-link>
  </div>
</template>
