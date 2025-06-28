import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import zeabur from "@zeabur/astro-adapter/serverless";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
  output: "server",
});