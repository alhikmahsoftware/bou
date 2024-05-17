<template>
  <div class="py-32">
    <div
      class="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto px-4 xl:px-[unset]"
    >
      <!-- buttons -->
      <div class="flex flex-col gap-5 lg:w-2/6">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="setContent(button, index)"
          class="py-2 px-2 rounded relative"
        >
          <!-- div for btn background effect -->
          <div
            :class="[
              'absolute   shadow-sm shadow-lightblue inset-0 z-[100]',
              {
                'w-full bg-lightestblue transition-all duration-500 rounded':
                  btnStyleIndex === index,
              },
              {
                'w-28 bg-lightestblue  transition-all duration-500 rounded':
                  btnStyleIndex !== index,
              },
            ]"
          ></div>
          <!-- btn content -->
          <div class="relative z-[200] flex gap-16">
            <!-- date -->
            <div
              class="text-white flex flex-col items-center justify-center w-24"
            >
              <span>{{ button.week_name }}</span>
              <span class="font-bold text-3xl">{{
                getDayFromDate(button.date)
              }}</span>
            </div>

            <!-- btn text -->
            <div
              :class="[
                'flex justify-between items-center px-5  relative z-[200] flex-grow',
                { 'text-white duration-200': btnStyleIndex === index },
              ]"
            >
              <div class="flex flex-col leading-5">
                <span class="font-semibold text-start">
                  {{ button.subject }}</span
                >
                <span
                  :class="[
                    'text-sm text-start text-gray-500',
                    { '!text-gray-200': btnStyleIndex === index },
                  ]"
                  >{{ button.department }}</span
                >
              </div>
              <Icon name="ic:baseline-arrow-forward-ios" class="text-xl" />
            </div>
          </div>
        </button>
      </div>

      <!--content section  -->
      <div class="lg:w-4/6 text-white rounded-md">
        <div
          class="flex flex-col gap-2 bg-primary/90 px-2 py-5 rounded-md shadow-lg"
        >
          <p class="py-2">Class Routine</p>
          <div class="grid grid-cols-6 text-center">
            <p v-for="day in days" class="py-6">{{ day }}</p>
          </div>

          <div>
            <template v-if="responses.length > 0">
              <div
                class="shadow-lg"
                v-for="(response, index) in responses"
                :key="index"
              >
                <div class="grid grid-cols-6 text-center items-center">
                  <p class="py-6">{{ response.hour }}</p>
                  <p class="py-2"></p>
                  <div class="col-span-2">
                    <p
                      class="py-2 bg-primary rounded text-white text-sm font-semibold"
                    >
                      {{ response.subject }}
                    </p>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <h4 class="text-center">Today, no class</h4>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { routine } from "../../data/showcase-data";
const responses = ref([]);
const buttons = await routine();
const btnStyleIndex = ref(0);

const setContent = async (buttonInfo, index) => {
  btnStyleIndex.value = index;

  try {
    const fetchedData = await fetch(
      `https://opentv.nvs.la/api/captured-data/?date=${buttonInfo.date}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (fetchedData.ok) {
      const responseData = await fetchedData.json();
      responses.value = responseData;
      console.warn("responses", responses);
    } else {
      console.error("Error fetching data:", fetchedData.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getDayFromDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  return day;
};
</script>
