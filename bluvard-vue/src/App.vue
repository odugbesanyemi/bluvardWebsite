<script >
import { RouterLink, RouterView } from "vue-router";
import navbar from './components/navbar.vue'
import myFooter from './components/footer.vue'
export default {
  components: {
    navbar,myFooter
  }
}
</script>

<template>
  <header>
    <navbar />  

  </header>
  <RouterView />
  <myFooter />
</template>

<style scoped>

</style>
