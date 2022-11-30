<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-gray-800">
    <div class="absolute h-full w-full">
      <img class="w-full h-full object-cover" src="../assets/img/IMG-20211222-WA0015.jpg" alt="" />
    </div>
    <span class="bg-gradient-to-tr h-full w-full from-black to-blue-500/40 backdrop-blur-sm absolute"></span>
    <div class="relative py-20 max-sm:px-5">
      <div class="md:w-1/2 md:pl-10 text-center mx-auto">
        <p class="mt-2 text-white max-md:text-3xl font-bold tracking-tight md:text-5xl">Want to help?</p>
        <p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <router-link to="/volunteer" class="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-blue-600 ring-white text-white hover:bg-blue-900">
              BECOME A VOLUNTEER
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  
  export default {
    components: {
    },
  }
  </script>