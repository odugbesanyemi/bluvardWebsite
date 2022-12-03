
<template>


    <div class="bg-white overflow-hidden">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2>
            <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Meet Whitney</h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img class="object-cover object-center" src="../assets/img/projectdigitalrural10.jpg"  width="1184" height="1376" />
                </div>
                <figcaption class="mt-3 flex text-sm text-gray-500">
                  <CameraIcon class="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span class="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="text-base max-w-prose mx-auto lg:max-w-none">
              <p class="text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
            </div>
            <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
             <div class="text-xl text-justify">
                 <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
              <p class="py-5">Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
              <p class="py-5">Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
              <div class="py-3">
                <ul role="list">
                    <li class="py-2">Quis elit egestas venenatis mattis dignissim.</li>
                    <li class="py-2">Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                    <li class="py-2">Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
              </div>
              <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
              <h3 class="py-7 text-2xl text-gray-900 font-bold">How we helped</h3>
              <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
              <p class="py-5">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
             </div>
            </div>
          </div>
        </div>
        <galleryComponent/>
      </div>
    </div>

  </template>
  
  <script>
  import galleryComponent from '../components/gallery-component.vue';
  export default{
    components:{ galleryComponent},
  }
  </script>