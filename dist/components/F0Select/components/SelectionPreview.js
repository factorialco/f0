import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { useRef as x, useEffect as h } from "react";
import { F0Avatar as b } from "../../avatars/F0Avatar/index.js";
import { F0Icon as f } from "../../F0Icon/index.js";
import w from "../../../icons/app/CrossedCircle.js";
import "../../../icons/app/Menu.js";
import { cn as N, focusRing as g } from "../../../lib/utils.js";
import { ScrollArea as y } from "../../../ui/scrollarea.js";
import { Spinner as S } from "../../../ui/Spinner/index.js";
import { useI18n as E } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as R } from "../../../lib/OneEllipsis/OneEllipsis.js";
const j = 10;
function I({
  item: r,
  onDeselect: l
}) {
  return /* @__PURE__ */ s("div", { className: "flex w-fit max-w-full min-w-0 items-center justify-between gap-1.5 rounded-md border border-solid border-f1-border-secondary p-1", children: [
    /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 items-center gap-1.5", children: [
      r.avatar && /* @__PURE__ */ e(b, { avatar: r.avatar, size: "xs" }),
      r.icon && /* @__PURE__ */ e(
        f,
        {
          icon: r.icon,
          size: "sm",
          className: "shrink-0 text-f1-icon"
        }
      ),
      /* @__PURE__ */ e(R, { className: "text-sm", children: r.label })
    ] }),
    /* @__PURE__ */ e(
      "button",
      {
        className: N(
          "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0",
          g()
        ),
        "aria-label": `Remove ${r.label}`,
        type: "button",
        tabIndex: 0,
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), l(String(r.value));
        },
        children: /* @__PURE__ */ e(f, { icon: w, color: "default", size: "md" })
      }
    )
  ] });
}
function D({
  items: r,
  onDeselect: l,
  allSelected: o,
  onLoadMore: i,
  isLoadingMore: a
}) {
  const d = E(), c = x(null), m = (o === !0 || o === "indeterminate") && !!i, p = r.length === 0, u = () => {
    m && !a && i?.();
  };
  return h(() => {
    const n = c.current;
    if (!n) return;
    const t = (v) => v.stopPropagation();
    return n.addEventListener("wheel", t), n.addEventListener("touchmove", t), () => {
      n.removeEventListener("wheel", t), n.removeEventListener("touchmove", t);
    };
  }, []), /* @__PURE__ */ e(
    "div",
    {
      ref: c,
      className: "flex w-48 shrink-0 flex-col overflow-hidden border-0 border-l border-solid border-f1-border-secondary",
      children: p ? /* @__PURE__ */ e("div", { className: "flex flex-1 items-center justify-center p-4", children: /* @__PURE__ */ e("span", { className: "text-sm text-f1-foreground-secondary", children: d.status.noItemsSelected }) }) : /* @__PURE__ */ e("div", { className: "flex min-h-0 flex-1 flex-col overflow-hidden", children: /* @__PURE__ */ e(
        y,
        {
          className: "flex h-full flex-col",
          onScrollBottom: u,
          scrollMargin: j,
          children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1 p-2", children: [
            r.map((n) => /* @__PURE__ */ e(
              I,
              {
                item: n,
                onDeselect: l
              },
              String(n.value)
            )),
            a && /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-2", children: /* @__PURE__ */ e(S, { size: "small" }) })
          ] })
        }
      ) })
    }
  );
}
export {
  D as SelectionPreview
};
