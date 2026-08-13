// The Home kit's PUBLIC surface is deliberately small: the layout, the
// "Add widget" picker, and the slot vocabulary (types + `listSlot`/`homeSlot`
// builders) that feeds them. SlotWidget, WidgetContainer and HomeListItem are
// internal building blocks — the layout draws widgets from data, so nothing
// outside needs to render one by hand.
export * from "../../../sds/Home/NewHomeLayout"
export * from "../../../sds/Home/slotRenderers"
export * from "../../../sds/Home/WidgetCatalog"
// Named by NewHomeLayoutProps (`editableWidgetContainers`, the add callback,
// `virtualization`), so the types are public even though the component is not.
export type {
  WidgetContainerSide,
  WidgetVirtualization,
} from "../../../sds/Home/WidgetContainer"
export * from "./Dashboard"
export * from "./WidgetStrip"
