<template>
  <div
    :style="{
      backgroundImage: imageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }"
    class="bg-no-repeat pb-10 relative min-h-[80vh]"
  >
    <!-- buttons -->
    <div class="z-[1000] pt-2 bg-white sticky top-0 p-2 hidden lg:block">
      <div class="rounded-md flex flex-wrap gap-y-2 justify-center mx-auto">
        <!-- {{data}} -->
        <button
          v-for="(button, index) in scl_department"
          :key="index"
          @click="setScl(button.id, index)"
        >
          <!-- btn text -->
          <div
            :class="[
              'flex justify-between items-center px-5   flex-grow',
              { ' duration-200': btnStyleIndex === index },
            ]"
          >
            <span
              class="font-semibold text-start"
              :class="[
                'text-sm ',
                { 'border-b-4 border-lightblue': btnStyleIndex === index },
                { '': btnStyleIndex !== index },
              ]"
            >
              {{ button.School_name }}</span
            >
          </div>
          <!-- Dropdown for departments -->
          <div
            class="absolute bg-white min-w-[300px]"
            v-if="selected_scl === button.id && button.departments.length > 0"
          >
            <ul class="p-3 text-left">
              <li
                v-for="(department, index) in button.departments"
                :key="index"
              >
                <button @click="setContent(department.id)">
                  {{ department.Department_name }}
                </button>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>

    <!-- mobile only -->
    <button
      @click="toggleSidebar"
      class="flex w-full px-4 py-2 lg:hidden rounded relative z-[1000]"
    >
      <span class="py-2 bg-lightblue text-white px-5 rounded">
        Video Catgories</span
      >
    </button>

    <div
      class="flex flex-col gap-10 relative z-10 max-w-screen-xl mx-auto py-5 px-4 lg:px-[unset]"
    >
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
        v-if="!content.length > 0"
        class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4"
      >
        <CommonSkeleton />
        <CommonSkeleton />
        <CommonSkeleton />
      </div>
      <!-- thumbnail -->
      <div v-else class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
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
    <CommonGradientBg />
    <AcademicsFormalCategoryBar
      :closeSidebar="closeSidebar"
      :isSidebarOpen="isSidebarOpen"
      :handleOptionClicksetScl="handleOptionClicksetScl"
      :handleOptionClicksetContent="handleOptionClicksetContent"
      :data="scl_department"
      :scl="selected_scl"
      :btnStyleIndex="btnStyleIndex"
    />
  </div>
</template>

<script setup>
import { formalVideo } from "../../data/get-formal-video-data";
import { sclDepertmentData } from "../../data/get-school-department-list-data";

const scl_department = await sclDepertmentData();

const content = ref([]);
const vdoPlay = ref("");
const selected_scl = ref("");
const selected_department = ref("");

const btnStyleIndex = ref(0);

const setScl = (scl_id, index) => {
  selected_scl.value = scl_id;
  btnStyleIndex.value = index;
};
const setContent = async (dep_id) => {
  selected_department.value = dep_id;
  content.value = await formalVideo(
    selected_department.value,
    selected_scl.value
  );
};

const setVdoPlay = (embedded_url, index) => {
  vdoPlay.value = embedded_url;
  selected_scl.value = "";
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

const handleOptionClicksetScl = (scl_id, index) => {
  selected_scl.value = scl_id;
  btnStyleIndex.value = index;
};
const handleOptionClicksetContent = async (dep_id) => {
  selected_department.value = dep_id;
  content.value = await formalVideo(
    selected_department.value,
    selected_scl.value
  );
  closeSidebar();
};
</script>
