<template >
    <section>
        <div class="">
            <pageHeader :headerPic="headerImg" />
        </div>
        <div class="">
            <div class="bg-blue-50 text-blue-900">
                <div class="donate-text max-w-5xl mx-auto text-center py-20 px-2">
                    <h2 class="text-7xl">Donate</h2>
                    <p class="text-md py-4 md:text-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure voluptate labore quidem placeat,
                        nulla
                        debitis numquam ipsa repellat mollitia omnis expedita laborum facilis alias ducimus reiciendis
                        fugit
                        nisi, rem vitae.
                    </p>
                </div>
            </div>
            <div class="bg-blue-50">
                <div
                    class="max-sm:p-2 md:p-15 sm:p-5 xs:p-3  max-w-6xl bg-transparent bg-opacity-0 mx-auto relative rounded -top-10 ">
                    <div class="flex md:flex-row flex-col gap-4">
                        <!-- donation form -->
                        <div class="bg-gray-700 shadow-xl md:w-1/2 h-full  rounded-lg">
                            <h3 class="text-blue text-xl font-bold text-center rounded-t-md bg-blue-200 py-5"> Choose a
                                Donation
                                amount</h3>
                            <div class="donate-option">
                                <form @submit.prevent="" class="form">
                                    <label @click="AmtDonated = item.price"
                                        class="flex flex-row items-center gap-4 text-blue-50 border-b border-opacity-sm py-5 hover:bg-blue-50 hover:bg-opacity-5 p-4"
                                        v-for="item in donateOptions" :key="item.id">
                                        <input type="radio" name="donation" class="w-1/4 h-10">
                                        <h1 class="text-4xl">${{ item.price }}</h1>
                                        <p class="text-sm xs:hidden sm:block">{{ item.description }} </p>
                                    </label>
                                    <div class="my-4 p-5">
                                        <div class="mt-1 relative rounded-md shadow-sm ">
                                            <div
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span class="text-gray-500 "> $ </span>
                                            </div>
                                            <input type="text" name="price" id="price"
                                                class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-4 text-2xl pr-12 border-gray-300 rounded-md"
                                                placeholder="0.00" aria-describedby="price-currency"
                                                v-model="AmtDonated">
                                            <div
                                                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span class="text-gray-500 " id="price-currency"> USD </span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Name links -->
                        <div class="donate-details md:w-3/4 bg-white-400 shadow-xl rounded-lg bg-white">
                            <h3 class="text-blue text-xl font-bold text-center rounded-t-md bg-gray-200 py-5"> Kindly
                                Fill in
                                your information</h3>
                            <div class="max-md:p-6 md:p-10">
                                <div class="md:flex gap-4">
                                    <div class="md:w-1/2 max-md:mb-3">
                                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <div class="mt-1">
                                            <input type="email" name="email" id="email"
                                                class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2"
                                                placeholder="you@example.com" v-model="formData.email" required
                                                autocomplete />
                                        </div>
                                    </div>
                                    <div class="md:w-1/2">
                                        <label for="email" class="block text-sm font-medium text-gray-700">Phone
                                            Number</label>
                                        <div class="mt-1">
                                            <input type="tel" name="tel" id="tel"
                                                class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2"
                                                placeholder="+234 70452XXXXXX" v-model="formData.phone" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <label for="email" class="block text-sm font-medium text-gray-700">Full Name</label>
                                    <div class="mt-1">
                                        <input type="text" name="fullName" id="fullName"
                                            class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2"
                                            placeholder="Your Name" v-model="formData.name" required />
                                    </div>
                                </div>
                                <div class="md:flex gap-4 items-center">
                                    <div class="md:w-1/2 max-md:mb-3">
                                        <label for="location"
                                            class="block text-sm font-medium text-gray-700">Location</label>
                                        <select id="location" name="location"
                                            class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2 mt-1"
                                            v-model="formData.country" required>
                                            <option>United States</option>
                                            <option selected="">Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>
                                    <div class="my-4 md:w-1/2">
                                        <label for="location"
                                            class="block text-sm font-medium text-gray-700">Location</label>
                                        <select id="location" name="location"
                                            class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2 mt-1"
                                            v-model="formData.state" required>
                                            <option>Califonia</option>
                                            <option selected="">Alabama</option>
                                            <option>Ohio</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="my-4">
                                    <label for="address" class="block text-sm font-medium text-gray-700">Adress Line
                                        1</label>
                                    <div class="mt-1">
                                        <input type="text" name="" id="text"
                                            class="px-5 py-3 block w-full sm:text-sm rounded-md outline-blue-100 border-gray-200 border-2 focus:border-2"
                                            placeholder="Residential address" v-model="formData.address" required />
                                    </div>
                                </div>
                                <hr class="my-6">
                                <div class="my-4 terms">
                                    <h3 class="text-xl font-bold text-gray-400">
                                        Security & Privacy
                                    </h3>
                                    <p class="text-gray-300 leading-tight mt-3">
                                        This page is securely encrypted for the protection of your data. All of your
                                        personal
                                        and financial information is confidential and secure.
                                    </p>
                                </div>
                                <button
                                    class="bg-red-500 text-white text-bold text-xl hover:bg-red-600 my-4 w-full text-center p-4 rounded-lg focus:ring-2 focus:ring-offset-2 ring-red-500"
                                    @click.prevent="submitForm">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 w-96" v-if="modalOpen">
            <!-- <span class="w-full h-full bg-gray-50 absolute"></span> -->
            <div
                class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:max-w-lg sm:w-full sm:p-6">
                <div class="relative">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <!-- Heroicon name: outline/check -->
                        <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-5">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Confirm Donation</h3>
                        <div class="mt-2 p-2">
                            <p class="text-sm text-gray-500">Kindly confirm your donation amount.</p>
                            <p class="text-sm text-gray-500">You are about to Donate the sum of ${{ AmtDonated }}.00 to
                                Bluvard Education Initiative. Kindly click button below to continue</p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-6">
                    <button type="button"
                        class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                        @click="OpenPaymentDetails">Continue</button>
                </div>
            </div>
        </div>
        <span class="bg-gray-600 bg-opacity-10  w-full h-full top-0 left-0 fixed" v-if="paymentModal"> </span>

        <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-sm:px-2" v-if="paymentModal">

            <div class=" max-sm:w-1/2 px-6 py-10 w-96 sm:w-full mx-auto rounded-lg md:px-30 bg-blue-900 text-white">
                <XMarkIcon class="absolute top-5 text-red-500 p-2 right-10 w-16 rounded-4xl"
                    @click="paymentModal = !paymentModal" />
                <div class="max-sm:w"></div>
                <div>
                    <h1 class="text-5xl mb-4">Thank you</h1>
                    <p class=" text-opacity-60 md:w-3/4">Thank you for your thoughtful support to join in the great
                        global change with Bluvard Education Initiative. We</p>
                    <h2 class="text-xl mt-4 mb-6">Account Details</h2>
                    <table class="text-sm">
                        <tr>
                            <td class="text-xl font-bold md:text-40">Bank Name: </td>
                            <td class="text-xl px-3 md:text-40">Polaris</td>
                        </tr>
                        <tr>
                            <td class="text-xl font-bold md:text-40">Account Number: </td>
                            <td class="text-xl px-3 md:text-40">0225626216</td>
                        </tr>
                        <tr>
                            <td class="text-xl font-bold md:text-40">Account Name: </td>
                            <td class="text-xl px-3 md:text-40">Bluvard Education Initiative</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>

    </section>



