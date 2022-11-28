<template>
    <pageHeader :headerPic="headerImg"></pageHeader>

</template>
<script>
import pageHeader from '../components/page-header.vue'
    export default{
    components: {
        pageHeader,
    },
        data(){
            return{
                headerImg,
            }
        },
    }
</script>
<style></style>