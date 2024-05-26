<template>
  <div :style="{ backgroundImage:imageUrl,backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}" class="bg-no-repeat pb-20 relative min-h-[100vh]">
    <div
      class="md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto pt-[20vh] relative z-[100]"
    >
      <h2 class="text-center text-2xl font-bold text-lightblue lg:text-4xl">
        NOTICE
      </h2>

      <div class="mt-16 bg-white px-4 lg:px-[unset] rounded relative">
        <div class="flex flex-col gap-10">
          <img :src="data.image" alt="" class="mx-auto w-full" />

          <div class="px-5 flex flex-col gap-10">
            <h3 class="text-3xl font-medium">{{ data.title }}</h3>
            <p>{{ data.description }}</p>
          </div>
        </div>

        <span
          class="font-semibold text-md opacity-80 text-white bg-lightblue w-24 flex items-center justify-center rounded mt-3 lg:m-[unset] absolute top-1 right-1"
        >
          {{ formatDate(data.date) }}
        </span>
      </div>
    </div>
    <CommonGradientBg />
  </div>
</template>

<script setup>
// import { formatDate } from "~/utils/date-format";
// import { noticeboardData } from "../../data/events-news-data";

// const { params } = useRoute();

// const { image, description, title, publishedDate } = noticeboardData.find(
//   (e) => e.id === params.id
// );

import { noticeboardData } from "../../data/events-news-data";

const result = ref([]);
const data = ref({});
const { params } = useRoute();

try {
  const fetchedData = await noticeboardData();

  if (Array.isArray(fetchedData) && fetchedData.length > 0) {
    result.value = fetchedData;

    // Example of using find with an ID
    const someId = params.id; // replace with the actual ID you're looking for
    data.value = result.value.find((e) => e.id == someId);
  } else {
    console.error("Invalid or empty data returned by newsAndEventsData()");
  }
} catch (error) {
  console.error("Error fetching data:", error);
}

const imageUrl = ref("");
  
  const response = await $fetch(
    "https://opentv.nvs.la/api/v1/sg-5/bglogo/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }

  );

  imageUrl.value = `url('${response[0].image}')`;
</script>
