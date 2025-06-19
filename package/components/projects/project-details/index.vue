<script setup lang="ts">
import { ref } from "vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProjectsGridStore } from "@/store/project";
// import RelatedPortfolio from '../related-portfolio/index.vue';
const title = useRoute();
const getTitle = title.path.split("/").pop();

onMounted(() => {
  store.fetchPost(`${getTitle}`);
  store.fetchPosts();
});
const store = useProjectsGridStore();

const post = computed(() => {
  return store.selectedProjects;
});
</script>

<template>
  <div>
    <h2 class="text-h2 mt-4 text-sm-start text-center">
      {{ post.project_title }}
    </h2>
  </div>
</template>
