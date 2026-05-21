import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@factorialco/f0-react": path.resolve(__dirname, "../react/src"),
      "@": path.resolve(__dirname, "../react/src"),
      "@factorialco/f0-core": path.resolve(__dirname, "../core"),
    },
  },
  server: {
    port: 5199,
  },
})
