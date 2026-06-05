import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { useState as s, useEffect as d } from "react";
import { F0AvatarModule as p } from "../../../../components/avatars/F0AvatarModule/index.js";
import { ButtonInternal as x } from "../../../../components/F0Button/internal.js";
import g from "../../../../icons/app/Cross.js";
import { Dialog as u } from "../../../../ui/Dialog/dialog.js";
import { ScrollArea as h, ScrollBar as b } from "../../../../ui/scrollarea.js";
import { DialogContent as v } from "../../../../ui/Dialog/components/DialogContent.js";
import { DialogTitle as w } from "../../../../ui/Dialog/components/DialogTitle.js";
function M({
  isOpen: r,
  onClose: t,
  title: i,
  children: m,
  module: a,
  portalContainer: f
}) {
  const [c, l] = s(r);
  return d(() => {
    l(r);
  }, [r]), /* @__PURE__ */ e(u, { open: c, onOpenChange: (n) => {
    l(n), n || t();
  }, modal: !0, children: /* @__PURE__ */ o(
    v,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: f,
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ o(w, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            a && /* @__PURE__ */ e(p, { module: a, size: "lg" }),
            i
          ] }),
          /* @__PURE__ */ e(
            x,
            {
              variant: "outline",
              icon: g,
              onClick: t,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ o(h, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          m,
          /* @__PURE__ */ e(
            b,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  M as CustomModal
};
