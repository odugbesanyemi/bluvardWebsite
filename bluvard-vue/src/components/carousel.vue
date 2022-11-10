<script>
import { setDevtoolsHook, ssrContextKey } from 'vue';

    export default{
        data(){

        },
        props:["src"]
    }
</script>
<template>
  <div class="carousel">
    <a-carousel autoplay>
        <slot ></slot>        
    </a-carousel>
  </div>
  </template>
  
  <style scoped>
  /* For demo */
  </style>