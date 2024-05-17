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
import player from 'plyr';
import 'plyr/dist/plyr.css';
import heroVideo from "../../assets/videos/heroVdo.mp4";

const videoPlayer = ref(null);
const isPlaying = ref(false);

onMounted(() => {
  if (typeof document !== 'undefined') {
    // Load Plyr script
    const plyrScript = document.createElement('script');
    plyrScript.src = 'https://cdn.plyr.io/3.7.8/plyr.js';
    plyrScript.async = true;
    plyrScript.onload = () => {
      // Initialize Plyr when the script is loaded
      const player = new Plyr(videoPlayer.value);
    };
    document.head.appendChild(plyrScript);

    // Load Hls.js script
    const hlsScript = document.createElement('script');
    hlsScript.src = 'https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js';
    hlsScript.async = true;
    hlsScript.onload = () => {
      // Hls.js is loaded, now set up the video player
      setupVideoPlayer();
    };
    document.head.appendChild(hlsScript);
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

const setupVideoPlayer = () => {
  const source = 'https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boulive.stream/playlist.m3u8';
  const video = videoPlayer.value;

  // Plyr options
  const player = new Plyr(video, { captions: { active: true, update: true, language: 'en' } });

  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;

    player.on('languagechange', () => {
      setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
    });
  }

  window.player = player;
};
</script>
