/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark brand theme (from the f0 brand kit)
        paper: "#0b0b0b", // page background (near-black)
        surface: "#161616", // cards / panels
        surface2: "#1f1f1f", // raised panels
        ink: "#f4f4f5", // primary text (light)
        muted: "#9a9a9a", // secondary text
        // F0 brand red
        accent: "#ff6364", // coral red — links, interactive, on dark
        accentDeep: "#e51943", // deep crimson — solid fills
        experimental: "#f59e0b",
        stable: "#34d399",
        deprecated: "#ff6364",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
}
