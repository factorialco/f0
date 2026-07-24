import type { ReactNode } from "react"

export type EntityRefDetailRow = {
  label?: string
  value: ReactNode
}

type EntityRefDetailsProps = {
  rows: EntityRefDetailRow[]
}

export function EntityRefDetails({ rows }: EntityRefDetailsProps) {
  if (rows.length === 0) {
    return null
  }

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <div key={row.label ?? index} className="flex flex-col">
          {row.label && (
            <p className="text-f1-foreground-secondary">{row.label}</p>
          )}
          <div className="flex items-center gap-1.5 font-medium text-f1-foreground">
            {row.value}
          </div>
        </div>
      ))}
    </div>
  )
}
