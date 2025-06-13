<script setup lang="ts">
import { Icon } from "@iconify/vue";
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

          <v-btn class="interactive-button" size="lg" flat>
            <span class="label">Who we are</span>
            <!-- <v-avatar size="58">
               <Icon
        icon="" size="40" />
             </v-avatar> -->
            <svg
              class="icon"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_873)">
                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                <path
                  d="M24 23H34M34 23V33M34 23L24 33"
                  stroke="#1F2A2E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_873"
                  x="0"
                  y="0"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_873"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_873"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </v-btn>

          <a href="/about" class="interactive-button">
            <span class="label">Who we are</span>

            <svg
              class="icon"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_873)">
                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                <path
                  d="M24 23H34M34 23V33M34 23L24 33"
                  stroke="#1F2A2E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_873"
                  x="0"
                  y="0"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_873"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_873"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </a>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
