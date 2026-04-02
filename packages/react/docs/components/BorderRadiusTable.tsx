import { borderRadius } from "@factorialco/f0-core"

function remToPx(value: string): string {
  if (value === "0px" || value === "9999px") return value
  const rem = parseFloat(value)
  return `${Math.round(rem * 16)}px`
}

export function BorderRadiusTable() {
  const entries = Object.entries(borderRadius) as [string, string][]

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
          const className = key === "DEFAULT" ? "rounded" : `rounded-${key}`
          const pxValue = remToPx(value)
          return (
            <tr key={key}>
              <td className="py-1 pr-4">
                <pre className="inline">{className}</pre>
              </td>
              <td className="py-1 pr-4 text-sm text-f1-foreground-secondary">
                {pxValue}
              </td>
              <td className="py-1">
                <div
                  className={`size-10 bg-f1-foreground-accent ${className}`}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
