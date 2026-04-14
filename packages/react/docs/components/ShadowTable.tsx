import { boxShadow } from "@factorialco/f0-core"

export function ShadowTable() {
  const entries = Object.entries(boxShadow) as [string, string][]

  return (
    <table className="mb-8 mt-4 w-full dark:text-f1-foreground-inverse/80">
      <thead>
        <tr className="text-left">
          <th className="pb-2 pr-4 text-sm font-semibold">Class</th>
          <th className="pb-2 pr-4 text-sm font-semibold">Value</th>
          <th className="pb-2 text-sm font-semibold">Preview</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, value]) => {
          const className = key === "DEFAULT" ? "shadow" : `shadow-${key}`
          return (
            <tr key={key}>
              <td className="py-3 pr-4">
                <pre className="inline">{className}</pre>
              </td>
              <td className="py-3 pr-4 text-sm text-f1-foreground-secondary">
                {value}
              </td>
              <td className="py-3">
                <div
                  className={`h-12 w-20 rounded-sm bg-f1-background ${className}`}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
