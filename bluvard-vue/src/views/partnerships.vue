<template>
    <section>
        <!-- header -->
        <headerComponent :header-pic='headerImg' />
    </section>
    <div>
        <div class="text-center">
            <h1 class="text-sky-600 mt-20">Partnerships</h1>
            <p class="mt-4 text-2xl font-bold text-gray-700">Partner with World Concern to change the story of a village.</p>
            <p class="mt-5 text-xl">You can make an investment in sustainable results that will</p>
            <p class="text-xl">directly impact children, families, a community, and a country.</p>
            <div class="">
                <iframe class="w-full h-96 px-64 mt-10" src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <div class="flex flex-row p-14 bg-slate-200 mt-10 w-screen h-auto relative">
        <div class="relative w-1/2 py-3 ">
            <div class="absolute z-10 top-1/2 -translate-y-1/2 bg-white w-full left-20 py-10 px-20">
                <div class="text-l">
                    <p>“If I'm looking for an organization to pursue global relief,</p>
                    <p>World Concern is very high on my list. World Concern is in</p>
                    <p>a position to be more nimble, and I think affect the areas</p>
                    <p>that are really, truly in desperate need. There are other</p>
                    <p>large, global relief organizations, but World Concern is very</p>
                    <p>adept at going to the end of the road, and that's very</p>
                    <p>important to me. As an investment person, I think I get the</p>
                    <p>best value for my money in serving those people.”</p>
                    <p class="mt-5 text-sky-600 font-bold text-2xl">MARK ANDERSON</p> 
                    <p class=" text-sky-600 font-bold text-l">Managing Principal, Tradewinds Capital Management</p>
                </div> 
            </div>

        </div>
        <div class="drop-shadow-lg relative w-1/2">
            <img class="w-11/12" src="../assets/img/projectdigitalrural29.jpg" alt="" srcset=""> 
        </div>
    </div>

    <div>
        <div class="mt-10 h-98 relative">
         <img class="w-full h-auto" src="../assets/img/projectdigitalrural13.jpg" alt="" srcset="">
        </div>
        <div class="text-center bg-white drop-shadow-lg mx-40 h-80 relative -top-28 p-5">
            <p class="mt-10 text-4xl text-sky-800 font-bold">Request a Call or Email to Learn More</p>
            <p class="text-lg">We’d love to tell you more about partnering with World Concern to end extreme poverty!  Call us at  <router-link to=""><span class="text-sky-500">800-755-5022,</span> </router-link> </p>
            <p class="text-lg"> email us at <router-link to=""><span class="text-sky-500">info@worldconcern.org </span> </router-link>and we’ll be in touch.</p>
            <button class="mt-10 bg-sky-800 p-5 text-white font-bold w-60 text-lg hover:bg-sky-600"> <router-link to=""></router-link>CONTACT US >> </button>
        </div>
    </div>
    
</template>
<script >

import headerComponent from "../components/page-header.vue";
import headerImg from "../assets/img/pexels-lagos-food-bank-initiative-9968379.jpg";
export default {
    components: { headerComponent},
    data(){
        return{
            headerImg,
        }
    },

}
</script>
<style>

</style>