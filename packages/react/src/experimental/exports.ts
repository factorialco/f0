import { Component } from "@/lib/component"

import {
  F0Select as Select,
  type F0SelectItemObject as SelectItemObject,
  type F0SelectItemProps as SelectItemProps,
  type F0SelectProps as SelectProps,
} from "../components/F0Select"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "../ai/F0AiChat"
export * from "./AiPromotionChat/exports"
export * from "./Banners/exports"
export * from "./Charts/exports"
export * from "./CoCreationForm/exports"
export * from "./F0ActionBar"
export * from "./F0VersionHistory"
export * from "./Forms/exports"
export * from "./Information/exports"
export * from "./Lists/DetailsItem"
export * from "./Lists/DetailsItemsList"
export * from "./Lists/OnePersonListItem"
export * from "./Navigation/exports"
export * from "./OneAlert"
export * from "./OneApprovalHistory"
export * from "./OneCalendar"
export * from "./OneDataCollection/exports"
export * from "./OneDateNavigator"
export * from "./OneEmptyState"
export * from "./OnePagination"
export * from "./Overlays/exports"
export * from "./RichText/exports"
export * from "./Utilities/exports"
export * from "./Widgets/exports"

/**
 * @deprecated Use the `import { F0Select } from "@/factorialco/f0-react"`instead.
 */
export { Select, type SelectItemObject, type SelectItemProps, type SelectProps }

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
