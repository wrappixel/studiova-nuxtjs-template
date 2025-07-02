<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-darkgray">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4">
          <SharedLeftSideDarkHeading number="10" title="Contact us" />
          <div class="mw-430 mt-lg-16 mt-8">
            <p class="text-subtitle-1 text-dark opacity-70 pt-lg-8">
              Let’s collaborate and create something amazing! Tell me about your
              project—I’m all ears.
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <div class="d-flex flex-column ga-11">
            <SharedCommonHeading
              class="mw-670"
              title="Get in touch"
              subtitle=""
            />
          </div>

          <div class="mt-8">
            <form class="d-flex flex-column ga-2">
              <v-text-field label="Name" variant="underlined"></v-text-field>
              <v-text-field
                label="Email"
                type="email"
                variant="underlined"
              ></v-text-field>
              <v-textarea
                label="Tell us about your project"
                variant="underlined"
              ></v-textarea>
              <v-btn class="interactive-button w-100" size="lg" flat>
                <span class="label">submit messege</span>
                <v-avatar size="45" class="icon bg-white">
                  <Icon icon="material-symbols:arrow-outward" height="20" />
                </v-avatar>
              </v-btn>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>
