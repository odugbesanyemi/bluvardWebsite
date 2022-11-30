<template>
    <pageHeader :headerPic="headerImg"></pageHeader>
    <div class="history-content">
        <div class="max-w-6xl mx-auto">
            <div class="py-20 px-5">
                <p class="mb-4">About Us</p>
                <h2 class="text-6xl text-blue-900">History</h2>
                <hr class="my-5">
                <p class="max-w-7xl text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium repellendus accusamus
                    distinctio possimus
                    necessitatibus dolorem reiciendis? Laboriosam, adipisci maiores ducimus accusantium dignissimos,
                    libero cum, ad
                    culpa sapiente aliquam aperiam.
                </p>
            </div>
        </div>
        <div class="mx-auto">
            <div class=" bg-white md:py-20 px-5">
                <div class="max-w-6xl mx-auto  md:flex  gap-20">
                    <div class="history-img h-full md:w-4/5 ">
                        <img src="../assets/img/DSC_0732.JPG" alt="" class="rounded h-full w-full object-cover">
                    </div>
                    <div class="history-detail">
                        <div class="">
                            <div class="title mb-4 max-sm:mt-5">
                                <h2 class="text-4xl text-red-600 ">2021</h2>
                                <p class="desc font-bold my-3 text-gray-500 text-xl ">THE GREAT BEGINNING</p>
                            </div>
                            <div class="details w-full">
                                <p>Lorem ipsumdolor sit amet, consectetur adipisicing elit. Culpa maxime maiores officiis
                                    vel, unde a aspernatur incidunt deleniti
                                    nulla ipsa vitae. Quibusdam animi deleniti rerum libero beatae dolorum molestias
                                    impedit?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime maiores officiis
                                    vel, unde a aspernatur incidunt deleniti nulla ipsa vitae. Quibusdam animi deleniti
                                    rerum libero beatae dolorum molestias impedit?</p>
                                <div class="flex gap-3 md:gap-10 my-4 max-sm:mt-10">
                                    <div>
                                        <img src="../assets/img/DSC_1505.jpg" alt="" class="w-full rounded">
                                    </div>
                                    <div>
                                        <img src="../assets/img/DSC_1505.jpg" alt="" class="w-full rounded">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>                    
                </div>
            </div>
            <div class="bg-gray-50 md:py-20">
                <div class="py-20 px-5 max-w-6xl mx-auto md:flex gap-20">
                    <div class="history-img h-full md:w-4/5 order-2">
                        <img src="../assets/img/DSC_0732.JPG" alt="" class="rounded h-full w-full object-cover">
                    </div>
                    <div class="history-detail">
                        <div class="">
                            <div class="title mb-4 md:text-right  max-sm:mt-10">
                                <h2 class="text-4xl text-red-600">2022</h2>
                                <p class="desc font-bold my-3 text-gray-500 text-xl">WHERE WE ARE</p>
                            </div>
                            <div class="details w-full">
                                <p>Lorem ipsumdolor sit amet, consectetur adipisicing elit. Culpa maxime maiores officiis
                                    vel, unde a
                                    aspernatur incidunt deleniti
                                    nulla ipsa vitae. Quibusdam animi deleniti rerum libero beatae dolorum molestias
                                    impedit?</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime maiores officiis
                                    vel, unde a
                                    aspernatur incidunt deleniti nulla ipsa vitae. Quibusdam animi deleniti rerum libero
                                    beatae dolorum
                                    molestias impedit?</p>
                                <div class="flex gap-3 md:gap-10 my-4  max-sm:mt-10">
                                    <div>
                                        <img src="../assets/img/DSC_1505.jpg" alt="" class="w-full rounded">
                                    </div>
                                    <div>
                                        <img src="../assets/img/DSC_1505.jpg" alt="" class="w-full rounded">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>                
            </div>

        </div>
    </div>
</template>

<style>

</style>
<script>
import pageHeader from '../components/page-header.vue'
import headerImg from "../assets/img/projectdigitalrural14.jpg";

export default {
    components: {
        pageHeader,
    },
    data() {
        return {
            headerImg,
        }
    },
}
</script>