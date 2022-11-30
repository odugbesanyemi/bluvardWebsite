
<template>
  <main>
    <!-- home herosection -->
    <div>
      <!-- Hero card -->
      <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden h-screen flex flex-col justify-center">
          <div class="absolute carousel-item active w-full h-screen">
            <!-- <div class="relative inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
            <div class="relative inset-0">
              <img class="w-full h-screen object-cover" src="../assets/img/pexels-dazzle-jam-1029783.jpg" />
              <div class="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
            </div>
          </div>
          <div class="absolute carousel-item w-full h-screen">
            <div class="relative inset-0">
              <img class="w-full h-screen object-cover" src="../assets/img/IMG-20211222-WA0020.jpg" />
              <div class="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
            </div>
          </div>
          <span class="absolute w-full h-screen bg-gradient-to-tr from-blue-900 to-sky-600/10 backdrop-blur-sm "></span>
          <div class="relative md:inset-0 md:buttom-0 max-sm:p-10">
            <div class="sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl mx-auto">
              <h1 class="text-6xl text-white lg:text-7xl xl:max-w-2xl">
                Bridging Educational Barriers, Inspiring Hope
              </h1>
              <div class="mt-10 mx-auto sm:max-w-none">
                <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <router-link to="/volunteer"
                    class="flex items-center justify-center py-4 text-xl font-medium rounded-full  shadow-sm bg-indigo-700 text-white hover:bg-indigo-500 sm:px-8">
                    BECOME A VOLUNTEER </router-link>
                  <router-link to="/about"
                    class="flex items-center justify-center px-4 py-4  text-xl font-medium rounded-full shadow-sm bg-white text-indigo-500  hover:bg-opacity-70 sm:px-8">
                    LEARN MORE </router-link>
                </div>
              </div>              
            </div>

          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex w-10 items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 w-10 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <!-- More main page content here... -->
    <homeAbout />
    <!-- video presentation -->
    <div class="bg-slate-800 relative">
      <img src="../assets/img/projectdigitalrural04.jpg" alt="" class="img-bg inset-0 absolute w-full h-full object-cover z-10 bg-fixed opacity-50">
      <div class="relative  z-10 backdrop-blur-xl pb:20 md:py-20 ">
        <div class="max-w-7xl flex flex-col md:flex-row mx-auto gap-5">
          <iframe class="md:w-1/2 h-96" src="https://www.youtube.com/embed/tgbNymZ7vqY">``></iframe>
          <div class="p-10 w-full md:w-1/2 ">
            <div>
              <h2 class="text-3xl text-white py-5">Mission</h2>
              <p class="text-white">To unearth potentials, inspire hope, and raise future generations of global leaders by creating forward-thinking, and inclusive educational programs for financially disadvantaged children and youths in rural communities across Nigeria.</p>
            </div>
            <div>
              <h2 class="text-3xl text-white py-5">Vision</h2>
              <p class="text-white">Our vision is for an Africa where access to holistic education becomes the everyday reality of all children living in rural communities regardless of gender, tribe, or religion.</p>
            </div>
          </div>          
        </div>


      </div>
    </div>

    <!-- testimonial -->
    <homeTestimonial />
    <!-- News and Blog -->
    <homeNews class="bg-red-50" />
    <!-- volunteerr -->
    <homeVolunteer />
    <!-- newsletter -->
    <homeNewsletter />
  </main>
</template>
<script>
import myCarousel from '../components/image-carousel.vue'
import homeAbout from '../components/home-about.vue'
import homeNews from '../components/home-publications.vue'
import homeTestimonial from '../components/home-testimonial.vue'
import homeVolunteer from '../components/home-volunteer.vue'
import homeNewsletter from '../components/newsletter-component.vue'
export default {
  components: {
    myCarousel, homeAbout, homeNews, homeTestimonial, homeNewsletter,homeVolunteer
  },
  data() {
    return {
      src1: '<img src="../assets/img/bluvard-img.jpg" />'
    }
  },
  methods: {
    getfile() {
      alert('hello world')
    },
  }
}
</script>
<style scoped>
.headBg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
