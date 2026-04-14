import {
  absoluteSpacing,
  betweenSpacing,
  relativeSpacing,
} from "@factorialco/f0-core"

type SpacingScale = Record<string, string>

type Props = {
  scale: SpacingScale
  variant?: "gap" | "size"
}

function SpacingRow({
  name,
  value,
  variant = "gap",
}: {
  name: string
  value: string
  variant?: "gap" | "size"
}) {
  const isRelative = value.endsWith("rem")
  const pxValue = isRelative ? `${Math.round(parseFloat(value) * 16)}px` : value

  return (
    <tr>
      <td className="font-mono py-1 pr-4 text-sm">{name}</td>
      <td className="py-1 pr-4 text-sm text-f1-foreground-secondary">
        {value}
        {isRelative && ` (${pxValue})`}
      </td>
      <td className="py-1">
        {variant === "size" ? (
          <div
            className="h-6 bg-f1-background-accent-bold"
            style={{ width: pxValue === "0px" ? "1px" : pxValue }}
          />
        ) : (
          <div className="flex items-center">
            <div className="h-2 w-4 shrink-0 bg-f1-background-promote-bold" />
            <div
              className="h-0.5 shrink-0 bg-f1-background-accent-bold"
              style={{ width: pxValue === "0px" ? "1px" : pxValue }}
            />
            <div className="h-2 w-4 shrink-0 bg-f1-background-promote-bold" />
          </div>
        )}
      </td>
    </tr>
  )
}

function SpacingTable({ scale, variant = "gap" }: Props) {
  return (
    <table className="mb-8 mt-4 w-full dark:text-f1-foreground-inverse/80">
      <thead>
        <tr className="text-left">
          <th className="pb-2 pr-4 text-sm font-semibold">Name</th>
          <th className="pb-2 pr-4 text-sm font-semibold">Value</th>
          <th className="pb-2 text-sm font-semibold">Preview</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(scale).map(([key, value]) => (
          <SpacingRow key={key} name={key} value={value} variant={variant} />
        ))}
      </tbody>
    </table>
  )
}

export function AbsoluteSpacingTable() {
  return <SpacingTable scale={absoluteSpacing as SpacingScale} variant="gap" />
}

export function RelativeSpacingTable() {
  return <SpacingTable scale={relativeSpacing as SpacingScale} variant="size" />
}

export function BetweenSpacingTable() {
  return <SpacingTable scale={betweenSpacing as SpacingScale} variant="gap" />
}
