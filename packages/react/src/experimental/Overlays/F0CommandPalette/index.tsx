import { experimentalComponent } from "@/lib/experimental"

import { CommandPaletteProvider } from "./CommandPaletteProvider"

/**
 * @experimental This is an experimental API use it at your own risk
 */
export const F0CommandPaletteProvider = experimentalComponent(
  "F0CommandPaletteProvider",
  CommandPaletteProvider
)

/**
 * @experimental This is an experimental API use it at your own risk
 */
export { useCommandPalette } from "./CommandPaletteProvider"

export { commandActionRisks } from "./types"

export type {
  CommandAction,
  CommandActionRisk,
  CommandAssistant,
  CommandAvailability,
  CommandEntityAction,
  CommandEntityAvatar,
  CommandEntityProvider,
  CommandEntityRef,
  CommandImpact,
  CommandNavigationItem,
  CommandParamOption,
  CommandParamStep,
  CommandParamValues,
  CommandRowAction,
  CommandRunContext,
  F0CommandPaletteApi,
  F0CommandPaletteProviderProps,
} from "./types"
