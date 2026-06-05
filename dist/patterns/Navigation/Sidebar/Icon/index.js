import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useRef as c, useEffect as d } from "react";
import { F0Icon as l } from "../../../../components/F0Icon/index.js";
import u from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { cn as o } from "../../../../lib/utils.js";
import { Action as p } from "../../../../ui/Action/Action.js";
import { useSidebar as h } from "../../../ApplicationFrame/FrameProvider.js";
function m({ isExpanded: r }) {
  return /* @__PURE__ */ n(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ e(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "arrow",
            d: r ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: o(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              r ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: o(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              r ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function w() {
  const { prevSidebarState: r, sidebarState: t, toggleSidebar: s, isSmallScreen: i } = h(), a = c(null);
  return d(() => {
    r === "hidden" && t === "locked" && a.current?.focus();
  }, [r, t]), /* @__PURE__ */ n(
    p,
    {
      variant: "ghost",
      size: "md",
      onClick: () => s(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: a,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ e("div", { className: o("hidden", { flex: !i }), children: /* @__PURE__ */ e(m, { isExpanded: t === "locked" }) }),
        /* @__PURE__ */ e("div", { className: o("hidden", { flex: i }), children: /* @__PURE__ */ e(l, { icon: u, size: "md" }) })
      ]
    }
  );
}
export {
  w as SidebarIcon
};
