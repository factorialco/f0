import { createStore, readLocal, writeLocal } from "./store"

const KEY = "f0compose:home:preferences"

export type Connector = {
  id: string
  name: string
  description: string
  /** Custom MCP servers added by the user carry their endpoint. */
  url?: string
  custom?: boolean
}

export const BUILT_IN_CONNECTORS: Connector[] = [
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Read and save documents, sheets and folders.",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Read channels and post updates on your behalf.",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Search pages and create notes and databases.",
  },
  {
    id: "jira",
    name: "Jira",
    description: "Create and update issues, read sprints.",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Pull requests, issues and repository activity.",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Read designs and comments from your files.",
  },
]

export type SaveLocation =
  | "factorial-documents"
  | "google-drive"
  | "notion"
  | "download"

export const SAVE_LOCATIONS: {
  id: SaveLocation
  name: string
  description: string
  requires?: string
}[] = [
  {
    id: "factorial-documents",
    name: "Factorial Documents",
    description:
      "Kept in your workspace, shared with the right people automatically.",
  },
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Saved to a folder in your Drive.",
    requires: "google-drive",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Created as pages inside a Notion database.",
    requires: "notion",
  },
  {
    id: "download",
    name: "Download to my computer",
    description: "Download an additional copy to your computer.",
  },
]

export type Preferences = {
  policyText?: string
  connected: string[]
  customConnectors: Connector[]
  saveLocations: SaveLocation[]
  askBeforeActing: boolean
  notifyWhenDone: boolean
  useWorkspaceLanguage: boolean
}

const DEFAULTS: Preferences = {
  connected: ["slack"],
  customConnectors: [],
  saveLocations: ["factorial-documents"],
  askBeforeActing: true,
  notifyWhenDone: true,
  useWorkspaceLanguage: false,
}

function normalizeLocations(
  locations: SaveLocation[],
  connected: string[]
): SaveLocation[] {
  return SAVE_LOCATIONS.filter(
    (location) =>
      location.id === "factorial-documents" ||
      (locations.includes(location.id) &&
        (!location.requires || connected.includes(location.requires)))
  ).map((location) => location.id)
}

function load(): Preferences {
  try {
    const raw = readLocal(KEY)
    if (!raw) return DEFAULTS
    const {
      saveLocation,
      folder: _folder,
      ...saved
    } = JSON.parse(raw) as Partial<Preferences> & {
      saveLocation?: SaveLocation
      folder?: string
    }
    const next = { ...DEFAULTS, ...saved }
    next.saveLocations = normalizeLocations(
      saved.saveLocations ??
        (saveLocation ? [saveLocation] : DEFAULTS.saveLocations),
      next.connected
    )
    return next
  } catch {
    return DEFAULTS
  }
}

const store = createStore<Preferences>(load())

export const usePreferences = () => store.use()
export const readPreferences = () => store.get()

export function updatePreferences(patch: Partial<Preferences>) {
  const next = { ...store.get(), ...patch }
  next.saveLocations = normalizeLocations(next.saveLocations, next.connected)
  writeLocal(KEY, JSON.stringify(next))
  store.set(next)
}

export function toggleConnection(id: string) {
  const { connected } = store.get()
  updatePreferences({
    connected: connected.includes(id)
      ? connected.filter((c) => c !== id)
      : [...connected, id],
  })
}

export function addCustomConnector(url: string) {
  const clean = url.trim()
  if (!clean) return
  let host = clean
  try {
    host = new URL(clean.includes("://") ? clean : `https://${clean}`).host
  } catch {
    /* keep the raw text */
  }
  const id = `mcp:${host.toLowerCase()}`
  const { customConnectors, connected } = store.get()
  if (customConnectors.some((c) => c.id === id)) return
  updatePreferences({
    customConnectors: [
      ...customConnectors,
      { id, name: host, description: clean, url: clean, custom: true },
    ],
    connected: [...connected, id],
  })
}

export function removeCustomConnector(id: string) {
  const { customConnectors, connected } = store.get()
  updatePreferences({
    customConnectors: customConnectors.filter((c) => c.id !== id),
    connected: connected.filter((c) => c !== id),
  })
}

export const saveLocationLabel = (p: Preferences) =>
  SAVE_LOCATIONS.filter((l) => p.saveLocations.includes(l.id))
    .map((l) => l.name)
    .join(", ")

/** Preserve existing preferences when first showing the editable policy text. */
export function policyTextFor(p: Preferences): string {
  return (
    p.policyText ??
    [
      p.askBeforeActing
        ? "Ask for my confirmation before sending, approving or changing anything."
        : "Follow the permissions agreed for each task before taking actions.",
      p.notifyWhenDone
        ? "Notify me in Inbox when a delegated task finishes or needs my attention."
        : "Only notify me when a delegated task needs my attention.",
      p.useWorkspaceLanguage
        ? "Reply in Spanish, the workspace language."
        : "Reply in the language I use in the conversation.",
    ].join("\n\n")
  )
}

export function getPolicyText(): string {
  return policyTextFor(store.get())
}
