/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        muted: "#5b6478",
        line: "#e5e7eb",
        chip: {
          stable: "#10b981",
          experimental: "#f59e0b",
          deprecated: "#ef4444",
          internal: "#6b7280",
          unknown: "#9ca3af",
          sds: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}
