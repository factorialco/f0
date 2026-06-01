import type { ZIndexToken } from "../types"

export const zIndexVariants = {
  zIndex: {
    auto: "z-auto",
    "0": "z-0",
    "10": "z-10",
    "20": "z-20",
    "30": "z-30",
    "40": "z-40",
    "50": "z-50",
  } satisfies Record<ZIndexToken, string>,
}
