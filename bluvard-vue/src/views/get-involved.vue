<template>
    <div>
        <pageHeader :headerPic="headerImg" ></pageHeader>
        <div class="px-4 sm:px-6 lg:px-8 text-center py-24 bg-blue-50">
            <div class="max-w-2xl mx-auto">
                <h2 class="text-5xl py-3 text-blue-900">Get Involved</h2>
                <p class="mb-8 text-blue-500">Join us in our global change Movement</p>
                <p class="text-blue-900 opacity-70 mt-4 text-xl leading-tight">It all starts with your choice to act instead of looking away. You meet a need and that starts a chain reaction. Families break free of poverty, begin to work toward a better future, and become open to spiritual renewal. Your action has the power to transform a life, a family, an entire village.</p>
            </div>
        </div>
        <div class="contentGrid py-20">
            <div class="md:columns-2 sm:columns-1 md:max-w-5xl mx-auto sm:max-w-sm">
                <div class="p-4 hover:shadow-xl mb-6 bg-white shadow rounded" v-for="item in involvedPages" :key="item.id">
                    <img :src="item.pictureName" alt="" class="w-full rounded">
                    <div class="px-4 py-3">
                        <h2 class="py-3 text-3xl text-blue-600">{{item.title}}</h2>
                        <p class="py-2 text-gray-500 pb-4">{{item.description}}</p>
                        <router-link :to="item.btnLink" ><button class="button bg-blue-900 hover:bg-blue-700 rounded px-5 py-3 text-blue-100">{{item.btnName}}  <ChevronDoubleRightIcon class="w-5 ml-3 inline-block" /></button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pageHeader from "../components/page-header.vue"
import headerImg from "../assets/img/active-african-descent-american-1353351.jpg"
import imgDonate from "../assets/img/Boys-playing.jpg"
import {ChevronDoubleRightIcon} from '@heroicons/vue/24/solid'
export default {
    components:{pageHeader,ChevronDoubleRightIcon},
    data(){
        return{
            headerImg,imgDonate,
            involvedPages:[
                {
                    id:0,
                    pictureName:imgDonate,
                    title:"Donate",
                    description:"make and immediate and lasting response to Children in need across the global federation",
                    btnName:"Donate Now",
                    btnLink:"/getinvolved/donate",                    
                },
                {
                    id:0,
                    pictureName:imgDonate,
                    title:"Partnerships",
                    description:"Your business will benefit with increased visibility, customer loyalty, and enthusiastic team members when you partner with World Concern. Find out about partnership opportunities for individuals or businesses.",
                    btnName:"Partner With us",
                    btnLink:"/getinvolved/partners",                    
                },
                {
                    id:0,
                    pictureName:imgDonate,
                    title:"Fundraise",
                    description:"Join with others to bring transformation to the lives of children, families, and communities in some of the most remote and impoverished places of the world by fundraising for World Concern.",
                    btnName:"Start Funding",
                    btnLink:"/getinvolved/funding",                    
                },
                {
                    id:0,
                    pictureName:imgDonate,
                    title:"Internships",
                    description:"The World Concern Internship for university students and recent graduates provides experience in global relief and development work. Interns are challenged to put theory into practice in real life situations.",
                    btnName:"Learn More",
                    btnLink:"/getinvolved/internships",                    
                },
            ]
        }
    }
}
</script>
<style lang="">
    
</style>