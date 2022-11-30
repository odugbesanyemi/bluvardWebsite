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

    <div class="flex">
        <div class="flex-1 w-64">
            <div>
                <h1>“If I'm looking for an organization to pursue global relief, World Concern is very high on my list. World Concern is in a position to be more nimble, and I think affect the areas that are really, truly in desperate need. There are other large, global relief organizations, but World Concern is very adept at going to the end of the road, and that's very important to me. As an investment person, I think I get the best value for my money in serving those people.”</h1>
                   <p>MARK ANDERSON</p> 
                   <p>Managing Principal, Tradewinds Capital Management</p> 

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