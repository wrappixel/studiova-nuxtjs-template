<script setup lang="ts">
import { Icon } from "@iconify/vue";
import BgImage from "/images/background/bg-astrisk-icon.svg";
const items = [
  {
    count: "40K",
    caption: "People who have launched their websites",
  },
  {
    count: "238",
    caption: "Experienced professionals ready to assist",
  },
  {
    count: "3M",
    caption: "Support through messages and live consultations",
  },
];
</script>

<template>
  <div class="position-relative">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="01" title="Stats & facts" />
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-575"
              title="High quality web design solutions you can trust."
              subtitle="When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project."
            />

            <div class="d-flex flex-md-row flex-column ga-8">
              <div
                class="d-flex flex-column ga-3 flex-grow-1 border-t border-muted"
                v-for="item in items"
                :key="item.count"
              >
                <h3 class="text-60 text-secondary pt-6">{{ item.count }} +</h3>
                <p
                  class="text-subtitle-2 text-secondary opacity-70 font-weight-regular"
                >
                  {{ item.caption }}
                </p>
              </div>
            </div>

            <v-btn class="interactive-button" to="/about" size="lg" flat>
              <span class="label">Who we are</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <img :src="BgImage" alt="icon" class="bg-icon" />
    <SharedSectionSpacer />
  </div>
</template>
