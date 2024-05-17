<template>
  <div
  :style="{ backgroundImage:imageUrl,backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}"
    class="bg-no-repeat pb-10 relative min-h-[100vh]"
  >
    <div
      class="md:w-[80%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto pt-[20vh] relative z-10"
    >
      <!-- skeleton -->
      <div
        v-if="!result.results || result.results.length < 1 ? true : false"
        class="flex flex-col justify-center items-center gap-5"
      >
        <CommonNewsEventSkeleton />
      </div>

      <!-- content -->
      <div v-else>
        <h2 class="text-center text-3xl font-bold text-lightblue">
          NEWS AND EVENTS
        </h2>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-lightestblue/20 mt-16 px-4 lg:px-[unset] rounded-md"
        >
          <HomeNoticeEventCard :data="result.results" />
        </div>
        <div class="flex justify-between mt-4">
          <button
            @click="previous"
            :disabled="!result.previous"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Previous
          </button>
          <button
            @click="next"
            :disabled="!result.next"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <CommonGradientBg />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { newsAndEventsData } from "../../data/paginate-events-news-data";

const page = ref(1);
const result = ref({
  results: [],
  previous: null,
  next: null,
});

const fetchData = async (page) => {
  try {
    const fetchedData = await newsAndEventsData(page);

    if (Array.isArray(fetchedData.results) && fetchedData.results.length > 0) {
      result.value = fetchedData;
    } else {
      console.error("Invalid or empty data returned by newsAndEventsData()");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const previous = () => {
  if (result.value.previous) {
    page.value--;
    fetchData(page.value);
  }
};

const next = () => {
  if (result.value.next) {
    page.value++;
    fetchData(page.value);
  }
};

onMounted(() => {
  fetchData(page.value);
});

const imageUrl = ref("");

const response = await $fetch("https://opentv.nvs.la/api/v1/sg-5/bglogo/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});

imageUrl.value = `url('${response[0].image}')`;
</script>
