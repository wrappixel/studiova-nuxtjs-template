<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ErrorImg from "/images/background/404.svg";
</script>
<template>
  <div class="d-flex justify-center align-center h-screen">
    <div class="d-flex flex-column ga-7 align-center">
      <img :src="ErrorImg" alt="" height="200" />
      <h2 class="text-h2 text-center text-secondary">Oops! Page Not Found</h2>
      <v-btn class="interactive-button" to="/" size="lg" flat>
        <span class="label">Back To Home</span>
        <v-avatar size="45" class="icon bg-white">
          <Icon icon="material-symbols:arrow-outward" height="20" />
        </v-avatar>
      </v-btn>
    </div>
  </div>
</template>
