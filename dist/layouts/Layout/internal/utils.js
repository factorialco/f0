import { Children as a, isValidElement as n } from "react";
const i = (o) => !n(o) || !o.type || typeof o.type == "string" || typeof o.type == "symbol" ? !1 : "__isPageLayoutBlock" in o.type, y = (o) => !n(o) || !o.type || typeof o.type == "string" || typeof o.type == "symbol" ? !1 : "__isPageLayoutGroup" in o.type, f = (o, r, e) => {
  const s = a.toArray(r);
  for (const t of s)
    e.includes("block") && i(t) || e.includes("group") && y(t) || console.warn(
      `${o}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      t
    );
};
export {
  i as isPageLayoutBlockComponent,
  y as isPageLayoutGroupComponent,
  f as validLayoutChildrenGuard
};
