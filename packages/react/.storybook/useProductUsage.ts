import { useEffect, useState } from "react"

import type { UsageResult } from "../scripts/product-usage-scan.mjs"

/**
 * Data layer for the docs usage tag: one fetch shared by every docs page, plus
 * the clone/pull actions the tag can trigger.
 *
 * Served by the Storybook dev server (see scripts/product-usage-scan.mjs).
 * Endpoints are literals rather than imports so this module never pulls Node
 * built-ins into the browser bundle.
 */
const ENDPOINT = "/f0-product-usage.json"
const ACTION_ENDPOINT = "/f0-usage-repo-action"

/** How often to re-read the payload while a clone or pull is running. */
const POLL_MS = 2000

/**
 * Local dev only. This data — product module names, internal prototype titles
 * — must never reach the public Storybook at f0.factorial.dev, which anyone
 * outside the company can read. `import.meta.env.DEV` is inlined at build
 * time, so the static bundle drops the tag and its requests entirely rather
 * than relying on the endpoints 404ing.
 */
export const ENABLED = import.meta.env.DEV

type State = UsageResult | null | undefined

let state: State
let inFlight: Promise<void> | undefined
let rescanning = false
const listeners = new Set<() => void>()

function notify() {
  for (const listener of listeners) listener()
}

function publish(next: State) {
  const wasRunning = isRunning(state)
  state = next

  // A clone or pull that just finished changed what's on disk, so the numbers
  // on screen are stale the moment it lands. Refresh them without making
  // anyone find the Rescan button.
  if (wasRunning && !isRunning(next)) {
    void rescan()
  }

  notify()
}

async function load(): Promise<void> {
  if (!ENABLED) return publish(null)

  try {
    const response = await fetch(ENDPOINT)
    // A static build serves index.html for unknown paths, so a 200 alone isn't
    // proof the endpoint exists — check what came back.
    const contentType = response.headers.get("content-type") ?? ""
    if (!response.ok || !contentType.includes("application/json")) {
      return publish(null)
    }
    publish((await response.json()) as UsageResult)
  } catch {
    publish(null)
  }
}

/** Fetches once per session; later calls re-read the (possibly changed) data. */
function ensureLoaded(force = false) {
  if (!force && (state !== undefined || inFlight)) return
  inFlight = load().finally(() => {
    inFlight = undefined
  })
}

/** Any clone or pull still in progress? Drives the poll. */
function isRunning(value: State) {
  return Boolean(
    value &&
    Object.values(value.actions ?? {}).some(
      (action) => action.state === "running"
    )
  )
}

/**
 * The usage payload: `undefined` while loading, `null` when unavailable (no
 * endpoint — i.e. the public build), otherwise the scan result. `rescanning`
 * covers both the manual button and the refresh that follows a clone or pull.
 */
export function useProductUsage() {
  const [, forceRender] = useState(0)

  useEffect(() => {
    const listener = () => forceRender((n) => n + 1)
    listeners.add(listener)
    ensureLoaded()
    return () => {
      listeners.delete(listener)
    }
  }, [])

  // A clone runs for minutes; keep re-reading so the tag shows the result
  // without anyone having to reload Storybook.
  useEffect(() => {
    if (!isRunning(state)) return
    const timer = setInterval(() => ensureLoaded(true), POLL_MS)
    return () => clearInterval(timer)
  })

  return { data: state, rescanning }
}

/** Re-runs the scan (bypassing the server's cache) and republishes it. */
export async function rescan() {
  if (!ENABLED) return

  rescanning = true
  notify()
  try {
    const response = await fetch(`${ENDPOINT}?refresh=1`)
    if (response.ok) {
      state = (await response.json()) as UsageResult
    }
  } catch {
    // Leave the previous data in place — a failed refresh isn't worth blanking
    // the tag for.
  } finally {
    rescanning = false
    notify()
  }
}

/**
 * Asks the dev server to clone a repo, or fast-forward it if it's already
 * there. Returns as soon as the work has started; progress arrives through the
 * usual payload (see `actions`).
 */
export async function runRepoAction(
  repo: string,
  action: "clone" | "pull" | "stash-pull"
): Promise<{ ok: boolean; message?: string }> {
  if (!ENABLED) return { ok: false, message: "Disabled outside dev" }

  let outcome: { ok: boolean; message?: string }
  try {
    const response = await fetch(
      `${ACTION_ENDPOINT}?repo=${repo}&action=${action}`,
      { method: "POST" }
    )
    // A refusal here (stale dev server that doesn't know this action, wrong
    // method, cross-origin) is silent otherwise, and silence is exactly what
    // makes a button feel broken.
    outcome = response.ok
      ? { ok: true }
      : {
          ok: false,
          message:
            (
              (await response.json().catch(() => null)) as {
                message?: string
              } | null
            )?.message ?? `Request failed (${response.status})`,
        }
  } catch (error) {
    outcome = { ok: false, message: `Could not reach the dev server` }
    void error
  }

  await ensureLoaded(true)
  return outcome
}
