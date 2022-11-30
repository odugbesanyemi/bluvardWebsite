<script >
import { RouterLink, RouterView } from "vue-router";
import navbar from './components/navbar-component.vue'
import myFooter from './components/footer-component.vue'
import lsidebar from './components/left-sidebar.vue'
export default {
  components: {
    navbar,myFooter,lsidebar
  },
  data(){
    return{
      showNavbar:true,
      lastScrollPosition:0,
    }
  },
  mounted(){
    
  }
}
</script>

<template>
  <header>
    <navbar  class="top-0 z-10"/>  
  </header>
  <RouterView/>
  <lsidebar />
  <myFooter />
</template>

<style scoped>

</style>
