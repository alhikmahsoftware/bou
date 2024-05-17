import type { split } from 'postcss/lib/list';

<template>
  <div class="py-2 px-4">
    <p class="pt-2" v-for="item in infoArray" :key="item.id">{{ item }}</p>
  </div>
</template>

<script setup>
const { info } = defineProps(["info"]);
const infoArray = info.split("<br/>");
</script>
