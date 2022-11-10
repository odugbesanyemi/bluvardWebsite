<template lang="">
<nav class="navbar navbar-expand-lg bg-white navbar-light">
  <div class="container ">
    <RouterLink to="/" class="">
        <img src="../assets/Bluvard_svg_logo.svg" alt="" class='navbarLogo' width="">
    </RouterLink>
    <button class="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""></span>
    </button>
    <div class="collapse navbar-collapse align-items-center justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 justify-content-around w-50">
        <li class="nav-item">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/blog" class="nav-link">Blog</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </li>
      </ul>
    </div>
    <div class="btn-donate">
        <RouterLink to="/contact" class="nav-link btn rounded-pill btn-outline-secondary border-0 btn-lg" >Donate</RouterLink>
    </div>
  </div>
</nav>
    <div>
        
    </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";

export default {
    
    data(){
        return{
            // name:'navbar',
        }
    }
}
</script>
<style >

</style>