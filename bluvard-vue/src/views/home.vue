
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
            <!-- <div class="relative inset-x-0 bottom-0 h-1/2 bg-gray-100" /> -->
            <div class="relative inset-0">
              <img class="w-full h-screen object-cover" src="../assets/img/IMG-20211222-WA0020.jpg" />
              <div class="absolute inset-0 bg-indigo-300 mix-blend-multiply" />
            </div>
          </div>
          <div class="relative  px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8  md:inset-0 md:buttom-0">
            <h1 class="text-center text-4xl sm:text-5xl lg:text-6xl">
              <span class="block text-white leading-tight text-50">Bridging Educational Barriers,</span>
              <span class="block text-blue-200 leading-tight sm:leading-normal ">Inspiring Hope</span>
            </h1>
            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <router-link to="/volunteer"
                  class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8">
                  Become a volunteer </router-link>
                <router-link to="/about"
                  class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  Learn More </router-link>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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
      <div class="relative  z-10 backdrop-blur-xl py-20 ">
        <div class="max-w-7xl flex mx-auto gap-5">

          <iframe class="w-1/2" src="https://www.youtube.com/embed/tgbNymZ7vqY">></iframe>
          <div class="p-10 w-1/2">
            <div>
              <h2 class="text-3xl text-white py-5">Mission</h2>
              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, iste laudantium,
                itaque consequatur nesciunt fugit dolore minima iusto aut porro eos suscipit, tenetur necessitatibus unde
                maiores tempore sapiente quos possimus!</p>
            </div>
            <div>
              <h2 class="text-3xl text-white py-5">Vision</h2>
              <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, iste laudantium,
                itaque
                consequatur nesciunt fugit dolore minima iusto aut porro eos suscipit, tenetur necessitatibus unde maiores
                tempore
                sapiente quos possimus!</p>
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
