<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useblogGridStore } from "@/store/blogs";
import { Icon } from "@iconify/vue";

const store = useblogGridStore();

onMounted(() => {
  store.fetchPosts();
});

const getPosts = computed(() => store.blogGrid);

// Slug function to create URL-friendly links
const slugify = (title?: string) => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
</script>

<template>
  <SharedSectionSpacer />
  <div class="container-lg">
    <v-row>
      <v-col cols="12" md="6" v-for="blog in getPosts" :key="blog.id">
        <NuxtLink
          :to="`/blog/${slugify(blog.blog_title)}`"
          class="project-card"
        >
          <div class="blog-image-wrapper">
            <v-img
              class="blog-image"
              :src="blog.blog_image"
              height="600"
              cover
            ></v-img>
          </div>
        </NuxtLink>
        <v-card-text class="px-0 pt-4">
          <div class="text-subtitle-2 text-secondary opacity-70">
            {{ blog.blog_date }}
          </div>
          <h4 class="text-h4 text-secondary">
            {{ blog.blog_title }}
          </h4>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
  <SharedSectionSpacer />
</template>
