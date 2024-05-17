<template>
  <div :style="{ backgroundImage:imageUrl,backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}"  class="bg-no-repeat pb-10 relative min-h-[100vh]">
    <div
      class="md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto pt-[20vh] relative z-10"
    >
      <h2 class="text-center text-3xl font-bold text-lightblue">ABOUT US</h2>

      <div
        class="flex flex-col mt-16 bg-lightestblue/20 px-4 lg:px-[unset] rounded"
      >
        <AboutUsInfoCard :data="aboutdata" />
      </div>
    </div>

    <!-- gradient effect -->
    <CommonGradientBg />
  </div>
</template>

<script setup>
import { aboutdata } from "../../data/about-data";
import { ref,  } from "vue";

  const imageUrl = ref("");
  
  const response = await $fetch(
    "https://opentv.nvs.la/api/v1/sg-5/bglogo/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }

  );

  imageUrl.value = `url('${response[0].image}')`;
</script>
