import { employees } from "@/fixtures"

/**
 * Build the `ai` prop that `FactorialShell` hands to `ApplicationFrame`.
 *
 * `ApplicationFrame` reads `ai.enabled` to decide whether to mount
 * `F0AiChatProvider` + render `F0AiChat`. When enabled, every prototype
 * inherits the chat automatically — prototypes never import the chat
 * components themselves.
 *
 * The default URL goes through **Traefik** (HTTPS, no port), matching
 * the canonical setup used by f0-react Storybook
 * (`F0AiChat.stories.tsx`, `ApplicationFrame.stories.tsx`). Hitting the
 * Mastra port directly (`:4111`) bypasses Traefik and ends up with
 * different CORS / TLS / cookie behavior — that's what was producing
 * the CORS errors in f0compose. The HTTPS-via-Traefik route is the one
 * the F0 ecosystem treats as ground truth.
 *
 * Override with `VITE_AGENT_URL` and `VITE_AGENT_NAME` for environments
 * without a local agent.
 *
 * Resolvers are wired against `@/fixtures` so entity refs and @mentions
 * work end-to-end without a backend — the chat feels real even when the
 * agent runtime is offline.
 */
const DEFAULT_AGENT_URL = "https://mastra.local.factorial.dev/copilotkit"
const DEFAULT_AGENT_NAME = "one-workflow"

/**
 * Runtime agent-URL override via the `?agent=` query param. Lets a static
 * deploy point at ANY reachable agent (e.g. a Cloudflare/ngrok tunnel to a
 * local Mastra) WITHOUT a rebuild — share a link like
 * `…/p/expense-policy-settings?agent=https://xxx.trycloudflare.com/copilotkit`
 * and the recipient gets the full real co-creation against that agent.
 *
 * CRITICAL: resolve ONCE and cache (module var + sessionStorage). The app
 * rewrites the URL constantly (view params, restart=1, nav), which would
 * otherwise strip `?agent=` mid-session — making this flip to null and
 * `isDemoMode()` flip true while the real agent is already connected (the
 * "demo overlay on top of the real chat" bug). Caching pins it for the
 * whole tab/session, immune to URL rewrites. Exported so demo-mode
 * detection sees the same stable value (explicit agent = real mode).
 */
const AGENT_OVERRIDE_KEY = "eps-agent-url"
let cachedAgentOverride: string | null | undefined

export function agentUrlOverride(): string | null {
  if (cachedAgentOverride !== undefined) return cachedAgentOverride
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("agent")
    if (fromUrl && /^https?:\/\//.test(fromUrl)) {
      cachedAgentOverride = fromUrl
      try {
        window.sessionStorage.setItem(AGENT_OVERRIDE_KEY, fromUrl)
      } catch {
        /* sessionStorage disabled — module var still pins it */
      }
    } else {
      cachedAgentOverride =
        window.sessionStorage.getItem(AGENT_OVERRIDE_KEY) || null
    }
  } catch {
    cachedAgentOverride = null
  }
  return cachedAgentOverride
}

const splitName = (
  fullName: string
): { firstName: string; lastName: string } => {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length <= 1) return { firstName: parts[0] ?? "", lastName: "" }
  const [firstName, ...rest] = parts
  return { firstName, lastName: rest.join(" ") }
}

const personFromEmployee = (id: string) => {
  const employee = employees.find((emp) => emp.id === id)
  if (!employee) {
    return {
      id,
      firstName: "Employee",
      lastName: `#${id}`,
    }
  }
  const { firstName, lastName } = splitName(employee.fullName)
  return {
    id: employee.id,
    firstName,
    lastName,
    avatarUrl: employee.avatarUrl,
    jobTitle: employee.role,
  }
}

export const aiChatConfig = {
  enabled: true,
  agent: import.meta.env.VITE_AGENT_NAME ?? DEFAULT_AGENT_NAME,
  runtimeUrl:
    agentUrlOverride() ?? import.meta.env.VITE_AGENT_URL ?? DEFAULT_AGENT_URL,
  credentials: "include" as const,
  // Greeting is shown on the empty state of the chat. Most prototypes
  // seed their own opening message via `appendMessages` on mount, so
  // this greeting is mainly a fallback for prototypes without a
  // scripted seed. Keep it generic.
  greeting:
    "Hey — this is a design prototype. Each page sets up its own guided flow; typing free-form needs the Mastra agent running.",
  // The chat panel is resizable — drag the left edge to widen / narrow
  // it. ApplicationFrame already reserves the chosen width so the page
  // body reflows correctly.
  resizable: true,
  // Thread history disabled — when Mastra isn't running locally the
  // history fetch surfaces a "failed to fetch" toast on every prototype
  // load. Re-enable (set back to `true`) once Mastra is reachable; the
  // agent already exposes the routes under
  // `/copilotkit/chat-history/threads/*`
  // (see factorial-agent/src/mastra/index.ts).
  historyEnabled: false,
  entityRefs: {
    resolvers: {
      person: async (id: string) => personFromEmployee(id),
      searchPersons: async (query: string) => {
        const q = query.toLowerCase()
        return employees
          .filter(
            (emp) =>
              emp.fullName.toLowerCase().includes(q) ||
              emp.role.toLowerCase().includes(q)
          )
          .slice(0, 5)
          .map((emp) => personFromEmployee(emp.id))
      },
    },
    urls: {
      person: (id: string) => `/employees/${id}`,
    },
  },
  // File attachments: convert each uploaded `File` into a `data:` URL
  // so Mastra's server-side `parseUpload` can fetch it back. Node's
  // global `fetch` supports `data:` URIs natively, which avoids
  // having to stand up an upload host just to demo receipt drops in
  // a prototype.
  //
  // Blob URLs (`URL.createObjectURL`) explicitly do NOT work — they
  // only resolve inside the browser tab that created them, while the
  // upload is fetched from the Mastra workflow process.
  //
  // Caveats:
  //  - We don't enforce a size cap here; the LLM's vision tools have
  //    their own per-image limits, and a 5-file ceiling is a sane
  //    upper bound for demo flows.
  //  - `mimetype` is read from the browser's `File.type`; missing
  //    types fall through to `application/octet-stream`.
  fileAttachments: {
    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/heic",
      "application/pdf",
    ],
    maxFiles: 5,
    onUploadFiles: async (
      files: File[]
    ): Promise<
      { url: string; filename: string; mimetype: string }[]
    > => {
      const toDataUrl = (file: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onerror = () =>
            reject(reader.error ?? new Error("file read failed"))
          reader.onload = () => resolve(String(reader.result))
          reader.readAsDataURL(file)
        })

      return Promise.all(
        files.map(async (file) => ({
          url: await toDataUrl(file),
          filename: file.name,
          mimetype: file.type || "application/octet-stream",
        }))
      )
    },
  },
}
