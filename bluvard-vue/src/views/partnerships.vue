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

    <div class="bg-sky-700">

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