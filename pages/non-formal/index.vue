<template>
  <div
    :style="{
      // backgroundImage: imageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }"
    class="bg-no-repeat pb-10 relative min-h-[80vh] bg-two"
  >
    <!-- mobile only -->
    <button
      @click="toggleSidebar"
      class="flex w-full px-4 py-2 lg:hidden rounded relative z-[1000]"
    >
      <span class="py-2 bg-lightblue text-white px-5 rounded">
        Video Catgories</span
      >
    </button>

    <div class="flex gap-5 max-w-screen-xl mx-auto py-5 px-4 xl:px-[unset]">
      <!-- buttons -->
      <div class="w-[20%] z-[1000] px-2 hidden lg:block">
        <div
          class="rounded-md flex flex-col gap-y-2 justify-center mx-auto bg-white p-2"
        >
          <button
            v-for="(button, index) in data"
            :key="index"
            @click="setContent(button, index)"
            :class="[
              'py-3  text-sm hover:bg-lightblue/70 rounded-md',
              {
                ' bg-lightblue text-white': btnStyleIndex === index,
              },
              { '': btnStyleIndex !== index },
            ]"
          >
            <!-- btn text -->
            <div
              :class="[
                'flex justify-between items-center px-5   flex-grow',
                { ' duration-200': btnStyleIndex === index },
              ]"
            >
              <span class="font-semibold text-start"> {{ button.name }}</span>
            </div>
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-6 relative z-10 w-[80%]">
        <!-- vdo frame -->
        <iframe
          v-if="vdoPlay"
          :src="vdoPlay"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="w-full mx-auto aspect-video rounded"
        ></iframe>

        <!-- skeleton -->
        <div
          v-if="!data.length > 0"
          class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4"
        >
          <CommonSkeleton />
          <CommonSkeleton />
          <CommonSkeleton />
        </div>
        <!-- thumbnail -->
        <div
          v-else
          class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4"
        >
          <button
            @click="setVdoPlay(vdo.embedded_url)"
            v-for="vdo in content"
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
        </div>
      </div>
    </div>

    <CommonGradientBg />
    <AcademicsCategoryBar
      :closeSidebar="closeSidebar"
      :isSidebarOpen="isSidebarOpen"
      :handleOptionClick="handleOptionClick"
      :data="data"
      :btnStyleIndex="btnStyleIndex"
    />
  </div>
</template>

<script setup>
import { videodata } from "../../data/video-data";

const data = await videodata();

const content = ref(data[0]?.listvideo);
const vdoPlay = ref("");

const btnStyleIndex = ref(0);

const setContent = (videos, index) => {
  content.value = videos.listvideo;
  btnStyleIndex.value = index;
};

const setVdoPlay = (embedded_url, index) => {
  vdoPlay.value = embedded_url;
};

import { ref } from "vue";

const imageUrl = ref("");

const response = await $fetch("https://opentv.nvs.la/api/v1/sg-5/bglogo/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

imageUrl.value = `url('${response[0].image}')`;

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  console.log("clicked");
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const handleOptionClick = (videos, index) => {
  setContent(videos, index);
  closeSidebar();
};
</script>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .bg-no-repeat {
    background-position: initial !important;
    min-height: initial !important;
    padding-top: 2rem;
  }
  .py-5 {
    padding-bottom: 0;
  }
}
</style>
