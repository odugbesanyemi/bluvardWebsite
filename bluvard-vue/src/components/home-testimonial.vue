<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-12 md:py-36 sm:px-6 lg:px-8 ">
    <h2 class=" text-5xl  mb-9 text-blue-900">What People are saying</h2>
    <div   class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
      <div class="mb-8 sm:break-inside-avoid " v-for="item in userComment">
        <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
          <p class="leading-relaxed text-gray-700">{{item.comment}}</p>
        </blockquote>

        <div class="mt-4 flex items-center gap-4">
          <img
            alt="Woman"
            src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            class="h-12 w-12 rounded-full object-cover"
          />

          <div class="text-sm">
            <p class="font-medium">{{item.name}}</p>
            <p class="mt-1">{{item.position}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </template>
<style>
</style>
<script>

  export default{
    data(){
      return{
        userComment:[
          {
            pic:"",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur",
            name:"Odugbesan yemi",
            position:"COO Tecxha IT Solutions"
          },
          {
            pic: "",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur",
            name: "Odugbesan yemi",
            position: "COO Tecxha IT Solutions"
          },
          {
            pic: "",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur",
            name: "Odugbesan yemi",
            position: "COO Tecxha IT Solutions"
          },
          {
            pic: "",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur",
            name: "Odugbesan yemi",
            position: "COO Tecxha IT Solutions"
          },
          {
            pic: "",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur",
            name: "Odugbesan yemi",
            position: "COO Tecxha IT Solutions"
          },
        ]
      }
    },
  }
</script>  