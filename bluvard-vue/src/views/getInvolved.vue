<template>
    <div>
        <pageHeader :headerPic="headerImg" title="." description="." ></pageHeader>
        <div class="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <h2>Get Involved</h2>
            <p class="">Join us in our global change Movement</p>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus, doloremque deleniti blanditiis molestias modi consequuntur cum laboriosam esse, corrupti quidem tempora dolorem vel praesentium sapiente sequi consequatur debitis neque!</p>
        </div>
    </div>
</template>
<script>
import pageHeader from "../components/page-header.vue"
import headerImg from "../assets/img/active-african-descent-american-1353351.jpg"
export default {
    components:{pageHeader,},
    data(){
        return{
            headerImg,
        }
    }
}
</script>
<style lang="">
    
</style>