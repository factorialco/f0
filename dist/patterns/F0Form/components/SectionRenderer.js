import { jsxs as d, jsx as r } from "react/jsx-runtime";
import w from "react";
import { useFormContext as v } from "../../../node_modules/.pnpm/react-hook-form@7.54.2_react@18.3.1/node_modules/react-hook-form/dist/index.esm.js";
import { SectionHeader as C } from "../../SectionHeader/index.js";
import { cn as S } from "../../../lib/utils.js";
import { FIELD_GAP as I } from "../constants.js";
import { useF0FormContext as R, generateAnchorId as g } from "../context.js";
import { CardSelectDepsContext as D } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as l } from "../fields/FieldRenderer.js";
import { evaluateRenderIf as b } from "../fields/utils.js";
import { groupContiguousSwitches as y, buildCardSelectContentMap as N } from "../groupingUtils.js";
import { RowRenderer as j } from "./RowRenderer.js";
import { SwitchGroupRenderer as G } from "./SwitchGroupRenderer.js";
import { F0Button as _ } from "../../../components/F0Button/F0Button.js";
function T({ section: i }) {
  const c = v().watch(), { formName: f } = R(), { title: s, description: p, withInset: m, renderIf: n, action: o, fields: a } = i.section, t = i.id;
  if (n && !b(n, c))
    return null;
  const u = y(a), h = g(f, t);
  return /* @__PURE__ */ d("section", { id: h, className: "flex scroll-mt-4 flex-col", children: [
    /* @__PURE__ */ d(
      "div",
      {
        className: S(
          "flex items-start justify-between py-5",
          m && "px-5",
          "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
        ),
        children: [
          /* @__PURE__ */ r(C, { title: s, description: p ?? "" }),
          o && /* @__PURE__ */ r(
            _,
            {
              label: o.label,
              icon: o.icon,
              onClick: o.onClick,
              href: o.href,
              variant: "outline",
              size: "md"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r("div", { className: `flex flex-col ${I}`, children: u.map((e, x) => {
      if (e.type === "switchGroup")
        return /* @__PURE__ */ r(
          G,
          {
            fields: e.fields,
            dependentFields: e.dependentFields,
            cardSelectDependentFields: e.cardSelectDependentFields,
            sectionId: t
          },
          `switch-group-${x}`
        );
      if (e.type === "field") {
        const F = e.cardSelectDependentFields ? /* @__PURE__ */ r(
          D.Provider,
          {
            value: N(
              e.cardSelectDependentFields,
              t
            ),
            children: /* @__PURE__ */ r(
              l,
              {
                field: e.item.field,
                sectionId: t
              },
              e.item.field.id
            )
          }
        ) : /* @__PURE__ */ r(
          l,
          {
            field: e.item.field,
            sectionId: t
          },
          e.item.field.id
        );
        return /* @__PURE__ */ r(w.Fragment, { children: F }, e.item.field.id);
      }
      return e.type === "row" ? /* @__PURE__ */ r(
        j,
        {
          row: e.item,
          sectionId: t
        },
        `row-${e.index}`
      ) : null;
    }) })
  ] });
}
export {
  T as SectionRenderer
};
