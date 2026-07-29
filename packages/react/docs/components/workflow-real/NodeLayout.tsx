import { type ReactNode } from "react"

/** Layout helper: lay out demo nodes in a responsive row. */
export function NodeRow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        alignItems: "flex-start",
        padding: "20px 0",
      }}
    >
      {children}
    </div>
  )
}

/** A labelled cell: a small caption above a demo node, for state galleries. */
export function StateCell({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span
        style={{
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#8a8a8a",
        }}
      >
        {label}
      </span>
      {children}
    </div>
  )
}
