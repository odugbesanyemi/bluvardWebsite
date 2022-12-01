
<template>
    <section>
        <!-- header -->
        <headerComponent :header-pic='headerImg' />


        <div class="container">
            <div class="md:flex md:max-w-6xl mx-auto md:py-20 md:gap-10 ">
                <div class="md:w-3/5 ">
                    <div class="max-md:p-10">
                        <h1 class="text-4xl text-blue-900">Intern With Us</h1>
                        <p class="mt-10 text-2xl font-bold text-gray-800">Get involved with World Concern and sharpen
                            your gifts and talents to transform lives around the
                            globe.</p>
                        <p class="mt-7 text-xl">The World Concern Internship is a robust program for university students
                            and recent graduates to
                            ensure you gain relevant experience in global relief and development work. Interns will be
                            exposed to exciting projects to learn how to overcome challenges and put theory into
                            practice.
                        </p>
                        <p
                            class="mt-7 text-xl font-extrabold p-5 bg-slate-100 shadow-lg min-h-40 border-l-2 border-gray-500">
                            “For we are his workmanship, created in Christ Jesus for good works, which God prepared
                            beforehand, that we should walk in them.”—Ephesians 2:10</p>
                        <p class="mt-7 text-xl">As a World Concern intern, you’ll explore career paths in the nonprofit
                            sector while developing
                            your professional skills and growing in your faith. You’ll receive hands on experience in
                            global
                            relief and development work in the most remote corners of the planet. Below are current
                            openings. We’re looking forward to seeing your application today!</p>
                        <hr class="mt-6 border-l-2 border-gray-400">
                        <h1 class="mt-7 text-3xl text-sky-900">Current Openings</h1>
                        <p class="mt-10">Showing only World Concern Support Staff.</p>
                        <p class="mt-6 text-lg text-red-500">Climate Resilience Program Intern</p>
                        <p class="mt-3 text-lg text-red-500">Human Resources Intern</p>
                        <hr class="mt-10 border-l-2 border-gray-400">
                        <p class="p-5 font-bold"> <router-link to="">powered by <span class="text-3xl text-sky-900">
                                    BLUVARD </span> </router-link> </p>
                    </div>
                </div>

                <div class="max-md:p-5 flex-initial md:w-2/5 ">
                    <div class="bg-gray-50 md:p-10">
                        <div class="">
                            <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently
                                    asked questions</h2>
                                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                                    <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6"
                                        v-slot="{ open }">
                                        <dt class="text-lg">
                                            <DisclosureButton
                                                class="text-left w-full flex justify-between items-start text-gray-400">
                                                <span class="font-medium text-gray-900">
                                                    {{ faq.question }}
                                                </span>
                                                <span class="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
                                                        aria-hidden="true" />
                                                </span>
                                            </DisclosureButton>
                                        </dt>
                                        <DisclosurePanel as="dd" class="mt-2 pr-12">
                                            <p class="text-base text-gray-500">{{ faq.answer }} </p>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>



<script >
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import headerComponent from "../components/page-header.vue";
import headerImg from "../assets/img/pexels-lagos-food-bank-initiative-9968379.jpg";
export default {
    components: {
        headerComponent, Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
    },
    data() {
        return {
            faqs: [
                {
                    question: "What's the best thing about Switzerland?",
                    answer:
                        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
                },
                // More questions...
            ],
            headerImg,
        }
    },

}


</script>
<style>

</style>