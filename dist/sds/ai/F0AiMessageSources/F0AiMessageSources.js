import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { F0Icon as s } from "../../../components/F0Icon/index.js";
import * as c from "../../../icons/app/index.js";
import { Action as f } from "../../../ui/Action/Action.js";
import { CollapsibleMessage as d } from "./components/CollapsibleMessage.js";
import p from "../../../icons/app/Search.js";
import u from "../../../icons/app/ExternalLink.js";
import { useI18n as g } from "../../../lib/providers/i18n/i18n-provider.js";
const x = (e) => c[e] ?? u, h = ({ iconName: e }) => e ? /* @__PURE__ */ t("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ t(s, { icon: x(e), size: "md", color: "default" }) }) : null;
function b({
  sources: e,
  title: o
}) {
  const l = g();
  if (!e || e.length === 0 || !Array.isArray(e))
    return null;
  const a = o ?? l.ai.resourcesGroupTitle;
  return /* @__PURE__ */ t(d, { icon: p, title: a, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: e.map((r, n) => {
    const i = /* @__PURE__ */ t(h, { iconName: r.icon });
    return r.link ? /* @__PURE__ */ t(
      f,
      {
        "aria-label": r.title,
        href: r.link,
        size: "md",
        target: r.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: i,
        children: /* @__PURE__ */ t("div", { className: "flex w-full items-start", children: r.title })
      },
      n
    ) : /* @__PURE__ */ m(
      "div",
      {
        className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
        children: [
          i,
          r.title
        ]
      },
      n
    );
  }) }) });
}
b.displayName = "F0AiMessageSources";
export {
  b as F0AiMessageSources
};
