// The Home kit's PUBLIC surface is deliberately small: the layout, the
// "Add widget" picker, the slot vocabulary (types + `listSlot`/`homeSlot`
// builders) that feeds them — and `SlotWidget`, the one canonical way to draw a
// `HomeWidgetItem`.
//
// SlotWidget is public because a preview drawn any OTHER way is a preview that
// can drift: an app that has to approximate a widget out of the content
// components reproduces the frame, the seams and the spacing by hand, and the
// first of those to fall out of step is silent. `SlotWidgetContent` is the same
// guarantee WITHOUT the frame, for a surface that is already a surface (an
// overlay drilling into a widget) and would otherwise be a card inside a card.
// WidgetContainer and HomeListItem stay internal — the layout draws columns
// from data.
export * from "../../../sds/Home/NewHomeLayout"
export * from "../../../sds/Home/slotRenderers"
export * from "../../../sds/Home/SlotWidget"
export * from "../../../sds/Home/WidgetCatalog"
// Named by NewHomeLayoutProps (`editableWidgetContainers`, the add callback,
// `virtualization`), so the types are public even though the component is not.
export type {
  WidgetContainerSide,
  WidgetVirtualization,
} from "../../../sds/Home/WidgetContainer"
export * from "./Dashboard"
export * from "./WidgetStrip"
