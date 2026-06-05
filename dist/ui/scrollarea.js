import { jsxs as z, jsx as e } from "react/jsx-runtime";
import { Root as u, Viewport as V, Corner as A, ScrollAreaScrollbar as m, ScrollAreaThumb as E } from "../node_modules/.pnpm/@radix-ui_react-scroll-area@1.2.2_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3_plzhpngyoiwpcsz52q2npcwnm4/node_modules/@radix-ui/react-scroll-area/dist/index.js";
import { forwardRef as v, useRef as H, useEffect as j } from "react";
import { cn as h } from "../lib/utils.js";
const k = v(
  ({
    className: l,
    children: t,
    showBar: a = !0,
    viewportRef: o,
    onScrollTop: r,
    onScrollBottom: i,
    scrollMargin: n = 0,
    ...y
  }, b) => {
    const x = H(null), s = o ?? x;
    return j(() => {
      const d = (N) => {
        const g = N.target, { scrollTop: f, scrollHeight: w, clientHeight: R } = g;
        f - n <= 0 && r && r(), f + R + n >= w && i && i();
      }, p = s.current;
      return p?.addEventListener("scroll", d), () => {
        p?.removeEventListener("scroll", d);
      };
    }, [s.current, i, r, n]), /* @__PURE__ */ z(
      u,
      {
        ref: b,
        className: h("relative overflow-hidden", l),
        scrollHideDelay: 200,
        ...y,
        children: [
          /* @__PURE__ */ e(
            V,
            {
              ref: s,
              className: "size-full snap-none rounded-[inherit] [&>div]:!block",
              tabIndex: 0,
              "data-scroll-container": !0,
              children: t
            }
          ),
          /* @__PURE__ */ e(c, { orientation: "vertical", showBar: a }),
          /* @__PURE__ */ e(c, { orientation: "horizontal", showBar: a }),
          /* @__PURE__ */ e(A, {})
        ]
      }
    );
  }
);
k.displayName = u.displayName;
const c = v(({ className: l, orientation: t = "vertical", showBar: a = !0, ...o }, r) => /* @__PURE__ */ e(
  m,
  {
    ref: r,
    orientation: t,
    className: h(
      "group/scrollbar z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "h-full w-2",
      t === "horizontal" && "h-2 flex-col",
      l
    ),
    ...o,
    children: a && /* @__PURE__ */ e(E, { className: "relative flex-1 rounded-full bg-f1-background-inverse opacity-30 transition-opacity group-hover/scrollbar:opacity-50" })
  }
));
c.displayName = m.displayName;
export {
  k as ScrollArea,
  c as ScrollBar
};
