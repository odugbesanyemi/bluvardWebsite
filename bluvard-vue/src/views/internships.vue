

<template>
    <section>
        <!-- header -->
        <headerComponent    :header-pic='headerImg' />
    </section>
</template>
<script >

import headerComponent from "../components/page-header.vue";
import headerImg from "../assets/img/pexels-lagos-food-bank-initiative-9968379.jpg";
export default {
    components: {headerComponent},
    data(){
        return{
            headerImg,
        }
    },

}
</script>
<style>

</style>