</template>
<script>
import pageHeader from "../components/page-header.vue"
import headerImg from "../assets/img/active-african-descent-american-1353351.jpg"
import { XMarkIcon } from '@heroicons/vue/24/solid'
export default {
    components: { pageHeader, XMarkIcon },
    methods: {
        submitForm() {
            // get the values of the formdata 
            let formElements = (Object.entries(this.formData))
            for (const x of formElements) {
                if (x[1] == "") {
                    alert(`${x[0]} field cannot be empty`)
                    return
                }
            }
            if (!this.AmtDonated) {
                alert('Please select a donation amount')
                return
            } else {
                this.modalOpen = true
            }


        },
        OpenPaymentDetails() {
            this.modalOpen = !this.modalOpen
            let formElements = (Object.entries(this.formData))
            for (const x of formElements) {
                x[1] = ""
            }
            this.AmtDonated = ""
            this.paymentModal = !this.paymentModal
        }
    },
    data() {
        return {
            headerImg,
            modalOpen: false,
            paymentModal: false,
            AmtDonated: 0.00,
            donateOptions: [
                {
                    id: "0.00",
                    price: "10.00",
                    description: ""
                },
                {
                    id: 1,
                    price: "20.00",
                    description: ""
                },
                {
                    id: 2,
                    price: "30.00",
                    description: ""
                },
            ],
            formData: {
                email: "",
                phone: "",
                name: "",
                country: "",
                state: "",
                address: ""
            },

        }
    }
}
</script>
<style>

</style>