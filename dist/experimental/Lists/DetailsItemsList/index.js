import { jsx as t, jsxs as a } from "react/jsx-runtime";
import f, { forwardRef as p } from "react";
import { DataTestIdWrapper as u } from "../../../lib/data-testid/index.js";
import { experimentalComponent as x } from "../../../lib/experimental.js";
import { cn as h } from "../../../lib/utils.js";
import { DetailsItem as g } from "../DetailsItem/index.js";
import { useI18n as b } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as I } from "../../../components/F0Button/F0Button.js";
const L = ({ onClick: s }) => {
  const o = b();
  return /* @__PURE__ */ t(
    I,
    {
      label: o.actions.seeMore,
      onClick: s,
      variant: "neutral"
    }
  );
}, v = p(
  function({
    title: o,
    tableView: r = !1,
    details: n,
    dataTestId: l,
    showSeeMore: i,
    onClickSeeMore: c
  }, m) {
    return /* @__PURE__ */ t(u, { dataTestId: l, children: /* @__PURE__ */ a("div", { ref: m, className: "flex flex-col gap-4", children: [
      !!o && /* @__PURE__ */ t("p", { className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary", children: o.toLocaleUpperCase() }),
      /* @__PURE__ */ t(
        "div",
        {
          className: h(
            "flex flex-col",
            r ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"
          ),
          children: n?.map((e, d) => /* @__PURE__ */ a(f.Fragment, { children: [
            /* @__PURE__ */ t(
              g,
              {
                title: e.title,
                content: e.content,
                spacingAtTheBottom: e.spacingAtTheBottom,
                isHorizontal: r,
                verticalLayout: e.verticalLayout
              },
              e.title
            ),
            r && d !== n.length - 1 && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
          ] }, e.title))
        }
      ),
      i && /* @__PURE__ */ t(L, { onClick: c })
    ] }) });
  }
), A = x(
  "DetailsItemsList",
  v
);
export {
  A as DetailsItemsList
};
