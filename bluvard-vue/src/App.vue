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
  methods:{
    onScroll(){
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrollPosition < 0){
        return
      }
      if(Math.abs(currentScrollPosition - this.lastScrollPosition)< 60){return}
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted(){
    window.addEventListener('scroll',this.onScroll)
    alert('hhelo')
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.onScroll)
  }
}
</script>

<template>
  <header>
    <navbar  class="top-0 z-30 navbar" :class="{ 'navbar--hidden': !showNavbar }"/>  
  </header>
  <RouterView class="pt-16"/>
  <lsidebar />
  <myFooter />
</template>

<style scoped>
.navbar{
      width: 100vw;
      background-color: rgb(255, 255, 255);
      backdrop-filter: blur(10px);
      position: fixed;
      box-shadow: 0 2px 15px rgba(24, 32, 32, 0.5);
      transform: translate3d(0, 0, 0);
      transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  backdrop-filter: none;
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
