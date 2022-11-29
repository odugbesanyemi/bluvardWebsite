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
        <div class="py-10 bg-slate-100">
            <div class="">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-4xl">Press Releases</h2>
                    <div class="press-content py-10">
                        <div class="grid grid-cols-2 gap-5 md:gap-10">
                            <div class="press-item" v-for="item in pressItems">
                                <p class="font-bold mb-4 text-red-400">{{ item.newsDate }}</p>
                                <h4 class="mb-4 font-bold">{{ item.desc }}</h4>
                                <p class="flex items-center gap-3 text-gray-500">Read News
                                    <ChevronDoubleRightIcon class="h-4 w-4" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-6xl mx-auto my-10 ">
                    <h2 class="text-4xl">Bluvard in the News</h2>
                    <div class="press-content py-10">
                        <div class="grid grid-cols-2 gap-5 md:gap-10">
                            <div class="news-item" v-for="item in newsItems">
                                <p class="font-bold mb-4 text-red-400">{{ item.newsDate }}</p>
                                <h4 class="mb-4 font-bold">{{ item.desc }}</h4>
                                <p class="flex items-center gap-3 text-gray-500">Read Story
                                    <ChevronDoubleRightIcon class="h-4 w-4" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar">

            </div>
        </div>
    </div>
</template>

<style>

</style>
<script>
import pageHeader from '../components/page-header.vue'
import headerImg from "../assets/img/pexels-roman.jpg";
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
export default {
    components: {
        pageHeader, ChevronDoubleRightIcon
    },
    data() {
        return {
            headerImg,
            pressItems: [{
                link: "/",
                desc: "Bluvard Becomes The First of its Kind to provide global Tech Education in rural Communities",
                newsDate: "November, 2022",
            },
                {
                    link: "/",
                    desc: "Bluvard Becomes The First of its Kind to provide global Tech Education in rural Communities",
                    newsDate: "November, 2022",
                },
            ],
            newsItems: [
                {
                    link: "/",
                    desc: "New Development as NGO creates a lasting Solution for data driven society",
                    newsDate: "26th November, 2022",

                },
            ]
        }
    },
}
</script>