import { ActionVariantProps } from "./internal-types"

export const isLinkStyled = (
  variant: ActionVariantProps["variant"]
): variant is Exclude<
  ActionVariantProps["variant"],
  "link" | "mention" | "selected"
> => variant === "link" || variant === "mention"
