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
  <v-row>
    <v-col cols="12" md="6" v-for="blog in getPosts." :key="blog.id">
      
        <NuxtLink
          :to="`/blog/${slugify(blog.blog_title)}`"
          class="project-card"
        >
          <div class="image-wrapper">
            <img
              :src="blog.blog_image"
              alt="image"
              class="project-image w-100"
              cover
            />
            <div class="image-overlay">
              <v-avatar size="60" class="icon bg-primary">
                <Icon icon="material-symbols:arrow-outward" height="25" />
              </v-avatar>
            </div>
          </div>
        </NuxtLink>
        <h3 class="text-h3 text-secondary py-5">
          {{ blog.blog_title }}
        </h3>
      
    </v-col>
  </v-row>
</template>
