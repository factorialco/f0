import { backgroundVariants as m } from "./background.js";
import { borderVariants as e } from "./border.js";
import { dimensionVariants as p } from "./dimensions.js";
import { displayVariants as f } from "./display.js";
import { dividerVariants as c } from "./divider.js";
import { flexVariants as l } from "./flex.js";
import { gridVariants as V } from "./grid.js";
import { insetVariants as d } from "./inset.js";
import { marginVariants as u } from "./margin.js";
import { overflowVariants as v } from "./overflow.js";
import { paddingVariants as g } from "./padding.js";
import { zIndexVariants as b } from "./zIndex.js";
const x = {
  ...f,
  ...d,
  ...g,
  ...u,
  ...l,
  ...V,
  ...p,
  ...m,
  ...e,
  ...v,
  ...c,
  ...b
};
function j(i, o) {
  return o.split(" ").map((r) => `${i}:${r}`).join(" ");
}
function q(i, o) {
  const r = [];
  for (const [s, n] of Object.entries(o)) {
    if (n == null) continue;
    const t = x[s];
    if (!t) continue;
    const a = t[String(n)];
    a && r.push(j(i, a));
  }
  return r.join(" ");
}
export {
  q as resolveResponsiveClasses
};
