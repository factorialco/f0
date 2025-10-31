import { ActionVariantProps } from "./internal-types"
import { ActionLinkVariant, actionLinkVariants } from "./types"

export const isLinkStyled = (
  variant: ActionVariantProps["variant"]
): variant is ActionLinkVariant =>
  actionLinkVariants.includes(variant as unknown as ActionLinkVariant)
