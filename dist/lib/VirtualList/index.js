import { jsx as e, Fragment as c } from "react/jsx-runtime";
import { useVirtualizer as f } from "../../node_modules/.pnpm/@tanstack_react-virtual@3.13.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-virtual/dist/esm/index.js";
import l, { forwardRef as d } from "react";
import { experimentalComponent as h } from "../experimental.js";
import { cn as g } from "../utils.js";
const a = d(
  ({ height: s, itemCount: n, itemSize: r, className: m, renderer: p }, u) => {
    const o = l.useRef(null);
    l.useImperativeHandle(
      u,
      () => o.current,
      []
    );
    const i = f({
      count: n,
      getScrollElement: () => o.current,
      estimateSize: typeof r == "number" ? () => r : r,
      overscan: 5
    });
    return /* @__PURE__ */ e(
      "div",
      {
        ref: o,
        className: g("scrollbar-macos w-full overflow-auto", m),
        style: {
          height: `${s}px`
        },
        children: /* @__PURE__ */ e(
          "div",
          {
            style: {
              height: `${i.getTotalSize()}px`,
              width: "100%",
              position: "relative"
            },
            children: i.getVirtualItems().map((t) => /* @__PURE__ */ e(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${t.size}px`,
                  transform: `translateY(${t.start}px)`
                },
                children: t ? p(t) : /* @__PURE__ */ e(c, {})
              },
              t.key
            ))
          }
        )
      }
    );
  }
);
a.displayName = "VirtualList";
const R = h("VirtualList", a);
export {
  R as VirtualList
};
