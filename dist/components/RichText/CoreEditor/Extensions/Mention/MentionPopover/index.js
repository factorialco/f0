import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { Root as r, Anchor as d, Content as a } from "../../../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
const f = ({
  content: t,
  anchorRect: n,
  editor: s
}) => {
  const i = {
    position: "absolute",
    top: n.bottom + window.scrollY,
    left: n.left + window.scrollX,
    width: 0,
    height: 0
  };
  return /* @__PURE__ */ l(
    r,
    {
      open: !0,
      modal: !1,
      onOpenChange: (o) => {
        o && s?.commands.focus();
      },
      children: [
        /* @__PURE__ */ e("div", { style: i }),
        /* @__PURE__ */ e(d, { asChild: !0, children: /* @__PURE__ */ e("div", { style: i }) }),
        /* @__PURE__ */ e(
          a,
          {
            side: "top",
            align: "start",
            sideOffset: 25,
            collisionPadding: 10,
            style: { zIndex: 9999 },
            onMouseDownCapture: () => {
              s?.commands.focus();
            },
            onOpenAutoFocus: (o) => {
              o.preventDefault();
            },
            onCloseAutoFocus: (o) => {
              o.preventDefault();
            },
            children: /* @__PURE__ */ e(
              "div",
              {
                ref: (o) => {
                  o && t.parentNode !== o && o.appendChild(t);
                }
              }
            )
          }
        )
      ]
    }
  );
};
export {
  f as MentionPopover
};
