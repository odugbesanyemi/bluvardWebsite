<template>
        <header class="relative bg-red-800 sm:pb-32 h-96 ">
            <div class="absolute inset-0">
                <img class="w-full h-full object-cover"
                    :src="headerPic"
                    alt="" />
                <div class="absolute inset-0 bg-gradient-to-l from-blue-800 to-indigo-900 mix-blend-multiply"
                    aria-hidden="true" />
            </div>
            <Popover as="div" class="relative z-10">
                <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
                        <div class="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img class="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=emerald&shade=500"
                                        alt="" />
                                </div>
                                <div class="-mr-2">
                                    <PopoverButton
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                        <span class="sr-only">Close menu</span>
                                        <XIcon class="h-6 w-6" aria-hidden="true" />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div class="pt-5 pb-6">
                                <div class="px-2 space-y-1">
                                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                                        class="block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50">{{
                                                item.name
                                        }}</a>
                                </div>
                                <div class="mt-6 px-5">
                                    <a href="#"
                                        class="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-green-400 text-white font-medium hover:bg-green-500">Login</a>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <div class="relative  max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 pt-24">
                <h1 class="tracking-tight text-white lg:text-6xl my-4 text-5xl sm:text-7xl">{{title}}</h1>
                <p class="mt-6 text-xl text-cyan-100 max-w-3xl">{{description}}</p>
            </div>
        </header>
</template>
<script>
export default {
 props:['headerPic','title','description'],   
}
</script>
<style lang="">
    
</style>