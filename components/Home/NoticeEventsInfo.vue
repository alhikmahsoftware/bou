<template>
  <div
    :class="[
      'flex flex-col gap-5  lg:px-5 pb-3 relative',
      { 'xl:border-l-2 border-lightestblue/80': isNotice },
    ]"
  >
    <!-- section title -->
    <h2 class="text-center font-bold text-3xl text-lightblue">
      {{ title }}
    </h2>
    <div class="my-16">
      <HomeNoticeEventCard :data="data" :isNotice="isNotice" />
    </div>

    <!-- <NuxtLink
      :to="{
        path: isNotice ? `/notice` : `/events`,
      }"
      class="py-2 px-5 text-sm rounded text-white bg-lightestblue/90 hover:bg-lightestblue duration-200 absolute bottom-0"
      >View All</NuxtLink
    > -->
  </div>
</template>

<script setup>
const { title, data, isNotice } = defineProps(["title", "data", "isNotice"]);
</script>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .my-16 {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
