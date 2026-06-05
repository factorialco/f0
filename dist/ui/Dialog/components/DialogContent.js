import { jsxs as c, jsx as e } from "react/jsx-runtime";
import { Content as i } from "../../../node_modules/.pnpm/@radix-ui_react-dialog@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-dialog/dist/index.js";
import { forwardRef as u, useState as p, useEffect as x } from "react";
import { cn as n } from "../../../lib/utils.js";
import { DialogOverlay as g } from "./DialogOverlay.js";
import { DialogPortal as v } from "./DialogPortal.js";
const y = u(
  ({
    wrapperClassName: s,
    className: d,
    children: r,
    withTranslateAnimation: l = !0,
    container: t,
    ...m
  }, f) => {
    const [o, a] = p();
    return x(() => {
      a(t !== void 0 ? t : document.getElementById("content"));
    }, [t]), o === void 0 ? null : /* @__PURE__ */ c(v, { container: o, children: [
      /* @__PURE__ */ e(g, {}),
      /* @__PURE__ */ e(
        i,
        {
          ref: f,
          className: n(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            l && "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]",
            s
          ),
          ...m,
          children: /* @__PURE__ */ e(
            "div",
            {
              className: n(
                "relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg",
                "pointer-events-auto",
                d
              ),
              children: r
            }
          )
        }
      )
    ] });
  }
);
y.displayName = i.displayName;
export {
  y as DialogContent
};
