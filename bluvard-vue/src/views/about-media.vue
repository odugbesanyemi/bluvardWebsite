<template>
    <pageHeader :headerPic="headerImg"></pageHeader>
    <div class="media-content">
        <div class="max-w-6xl mx-auto">
            <div class="py-20">
                <p class="mb-4">About Us</p>
                <h2 class="text-6xl">Media & Press</h2>
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
        <div class="bg-white py-10">
            <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-extrabold">Press Releases</h2>
                <div class="press-content">
                    <div class="grid">
                        <div class="press-item">
                            <p class="font-bold text-xl">November, 2022</p>
                            <h4 class="font-bold">World</h4>
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
import headerImg from "../assets/img/pexels-roman.jpg";

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