import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import zeabur from "@zeabur/astro-adapter/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: zeabur(),
  output: "server",
});
