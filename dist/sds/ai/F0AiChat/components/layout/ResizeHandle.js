import { jsxs as i, jsx as c } from "react/jsx-runtime";
import { useRef as p, useCallback as l, useEffect as h } from "react";
import { cn as s } from "../../../../../lib/utils.js";
const y = ({
  onResize: t,
  onReset: a,
  isResizing: o,
  setIsResizing: e,
  isCanvasMode: m
}) => {
  const n = p(0), f = l(
    (r) => {
      r.preventDefault(), n.current = r.clientX, e(!0);
    },
    [e]
  ), v = l(async () => {
    e(!0), await a(), e(!1);
  }, [a, e]);
  return h(() => {
    if (!o) return;
    const r = (d) => {
      const b = n.current - d.clientX;
      n.current = d.clientX, t(b);
    }, u = () => {
      e(!1);
    };
    return document.addEventListener("mousemove", r), document.addEventListener("mouseup", u), () => {
      document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", u);
    };
  }, [o, t, e]), // z-10 so the handle — and its invisible hit-area extension — paints
  // above the chat-content sibling (same flex row, later in DOM, no
  // stacking context of its own). Without this, the `group-hover` never
  // fires on the right side because the chat panel's edge captures the
  // mouse events first.
  /* @__PURE__ */ i(
    "div",
    {
      className: s(
        "group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1",
        m && "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"
      ),
      onMouseDown: f,
      onDoubleClick: v,
      children: [
        /* @__PURE__ */ c("div", { "aria-hidden": !0, className: "absolute -inset-x-1 inset-y-0" }),
        /* @__PURE__ */ c(
          "div",
          {
            "aria-hidden": !0,
            className: s(
              "pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full",
              "transition-[width,background-color] duration-150 ease-out",
              "w-px bg-transparent",
              "group-hover:w-1 group-hover:bg-f1-background-secondary-hover",
              o && "!w-1 !bg-f1-background-secondary-hover"
            )
          }
        )
      ]
    }
  );
};
export {
  y as ResizeHandle
};
