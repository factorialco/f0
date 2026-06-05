import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0Avatar as d } from "../../../../components/avatars/F0Avatar/index.js";
import { F0AvatarList as f } from "../../../../components/avatars/F0AvatarList/index.js";
import { getColor as s } from "../../../../kits/Charts/utils/colors.js";
import { F0Icon as x } from "../../../../components/F0Icon/index.js";
import { F0TagDot as p } from "../../../../components/tags/F0TagDot/index.js";
import { F0TagRaw as c } from "../../../../components/tags/F0TagRaw/index.js";
import { F0TagStatus as u } from "../../../../components/tags/F0TagStatus/index.js";
import g from "../../../../icons/app/AlertCircle.js";
import "../../../../icons/app/Menu.js";
import v from "../../../../icons/app/Warning.js";
import { cn as h } from "../../../../lib/utils.js";
import { Progress as w } from "../../../../ui/progress.js";
const N = {
  warning: {
    icon: v,
    iconColor: "warning",
    textColor: "text-f1-foreground-warning"
  },
  critical: {
    icon: g,
    iconColor: "critical",
    textColor: "text-f1-foreground-critical"
  }
};
function I({
  item: i,
  collapse: l = !1
}) {
  const { value: a } = i;
  switch (a.type) {
    case "text":
      return /* @__PURE__ */ e("span", { children: a.content });
    case "avatar":
      return /* @__PURE__ */ r("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ e(d, { avatar: a.variant, size: "xs" }),
        a.text && /* @__PURE__ */ e("span", { children: a.text })
      ] });
    case "status":
      return /* @__PURE__ */ e(u, { text: a.label, variant: a.variant });
    case "list":
      return /* @__PURE__ */ e(
        f,
        {
          type: a.variant,
          avatars: a.avatars,
          size: "xs",
          max: a.max ?? 3
        }
      );
    case "data-list":
      return l ? /* @__PURE__ */ r("div", { className: "flex items-center justify-center gap-1 font-medium", children: [
        a.data[0],
        a.data.length > 1 && /* @__PURE__ */ r("span", { className: "tabular-nums text-f1-foreground-secondary", children: [
          "+",
          a.data.length - 1
        ] })
      ] }) : /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: a.data.map((t) => /* @__PURE__ */ e("span", { children: t }, t)) });
    case "tag-list":
      return l ? /* @__PURE__ */ r("div", { className: "flex flex-wrap items-center justify-center gap-1 font-medium", children: [
        /* @__PURE__ */ e(c, { text: a.tags[0] }),
        a.tags.length > 1 && /* @__PURE__ */ r("span", { className: "tabular-nums text-f1-foreground-secondary", children: [
          "+",
          a.tags.length - 1
        ] })
      ] }) : /* @__PURE__ */ e(
        "div",
        {
          className: h(
            "flex flex-col gap-1 [&>div]:w-fit",
            a.tags.length > 1 && "-mt-[3px]"
          ),
          children: a.tags.map((t) => /* @__PURE__ */ e(c, { text: t }, t))
        }
      );
    case "dot-tag":
      return /* @__PURE__ */ e(p, { text: a.label, color: a.color });
    case "date": {
      if (a.icon === void 0)
        return /* @__PURE__ */ e("span", { children: a.formattedDate });
      const { icon: t, iconColor: o, textColor: n } = N[a.icon];
      return /* @__PURE__ */ r("div", { className: "flex items-center justify-center gap-0.5 font-medium", children: [
        /* @__PURE__ */ e(x, { icon: t, color: o }),
        /* @__PURE__ */ e("span", { className: n, children: a.formattedDate })
      ] });
    }
    case "progress-bar": {
      const t = a.color ? s(a.color) : s("categorical-1"), o = a.max && a.max > 0 ? a.max : 100, n = Math.min(Math.max(0, a.value), o), m = n / o * 100;
      return /* @__PURE__ */ r("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("div", { className: "min-w-16", children: /* @__PURE__ */ e(
          w,
          {
            color: t,
            value: m,
            max: 100,
            "aria-label": i.label,
            "aria-valuemin": 0,
            "aria-valuemax": o,
            "aria-valuenow": n,
            "aria-valuetext": a.label
          }
        ) }),
        a.label && /* @__PURE__ */ e("span", { className: "whitespace-nowrap text-sm font-medium", children: a.label })
      ] });
    }
  }
}
export {
  I as MetadataValue
};
