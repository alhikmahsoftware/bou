<template>
  <div class="text-white">
    <!--  nav top -->
    <div class="bg-lightblue">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="flex justify-between items-center mx-auto py-1 px-2 xl:px-[unset]"
        >
          <h1 class="text-2xl font-semibold hidden lg:block px-[8%]">
            BANGLADESH OPEN UNIVERSITY
          </h1>
          <div
            class="flex items-center justify-between w-full lg:w-[unset] gap-10"
          >
            <img :src="play" alt="Play Button" class="w-32" />
            <Icon name="material-symbols:radio" class="text-3xl" />
          </div>
        </div>
      </div>
    </div>

    <!-- nav bottom -->
    <div class="bg-lightestblue">
      <div class="flex justify-between max-w-screen-xl mx-auto relative">
        <div
          class="hidden lg:flex items-center gap-3 px-2 xl:x-[unset] w-[85%] mx-auto"
        >
          <NuxtLink
            v-for="nav in navdata"
            :to="nav.href"
            :key="nav.href"
            class="font-semibold hover:bg-primary py-4 px-4 text-sm"
          >
            {{ nav.label }}
          </NuxtLink>

          <a
            class="font-semibold hover:bg-primary py-4 px-4 text-sm"
            href="https://www.bou.ac.bd/Division/AboutMedia"
            >ABOUT US</a
          >

          <NuxtLink
            to="/contact-us"
            class="font-semibold hover:bg-primary py-4 px-4 text-sm"
          >
            CONTACT US
          </NuxtLink>

          <!-- floting logo -->
          <div v-for="data in logo" :key="data.id">
            <img
              :src="newLogo"
              alt="Logo"
              class="w-16 xl:w-20 absolute -top-[25px] xl:-top-[35px] left-3 hidden lg:block"
            />
          </div>
        </div>
        <!-- mobile only -->
        <div
          v-for="data in logo"
          :key="data.id"
          class="flex justify-between lg:hidden items-center w-full px-4"
        >
          <img src="/assets//images//logo.png" alt="Logo" class="w-14" />
          <Icon
            name="material-symbols-light:segment"
            class="text-5xl"
            @click="toggleSidebar"
          />
        </div>
      </div>
    </div>

    <!-- sidebar (mobile) -->
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
      <div class="flex flex-col h-full p-4">
        <NuxtLink
          v-for="nav in navdata"
          :to="nav.href"
          :key="nav.href"
          class="font-semibold hover:bg-primary py-3 px-5 text-lg"
          @click="handleOptionClick"
        >
          {{ nav.label }}
        </NuxtLink>

        <a
          href="https://www.bou.ac.bd/Division/AboutMedia"
          class="font-semibold hover:bg-primary py-3 px-5 text-lg"
          >ABOUT US</a
        >

        <NuxtLink
          to="/contact-us"
          class="font-semibold hover:bg-primary py-3 px-5 text-lg"
          @click="handleOptionClick"
        >
          CONTACT US
        </NuxtLink>
      </div>
    </div>

    <!-- Bottombar Content -->
    <div class="bottom-bar">
      <ul>
        <li>
          <NuxtLink to="/">
            <img src="~/assets/images/icon/home.svg" alt="icon" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/formal">
            <img src="~/assets/images/icon/e-learning.svg" alt="icon" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/non-formal">
            <img src="~/assets/images/icon/head-side-thinking.svg" alt="icon" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/notice">
            <img src="~/assets/images/icon/bell.svg" alt="icon" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login">
            <img src="~/assets/images/icon/user.svg" alt="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import play from "../../assets/images/play.png";
import navdata from "../../data/nav-data.js";
import newLogo from "../../assets/images/logo.png";

import { getlogo } from "../../data/logo-data";

import { aboutdata } from "../../data/about-data.js";
const about_data = await aboutdata();

const logo = await getlogo();

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const handleOptionClick = (option) => {
  closeSidebar();
};
</script>

<style scoped lang="scss">
.router-link-exact-active {
  background: #00234b;
}
.bottom-bar {
  display: none;
}
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .bottom-bar {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 99999;
    background-color: #00234b;
    padding: 15px;
    box-shadow: 0px 0px 20px #a3a3a3;
    width: 100%;
    ul {
      display: flex;
      justify-content: center;
      justify-content: space-between;
      margin-bottom: 0;
      li {
        margin-right: 7px;
        padding-right: 18px;
        border-right: 2px solid #ffffff38;
        a {
          img {
            filter: invert(100%) sepia(33%) saturate(779%) hue-rotate(173deg)
              brightness(114%) contrast(100%);
            width: 25px;
          }
        }
        &:last-child {
          margin-right: 0;
          padding-right: 0;
          border-right: 0;
        }
      }
    }
  }
}
</style>
