<template>
  <div class="relative mx-auto w-full max-w-screen-xl group px-4 xl:px-[unset]">
    <!-- skeleton -->
    <div v-if="isLoading" class="w-full mx-auto">
      <div
        class="h-72 md:h-[50vh] lg:h-[50vh] 2xl:h-[60vh] bg-slate-200 animate-pulse"
      ></div>
    </div>
    <!-- content -->
    <div v-else class="rounded-md">
      <video ref="videoPlayer" class="w-full h-full"></video>
      <button
        @click="togglePlayPause"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 flex items-center justify-center w-16 h-16 rounded-full bg-lightestblue bg-opacity-70 text-white opacity-0 duration-200"
      >
        <Icon v-if="!isPlaying" name="bi:play-circle" class="text-3xl" />
        <Icon v-else name="bi:pause-circle" class="text-3xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import player from "plyr";
import "plyr/dist/plyr.css";

const videoPlayer = ref(null);
const isPlaying = ref(false);
const isLoading = ref(true);
const responseStremlink = ref(null);

// const   getStramlink = async () =>{
//   try {
//     let data = await $fetch(
//       "https://mapproject.nvs.la/api/v1/sg-5/stremlink/",
//       {
//         method: "GET",
//       }
//     );
//     responseStremlink.value = data.channel;

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }

onMounted(() => {
  if (typeof document !== "undefined") {
    // Load Plyr script
    const plyrScript = document.createElement("script");
    plyrScript.src = "https://cdn.plyr.io/3.7.8/plyr.js";
    plyrScript.async = true;
    plyrScript.onload = () => {
      // Initialize Plyr when the script is loaded
      const player = new Plyr(videoPlayer.value);
      isLoading.value = false;
    };
    document.head.appendChild(plyrScript);

    // Load Hls.js script
    const hlsScript = document.createElement("script");
    hlsScript.src =
      "https://cdn.rawgit.com/video-dev/hls.js/18bb552/dist/hls.min.js";
    hlsScript.async = true;
    hlsScript.onload = () => {
      // Hls.js is loaded, now set up the video player
      setupVideoPlayer();
    };
    document.head.appendChild(hlsScript);
  }

  //getStramlink();
  // setupVideoPlayer();
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

const setupVideoPlayer = async () => {
  //const source ="https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boulive.stream/playlist.m3u8";
  //const source =responseStremlink;
  //const source ="https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boulive.stream/playlist.m3u8";
  // const source ="https://livess.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boulive.stream/playlist.m3u8";

  let source = "";
  try {
    let data = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-5/stremlink/",
      {
        method: "GET",
      }
    );
    source = data.channel;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

  console.log("Source Link", source);

  const video = videoPlayer.value;

  // Plyr options
  const player = new Plyr(video, {
    captions: { active: true, update: true, language: "en" },
  });

  if (!Hls.isSupported()) {
    video.src = source;
  } else {
    const hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
    window.hls = hls;

    player.on("languagechange", () => {
      setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
    });
  }

  window.player = player;
};
</script>

<style scoped>
/* Max width 767px */
@media only screen and (max-width: 767px) {
  .rounded-md {
    border-radius: 0.375rem;
  }
}
</style>
