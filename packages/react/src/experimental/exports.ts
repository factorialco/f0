import { Component } from "@/lib/component";

import {
  F0Select as Select,
  type F0SelectItemObject as SelectItemObject,
  type F0SelectItemProps as SelectItemProps,
  type F0SelectProps as SelectProps,
} from "../components/F0Select";
import { ScrollArea as ScrollAreaComponent } from "./Utilities/ScrollArea";

export * from "./AiPromotionChat/exports";
/**
 * @deprecated Banners has moved to @/sds/ai/Banners. Import from there instead.
 */
export * from "../sds/ai/Banners/exports";
export * from "./Charts/exports";
/**
 * @deprecated CoCreationForm has moved to @/sds/CoCreationForm. Import from there instead.
 */
export * from "../sds/CoCreationForm/exports";
export * from "./F0ActionBar";
export * from "./F0VersionHistory";
export * from "./Forms/exports";
export * from "./Information/exports";
export * from "./Lists/DetailsItem";
export * from "./Lists/DetailsItemsList";
export * from "./Lists/OnePersonListItem";
export * from "./Navigation/exports";
/**
 * @deprecated OneApprovalHistory has moved to @/sds/inbox/OneApprovalHistory. Import from there instead.
 */
export * from "../sds/inbox/OneApprovalHistory";
export * from "./OneCalendar";
export * from "./OneDataCollection/exports";
export * from "./OneDateNavigator";
export * from "./OneEmptyState";
/**
 * @deprecated OnePagination has moved to @/ui/OnePagination. Import from there instead.
 */
export * from "../ui/OnePagination";
export * from "./Overlays/exports";
export * from "./RichText/exports";
export * from "./Utilities/exports";
export * from "./Widgets/exports";
/**
 * @deprecated OneRestrictComponent has moved to @/ui/OneRestrictComponent. Import from there instead.
 */
export * from "../ui/OneRestrictComponent";

/**
 * @deprecated Use the `import { F0Select } from "@/factorialco/f0-react"`instead.
 */
export {
  Select,
  type SelectItemObject,
  type SelectItemProps,
  type SelectProps,
};

export const ScrollArea = Component(
  {
    name: "ScrollArea",
    type: "layout",
  },
  ScrollAreaComponent,
);
