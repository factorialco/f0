import { jsxs as p, jsx as o } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { experimentalComponent as f } from "../../../lib/experimental.js";
import { cn as r } from "../../../lib/utils.js";
import { TagListItem as n } from "./items/TagListItem.js";
import { RawTagItem as l } from "./items/RawTagItem.js";
import { StatusTagItem as x } from "./items/StatusTagItem.js";
import { BalanceTagItem as c } from "./items/BalanceTagItem.js";
import { AlertTagItem as I } from "./items/AlertTagItem.js";
import { DotTagItem as g } from "./items/DotTagItem.js";
import { TeamItem as d } from "./items/TeamItem.js";
import { PersonItem as T } from "./items/PersonItem.js";
import { CompanyItem as w } from "./items/CompanyItem.js";
import { Item as D } from "./items/Item.js";
const e = s(
  ({ children: a, label: m, isHorizontal: t = !1 }, i) => /* @__PURE__ */ p(
    "div",
    {
      className: r(
        t ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"
      ),
      children: [
        m && /* @__PURE__ */ o(
          "p",
          {
            className: r(
              "px-1.5 text-f1-foreground-secondary",
              t ? "mt-2 w-44 xs:px-0" : "mb-0.5"
            ),
            children: m
          }
        ),
        /* @__PURE__ */ o("ul", { className: "flex flex-col justify-center gap-0.5", ref: i, children: a })
      ]
    }
  )
);
e.displayName = "DataList";
const L = f("DataList", e), S = Object.assign(L, {
  Item: D,
  CompanyItem: w,
  PersonItem: T,
  TeamItem: d,
  DotTagItem: g,
  AlertTagItem: I,
  BalanceTagItem: c,
  StatusTagItem: x,
  RawTagItem: l,
  TagListItem: n
});
export {
  S as DataList
};
