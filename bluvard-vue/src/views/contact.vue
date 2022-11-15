<template>

    <div>
        <!-- contact-header  -->
        <headerComponent
            header-pic="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            title="Get in Touch"
            description="Need to contact us? worry no more. We are just some phone calls and kilometers away."
            />
        <!-- our office -->
        <div class="bg-white">
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
                    <!-- <div>
                        <h3 class="text-lg font-medium text-gray-900">Toronto</h3>
                        <p class="mt-2 text-base text-gray-500">
                            <span class="block">7363 Cynthia Pass</span>
                            <span class="block">Toronto, ON N3Y 4H8</span>
                        </p>
                    </div> -->
                    <!-- <div>
                        <h3 class="text-lg font-medium text-gray-900">London</h3>
                        <p class="mt-2 text-base text-gray-500">
                            <span class="block">114 Cobble Lane</span>
                            <span class="block">London N1 2EF</span>
                        </p>
                    </div> -->
                </div>
            </div>
        </div>
        <!-- contact form -->
        <div class="relative bg-white">
            <div class="absolute inset-0">
                <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                    <div class="max-w-lg mx-auto">
                        <p class="mt-3 text-lg leading-6 text-gray-500">Send us a message </p>
                          <p class="mt-3 text-lg leading-6 text-gray-500">We are online 24/7 we respond almost immediately</p>
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
                <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                    <div class="max-w-lg mx-auto lg:max-w-none">
                        <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                            <div>
                                <label for="full-name" class="sr-only">Full name</label>
                                <input type="text" name="full-name" id="full-name" autocomplete="name"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    placeholder="Full name" />
                            </div>
                            <div>
                                <label for="email" class="sr-only">Email</label>
                                <input id="email" name="email" type="email" autocomplete="email"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    placeholder="Email" />
                            </div>
                            <div>
                                <label for="phone" class="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" autocomplete="tel"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    placeholder="Phone" />
                            </div>
                            <div>
                                <label for="message" class="sr-only">Message</label>
                                <textarea id="message" name="message" rows="4"
                                    class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
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
        <!-- CTA Section -->
        <section class="relative bg-white " aria-labelledby="join-heading">
            <div class="max-w mx-auto bg-blue-600 lg:bg-transparent">
                <div class="lg:grid lg:grid-cols-12">
                    <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                        <div class="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
                        <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                                <img class="object-cover object-center rounded-3xl shadow-2xl h-96 w-full"
                                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                                    alt="" />
                            </div>
                        </div>
                    </div>

                    <div class="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10  lg:grid lg:grid-cols-10 lg:items-center">
                        <div
                            class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                            <h2 class="text-3xl text-white" id="join-heading">Join our team</h2>
                            <p class="text-lg text-white">Varius facilisi mauris sed sit. Non sed et duis dui leo,
                                vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>
                            <a class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto"
                                href="#">Explore open positions</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- newsletter -->
        <newsletterComponent></newsletterComponent>

    </div>

</template>
<script>
import newsletterComponent from "../components/newsletter-component.vue";
import headerComponent from "../components/page-header.vue";
export default {
    components: {
        newsletterComponent,
        headerComponent,
        // MailIcon,
        // PhoneIcon,
    },
}
</script>
<style >

</style>