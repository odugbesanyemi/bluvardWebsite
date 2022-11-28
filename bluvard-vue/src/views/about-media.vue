<template>
    <pageHeader :headerPic="headerImg"></pageHeader>

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
    data(){
        return {
            headerImg,
        }
    },
}
</script>