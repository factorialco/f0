import { experimentalComponent } from "@/lib/experimental"

import { F0SharingDialog as F0SharingDialogComponent } from "./F0SharingDialog"

export * from "./types"

/**
 * @experimental This is an experimental pattern. Its API may change as it is
 * validated by product teams.
 */
export const F0SharingDialog = experimentalComponent(
  "F0SharingDialog",
  F0SharingDialogComponent
)
