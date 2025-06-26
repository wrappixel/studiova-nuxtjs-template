<script setup lang="ts">
import { Icon } from "@iconify/vue";
const plans = [
  {
    title: "Launch",
    price: 699,
    description:
      "Ideal for startups and small businesses taking their first steps online.",
    features: [
      "Competitive research & insights",
      "Wireframing and prototyping",
      "Basic tracking setup (Google Analytics, etc.)",
      "Standard contact form integration",
    ],
    mostPopular: false,
  },
  {
    title: "Scale",
    strikeprice: 2199,
    price: 1699,
    description:
      "Perfect for growing brands needing more customization and flexibility.",
    features: [
      "Everything in the Launch Plan",
      "Custom design for up to 10 pages",
      "Seamless social media integration",
      "SEO enhancements for key pages",
    ],
    mostPopular: true,
  },
  {
    title: "Elevate",
    price: 3499,
    description:
      "Best suited for established businesses wanting a fully tailored experience.",
    features: [
      "Everything in the Scale Plan",
      "E-commerce functionality (if needed)",
      "Branded email template design",
      "Priority support for six months after launch",
    ],
    mostPopular: false,
  },
];

const logos = [
    {

    }
];
</script>
<template>
  <div class="bg-lightgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <!-- LEFT SIDE IMAGE -->
        <v-col cols="12" lg="4" class="position-relative">
          <SharedLeftSideDarkHeading number="07" title="Pricing" />
        </v-col>

        <!-- RIGHT SIDE TEXT LIST -->
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Affordable pricing"
              subtitle="A glimpse into our creativity—exploring innovative designs, successful collaborations, and transformative digital experiences."
            />
          </div>
        </v-col>
      </v-row>
      <div class="pricing mt-md-16 mt-10">
        <v-row class="justify-center">
          <v-col
            v-for="(plan, index) in plans"
            :key="plan.title"
            cols="12"
            md="4"
            class="d-flex"
          >
            <v-card class="pa-lg-12 pa-6 flex-grow-1 bg-white" elevation="0">
              <div class="d-flex justify-space-between align-center mb-4">
                <div class="d-flex flex-column ga-5">
                  <div class="d-flex ga-3">
                    <p class="text-subtitle-1 font-weight-medium">
                      {{ plan.title }}
                    </p>
                    <v-chip
                      v-if="plan.mostPopular"
                      color="secondary"
                      text-color="white"
                      variant="flat"
                    >
                      <Icon icon="solar:fire-linear" class="me-2" height="18" />
                      Most Popular
                    </v-chip>
                  </div>

                  <div class="d-flex align-center ga-2">
                    <div class="d-flex ga-4">
                      <h3
                        class="text-h3 font-weight-bold text-secondary opacity-40 text-decoration-line-through"
                        v-if="plan.strikeprice"
                      >
                        ${{ plan.strikeprice }}
                      </h3>
                      <h3 class="text-h3 font-weight-bold">
                        ${{ plan.price }}
                      </h3>
                    </div>
                    <small class="text-secondary opacity-70 text-subtitle-1"
                      >/month</small
                    >
                  </div>
                </div>
              </div>

              <p
                class="text-subtitle-2 text-secondary opacity-70 font-weight-regular mb-6"
              >
                {{ plan.description }}
              </p>
              <v-divider class="my-10"></v-divider>
              <div class="mb-6">
                <p class="text-subtitle-2 mb-2">What’s Included:</p>
                <ul class="d-flex flex-column ga-4 mt-4">
                  <li
                    v-for="(feature, i) in plan.features"
                    :key="i"
                    class="px-0 d-flex ga-3 align-center"
                  >
                    <v-avatar size="32" color="primary">
                      <Icon
                        icon="tabler:check"
                        height="18"
                        class="text-secondary"
                      />
                    </v-avatar>
                    <v-list-item-title class="text-body-2">{{
                      feature
                    }}</v-list-item-title>
                  </li>
                </ul>
              </div>

              <v-btn
                class="interactive-button w-100 mt-4"
                to="/about"
                size="lg"
                flat
              >
                <span class="label">Subscribe Now</span>
                <v-avatar size="45" class="icon bg-white">
                  <Icon icon="material-symbols:arrow-outward" height="20" />
                </v-avatar>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="mt-md-16 mt-10">
        <p class="text-center text-subtitle-1">
          More than 320 trusted partners & clients
        </p>
        <!-- <div class="marquee w-100 d-flex">
            <div class="marquee-content d-flex align-items-center gap-8">
                <div class="marquee-tag">
                     <img src=""   
                </div>
            </div>
        </div> -->
      </div>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
