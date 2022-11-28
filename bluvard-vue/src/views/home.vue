
<template>
  <main>
    <!-- home herosection -->
    <div>
      <!-- Hero card -->
      <div class="relative">
        <!-- <div class="relative inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
        <div class="mx-auto">
          <div class="headBg relative shadow-xl sm:overflow-hidden h-full">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="../assets/img/pexels-dazzle-jam-1029783.jpg"/>
              <div class="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  md:inset-0 md:buttom-0">
              <h1 class="text-center text-4xl sm:text-5xl lg:text-6xl">
                <span class="block text-white leading-tight text-50">Bridging Educational Barriers,</span>
                <span class="block text-blue-200 leading-tight sm:leading-normal ">Inspiring Hope</span>
              </h1>
              <!-- <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">Anim aute id magna
                aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                occaecat fugiat aliqua.</p> -->
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <router-link to="/volunteer" @click.prevent="getfile"
                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                    Become a volunteer </router-link>
                  <router-link to="/about"
                    class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                    Learn More </router-link>
                </div>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>

    <!-- More main page content here... -->
    <homeAbout />
    <!-- testimonial -->
    <homeTestimonial />
    <!-- News and Blog -->
    <homeNews class="bg-red-50"/>
    <!-- volunteerr -->
    <!-- <homeVolunteer /> -->
    <!-- newsletter -->
    <homeNewsletter />
  </main>
</template>
<script>
import myCarousel from '../components/image-carousel.vue'
import homeAbout from '../components/home-about.vue'
import homeNews from '../components/home-publications.vue'
import homeTestimonial from '../components/home-testimonial.vue'
// import homeVolunteer from '../components/home-volunteer.vue'
import homeNewsletter from '../components/newsletter-component.vue'
export default {
  components: {
    myCarousel, homeAbout, homeNews, homeTestimonial, homeNewsletter
  },
  data() {
    return {
      src1: '<img src="../assets/img/bluvard-img.jpg" />'
    }
  },
  methods:{
    getfile(){
      alert('hello world')
    },
  }
}
</script>
<style scoped>
  .headBg{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
