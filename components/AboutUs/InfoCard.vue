import type { AboutUsInfoCardP } from '#build/components';
<template>
  <div v-for="item in data" :key="item.id" class="py-2 bg-white">
    <!-- <h3
      class="px-4 text-2xl font-medium text-lightblue border-b-2 border-lightblue"
    >
      {{ item.title }}
    </h3> -->

    <AboutUsInfoCardP class="text-justify" :info="item.description" />
  </div>
</template>

<script setup>
import { aboutdata } from "../../data/about-data";

const data = await aboutdata();
</script>
