<template>
  <div
    :style="{
      // backgroundImage: imageUrl,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }"
    class="bg-no-repeat pb-10 relative min-h-[100vh] bg-three"
  >
  
    <div
      class="md:w-[80%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto pt-[15vh] relative z-10"
    >
      <div class="bg-white rounded-lg py-5">
        <p
          class="text-cener font-semibold text-2xl text-center pb-5 text-lightblue"
        >
          Media Devision
        </p>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg text-lg">
                  Name & Designation
                </th>
                <th scope="col" class="px-6 py-3 text-lg">Phone, Fax</th>
                <th scope="col" class="px-6 py-3 rounded-e-lg text-lg">
                  E-mail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(member, index) in members" :key="index"
                :class="`${i % 2 === 1 ? 'bg-gray-200' : 'bg-white'}`"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap min-w-96"
                >
                  <p class="font-semibold text-lg">{{ member.name }}</p>
                  <p class="text-sm font-normal">
                    {{ member.designation }}
                  </p>
                </th>
                <td class="px-6 py-4 text-balance min-w-96">
                  <p class="text-sm font-normal">
                    {{ member.phone }}
                  </p>
                  <p class="text-sm font-normal">
                    {{ member.fax }}
                  </p>
                </td>
                <td class="px-6 py-4 min-w-96 flex flex-col">
                  <a :href="'mailto:' + member.email"
                    class="text-lightestblue hover:text-lightblue duration-200"
                  >
                    {{ member.email }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ?gradient -->
    <CommonGradientBg />
  </div>
</template>

<script setup>
import { getContactUS } from "../../data/dashboard/contact-us-api/get";
const members = await getContactUS()
</script>
