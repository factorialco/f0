import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import { allowlistPlugin } from "./vite-plugins/allowlist"

export default defineConfig({
  plugins: [react(), allowlistPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // Dedicated port for this worktree (quizzes-kt) — isolation from base f0 (5174).
    port: 5198,
    strictPort: true,
    open: false,
  },
})
