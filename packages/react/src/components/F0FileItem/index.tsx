import { experimentalComponent } from "@/lib/experimental"

import { F0FileItem as F0FileItemComponent } from "./F0FileItem"

export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0FileItem = experimentalComponent("F0FileItem", F0FileItemComponent)

export { F0FileItem }

/** @deprecated Use F0FileItem */
export const FileItem = F0FileItem
