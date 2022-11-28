<template>
    <pageHeader :headerPic="headerImg" ></pageHeader>
    <div class="mx-auto py-6 px-4  sm:px-6 lg:px-8 lg:py-24">
        <section class="aboutUs max-w-6xl mx-auto">
            <div class="about-header pb-md-5">
                <h3 class="text-secondary pb-4">FOUNDER'S VISION</h3>
                <h1 class="leading-tight">To empower, uplift and educate out of school and young individuals teaching them neccessary digital skill</h1>
            </div>
            <div class="about-history flex md:flex-row py-5 gap-10 flex-col">
                <div class="text-xl text-gray-600 w-3/4">
                    <p class=" leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nesciunt omnis,
                        sapiente inventore natus ipsam obcaecati quod, libero vel quos, explicabo quae id nihil?
                        Doloribus sequi ducimus eum explicabo.</p>
                    <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi deserunt excepturi
                        recusandae. Quos hic, placeat molestiae, voluptatum ipsum architecto, explicabo numquam quisquam
                        eos perferendis dolor quae consectetur mollitia corrupti.</p>
                    <p class="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur. Quod accusamus in
                        pariatur minima dignissimos dolores ullam quia, ratione vel porro magnam corrupti dicta odit,
                        eveniet beatae unde asperiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
                        distinctio iure. Debitis dolorem nihil cum fugiat nesciunt similique, reprehenderit aut
                        asperiores perspiciatis fuga, fugit rem, sunt minus veniam doloremque sed!</p>
                </div>
                <div class="w-1/4">
                    <img class=" rounded" src="../assets/img/pretty-lady.jpg" alt="">
                </div>
            </div>
        </section>
        <section class="bg-light max-w-6xl mx-auto">
            <div class="">
                <div class="impact pb-5">
                    <h2 class="pt-10 text-5xl mb-10">Our Impact</h2>
                    <div class="flex md:flex-row flex-col gap-4 items-center">
                        <div class="leading-relaxed text-xl text-gray-500 basis-3/4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit excepturi
                                quos impedit cumque nobis a rerum, earum enim eligendiLorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aspernatur consequuntur vel veniam, repudiandae itaque
                                numquam sunt est quam sed eligendi, tempore placeat adipisci blanditiis dicta quia
                                minima qui unde enim!</p>
                        </div>
                        <div class="my-6 md:my-0">
                            <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        </div>
                    </div>
                    <div class="flex md:flex-row flex-col mt-4 gap-4 items-center">
                        <div class="leading-normal text-xl text-gray-500 basis-3/4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit excepturi
                                quos impedit cumque nobis a rerum, earum enim eligendi. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Aspernatur consequuntur vel veniam, repudiandae itaque
                                numquam sunt est quam sed eligendi, tempore placeat adipisci blanditiis dicta quia
                                minima qui unde enim!</p>
                        </div>
                        <div class="my-6 md:my-0">
                            <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class=" pb-5 max-w-6xl mx-auto">
            <div class="our-identity">
                <h2 class="pt-10 text-5xl mb-10">Our Identity</h2>
                <div class="leading-normal text-xl mb-4">
                    <p class="text-gray-600 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eius eveniet commodi,
                        suscipit vel facere non, alias veritatis harum maiores, esse ratione. Reprehenderit molestiae
                        corporis facere, minima magnam soluta et. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quas saepe dolores facere vero, sint nobis doloribus voluptatibus ratione, alias cumque
                        placeat delectus, minima rem commodi quae! Voluptas explicabo animi odio!</p>
                </div>
                <div class="identity row pb-4 text-xl align-items-center">
                    <div class="identity-image col-md-3 flex rounded gap-4 flex-col md:flex-row">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                    </div>
                    <div class="identity-description text-secondary fs-5 col-md-9 text-gray-600 leading-normal mt-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit excepturi quos
                            impedit cumque nobis a rerum, earum enim eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur vel veniam,
                            repudiandae itaque numquam sunt est quam sed eligendi, tempore placeat adipisci blanditiis
                            dicta quia minima qui unde enim!</p>
                    </div>

                </div>
            </div>
        </section>

        <!-- frequently asked questions -->
        <faqComponent class="max-w-6xl mx-auto"/>
    </div>
</template>
<script>
import pageHeader from '../components/page-header.vue'
import headerImg from "../assets/img/pexels-lagos-food-bank-initiative-9968379.jpg";
import pageBreadcrumb from "../components/page-breadcrumb.vue"
import faqComponent from "../components/faq-component.vue"

export default {
    components: {
        pageHeader,pageBreadcrumb,faqComponent,
    },
    data() {
        return {
            headerImg,

        }
    }
}
</script>
<style scoped>
.aboutUs {
    margin-top: 70px;
}

img {
    width: 100%;
}
</style>



