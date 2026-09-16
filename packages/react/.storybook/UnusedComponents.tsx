import React, { useEffect, useState } from "react"

/**
 * The "Unused components" docs page: every documented component that nothing
 * imports — not the product, not a Composer prototype, not another f0
 * component.
 *
 * Same answer as `pnpm unused-components`; both call `computeUsageReport` on
 * the dev server. Local only — the page isn't registered in public builds (see
 * .storybook/main.ts) and the endpoint only exists on a dev server.
 */

const ENDPOINT = "/f0-unused-components.json"

interface Row {
  name: string
  zone: string
  status: string
  storyFile: string | null
  productFiles: number
  prototypes: string[]
  usedBy: string[]
  unused: boolean
}

interface Report {
  generatedAt: string
  total: number
  rows: Row[]
  unused: Row[]
  onlyInPrototypes: Row[]
  sources: {
    product:
      | { available: true; scope: string; importingFiles: number }
      | { available: false; reason: string }
    composer:
      | { available: true; prototypes: number }
      | { available: false; reason: string }
    internal: { available: true; scope: string }
  }
}

export function UnusedComponents() {
  const [report, setReport] = useState<Report | null>()
  const [full, setFull] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)

    fetch(`${ENDPOINT}${full ? "?full=1" : ""}`)
      .then(async (response) => {
        const type = response.headers.get("content-type") ?? ""
        if (!response.ok || !type.includes("application/json")) return null
        return (await response.json()) as Report
      })
      .catch(() => null)
      .then((data) => {
        if (!active) return
        setReport(data)
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [full])

  if (loading && report === undefined) {
    return <p>Scanning the product, F0 and Composer prototypes…</p>
  }

  if (!report) {
    return (
      <p>
        This page needs the Storybook dev server — run{" "}
        <code>pnpm --filter @factorialco/f0-react dev</code>.
      </p>
    )
  }

  const { sources } = report
  const byZone = new Map<string, Row[]>()
  for (const row of report.unused) {
    if (!byZone.has(row.zone)) byZone.set(row.zone, [])
    byZone.get(row.zone)?.push(row)
  }

  return (
    <div>
      <p>
        <strong>
          {report.unused.length} of {report.total} components are used nowhere
        </strong>{" "}
        — no product code, no Composer prototype, no other F0 component.
      </p>

      <ul>
        <li>
          <strong>Product:</strong>{" "}
          {sources.product.available
            ? `${sources.product.scope} (${sources.product.importingFiles} importing files)`
            : sources.product.reason}
        </li>
        <li>
          <strong>Composer:</strong>{" "}
          {sources.composer.available
            ? `${sources.composer.prototypes} prototypes`
            : sources.composer.reason}
        </li>
        <li>
          <strong>F0:</strong> {sources.internal.scope}
        </li>
      </ul>

      {!sources.product.available && (
        <p>
          <strong>
            Without a factorial checkout this list isn&apos;t trustworthy
          </strong>{" "}
          — every component looks unused in the product.
        </p>
      )}

      <p>
        <label>
          <input
            type="checkbox"
            checked={full}
            onChange={(event) => setFull(event.target.checked)}
            disabled={loading}
          />{" "}
          Scan the whole factorial monorepo (slower — the default covers{" "}
          <code>frontend/src/modules</code>)
        </label>{" "}
        {loading && <em>Rescanning…</em>}
      </p>

      <h2>Used nowhere ({report.unused.length})</h2>

      {[...byZone]
        .sort((a, b) => b[1].length - a[1].length)
        .map(([zone, rows]) => (
          <section key={zone}>
            <h3>
              {zone} ({rows.length})
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Maturity</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((row) => (
                    <tr key={row.name}>
                      <td>
                        <code>{row.name}</code>
                      </td>
                      <td>{row.status}</td>
                      <td>
                        <code>{row.storyFile}</code>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        ))}

      <h2>Only in prototypes ({report.onlyInPrototypes.length})</h2>
      <p>
        Built and prototyped, but no product code imports them yet. Unlike the
        list above these aren&apos;t deprecation candidates — a Composer
        prototype is usually where adoption starts, so expect them in{" "}
        <code>factorial</code> or <code>factorial-it</code> next.
      </p>

      {report.onlyInPrototypes.length === 0 ? (
        <p>
          <em>
            None right now — every component a prototype uses is already in the
            product.
          </em>
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Maturity</th>
              <th>Prototypes</th>
            </tr>
          </thead>
          <tbody>
            {report.onlyInPrototypes
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((row) => (
                <tr key={row.name}>
                  <td>
                    <code>{row.name}</code>
                  </td>
                  <td>{row.status}</td>
                  <td>{row.prototypes.join(", ")}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      <p>
        <small>
          Scanned at {new Date(report.generatedAt).toLocaleTimeString()}. Same
          data as{" "}
          <code>pnpm --filter @factorialco/f0-react unused-components</code>.
        </small>
      </p>
    </div>
  )
}
