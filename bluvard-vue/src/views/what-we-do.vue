<template >
  <section>
    <div class="page-header">
      <pageHeader :headerPic="headerImg" />
    </div>
    <div class="bg-white text-gray-900">
      <div class="donate-text max-w-5xl mx-auto text-center py-10 md:py-36 px-4 md:px-20">
        <h2 class="text-5xl text-blue-900">What We Do</h2>
        <!-- <h3 class="text-4xl text-slate-500 font-extrabold my-4">Bridging the Education Divide</h3> -->
        <p class=" py-6 md:px-2 text-slate-500 md:text-center my-6 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptate labore quidem placeat,
          nulla debitis numquam ipsa repellat mollitia omnis expedita laborum facilis alias ducimus reiciendis
          fugit nisi, rem vitae.
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2  ">
          <img src="../assets/img/IMG-20211222-WA0015.jpg" alt="" class="rounded">
          <img src="../assets/img/IMG-20211222-WA0016.jpg" alt="" class="rounded">
          <img src="../assets/img/IMG-20211222-WA0020.jpg" alt="" class="rounded">
        </div>
      </div>
    </div>
    <div class="bg-white text-gray-900 relative">
      <SvgDotsIcon class="absolute md:block top-0 opacity-80 right-30 right-1/2 -mr-3 lg:m-0 lg:left-0 " />
      <img src="../assets/img/IMG-20211222-WA0015.jpg"
        class="inset-0 w-full h-full object-cover -z-0 absolute opacity-5">
      <div class="md:px-10 py-12 md:py-36 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 px-4 items-center">
        <div class="left md:w-1/4 w-full md:px-20 md:text-justify z-10">
          <h2 class="text-4xl my-4 text-blue-900">How We Help</h2>
          <p class="leading- md:leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestias fuga
            explicabo porro officia veritatis aperiam eveniet consectetur similique, at incidunt necessitatibus quasi,
            optio
          </p>
          <p class="font-bold leading-normal mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel
            repellendus, voluptas voluptatum </p>
        </div>
        <div class="right md:w-3/4 w-full relative z-10">
          <div class="grid md:grid-cols-2 gap-4 grid-cols-1 my-8 md:my-0 z-10 relative ">
            <div
              class="text-center bg-slate-100 rounded items-center w-full py-4 px-2 hover:bg-white hover:ring-white hover:ring-offset-4 group border border-slate-400 border-opacity-70"
              v-for="item in services">
              <p class="font-bold text-slate-600 group-hover:text-slate-500">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 relative">
      <!-- Our Programmes -->
      <div class="md:px-10 py-12 md:py-36  md:max-w-7xl mx-auto gap-4 px-4 ">
        <h2 class="text-4xl md:text-6xl text-center text-blue-900">Our Programmes</h2>
        <p class="mx-auto text-justify md:text-center my-4 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia error, corrupti odio qui necessitatibus dolorem eaque amet, libero magni numquam placeat dolore facere
          officiis molestiae sunt mollitia expedita dolor veritatis?</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 my-6 gap-4 grid-cols-1"  >
          <div class="group flex flex-col justify-between shadow-lg hover:shadow-sm bg-slate-50 rounded-lg" v-for="item in programmes">
            <div>
              <img src="../assets/img/projectdigitalrural01.jpg" alt="" class="object-cover">
            </div>
            <div class="px-5 py-6 text-sm">
              <h2 class="my-3 text-2xl text-blue-800">{{item.title}}</h2>
              <p class="text-gray-500">{{item.description}}</p>
              <router-link  :to="item.link"><p class="my-3 underline">Read more ...</p></router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>



</template>
<script>
import pageHeader from "../components/page-header.vue"
import headerImg from "../assets/img/projectdigitalrural.jpg"
import SvgDotsIcon from "../components/svg-dots.vue"
export default {
  components: { pageHeader, headerImg, SvgDotsIcon },
  data() {
    return {
      headerImg,
      services: [
        {
          img: "",
          title: "Mentorship & Training"
        },
        {
          img: "",
          title: "Free Internet Access"
        },
        {
          img: "",
          title: "Digital Skill Acquisition"
        },
        {
          img: "",
          title: "Rural Tech Education"
        },

      ],
      programmes: [
        {
          img: "",
          title: "Project Digital Rural",
          description: "Equipping out-of-school/unemployed youths in rural communities across Nigeria with in-depth digital skills, and mentorship sufficient to launch a career in different digital fields",
          link: "#",
        },
        {
          img: "",
          title: "Centre for Education(CELLS)",
          description: "At Bluvard, we establish local innovation hubs in rural or underserved communities across Nigeria. These CELLS serve as points of ....",
          link: "#",
        },
        {
          img: "",
          title: "Rural Heores",
          description: "Every month, we bring the spotlight to one young person in a rural community using their skill/ talent to impact the lives of others in their community.",
          link: "#",
        },
        {
          img: "",
          title: "Digital Inclusion Hub",
          description: "Our digital Hub of inclusion is a place designed to help youth learn and grow with access to PC's, library for learning various demanding tech skills and also access to Mentorship and training for digital skills",
          link: "#",
        },
      ]
    }
  },
}
</script>
<style>

</style>