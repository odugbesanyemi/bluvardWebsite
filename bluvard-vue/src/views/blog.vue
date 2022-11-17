

<template>
    <section>
        <!-- header -->
        <headerComponent
            :header-pic='headerImg'
            title="Bluvard News"
            description="Stay Abreast News and information about Bluvard, you never know, Something might interest you." />
        <!-- NEWS SECTION -->
        <blogListComponent />
        <!-- NEWSLETTER -->
        <newsletterComponent />
    </section>
</template>
<script >

import newsletterComponent from "../components/newsletter-component.vue";
import headerComponent from "../components/page-header.vue";
import headerImg from "../assets/img/pexels-lagos-food-bank-initiative-9968379.jpg";
import blogListComponent from "../components/blog-list.vue"
export default {
    components: { newsletterComponent, headerComponent,blogListComponent},
    data(){
        return{
            
        }
    },
    setup() {
        return {
            headerImg,
        }
    }
}
</script>
<style>

</style>