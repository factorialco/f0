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
  // Disabled in this standalone build: there is no CopilotKit/Mastra backend, so
  // the chat fails its network fetch and can crash the page on load in a real
  // browser (blank screen). It is non-functional here regardless.
  enabled: false,
  agent: import.meta.env.VITE_AGENT_NAME ?? DEFAULT_AGENT_NAME,
  runtimeUrl: import.meta.env.VITE_AGENT_URL ?? DEFAULT_AGENT_URL,
  credentials: "include" as const,
  greeting: "Hey hey this is a prototype",
  // The chat panel is resizable — drag the left edge to widen / narrow
  // it. ApplicationFrame already reserves the chosen width so the page
  // body reflows correctly.
  resizable: true,
  // Enable thread history. The agent already exposes the chat-history
  // routes under `/copilotkit/chat-history/threads/*` (see
  // factorial-agent/src/mastra/index.ts), so users can switch between
  // past conversations across prototype reloads.
  historyEnabled: true,
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
}
