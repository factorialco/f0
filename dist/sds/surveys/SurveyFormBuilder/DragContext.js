import { jsx as a } from "react/jsx-runtime";
import { useState as e, createContext as i, useContext as d } from "react";
const r = i(void 0);
function D({ children: t }) {
  const [g, n] = e(!1), [o, s] = e(null);
  return /* @__PURE__ */ a(
    r.Provider,
    {
      value: { isDragging: g, setIsDragging: n, draggedItemId: o, setDraggedItemId: s },
      children: t
    }
  );
}
function c() {
  const t = d(r);
  return t || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
export {
  D as DragProvider,
  c as useDragContext
};
