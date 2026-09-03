import { Maturity } from "../types"

const COLORS: Record<Maturity, string> = {
  stable: "bg-emerald-100 text-emerald-800 ring-emerald-200",
  experimental: "bg-amber-100 text-amber-800 ring-amber-200",
  deprecated: "bg-red-100 text-red-800 ring-red-200",
  internal: "bg-gray-200 text-gray-700 ring-gray-300",
  sds: "bg-violet-100 text-violet-800 ring-violet-200",
  unknown: "bg-gray-100 text-gray-500 ring-gray-200",
}

export function MaturityChip({
  maturity,
  small,
}: {
  maturity: Maturity
  small?: boolean
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full ring-1 font-mono ${COLORS[maturity]} ${
        small ? "px-1.5 py-0 text-[10px]" : "px-2 py-0.5 text-xs"
      }`}
    >
      {maturity}
    </span>
  )
}
