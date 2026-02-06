import type { OverflowToken } from "../types"

const overflowMap = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll",
} satisfies Record<OverflowToken, string>

export const overflowVariants = {
  overflow: overflowMap,

  overflowX: {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    auto: "overflow-x-auto",
    scroll: "overflow-x-scroll",
  } satisfies Record<OverflowToken, string>,

  overflowY: {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    auto: "overflow-y-auto",
    scroll: "overflow-y-scroll",
  } satisfies Record<OverflowToken, string>,
}

export const overflowDefaults = {}
