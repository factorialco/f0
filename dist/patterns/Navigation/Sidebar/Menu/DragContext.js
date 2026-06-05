import { jsx as a } from "react/jsx-runtime";
import { useState as e, createContext as i, useContext as u } from "react";
const r = i(void 0);
function x({ children: t }) {
  const [o, n] = e(!1), [s, g] = e(null);
  return /* @__PURE__ */ a(
    r.Provider,
    {
      value: { isDragging: o, setIsDragging: n, draggedItemId: s, setDraggedItemId: g },
      children: t
    }
  );
}
function D() {
  const t = u(r);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
export {
  x as DragProvider,
  D as useDragContext
};
