<template>
  <div class="py-32">
    <div
      class="flex flex-col lg:flex-row gap-10 max-w-screen-xl mx-auto px-4 xl:px-[unset]"
    >
      <!-- buttons -->
      <div class="flex flex-col gap-10 lg:w-2/6">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="setContent(button, index)"
          class="py-5 rounded relative"
        >
          <!-- div for btn background effect -->
          <div
            :class="[
              'absolute   shadow-xl shadow-lightblue inset-0 z-[100]',
              {
                'w-full bg-lightestblue transition-all duration-500 rounded':
                  btnStyleIndex === index,
              },
              {
                'w-24 bg-lightestblue  transition-all duration-500 rounded':
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
              <span>Mon</span>
              <span class="font-bold text-3xl">20</span>
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
                  {{ button.label }}</span
                >
                <span
                  :class="[
                    'text-sm text-start text-gray-500',
                    { '!text-gray-200': btnStyleIndex === index },
                  ]"
                  >{{ button.subLabel }}</span
                >
              </div>
              <Icon name="ic:baseline-arrow-forward-ios" class="text-xl" />
            </div>
          </div>
        </button>
      </div>

      <!--content section  -->
      <div class="lg:w-4/6 text-white rounded-md">
        <HomeTimeline />
      </div>
    </div>
  </div>
</template>

<script setup>
import { buttons } from "../../data/showcase-data";

const content = ref(buttons[0].content.split("<br/>"));

const btnStyleIndex = ref(0);

const setContent = (buttonInfo, index) => {
  content.value = buttonInfo.content.split("<br/>");
  btnStyleIndex.value = index;
};
</script>
