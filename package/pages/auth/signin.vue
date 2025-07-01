<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ErrorImg from "/images/background/404.svg";
import Logo from "@/layouts/shared/logo/index.vue";
/*for Blank Layout*/
definePageMeta({
  layout: "blank",
});
</script>

<template>
  <div class="border-t-lg border-primary border-opacity-100"></div>
  <div
    class="d-flex justify-center align-center min-h-screen h-100 bg-lightgray"
  >
    <v-card elevation="10" class="pa-6 w-100 mw-575 pa-lg-14 pa-8 "> 
        <div class="mx-auto text-center"><Logo /></div>
    </v-card>
  </div>
</template>
