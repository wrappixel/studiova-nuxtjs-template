<script setup lang="ts">
import { ref } from "vue";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useblogGridStore } from "@/store/blogs";
// import RelatedPortfolio from '../related-portfolio/index.vue';
const title = useRoute();
const getTitle = title.path.split("/").pop();

onMounted(() => {
  store.fetchPost(`${getTitle}`);
  store.fetchPosts();
});
const store = useblogGridStore();

const post = computed(() => {
  return store.selectedblog;
});
</script>

<template>
  <div>
    <h2 class="text-h2 mt-4 text-sm-start text-center">
      {{ post.blog_title }}
    </h2>
  </div>
</template>
