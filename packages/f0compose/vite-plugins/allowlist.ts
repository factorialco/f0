import type { Plugin } from "vite"

/**
 * Allowlist resolver for prototype files. Hard-constrains imports under
 * `src/prototypes/**` to f0 + react + react-router + the local @/ alias.
 *
 * The plugin is a no-op for files outside `src/prototypes/**`, so the shell
 * and tooling can import whatever they need.
 */
const ALLOWED_BARE = new Set([
  "react",
  "react-dom",
  "react-dom/client",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "react-router-dom",
  "@factorialco/f0-react",
  "@factorialco/f0-core",
  // CopilotKit core hooks (`useCopilotAction`, `useCopilotReadable`) so
  // prototypes can declare actions and shared state for the AI chat.
  // The chat UI is provided by FactorialShell — prototypes never import
  // the UI packages directly.
  "@copilotkit/react-core",
  // Zod is the schema language used by F0Form (`f0FormField` wraps a Zod
  // schema). Prototypes that build co-created forms need it directly.
  "zod",
  // ReactFlow for org-chart / graph prototypes (e.g. mercer-benchmark).
  "@xyflow/react",
])

export function allowlistPlugin(): Plugin {
  return {
    name: "f0compose:allowlist",
    enforce: "pre",
    resolveId(source, importer) {
      if (!importer) return null
      // Only police prototype files.
      if (!importer.includes("/src/prototypes/")) return null
      // Vite/HMR internals.
      if (source.startsWith("/@") || source.startsWith("\0")) return null
      // Relative + absolute paths within the project.
      if (source.startsWith(".") || source.startsWith("/")) return null
      // The @/ alias is allowed (e.g., @/fixtures, @/lib, @/shell).
      // We allow ALL @/ subpaths because Vite's alias is internal to the
      // app; the static check is more granular.
      if (source.startsWith("@/")) return null
      // Anything in the bare allowlist or its sub-paths (e.g., f0-react/icons/app).
      if (ALLOWED_BARE.has(source)) return null
      for (const allowed of ALLOWED_BARE) {
        if (source.startsWith(allowed + "/")) return null
      }
      throw new Error(
        `[f0compose] Blocked import: "${source}" in ${importer}.\n` +
          `  Prototypes can only import from:\n` +
          `    - ${[...ALLOWED_BARE].join("\n    - ")}\n` +
          `    - @/fixtures, @/lib, @/prototypes (path alias)\n` +
          `    - relative paths\n` +
          `  Use the equivalent f0 component instead. ` +
          `Read packages/f0compose/generated/registry.json for what's available.`
      )
    },
  }
}
