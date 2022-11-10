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
.carousel {
   background-color: black;
}

a {
   text-decoration: none;
}

li {
   list-style: none;
}

/* End of Utilities */
/* NAVBAR STYLING STARTS */
.logo {
   color: #ac8101;
   border-radius: 15px;
   border-left: 3px solid #ac8101;
   border-top: 3px solid #ac8101;
   padding: 1px;
}

.navbar {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   border-bottom: 15px solid #ac8101;
   border-radius: 1px;
}

.nav-links a {
   color: #212529;
}

.nav-links a:hover {
   color: #fff;
}

.active_list {
   background-color: #ac8101 !important;
   border-radius: 5px;
   padding: 5px 14px;
   font-weight: bolder;
   font-size: 20px;
}

/* LOGO */
.logo {
   font-size: 32px;
}

/* NAVBAR MENU */
.menu {
   display: flex;
   gap: 1em;
   font-size: 18px;
}

.menu li:hover {
   background-color: #212529;
   color: white;
   border-radius: 5px;
   transition: 0.3s ease;
}

.menu li {
   padding: 5px 14px;
}

/* End of Nav */
/*RESPONSIVE NAVBAR MENU STARTS*/
/* CHECKBOX HACK */
input[type="checkbox"] {
   display: none;
}

/*HAMBURGER MENU*/
.hamburger {
   display: none;
   font-size: 24px;
   user-select: none;
}

/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
   .nav-links {
      margin-top: 15px;
   }

   .nav-links a {
      color: #fff;
   }

   .active_list {
      background-color: #ac8101;
      border-radius: 5px;
      padding: 5px 14px;
      font-weight: bolder;
      font-size: 20px;
      color: #fff;
      width: 50%;
      margin: auto;
   }

   .active_list:hover {
      background-color: #212529 !important;
      border-radius: 5px;
      padding: 5px 14px;
      font-weight: bolder;
      font-size: 20px;
      color: #ac8101;
      width: 50%;
      margin: auto;
   }

   .menu {
      display: none;
      position: absolute;
      background-color: rgb(8, 9, 9);
      right: 0;
      left: 0;
      text-align: center;
      padding: 16px 0;
   }

   .menu li,
   a {
      font-size: 10pt;
   }

   .menu li:hover {
      display: inline-block;
      background-color: #212529;
      transition: 0.3s ease;
   }

   .menu li+li {
      margin-top: 12px;
   }

   input[type="checkbox"]:checked~.menu {
      display: block;
      z-index: 3;
   }

   .hamburger {
      display: block;
   }
}

/* End of APPLYING MEDIA QUERIES */
.content {
   top: 30%;
   left: 12%;
   position: absolute;
   color: white;
   font-size: 75px;
   font-weight: 500;
   z-index: 2;
}

.carousel {
   box-sizing: border-box;
}

.carousel-inner {
   max-height: 500px;
}

.carousel-inner img {
   object-position: center;
   height: 100%;
   object-fit: contain;
}

.carousel-inner::before {
   content: "";
   min-height: 100%;
   min-width: 100%;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.776);
   z-index: 1;
}

.content-btn {
   margin: 0px 20px 0px 0px;
   padding: 8px 32px;
   border-radius: 20px;
   border: solid transparent;
   font-family: "kumbh sans" sans-serif;
   font-size: 16pt;
   font-weight: 400;
   text-align: center;
   background-color: #ac8101;
   box-sizing: border-box;
}

.content-partner-btn {
   font-family: "kumbh sans" sans-serif;
   padding: 8px 32px;
   margin: 0px 20px 0px 0px;
   border-radius: 20px;
   border: 3px solid white !important;
   font-size: 16pt;
   font-weight: 400;
   text-align: center;
   background-color: transparent;
   box-sizing: border-box;
}

@media (max-width: 768px) {
   .content {
      padding-top: 10%;
      top: 25%;
      left: 15%;
      position: absolute;
      color: white;
      font-size: 15px;
      font-weight: 200;
      z-index: 2;
   }

   .carousel {
      box-sizing: border-box;
      backdrop-filter: unset;
   }

   .carousel-inner {
      max-height: 400px;
   }

   .carousel-inner img {
      object-position: center;
      height: 100%;
      object-fit: contain;
   }

   .carousel-inner::before {
      content: "";
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.776);
      z-index: 1;
   }

   .content h1,
   h2 {
      font-size: 15pt;
   }

   .content_btn {
      display: flex;
   }

   .content-btn {
      margin: 0px 20px 0px 0px;
      padding: 4px 16px;
      border-radius: 20px;
      border: solid transparent;
      font-family: "kumbh sans" sans-serif;
      font-size: 10pt;
      font-weight: 100;
      text-align: center;
      background-color: #ac8101;
      box-sizing: border-box;
   }

   .content-partner-btn {
      padding: 4px 6px;
      margin: 0px 20px 0px 0px;
      border-radius: 20px;
      border: 3px solid white !important;
      font-size: 10pt;
      font-weight: 100;
      text-align: center;
      background-color: transparent;
      box-sizing: border-box;
   }
}

/* End of the home Css */
</style>
