import { jsx as i } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import p from "../../../icons/ai/One.js";
import { ButtonInternal as m } from "../../../components/F0Button/internal.js";
const c = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji"
], l = s((o, t) => {
  const r = c.reduce((e, n) => {
    const { [n]: u, ...a } = e;
    return a;
  }, o);
  return /* @__PURE__ */ i(
    m,
    {
      ...r,
      variant: "ai",
      ref: t,
      iconRotate: o.icon == p
    }
  );
});
l.displayName = "AIButton";
export {
  l as AIButton
};
