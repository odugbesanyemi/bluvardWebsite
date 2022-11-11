<script >
import { RouterLink, RouterView } from "vue-router";
import navbar from './components/navbar.vue'
import myFooter from './components/footer.vue'
import lsidebar from './components/lsidebar.vue'
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
