<script setup lang="ts">
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
</script>
<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Video Background -->
    <video autoplay muted loop playsinline class="video-bg">
      <source src="/video/banner-video.mp4" type="video/mp4" />
    </video>

    <!-- Dark overlay -->
    <div class="overlay"></div>

    <!-- Content bottom-left -->
    <div class="container-lg">
      <div class="hero-content">
        <div class="mw-460">
          <!-- Top row: icon + paragraph -->
          <div class="d-flex ga-6">
            <img
              :src="AnimatedIcon"
              alt="icon"
              height="44"
              width="44"
              class="icon-rotate"
            />
            <p class="text-white text-subtitle-1 mb-0">
              <span class="opacity-70">We create</span>
              <span class="text-primary opacity-100">
                high-performing
              </span>
              <span class="opacity-70"
                >digital designs that elevate brands and enhance
                conversions.</span
              >
            </p>
          </div>
        </div>

        <!-- Bottom row: title + badge -->
        <div class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3">
          <h1 class="text-white text-h1 font-weight-bold mb-0">Studiova</h1>
          <SharedBigBadge />
        </div>
      </div>
    </div>
  </v-container>
</template>
