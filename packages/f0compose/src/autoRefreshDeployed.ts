/**
 * autoRefreshDeployed.ts
 *
 * Keeps share-link viewers on the latest deploy without forcing them
 * to remember to hit refresh.
 *
 * Problem: Vite emits hashed bundles (`index-AbC123.js`). When we
 * redeploy, the filename changes, but a browser tab that's already
 * been open since the previous deploy keeps running the old JS —
 * forever, until the user manually reloads. For a single-share-link
 * prototype that gets reviewed by people who leave the tab open,
 * that means they silently miss every iteration we ship.
 *
 * Approach: poll the deployed HTML every minute, parse the main
 * script tag out of it, and compare its `src` to whatever script the
 * current page booted from. When they differ, the asset hash has
 * changed → a new deploy is live → trigger a soft reload. The reload
 * uses `location.reload()` rather than a hard `?cache-bust=` because
 * Vercel's CDN already serves the new HTML (the polling response is
 * proof of that), so a normal reload is enough.
 *
 * Constraints:
 *   - Only runs in production builds. `import.meta.env.PROD` is true
 *     in `vite build` output and false during `pnpm dev`, so HMR is
 *     untouched.
 *   - Survives transient network failures: a failed poll is a no-op,
 *     not a reload trigger.
 *   - Guards against reload loops: we only reload when we have
 *     actually identified a current script and a different new one.
 *     If either side is missing, we wait.
 *   - Pauses when the tab is hidden. No point polling a backgrounded
 *     tab, and reloading while the user is in another app is rude.
 *     We re-poll immediately on visibility change so a long-hidden
 *     tab updates as soon as the user returns to it.
 */

const POLL_INTERVAL_MS = 60_000

function getCurrentScriptHash(): string | null {
  // Vite injects exactly one type=module script for the entry chunk;
  // its filename pattern is `/assets/index-<hash>.js`. We use the
  // full src so we don't have to special-case the hash regex; any
  // change in the URL means a new deploy.
  const scripts = Array.from(
    document.querySelectorAll<HTMLScriptElement>('script[type="module"][src]')
  )
  const entry = scripts.find((s) => /\/assets\/index-/.test(s.src))
  return entry ? new URL(entry.src, location.origin).pathname : null
}

async function getDeployedScriptHash(): Promise<string | null> {
  // Fetch the HTML, not the JS — JS is content-addressed so its URL
  // doesn't change after a deploy; HTML is the moving part that
  // points at whichever bundle is current.
  let html: string
  try {
    const res = await fetch("/index.html", { cache: "no-store" })
    if (!res.ok) return null
    html = await res.text()
  } catch {
    // Offline, DNS hiccup, CDN burp — treat as "nothing to do" and
    // try again next tick. Never throw out of this function.
    return null
  }
  const match = html.match(/\/assets\/index-[A-Za-z0-9_-]+\.js/)
  return match ? match[0] : null
}

let polling = false

async function poll(currentHash: string) {
  if (polling) return
  polling = true
  try {
    const deployed = await getDeployedScriptHash()
    if (deployed && deployed !== currentHash) {
      // Reload. Don't try to be clever about preserving state — the
      // user is on a prototype share link, not a half-filled-out
      // form. A fresh load is exactly what they want.
      location.reload()
    }
  } finally {
    polling = false
  }
}

export function installDeployedAutoRefresh(): void {
  if (!import.meta.env.PROD) return

  const currentHash = getCurrentScriptHash()
  // Bail if we can't identify the current bundle — without that we'd
  // either never reload (false negative) or reload constantly (false
  // positive). Safer to do nothing.
  if (!currentHash) return

  // Initial check after a short delay so the page has a chance to
  // hydrate fully before we potentially yank the rug.
  window.setTimeout(() => poll(currentHash), 5_000)

  const interval = window.setInterval(() => {
    if (document.visibilityState !== "visible") return
    poll(currentHash)
  }, POLL_INTERVAL_MS)

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") poll(currentHash)
  })

  // Defensive: clean up if something dynamically unmounts the page
  // (won't normally happen, but keeps `installDeployedAutoRefresh`
  // safe to call multiple times in HMR-adjacent contexts).
  window.addEventListener("beforeunload", () => {
    window.clearInterval(interval)
  })
}
