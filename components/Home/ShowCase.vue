<template>
  <div class="mt-4 mb-20">
    <div
      class="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto px-4 xl:px-[unset]"
    >
      <!-- buttons -->
      <div class="overflow-y-auto min-h-80 lg:w-[30%]">
        <div class="flex flex-col gap-5">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            @click="setContent(button, index)"
            class="py-2 px-2 rounded relative bg-lightestblue/10"
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
                <span>{{ button.routine_title }}</span>
                <span>{{ button.routine_week_name }}</span>
                <span class="font-bold text-3xl">{{
                  getDayFromDate(button.routine_date)
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
      </div>
      <!--content section  -->
      <div class="lg:w-[70%] text-white rounded-md">
        <div
          class="flex flex-col gap-2 bg-primary/90 px-2 py-2 rounded-md shadow-lg"
        >
          <p class="py-2 text-center"><u>Class Routine</u></p>
          <div class="grid grid-cols-6 text-center">
            <p v-for="day in days" class="py-6">{{ day }}</p>
          </div>

          <div>
            <template v-if="responses.length > 0">
              <div class="shadow-lg">
                <div class="grid grid-cols-6 text-center items-center">
                  <p class="py-6"><u>Date</u></p>
                  <p class="py-2"><u>Hour</u></p>
                  <p class="py-2">
                    <u>Subject</u>
                  </p>
                  <p class="py-2">
                    <u>Program</u>
                  </p>
                  <p class="py-2">
                    <u>School</u>
                  </p>
                  <!-- <div class="col-span-2">
                    <p
                      class="py-2 bg-primary rounded text-white text-sm font-semibold"
                    >
                      {{ response.subject }}
                    </p>
                  </div> -->
                </div>
                <div
                  class="grid grid-cols-6 text-center items-center"
                  v-for="(response, index) in responses"
                  :key="index"
                >
                  <p class="py-6">{{ response.date }}</p>
                  <p class="py-2">{{ response.hour }}</p>
                  <p class="py-2">
                    {{
                      getSubjectData.find(
                        (item2) => item2.id === response.subject
                      )
                        ? getSubjectData.find(
                            (item2) => item2.id === response.subject
                          ).Subject_name
                        : ""
                    }}
                  </p>
                  <p class="py-2">
                    {{
                      getDepartmentData.find(
                        (item2) => item2.id === response.department
                      )
                        ? getDepartmentData.find(
                            (item2) => item2.id === response.department
                          ).Department_name
                        : ""
                    }}
                  </p>
                  <p class="py-2">
                    {{
                      getSchoolData.find(
                        (item2) => item2.id === response.school
                      )
                        ? getSchoolData.find(
                            (item2) => item2.id === response.school
                          ).School_name
                        : ""
                    }}
                  </p>
                  <!-- <div class="col-span-2">
                    <p
                      class="py-2 bg-primary rounded text-white text-sm font-semibold"
                    >
                      {{ response.subject }}
                    </p>
                  </div> -->
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
import { getSchool } from "../../data/dashboard/class-routine-api/get-school";
import { getSubject } from "../../data/dashboard/class-routine-api/get-subject";
import { getDepartment } from "../../data/dashboard/class-routine-api/get-department";

const responses = ref([]);
const buttons = await routine();
const btnStyleIndex = ref(0);
const getSchoolData = ref([]);
const getSubjectData = ref([]);
const getDepartmentData = ref([]);

const setContent = async (buttonInfo, index) => {
  btnStyleIndex.value = index;

  responses.value = buttonInfo.routine_subject;
  console.log("muhit", buttonInfo.routine_subject);

  // try {
  //   const fetchedData = await fetch(
  //     `https://opentv.nvs.la/api/captured-data/?date=${buttonInfo.date}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (fetchedData.ok) {
  //     const responseData = await fetchedData.json();
  //     responses.value = responseData;
  //     console.warn("responses", responses);
  //   } else {
  //     console.error("Error fetching data:", fetchedData.statusText);
  //   }
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   throw error;
  // }
};

getSchoolData.value = await getSchool();
getSubjectData.value = await getSubject();
getDepartmentData.value = await getDepartment();

const getDayFromDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  return day;
};
</script>

<style scoped>
.overflow-y-auto {
  overflow-y: auto;
}

.max-h-80 {
  max-height: 30rem; /* Adjust as per your need */
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .mt-4 {
    margin-top: 1rem;
  }
  .mb-20 {
    margin-bottom: 3rem;
  }
  .rounded-md {
    margin-bottom: 0;
  }
}
</style>
