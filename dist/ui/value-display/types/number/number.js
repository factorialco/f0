import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { cn as u } from "../../../../lib/utils.js";
import { tableDisplayClassNames as m } from "../../const.js";
import { resolveValue as c, isShowingPlaceholder as a } from "../../utils.js";
const p = (e, o) => {
  const s = c(e, "number"), r = a(e, "number"), t = {
    // defaults
    unitsPosition: "right",
    units: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: s
    }
  };
  return /* @__PURE__ */ l(
    "div",
    {
      className: u(
        "flex flex-1 items-center gap-1 text-f1-foreground",
        o.visualization === "table" && [
          "justify-end",
          m.text
        ],
        r && "text-f1-foreground-secondary"
      ),
      children: [
        t.unitsPosition === "left" && t.units && /* @__PURE__ */ i(n, { units: t.units }),
        t.decimalPlaces !== void 0 ? t.number?.toFixed(t.decimalPlaces) : t.number?.toString() ?? "",
        t.unitsPosition === "right" && t.units && /* @__PURE__ */ i(n, { units: t.units })
      ]
    }
  );
}, n = ({ units: e }) => /* @__PURE__ */ i("span", { children: e.toString() });
export {
  p as NumberCell
};
