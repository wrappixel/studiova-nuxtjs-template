<script setup lang="ts">
import Logo from "../shared/logo/index.vue";
import LightDarkToggle from "./LightDarkToggle.vue";
import ToggleMenu from "./ToggleMenu.vue";
</script>
<template>
  <header class="border-t-lg border-primary position-fixed top-0 z-999 w-100">
    <div class="container-lg">
      <div class="d-flex justify-space-between align-center py-7 header">
        <Logo />
        <div class="d-flex ga-6">
          <LightDarkToggle />
          <ToggleMenu />
        </div>
      </div>
    </div>
  </header>
</template>
