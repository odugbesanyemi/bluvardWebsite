<template>
        <header class="relative sm:pb-32 h-96">
            <div class="sm:container  ">
                <div class="absolute inset-0">
                    <img class="w-full h-full object-cover object-center"
                        :src="headerPic"
                        alt="" />
                    <div class="absolute inset-0 bg-gradient-to-l to-blue-800 from-indigo-200 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 pt-24">
                    <h1 class="text-white my-4 text-5xl sm:text-9xl">{{title}}</h1>
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