import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
//import style
import "@/assets/scss/style.scss";

import { LIGHT_THEME } from "@/theme/LightTheme";
import { DARK_THEME } from "@/theme/DarkTheme";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "LIGHT_THEME",
      themes: {
        LIGHT_THEME,
        DARK_THEME,
      },
    },
   
  });
  app.vueApp.use(vuetify);
});
