import { defineConfig } from "vite";

export default defineConfig({
  base: "/cityFoods/",
  // So I can use hmr while on Windows fs
    server: {
      watch: {
        usePolling: true
      }
    }
  });
