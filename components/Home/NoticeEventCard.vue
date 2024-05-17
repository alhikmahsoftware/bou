<template>
  <div
    v-for="item in data"
    class="w-full px-3 py-4 shadow-sm duration-500 rounded bg-white"
  >
    <div class="flex gap-5 flex-col md:flex-row">
      <!-- image -->
      <NuxtLink
        :to="{
          path: isNotice ? `notice/${item.id}` : `events/${item.id}`,
        }"
        :class="['lg:w-56 flex-shrink-0']"
      >
        <img
          :src="item.image"
          alt=""
          :class="['w-full h-36 md:h-36 md:w-52 rounded cursor-pointer ']"
        />
      </NuxtLink>

      <!-- info -->
      <div class="flex-grow flex flex-col gap-5">
        <div class="flex flex-col gap-5">
          <div class="md:flex justify-between">
            <h2 class="font-semibold text-lg">{{ item.title }}</h2>
            <span>
              <span
                class="font-semibold text-md opacity-80 text-white bg-lightblue w-24 flex items-center justify-center rounded mt-3 lg:m-[unset]"
              >
                {{ formatDate(item.date) }}
              </span>
            </span>
          </div>
          <p class="text-left text-sm text-second">
            {{
              item.description.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description
            }}
          </p>

          <!-- read more -->
          <NuxtLink
            :to="{
              path: isNotice ? `notice/${item.id}` : `events/${item.id}`,
            }"
            v-if="item.description.length > 100"
            class="text-end underline text-lightblue hover:font-medium duration-300"
          >
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from "~/utils/date-format";

const { data, isNotice } = defineProps(["data", "isNotice"]);
</script>

<style lang="scss" scoped></style>
