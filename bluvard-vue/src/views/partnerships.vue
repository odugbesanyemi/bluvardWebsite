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

    <div class="flex flex-row bg-slate-200 mt-10 relative">
        <div class="bg-white mt-10 ml-20 mb-10 p-16 drop-shadow-lg z-0 z-50">
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
        <div class="bg-white mt-10 ml-20 mb-10 p-16 drop-shadow-lg inline-block mr-20">
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