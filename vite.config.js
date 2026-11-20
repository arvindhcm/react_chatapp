import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative asset paths so the build works when served from /react_chatapp/dist/ on GitHub Pages.
  base: "./",
  plugins: [react(), tailwindcss()],
  server: { port: 8080, open: true },
});
