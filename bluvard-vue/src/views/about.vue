<template>
    <pageHeader :headerPic="headerImg" title="About Us" description="Hello world"></pageHeader>
    <div class="mx-auto py-6 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <section class="aboutUs">
            <div class="about-header pb-md-5">
                <h3 class="text-secondary pb-4">FOUNDER'S VISION</h3>
                <h1 class="">To empower, uplift and educate 1 million children in slum communities, in 5 years, using
                    chess as a focal point.</h1>
            </div>
            <div class="about-history  flex md:flex-row py-5 gap-10 flex-col">
                <div class="text-xl">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat deserunt nesciunt omnis,
                        sapiente inventore natus ipsam obcaecati quod, libero vel quos, explicabo quae id nihil?
                        Doloribus sequi ducimus eum explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi deserunt excepturi
                        recusandae. Quos hic, placeat molestiae, voluptatum ipsum architecto, explicabo numquam quisquam
                        eos perferendis dolor quae consectetur mollitia corrupti.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur. Quod accusamus in
                        pariatur minima dignissimos dolores ullam quia, ratione vel porro magnam corrupti dicta odit,
                        eveniet beatae unde asperiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
                        distinctio iure. Debitis dolorem nihil cum fugiat nesciunt similique, reprehenderit aut
                        asperiores perspiciatis fuga, fugit rem, sunt minus veniam doloremque sed!</p>
                </div>
                <div class="">
                    <img class=" rounded" src="../assets/img/pretty-lady.jpg" alt="">
                </div>
            </div>
        </section>
        <section class="bg-light">
            <div class="">
                <div class="impact pb-5">
                    <h2 class="pt-10 text-5xl mb-10">Our Impact</h2>
                    <div class="flex md:flex-row flex-col gap-4">
                        <div class="text-xl basis-3/4">
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
                    <div class="flex md:flex-row flex-col mt-4 gap-4">
                        <div class="text-xl basis-3/4">
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
        <section class="container pb-5">
            <div class="our-identity">
                <h2 class="pt-10 text-5xl mb-10">Our Identity</h2>
                <div class="text-xl mb-4">
                    <p class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed eius eveniet commodi,
                        suscipit vel facere non, alias veritatis harum maiores, esse ratione. Reprehenderit molestiae
                        corporis facere, minima magnam soluta et. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quas saepe dolores facere vero, sint nobis doloribus voluptatibus ratione, alias cumque
                        placeat delectus, minima rem commodi quae! Voluptas explicabo animi odio!</p>
                </div>
                <div class="identity row pb-4 align-items-center">
                    <div class="identity-image col-md-3 flex rounded gap-4 flex-col md:flex-row">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                        <img class="rounded w-md-100" src="../assets/img/slum-kids.jpg" alt="">
                    </div>
                    <div class="identity-description text-secondary fs-5 col-md-9 text-xl">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit excepturi quos
                            impedit cumque nobis a rerum, earum enim eligendi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur vel veniam,
                            repudiandae itaque numquam sunt est quam sed eligendi, tempore placeat adipisci blanditiis
                            dicta quia minima qui unde enim!</p>
                    </div>

                </div>
            </div>
        </section>
        <!-- Our team section -->
        <div class="bg-white">
            <div class="">
                <div class="space-y-12">
                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                        <h2 class="pt-10 text-5xl mb-10">Our Team</h2>
                        <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                            dolor ultricies donec risus sodales. Tempus quis et.</p>
                    </div>
                    <ul role="list"
                        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                        <li v-for="person in people" :key="person.name">
                            <div class="space-y-4">
                                <div class="aspect-w-3 aspect-h-2">
                                    <img class="object-cover shadow-lg rounded-lg" :src="person.imageUrl" alt="" />
                                </div>

                                <div class="space-y-2">
                                    <div class="text-lg leading-6 font-medium space-y-1">
                                        <h3>{{ person.name }}</h3>
                                        <p class="text-indigo-600">{{ person.role }}</p>
                                    </div>
                                    <ul role="list" class="flex space-x-5">
                                        <li>
                                            <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">LinkedIn</span>
                                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                    viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd"
                                                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- frequently asked questions -->
        <faqComponent />
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
            people: [
                {
                    name: 'Esther Edward',
                    role: 'Team Lead, Programms Cordinator',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                {
                    name: 'Oluwafisayo',
                    role: 'Communications Director',
                    imageUrl:
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                    twitterUrl: '#',
                    linkedinUrl: '#',
                },
                // More people...
            ]
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



