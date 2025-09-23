import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/rimac-challenge/",
  plugins: [TanStackRouterVite(), react()],
  server: {
    open: "/rimac-challenge/",
  },
});
