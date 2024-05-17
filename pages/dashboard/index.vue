<template>
        <div class="mt-12">
            
            <div class="mt-12 p-4 sm:ml-64">
                <p >User Name : {{TokenStore.getUserName}}</p>
                
            </div>
    </div>
    </template>

<script setup>
definePageMeta({
    layout: "dashboard"
})

const TokenStore =  useTokenStore();

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { initDrawers } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    // initDrawers();
})
</script>