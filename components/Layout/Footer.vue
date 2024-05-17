<template>
  <div class="bg-primary text-white py-10 px-6">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 max-w-[1280px] mx-auto gap-y-10 w-[90%] lg:w-[unset]"
    >
      <LayoutFooterLinks title="IMPORTANT LINKS" :data="importantLinks" />
      <LayoutFooterLinks title="RESOURCES" :data="resourceLinks" />
      <LayoutFooterLinks title="BOU GOOGLE MAP" :location="true" />
    </div>
  </div>
  <p class="py-2 text-center text-sm pbr-65">
    © 2024 Bangladesh Open University . Develop & support By
    <a
      class="text-lightblue font-medium hover:underline"
      href="https://jagobditsolution.com/"
      target="_blank"
      >Jagobd IT Solution</a
    >.
  </p>
</template>

<script setup>
import { importantLinks, resourceLinks } from "~/data/footer-data";
</script>

<style lang="scss" scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .pbr-65 {
    padding-bottom: 65px;
  }
}
</style>
