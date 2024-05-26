<template>
    <div class="relative mx-auto w-full lg:w-1/2 group px-4 lg:px-[unset]">
      <video ref="videoPlayer" :src="liveStreamLink" class="w-full h-full"></video>
      <button @click="togglePlayPause"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 flex items-center justify-center w-16 h-16 rounded-full bg-lightestblue bg-opacity-70 text-white opacity-0 duration-200">
        <Icon v-if="!isPlaying" name="bi:play-circle" class="text-3xl" />
        <Icon v-else name="bi:pause-circle" class="text-3xl" />
      </button>
    </div>
  </template>
  
  <script setup>
  import Plyr from 'plyr';
  import Hls from 'hls.js';
  
  const liveStreamLink = "https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/jagoronitv.stream/playlist.m3u8";
  const videoPlayer = ref(null);
  const isPlaying = ref(false);
  
  const togglePlayPause = () => {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isPlaying.value = true;
    } else {
      videoPlayer.value.pause();
      isPlaying.value = false;
    }
  };
  
  onMounted(() => {
    const player = new Plyr(videoPlayer.value);
  
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(liveStreamLink);
      hls.attachMedia(videoPlayer.value);
    } else if (videoPlayer.value.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari
      videoPlayer.value.src = liveStreamLink;
      videoPlayer.value.addEventListener('loadedmetadata', () => {
        videoPlayer.value.play();
      });
    }
  });
  </script>
  
  