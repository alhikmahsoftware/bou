<template>
  <div class="relative mx-auto w-full lg:w-1/2 group px-4 lg:px-[unset]">
    <video ref="videoPlayer" :src="heroVideo" class="w-full h-full"></video>
    <button @click="togglePlayPause"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 flex items-center justify-center w-16 h-16 rounded-full bg-lightestblue bg-opacity-70 text-white opacity-0 duration-200">
      <Icon v-if="!isPlaying" name="bi:play-circle" class="text-3xl" />
      <Icon v-else name="bi:pause-circle" class="text-3xl" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import heroVideo from "../../assets/videos/heroVdo.mp4";
import 'plyr/dist/plyr.css';
const videoPlayer = ref(null);
const isPlaying = ref(false);

// Load Plyr script when the component is mounted
onMounted(() => {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.plyr.io/3.7.8/plyr.js';
    script.async = true;
    script.onload = () => {
      // Initialize Plyr when the script is loaded
      const player = new Plyr(videoPlayer.value);
    };

    // Append the script to the head of the document
    document.head.appendChild(script);
  }
});

const togglePlayPause = () => {
  if (videoPlayer.value.paused) {
    videoPlayer.value.play();
    isPlaying.value = true;
  } else {
    videoPlayer.value.pause();
    isPlaying.value = false;
  }
};
</script>