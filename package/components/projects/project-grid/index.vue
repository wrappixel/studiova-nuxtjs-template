<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useProjectsGridStore } from "@/store/project";
import { Icon } from "@iconify/vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { Pagination as CarouselPagination } from "vue3-carousel";
/*Slider*/
const sliderSettings = {
  snapAlign: "start",
  itemsToShow: 4,
};


const store = useProjectsGridStore();

onMounted(() => {
  store.fetchPosts();
});

const getPosts = computed(() => store.projectGrid);

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
  <div>
    <carousel
      :settings="sliderSettings"
      :itemsToShow="4"
      
      :wrap-around="true"
      class="overflow-hidden"
    >
      <slide v-for="projects in getPosts" :key="projects.id">
        <div>
          <NuxtLink
            :to="`/projects/${slugify(projects.project_title)}`"
            class="project-card"
          >
            <div class="image-wrapper">
              <img
                :src="projects.project_image"
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
            {{ projects.project_title }}
          </h3>
          <div class="d-flex ga-3">
            <v-chip variant="outlined" class="text-subtitle-2 text-secondary">{{
              projects.tag1
            }}</v-chip>
            <v-chip variant="outlined" class="text-subtitle-2 text-secondary">{{
              projects.tag2
            }}</v-chip>
          </div>
        </div>
      </slide>
      <template #addons>
        <CarouselPagination />
      </template>
    </carousel>
  </div>
</template>
