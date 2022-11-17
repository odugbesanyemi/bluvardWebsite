<template>
        <header class="relative bg-red-800 sm:pb-32 h-96 ">
            <div class="sm:container mx-auto md:px-20 px-5">
                <div class="absolute inset-0">
                    <img class="w-full h-full object-cover"
                        :src="headerPic"
                        alt="" />
                    <div class="absolute inset-0 bg-gradient-to-l to-blue-800 from-indigo-200 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div class="relative  max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 pt-24">
                    <h1 class="text-white lg:text-6xl my-4 text-5xl sm:text-7xl">{{title}}</h1>
                    <p class="mt-6 text-xl text-cyan-100 max-w-3xl">{{description}} </p>
                </div>                
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