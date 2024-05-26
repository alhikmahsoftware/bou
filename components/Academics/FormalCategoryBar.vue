<template>
  <div
    :class="[
      'fixed inset-0 z-[1100] lg:hidden blur-0 bg-lightestblue transition-all duration-700',
      { 'translate-x-[-100%] z-[1100]': !isSidebarOpen },
      { 'translate-x-[0] z-[1100]  ': isSidebarOpen },
    ]"
  >
    <div class="flex justify-end p-4">
      <!-- Close button -->
      <Icon
        name="bi:x-lg"
        class="text-3xl cursor-pointer"
        @click="closeSidebar"
      />
    </div>

    <!-- Sidebar content -->
    <div class="flex flex-col h-full p-4 text-white">
      <button
        v-for="(button, index) in data"
        :key="index"
        @click="handleOptionClicksetScl(button.id, index)"
        :class="[
          'py-4  text-sm ',
          { 'bg-white text-black rounded': btnStyleIndex === index },
          { '': btnStyleIndex !== index },
        ]"
      >
        <!-- btn text -->
        <div
          :class="[
            'flex justify-between items-center px-5 btn-pr flex-grow',
            { ' duration-200': btnStyleIndex === index },
          ]"
        >
          <span class="font-semibold text-start">
            {{ button.School_name }}</span
          >
        </div>
        <!-- Dropdown for departments -->
        <div
          class="bg-white min-w-[300px]"
          v-if="scl === button.id && button.departments.length > 0"
        >
          <ul class="pl-12 text-left">
            <li
              class="py-1"
              v-for="(department, index) in button.departments"
              :key="index"
            >
              <button @click="handleOptionClicksetContent(department.id)">
                * {{ department.Department_name }}
              </button>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
const {
  closeSidebar,
  isSidebarOpen,
  handleOptionClicksetScl,
  handleOptionClicksetContent,
  data,
  scl,
  btnStyleIndex,
} = defineProps([
  "isSidebarOpen",
  "handleOptionClicksetScl",
  "handleOptionClicksetContent",
  "closeSidebar",
  "data",
  "scl",
  "btnStyleIndex",
]);
</script>

<style scoped lang="scss">
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .btn-pr {
    &.px-5 {
      padding-right: 10px !important;
      padding-left: 15px !important;
    }
  }
  .pl-12 {
    padding-left: 30px;
  }
  button:not(:disabled) {
    text-align: left;
  }
  .min-w-\[300px\] {
    min-width: auto;
  }
}
</style>
