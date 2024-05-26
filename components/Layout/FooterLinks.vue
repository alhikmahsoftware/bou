<template>
  <div class="flex flex-col gap-2">
    <p class="text-lg font-semibold">{{ title }}</p>

    <div class="flex flex-col gap-2 mt-3 text-gray-300">
      <p v-if="!location" v-for="link in data" :key="link.href" class="flex">
        <NuxtLink
          :to="link.href"
          class="hover:text-white duration-200 flex items-center"
        >
          <Icon name="ic:sharp-chevron-right" class="text-2xl text-white" />
          {{ link.label }}
        </NuxtLink>
      </p>

      <NuxtLink v-else to="https://bou.ac.bd/BOU/BOUMAP"
        ><img :src="map" alt="" class="w-full"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup>
import map from "../../assets/images/map.jpg";
const { title, data, location } = defineProps(["title", "data", "location"]);
</script>
