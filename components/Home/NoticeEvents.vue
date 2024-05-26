<template>
  <div class="max-w-screen-2xl mx-auto my-20 md:w-[80%] lg:w-[unset]">
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-[unset] px-2">
      <HomeNoticeEventsInfo title="NEWS & EVENTS" :data="result" />
      <HomeNoticeEventsInfo
        title="NOTICE BOARD"
        :data="result1"
        isNotice="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  newsAndEventsData,
  noticeboardData,
} from "../../data/events-news-data";

const result = ref([]);

try {
  const fetchedData = await newsAndEventsData();

  if (Array.isArray(fetchedData) && fetchedData.length > 0) {
    result.value = fetchedData.slice(0, 5);
  } else {
    console.error("Invalid or empty data returned by newsAndEventsData()");
  }
} catch (error) {
  console.error("Error fetching data:", error);
}

const result1 = ref([]);

try {
  const fetchedData1 = await noticeboardData();

  if (Array.isArray(fetchedData1) && fetchedData1.length > 0) {
    result1.value = fetchedData1.slice(0, 5);
  } else {
    console.error("Invalid or empty data returned by noticeboardData()");
  }
} catch (error) {
  console.error("Error fetching data:", error);
}
</script>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .my-20 {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
}
</style>
