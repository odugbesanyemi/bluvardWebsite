<script >
import { RouterLink, RouterView } from "vue-router";
import navbar from './components/navbar-component.vue'
import myFooter from './components/footer-component.vue'
import lsidebar from './components/left-sidebar.vue'
export default {
  components: {
    navbar,myFooter,lsidebar
  }
}
</script>

<template>
  <header>
    <navbar />  
  </header>
  <RouterView />
  <lsidebar />
  <myFooter />
</template>

<style scoped>

</style>
