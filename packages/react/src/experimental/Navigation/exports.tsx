/**
 * @deprecated ApplicationFrame has moved to @/patterns/ApplicationFrame. Import from there instead.
 */
export * from "../../patterns/ApplicationFrame"
export { useSidebar } from "../../patterns/ApplicationFrame/FrameProvider"
// The side panel, readable without the AI kit — this is what lets a product
// drive the panel without an assistant being present.
export { useSidePanel } from "../../patterns/ApplicationFrame/SidePanel/SidePanelProvider"
export type {
  SidePanelContent,
  SidePanelLayout,
  SidePanelViewDefinition,
} from "../../patterns/ApplicationFrame/SidePanel/types"
export * from "./Carousel"
/**
 * @deprecated DaytimePage has moved to @/sds/Home/DaytimePage. Import from there instead.
 */
export * from "../../sds/Home/DaytimePage"
export * from "./Dropdown"
export * from "./F0TableOfContent"
export * from "./Header"
/**
 * @deprecated Omnibutton has moved to @/ui/Omnibutton. Import from there instead.
 */
export * from "../../ui/Omnibutton"
/**
 * @deprecated Page has moved to @/patterns/Navigation/Page. Import from there instead.
 */
export * from "../../patterns/Navigation/Page"
/**
 * @deprecated Sidebar has moved to @/patterns/Navigation/Sidebar. Import from there instead.
 */
export * from "../../patterns/Navigation/Sidebar"
/**
 * @deprecated Tabs has moved to @/patterns/Navigation/Tabs. Import from there instead.
 */
export * from "../../patterns/Navigation/Tabs"
/**
 * @deprecated VirtualList has moved to @/lib/VirtualList. Import from there instead.
 */
export * from "../../lib/VirtualList"
