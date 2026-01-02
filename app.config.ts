import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "@tanstack/start/config"; // Use this for 1.120.x

export default defineConfig({
  vite: {
    plugins: [tsConfigPaths()],
  },
});
