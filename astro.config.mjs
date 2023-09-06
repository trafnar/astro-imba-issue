import { defineConfig } from "astro/config";
import { imba } from "vite-plugin-imba";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [imba()],
  },
  integrations: [mdx()],
});
