import { Component } from "@/lib/component"
import { withDataTestId } from "@/lib/data-testid"

import {
  F0Select as Select,
  type F0SelectItemObject as SelectItemObject,
  type F0SelectItemProps as SelectItemProps,
  type F0SelectProps as SelectProps,
} from "../components/F0Select"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "./AiPromotionChat/exports"
/**
 * @deprecated Banners has moved to @/sds/ai/Banners. Import from there instead.
 */
export * from "../sds/ai/Banners/exports"
/**
 * @deprecated Charts has moved to @/kits/Charts. Import from there instead.
 */
export * from "../kits/Charts/exports"
/**
 * @deprecated F0ActionBar has moved to @/components/F0ActionBar. Import from there instead.
 */
export * from "../components/F0ActionBar"
export * from "./F0VersionHistory"
export * from "./Forms/exports"
export * from "./Information/exports"
export * from "./Lists/DetailsItem"
export * from "./Lists/DetailsItemsList"
export * from "./Lists/OnePersonListItem"
export * from "./Navigation/exports"
/**
 * @deprecated OneApprovalHistory has moved to @/sds/inbox/OneApprovalHistory. Import from there instead.
 */
export * from "../sds/inbox/OneApprovalHistory"
/**
 * @deprecated OneCalendar has moved to @/components/OneCalendar. Import from there instead.
 */
export * from "../components/OneCalendar"
/**
 * @deprecated OneChip has moved to @/components/OneChip. Import from there instead.
 */
export * from "../components/OneChip"
/**
 * @deprecated OneDataCollection has moved to @/patterns/OneDataCollection. Import from there instead.
 */
export * from "../patterns/OneDataCollection/exports"
/**
 * @deprecated OneDateNavigator has moved to @/patterns/OneDateNavigator. Import from there instead.
 */
export * from "../patterns/OneDateNavigator"
/**
 * @deprecated OneEmptyState has moved to @/components/OneEmptyState. Import from there instead.
 */
export * from "../components/OneEmptyState"
/**
 * @deprecated OnePagination has moved to @/ui/OnePagination. Import from there instead.
 */
export * from "../ui/OnePagination"
export * from "./Overlays/exports"
/**
 * @deprecated RichText has moved to @/components/RichText. Import from there instead.
 */
export * from "../components/RichText/exports"
export * from "./Utilities/exports"
export * from "./Widgets/exports"
/**
 * @deprecated OneRestrictComponent has moved to @/ui/OneRestrictComponent. Import from there instead.
 */
export * from "../ui/OneRestrictComponent"

/**
 * @deprecated Use the `import { F0Select } from "@/factorialco/f0-react"`instead.
 */
export { Select, type SelectItemObject, type SelectItemProps, type SelectProps }

export const ScrollArea = withDataTestId(
  Component(
    {
      name: "ScrollArea",
      type: "layout",
    },
    ScrollAreaComponent
  )
)
