<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
</script>
<template>

  <div class="position-relative ">
    <v-responsive aspect-ratio="16/9" class="video-overlay">
      <video autoplay muted loop playsinline class="video-bg w-100  height-screen">
        <source src="/video/banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </v-responsive>
    <!-- Overlay Content -->
    <div class="container-lg">
      <div class="video-bg-content d-flex flex-column ga-6">
        <div class="mw-460">
          <div class="d-flex ga-6">
            <img :src="AnimatedIcon" alt="icon" height="44" width="44" class="icon-rotate" />
            <p class="text-white text-subtitle-1">
              <span class="opacity-70 ">We create</span> <span class="text-primary opacity-100"> high-performing </span> <span class="opacity-70 ">digital designs that elevate brands and
              enhance conversions.</span>
            </p>
          </div>
        </div>
        <div class="d-flex ga-5 align-end">
          <h1 class="text-white text-h1 font-weight-bold">Studiova</h1>
          <shared-big-badge/>
        </div>
        
      </div>
    </div>
  </div>
</template>
