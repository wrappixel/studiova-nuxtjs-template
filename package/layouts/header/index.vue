<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import ToggleMenu from "./ToggleMenu.vue";
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const logoSrc = computed(() =>
  isScrolled.value
    ? "/images/logos/DarkLogo.svg"
    : "/images/logos/WhiteLogo.svg"
);



const LIGHT = "LIGHT_THEME";
const DARK = "DARK_THEME";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === LIGHT ? DARK : LIGHT;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>
  <header
    :class="[
      'header',
      isScrolled
        ? 'bg-primary sticky-header shadow-md'
        : 'bg-transparent border-primary border-t-2',
    ]"
  >
    <div class="container-lg">
      <div class="d-flex justify-space-between align-center">
        <img :src="logoSrc" />
        <div class="d-flex ga-6">
          <div class="flex items-center gap-4">
            <v-btn
              icon
              flat
              @click="toggleTheme"
              class="rounded-full bg-transparent"
            >
              <Icon
                :icon="
                  theme.global.name.value === LIGHT
                    ? 'solar:sun-bold'
                    : 'solar:moon-stars-bold'
                "
                width="40"
                height="40"
                class="text-white"
              />
            </v-btn>
          </div>
          <ToggleMenu />
        </div>
      </div>
    </div>
  </header>
</template>
