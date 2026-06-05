import { jsx as e, jsxs as N } from "react/jsx-runtime";
import g, { useState as T, useEffect as k } from "react";
import { ButtonInternal as y } from "../../../components/F0Button/internal.js";
import E from "../../../icons/app/EllipsisHorizontal.js";
import "../../../icons/app/Menu.js";
import { Link as L } from "../../../lib/linkHandler.js";
import { cn as u } from "../../../lib/utils.js";
import { DropdownMenu as O, DropdownMenuTrigger as b, DropdownMenuContent as j, DropdownMenuSeparator as R, DropdownMenuLabel as S, DropdownMenuItem as A } from "../../../ui/dropdown-menu.js";
import { DropdownItemContent as D } from "./DropdownItem.js";
import { useI18n as B } from "../../../lib/providers/i18n/i18n-provider.js";
const F = ({ item: o }) => {
  const {
    label: n,
    icon: f,
    avatar: m,
    description: t,
    href: s,
    critical: i,
    ...a
  } = o, r = u(
    "flex items-start gap-1.5 w-full",
    i && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ e(A, { asChild: !0, className: u(r, "cursor-pointer"), children: s ? /* @__PURE__ */ e(
    L,
    {
      href: s,
      className: u(
        r,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      ...a,
      children: /* @__PURE__ */ e(D, { item: o })
    }
  ) : /* @__PURE__ */ e("div", { ...a, className: r, children: /* @__PURE__ */ e(D, { item: o }) }) });
};
function V(o, n) {
  return o.type === "separator" ? /* @__PURE__ */ e(R, {}, n) : o.type === "label" ? /* @__PURE__ */ e(
    S,
    {
      className: "flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary",
      children: o.text
    },
    n
  ) : /* @__PURE__ */ e(
    F,
    {
      item: {
        ...o,
        onClick: () => {
          setTimeout(() => {
            o.onClick?.();
          }, 200);
        }
      }
    },
    n
  );
}
function X({
  items: o,
  icon: n = E,
  align: f = "start",
  size: m,
  children: t,
  open: s,
  onOpenChange: i,
  label: a,
  disabled: r,
  ...x
}) {
  const C = B(), [h, v] = T(!1), d = s !== void 0 && i !== void 0, p = d ? s : h, c = d ? i : v;
  k(() => {
    r && p && c(!1);
  }, [r, p, c]);
  const w = r ? !1 : p, I = (l) => {
    c(l);
  }, M = t ? g.isValidElement(t) ? g.cloneElement(
    t,
    {
      // Consumer-supplied values always win.
      disabled: t.props.disabled ?? r,
      "aria-disabled": t.props["aria-disabled"] ?? (r ? !0 : void 0)
    }
  ) : t : /* @__PURE__ */ e(
    y,
    {
      ...x,
      hideLabel: !a,
      icon: n,
      size: m,
      label: a ?? C.actions.toggleDropdownMenu,
      variant: "outline",
      pressed: w,
      compact: !a,
      noAutoTooltip: !0,
      noTitle: !0,
      disabled: r
    }
  );
  return /* @__PURE__ */ N(O, { open: w, onOpenChange: I, children: [
    /* @__PURE__ */ e(b, { asChild: !0, disabled: r, children: M }),
    /* @__PURE__ */ e(j, { align: f, children: o.map((l, _) => V(l, _)) })
  ] });
}
export {
  X as DropdownInternal
};
