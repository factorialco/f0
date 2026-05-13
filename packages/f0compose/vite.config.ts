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
    dedupe: [
      "@copilotkit/react-core",
      "@copilotkit/react-ui",
      "@copilotkit/shared",
      "react",
      "react-dom",
    ],
  },
  server: {
    port: 5174,
    open: true,
  },
})
