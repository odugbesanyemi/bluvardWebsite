<script>
   import myCarousel from  '../components/carousel.vue'
   export default {
   components: {
    myCarousel,
  },
  data(){
   return{
      src1:'<img src="../assets/img/bluvard-img.jpg" />'
   }
  }
}
</script>
<template>
   <myCarousel>
      <img src="../assets/img/two-slum-kids.jpg" alt="">
      <img src="../assets/img/Boys-playing.jpg" alt="">
   </myCarousel>
</template>

<style scoped>

</style>
