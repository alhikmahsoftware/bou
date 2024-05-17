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
        @click="handleOptionClick(button, index)"
        :class="[
          'py-4  text-sm ',
          { 'bg-white text-black rounded': btnStyleIndex === index },
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
</template>

<script setup>
const { closeSidebar, isSidebarOpen, handleOptionClick, data, btnStyleIndex } =
  defineProps([
    "isSidebarOpen",
    "handleOptionClick",
    "closeSidebar",
    "data",
    "btnStyleIndex",
  ]);
</script>
