<template>
  <div class="flex flex-col gap-2 bg-primary/90 px-2 py-5 rounded-md shadow-lg">
    <p class="py-2">Big Timeline</p>
    <div class="grid grid-cols-6 text-center">
      <p v-for="day in days" class="py-6">{{ day }}</p>
    </div>

    <div class="shadow-lg">
      <div class="grid grid-cols-6 text-center items-center">
        <p class="py-6">08:00</p>
        <p class="py-2"></p>
        <div class="col-span-2">
          <p class="py-2 bg-primary rounded text-white text-sm font-semibold">
            English
          </p>
        </div>
      </div>

      <div class="grid grid-cols-6 text-center items-center">
        <p class="py-6">09:00</p>
        <p class="py-2"></p>
        <p class="py-2"></p>
        <p class="py-2"></p>

        <div class="">
          <p class="py-2 bg-lightblue rounded text-white text-sm font-semibold">
            English
          </p>
        </div>
      </div>

      <div class="grid grid-cols-6 text-center items-center">
        <p class="py-6">10:00</p>

        <div class="col-span-2">
          <p
            class="py-2 bg-lightestblue rounded text-white text-sm font-semibold"
          >
            English
          </p>
        </div>
      </div>

      <div class="grid grid-cols-6 text-center items-center">
        <p class="py-6">11:00</p>
        <p class="py-2"></p>
        <p class="py-2"></p>

        <div class="col-span-3">
          <p class="py-2 bg-red-500 rounded text-white text-sm font-semibold">
            English
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const days = ["Aug", "Mon", "Tue", "Wed", "Thu", "Fri"];
</script>
