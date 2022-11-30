<template>

    <div>
        <!-- contact-header  -->
        <headerComponent
            header-pic="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"/>
        <!-- contact form -->
        <div class="relative bg-white">
            <div class="absolute inset-0">
                <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div class="max-w-lg mx-auto">
                        <p class="mt-3 text-3xl mb-10 font-extrabold leading-6 text-sky-600">Send us a message </p>
                          <p class="mt-7 text-lg leading-6 text-gray-500">We are online 24/7 we respond almost immediately</p>
                        <dl class="mt-8 text-base text-gray-500">
                            <div>
                                <dt class="sr-only">Postal address</dt>
                                <dd>
                                    <p>Aruna Ikorodu</p>
                                    <p>Lagos State</p>
                                </dd>
                            </div>
                            <div class="mt-6">
                                <dt class="sr-only">Phone number</dt>
                                <dd class="flex">
                                    <PhoneIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span class="ml-3"> +234 XXXXXXXX </span>
                                </dd>
                            </div>
                            <div class="mt-3">
                                <dt class="sr-only">Email</dt>
                                <dd class="flex">
                                    <MailIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <span class="ml-3">hello@bluvard.com </span>
                                </dd>
                            </div>
                        </dl>

                    </div>
                </div>
                <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div class="max-w-lg mx-auto lg:max-w-none">
                        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                            <div>
                                <label for="full-name" class="sr-only">Full name</label>
                                <input type="text" name="full-name" id="full-name" autocomplete="name"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ring-1"
                                    placeholder="Full name" />
                            </div>
                            <div>
                                <label for="email" class="sr-only">Email</label>
                                <input id="email" name="email" type="email" autocomplete="email"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ring-1"
                                    placeholder="Email" />
                            </div>
                            <div>
                                <label for="phone" class="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" autocomplete="tel"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ring-1"
                                    placeholder="Phone" />
                            </div>
                            <div>
                                <label for="message" class="sr-only">Message</label>
                                <textarea id="message" name="message" rows="4"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md ring-1"
                                    placeholder="Message" />
                            </div>
                            <div>
                                <button type="submit"
                                    class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- our office -->
        <!-- <div class="bg-white">
            <div class="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h2 class=" text-gray-700 my-4 text-4xl sm:text-7xl">Our offices</h2>
                It’s amazing to have such a young, fresh, and talented new member as part of our team. 
                <p>Hope we can together take the company to new heights. </p>
                   
                <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">Aruna</h3>
                        <p class="mt-2 text-base text-gray-500">
                            <span class="block">Haruna, Ikorodu</span>
                            <span class="block">Lagos State.</span>
                        </p>
                    </div>
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">Adamo</h3>
                        <p class="mt-2 text-base text-gray-500">
                            <span class="block">Adamo, Ikorodu</span>
                            <span class="block">Lagos State.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- newsletter -->
        <newsletterComponent></newsletterComponent>

    </div>

</template>
<script>
import {PhoneIcon,MailIcon} from "@iconicicons/vue3"
import newsletterComponent from "../components/newsletter-component.vue";
import headerComponent from "../components/page-header.vue";
export default {
    components: {
        newsletterComponent,
        headerComponent,
        PhoneIcon,MailIcon,
    },
}
</script>
<style >

</style>