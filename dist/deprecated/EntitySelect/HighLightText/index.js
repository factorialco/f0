import { jsx as i } from "react/jsx-runtime";
import { cn as l } from "../../../lib/utils.js";
const c = ({
  text: n,
  search: e,
  searchKeys: t = [],
  semiBold: s = !1
}) => {
  if (!e)
    return /* @__PURE__ */ i("span", { className: l("line-clamp-1", s ? "font-semibold" : ""), children: n });
  if (n.toLowerCase().indexOf(e.toLowerCase()) === -1)
    if (t.find(
      (o) => o.toLowerCase().indexOf(e.toLowerCase().trim()) >= 0
    ))
      e = n.split(" ")[0];
    else
      return /* @__PURE__ */ i("span", { className: l("line-clamp-1", s ? "font-semibold" : ""), children: n });
  const a = new RegExp(`(${e})`, "gi"), r = n.split(a);
  return /* @__PURE__ */ i("span", { className: l("line-clamp-1", s ? "font-semibold" : ""), children: r.map(
    (o, m) => o.toLowerCase() === e.toLowerCase() ? /* @__PURE__ */ i(
      "span",
      {
        className: "truncate font-medium",
        style: {
          fontWeight: "bold"
        },
        children: o
      },
      m
    ) : o
  ) });
};
export {
  c as HighlightText
};
