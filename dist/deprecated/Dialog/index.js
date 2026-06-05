import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { forwardRef as d, useState as g, useCallback as x } from "react";
import { F0AvatarAlert as u } from "../../components/avatars/F0AvatarAlert/index.js";
import { withDataTestId as D } from "../../lib/data-testid/index.js";
import { experimentalComponent as v } from "../../lib/experimental.js";
import { Dialog as h } from "../../ui/Dialog/dialog.js";
import { Component as y } from "../../lib/component/component.js";
import { DialogContent as N } from "../../ui/Dialog/components/DialogContent.js";
import { DialogHeader as w } from "../../ui/Dialog/components/DialogHeader.js";
import { DialogTitle as C } from "../../ui/Dialog/components/DialogTitle.js";
import { DialogDescription as b } from "../../ui/Dialog/components/DialogDescription.js";
import { DialogFooter as T } from "../../ui/Dialog/components/DialogFooter.js";
import { F0Button as r } from "../../components/F0Button/F0Button.js";
const s = d(
  ({ header: a, actions: t, open: n, onClose: i }, p) => {
    const [f, m] = g(!1), c = x(() => {
      m(!0);
      const l = setTimeout(() => {
        i?.(), m(!1);
      }, 200);
      return () => clearTimeout(l);
    }, [i]);
    return /* @__PURE__ */ e(
      h,
      {
        open: n && !f,
        onOpenChange: (l) => !l && c?.(),
        children: /* @__PURE__ */ o(N, { ref: p, className: "bottom-3 top-auto max-w-[400px]", children: [
          /* @__PURE__ */ o(w, { className: "flex flex-col gap-4 px-4 py-5", children: [
            /* @__PURE__ */ e(u, { type: a.type, size: "lg" }),
            /* @__PURE__ */ o("div", { className: "flex flex-col gap-0.5", children: [
              /* @__PURE__ */ e(C, { className: "text-xl sm:text-lg", children: a.title }),
              /* @__PURE__ */ e(b, { className: "text-lg sm:text-base", children: a.description })
            ] })
          ] }),
          t && /* @__PURE__ */ o(T, { className: "px-4 pb-4 pt-2", children: [
            /* @__PURE__ */ o("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full", children: [
              /* @__PURE__ */ e(r, { variant: "outline", ...t.secondary }),
              /* @__PURE__ */ e(
                r,
                {
                  ...t.primary,
                  variant: t.primary.variant || "default"
                }
              )
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full", children: [
              /* @__PURE__ */ e(r, { variant: "outline", ...t.secondary, size: "lg" }),
              /* @__PURE__ */ e(
                r,
                {
                  ...t.primary,
                  variant: t.primary.variant || "default",
                  size: "lg"
                }
              )
            ] })
          ] })
        ] })
      }
    );
  }
);
s.displayName = "Dialog";
const E = D(
  y(
    { name: "Dialog", type: "info" },
    v("Dialog", s)
  )
);
export {
  E as Dialog,
  s as DialogInner
};
