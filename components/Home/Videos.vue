<template>
  <div class="bg-lightestblue/10 py-32">
    <div
      class="flex flex-col md:flex-row gap-10 max-w-screen-xl mx-auto px-4 xl:px-[unset]"
    >
      <!-- buttons -->
      <div class="flex flex-col md:w-1/5 md:min-w-72">
        <div class="rounded-md flex flex-col bg-lightestblue/10">
          <button
            v-for="(button, index) in data"
            :key="index"
            @click="setContent(button, index)"
            :class="[
              'py-4 rounded ',
              { 'bg-lightestblue': btnStyleIndex === index },
            ]"
          >
            <!-- btn text -->
            <div
              :class="[
                'flex justify-between items-center px-5   flex-grow',
                { 'text-white duration-200': btnStyleIndex === index },
              ]"
            >
              <div class="flex flex-col leading-5">
                <span class="font-semibold text-start"> {{ button.name }}</span>
              </div>
              <Icon name="ic:baseline-arrow-forward-ios" class="text-xl" />
            </div>
          </button>
        </div>
      </div>

      <!--content section  -->
      <!-- Dynamic Content -->

      <div class="md:w-4/5 flex flex-col gap-10">
        <!-- vdo frame -->
        <iframe
          v-if="vdoPlay"
          :src="vdoPlay"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full lg:w-full h-full mx-auto aspect-video"
        ></iframe>

        <!-- thumbnail -->
        <div class="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-4">
          <button
            @click="setVdoPlay(vdo.embedded_url)"
            v-for="vdo in content"
            :key="vdo.id"
            class="rounded relative"
          >
            <img
              :src="vdo.thumbnail_url"
              alt=""
              class="rounded-md h-28 lg:h-36 w-full"
            />
            <!-- play btn -->
            <div
              class="flex items-center justify-center absolute h-full w-full inset-0 rounded-md border-4 border-opacity-0 hover:border-opacity-100 border-lightestblue"
            >
              <Icon name="bi:play-circle" class="text-3xl text-white" />
            </div>
          </button>

          <div class="flex items-center lg:justify-center">
            <NuxtLink
              to="/non-formal"
              class="py-2 px-5 text-sm rounded text-white bg-lightestblue/90 hover:bg-lightestblue duration-200"
              >View All</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { videodata } from "../../data/video-data";

const data = await videodata();

const content = ref(data[0].listvideo);
const vdoPlay = ref("");

const btnStyleIndex = ref(0);

const setContent = (videos, index) => {
  content.value = videos.listvideo.slice(0, 7);
  btnStyleIndex.value = index;
};

const setVdoPlay = (embedded_url, index) => {
  vdoPlay.value = embedded_url;
};
</script>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .py-32 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .gap-4 {
    gap: 0.5rem !important;
  }
}
</style>
