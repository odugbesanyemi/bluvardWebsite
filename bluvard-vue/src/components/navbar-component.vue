<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="sticky top-0">
    <header>
      <div class="relative ">
        <!-- pc Navbar -->
        <div class="flex max-w-lg mx-auto px-5 lg:container py-4 items-center w-full">
          <div class="flex justify-between lg:w-0 lg:flex-1">
            <router-link to="/">
              <span class="sr-only">Bluvard Education Initiative</span>
              <img class="h-10 w-auto sm:h-10" src="../assets/Bluvard_svg_logo.svg" alt="">
            </router-link>
          </div>
          <nav class="max-lg:hidden lg:flex space-x-10 items-center">
            <div class="relative group">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button type="button"
                class="text-blue-500 group rounded-md inline-flex items-center text-base font-medium hover:text-blue-900 focus: py-5"
                aria-expanded="false">
                <router-link to="/about"
                  class="text-blue-900 group rounded-md inline-flex items-center text-xl font-medium hover:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  About us</router-link>
                <svg
                  class="text-blue-700 ml-2 h-5 w-5 group-hover:text-opacity-50  group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
              <div
                class="hidden group-hover:block absolute z-10  top-12 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 px-5 bg-white py-6 sm:gap-8 sm:p-8">
                    <router-link v-for="item in Links.About.links" :to="item.to"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <p class="text-base font-medium text-gray-900">
                        {{ item.title }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ item.description }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/what-we-do" class="font-medium text-blue-900 hover:text-opacity-50 text-xl py-5"> what we
              do
            </router-link>
            <div class="relative group">
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button type="button"
                class="text-gray-500 group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                aria-expanded="false">
                <router-link to="/getinvolved"
                  class="text-blue-900 group rounded-md inline-flex items-center text-xl font-medium hover:text-opacity-50  py-5">
                  Get Involved</router-link>
                <svg class="text-blue-700 ml-2 h-5 w-5 group-hover:text-opacity-50" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
              <div
                class="hidden group-hover:block absolute top-12 z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <router-link v-for="item in Links.getInvolved.links" :to="item.to"
                      class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                      <p class="text-base font-medium text-gray-900">
                        {{ item.title }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ item.description }}
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <router-link to="/contact" class="text-xl font-medium text-blue-900 hover:text-opacity-50 py-5"> Contact
            </router-link>
            <!-- <router-link to="/sponsor" class="text-base font-medium text-gray-500 hover:text-gray-900">  </router-link> -->
          </nav>
          <div class="max-lg:hidden lg:flex items-center">
            <!-- <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a> -->
            <router-link to="/volunteer"
              class="py-3 text-xl font-medium rounded-full ml-6 shadow-sm bg-indigo-700 text-white hover:bg-indigo-500 sm:px-8">
              VOLUNTEER </router-link>
          </div>
          <div class="toggleBtn lg:hidden ml-auto" @click="mobileNav.visible = !mobileNav.visible">
            <Bars3Icon class="h-10 w-10 text-blue-900" />
          </div>
        </div>
        <!-- mobile navbar -->
        <div :class="{ hidden: !mobileNav.visible }"
          class="absolute z-30 top-0 inset-x-0  transition transform origin-top-right md:hidden">
          <div class="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between mb-8">
                <div>
                  <img class="h-10 w-auto" src="../assets/Bluvard_svg_logo.svg" alt="Workflow">
                </div>
                <div class="-mr-2">
                  <button @click="mobileNav.visible = !mobileNav.visible" type="button"
                    class=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <div class="relative group">
                    <button type="button"
                      class="text-blue-500 group rounded-md inline-flex items-center justify-between text-base font-medium w-full hover:text-blue-900 py-3"
                      aria-expanded="false">
                      <router-link to="/about"
                        class="text-blue-900 group rounded-md inline-flex items-center text-xl font-medium hover:text-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        About us</router-link>
                      <svg
                        class="text-blue-700 ml-2 h-5 w-5 group-hover:text-opacity-50  group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                    <div
                      class="hidden group-hover:block z-10 mt-3  w-screen max-w-sm sm:px-0">
                      <div class=" ring-opacity-5 overflow-hidden">
                        <div class="relative grid gap-3   bg-white py-6 sm:gap-8 sm:p-8">
                          <router-link v-for="item in Links.About.links" :to="item.to"
                            class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.title }}
                            </p>
                            <hr class="mt-3">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <router-link to="/what-we-do" class="-m-3 px-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div class="font-medium text-blue-900 text-xl">What We Do</div>
                  </router-link>
                  <div class="relative group">
                    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
                    <button type="button"
                      class="w-full justify-between  group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                      aria-expanded="false">
                      <router-link to="/getinvolved"
                        class="text-blue-900 group rounded-md inline-flex items-center text-xl font-medium hover:text-opacity-50 ">
                        Get Involved</router-link>
                      <svg class="text-blue-700 ml-2 h-5 w-5 group-hover:text-opacity-50"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd" />
                      </svg>
                    </button>
                    <div class="hidden group-hover:block z-10 mt-3  w-screen max-w-sm sm:px-0">
                      <div class=" ring-opacity-5 overflow-hidden">
                        <div class="relative grid gap-3   bg-white py-6 sm:gap-8 sm:p-8">
                          <router-link v-for="item in Links.getInvolved.links" :to="item.to"
                            class="-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                            <p class="text-base font-medium text-gray-900">
                              {{ item.title }}
                            </p>
                            <hr class="mt-3">
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <router-link to="/contact" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <div class=" text-xl font-medium text-blue-900">Contact</div>
                  </router-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5">
              <div class="grid grid-cols-2 gap-4">
                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Sponsors </a>

                <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Bluvard News </a>
              </div>
              <div class="mt-6">
                <a href="#"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Volunteer </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
import { Bars3Icon } from "@heroicons/vue/24/solid"
export default {
  components: { Bars3Icon, ChevronDoubleRightIcon },
  data() {
    return {
      mobileNav: {
        visible: false,
      },
      Links: {
        About: {
          menuOpen: true,
          links: [
            {
              title: "Who we are",
              description: "Learn more about Bluvard Leadership Initiative",
              to: "/about"
            },
            {
              title: "Our History",
              description: "How it all started",
              to: "/about/history"
            },
            {
              title: "Team",
              description: "meet our distinguished team",
              to: "/about/Team"
            },

            {
              title: "Media & Press",
              description: "News about how we are changing the world",
              to: "/about/media-press"
            },
          ],
        },
        getInvolved: {
          menuOpen: false,
          links: [
            {
              title: "Donate",
              description: "Make an immediate and lasting impact with your resources",
              to: "/getinvolved/donate"
            },
            {
              title: "Partnerships",
              description: "Learn how your business can partner with us",
              to: "/getinvolved/partners"
            },
            {
              title: "FundRaise",
              description: "Support by raising for Needful communities and persons",
              to: "/getinvolved/fundraise"
            },
            {
              title: "Internships",
              description: "Join in the global change while offering your services",
              to: "/getinvolved/internship"
            },
          ]
        }
      }
    }
  }
}
</script>
<style>
.nav a {
  color: red !important;
}
</style>