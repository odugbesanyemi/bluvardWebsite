<script>
import { setDevtoolsHook, ssrContextKey } from 'vue';

    export default{
        data(){

        },
        props:["src"]
    }
</script>
<template>
    <a-carousel autoplay>
      <slot></slot>
    </a-carousel>
  </template>
  
  <style scoped>
  /* For demo */
  a-carousel img{
    display: none !important;
  }
  </style>