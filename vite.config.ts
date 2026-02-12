import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("react-icons")) {
            return "icons";
          }
          if (id.includes("framer-motion")) {
            return "framer-motion";
          }
          if (
            id.includes("node_modules") &&
            (id.includes("/react/") || id.includes("/react-dom/"))
          ) {
            return "react-vendor";
          }
        },
      },
    },
    minify: "esbuild",
  },
});
