<template>
    <pageHeader :headerPic="headerImg"></pageHeader>
    <div class="media-content  mx-auto">
        <div class="max-w-6xl mx-auto">
            <div class="py-20">
                <p class="mb-4"></p>
                <h2 class="text-6xl text-sky-600 px-5">World Concern Launches New Podcast: “The End of the Road”</h2>
                <hr class="my-5">
                <div class="flex gap-5 flex-col md:flex-row">
                    <div class="flex-auto w-full sm:w-3/4 px-5">
                        <div class="press content text-l">
                            <h2 class="pb-5 text-2xl text-slate-700">Guests Share Stories of Living and Working in
                                Remote, Challenging Places</h2>
                            <p>Feb. 9, 2022 (SEATTLE, Wash.) – Seattle-based Christian relief and development
                                organization World Concern today launched a brand-new podcast that offers a glimpse of
                                what life is like in some of the world’s most remote, challenging places. “The End of
                                the Road” podcast is hosted by World Concern’s veteran communications director Cathy
                                Herholdt, who says the vision behind the podcast is to make the world a little smaller
                                by enabling podcast listeners to experience places they’ll likely never be able to go
                                and introduce them to people and cultures they’ll never forget.</p> <br>
                            <p>“I’ve been telling stories from the end of the road for more than a decade, and now, for
                                the first time, I’m excited to bring them to a wider audience through the podcast,” said
                                Cathy. “Even though I’ve traveled to some tough places, I realize I still know so little
                                about the world, beyond my own familiar surroundings. I had no idea how mind and
                                heart-opening it would be to hear our guests talk about places I’d never imagined. My
                                hope is that our listeners’ hearts and minds will be opened too, as they hear the
                                stories on this podcast.”</p> <br>
                            <p>Guests on Season One of the podcast include heroic yet humble humanitarians who offer
                                glimpses into life in places like a remote village in the Congo jungle, accessible only
                                by an 8-hour canoe ride; the harsh desert of Northern Somalia where nomadic pastoralists
                                live in search of water, or the crowded urban slums of Bangladesh, home to 165 million
                                people.</p> <br>
                            <p>“It’s part adventure travel, part extreme mission—but this is no ordinary mission trip,”
                                notes Cathy, who says the podcast also aims to reveal God’s presence in these remote,
                                hard-to-reach places, and show what He is doing in places that might seem forgotten by
                                the rest of the world.</p> <br>
                            <p>“God is not bound by nationality, tribe, region, ethnicity,” said World Concern President
                                Nick Archer in his podcast interview that focuses on his time serving in Somalia. “God
                                is as present here, as he is to me back home.”</p> <br>
                            <p>For more information on The End of the Road podcast, visit www.worldconcern.org/podcast.
                                Listen, download, and subscribe to the podcast on Apple Podcasts, Spotify, or wherever
                                podcasts are available.</p> <br> <br>
                            <hr>
                            <p class="mt-10  text-sky-500">
                                <router-link to="">Back To Press Releases »</router-link>
                            </p> <br>
                            <h4>For interviews with World Concern staff around the world, please contact Cathy Herholdt,
                                Senior Communications Director, at <span class=" text-sky-600">
                                    <router-link to="">(206) 794-9775</router-link>
                                </span> or <span class=" text-sky-600">
                                    <router-link to="">cathyh@worldconcern.org.</router-link>
                                </span> </h4> <br> <br>
                            <h4>World Concern is a Christian global relief and development organization. With our
                                supporters, our faith compels us to extend lifesaving help and opportunity to people
                                facing the most profound human challenges of extreme poverty. At World Concern, the
                                solutions we offer, the work we do, creates lasting, sustainable change. Lasting change
                                that provides lasting hope. Our areas of expertise include disaster response, clean
                                water, education, food security, child protection, microfinance and health.</h4>
                        </div>
                    </div>
                    <div class="flex-auto ">
                        <div class="media contact px-5 py-20  md:px-20 pt-10 pb-10 bg-zinc-100">
                            <h5 class="mb-3  text-sky-600 text-2xl font-bold">Media Relations Contact</h5>
                            <h3 class="font-black text-lg text-black"> Cathy Herholdt </h3>
                            <p class="text-xl">Senior Communications Director</p>
                            <p class="text-xl ">
                                <router-link to=""> Mobile: <span class=" text-sky-600"> 206-794-9775</span>
                                </router-link>
                            </p>
                            <p class="text-xl ">
                                <router-link to="">Email: <span class=" text-sky-600">cathyh@worldconcern.org</span>
                                </router-link>
                            </p>
                        </div>
                        <button class="p-5 w-full mt-5  bg-lime-700   hover:bg-lime-500"> <a href=""
                                class="py-10 text-white text-lg font-bold">DOWNLOAD PRESS RELEASES »</a> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style>

</style>
<script>
import pageHeader from '../components/page-header.vue'
import headerImg from "../assets/img/pexels-roman.jpg";

export default {
    components: {
        pageHeader,
    },
    data() {
        return {
            headerImg,
        }
    },
}
</script>