<script setup>
const props = defineProps({
  subtitle: String,
  title: String,
});
</script>
<template>
  <div class="d-flex flex-column ga-5">
    <h2 class="text-h2 text-secondary">{{ title }}</h2>
    <p class="text-subtitle-1 text-secondary opacity-70">{{ subtitle }}</p>
  </div>
</template>
