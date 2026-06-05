import react from "@vitejs/plugin-react"
import { resolve } from "node:path"
import { defineConfig } from "vite"
import { allowlistPlugin } from "./vite-plugins/allowlist"

export default defineConfig({
  plugins: [react(), allowlistPlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@copilotkit/react-ui": resolve(__dirname, "./src/lib/copilotkit-react-ui-shim.ts"),
    },
  },
  server: {
    port: 5174,
    open: true,
  },
})
