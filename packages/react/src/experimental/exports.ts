import { Component } from "../lib/component/component"
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea"

export * from "./Actions/exports"
export * from "./AiChat/exports"
export * from "./AiPromotionChat/exports"
export * from "./Banners/exports"
export * from "./Charts/exports"
export * from "./Forms/exports"
export * from "./Information/exports"
export * from "./Lists/DetailsItem"
export * from "./Lists/DetailsItemsList"
export * from "./Lists/OnePersonListItem"
export * from "./Modals/OneModal"
export * from "./Navigation/exports"
export * from "./OneAlert"
export * from "./OneApprovalHistory"
export * from "./OneCalendar"
export * from "./OneDataCollection/exports"
export * from "./OneDateNavigator"
export * from "./OneEmptyState"
export * from "./OnePagination"
export * from "./Overlays/exports"
export * from "./Overlays/Tooltip"
export * from "./RichText/exports"
export * from "./Utilities/exports"
export * from "./Widgets/exports"

export * from "../components/Actions/OneDropdownButton"

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent
)
