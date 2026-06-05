import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { F0Avatar as c } from "../../../../../../components/avatars/F0Avatar/index.js";
import { OneEllipsis as d } from "../../../../../../lib/OneEllipsis/OneEllipsis.js";
const o = ({ title: s, avatar: r, description: l }) => /* @__PURE__ */ m("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
  r && /* @__PURE__ */ e(c, { avatar: r, size: "md" }),
  /* @__PURE__ */ m("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ e("header", { children: /* @__PURE__ */ e("h3", { children: /* @__PURE__ */ e(d, { className: "text-base font-medium text-f1-foreground", children: s }) }) }),
    /* @__PURE__ */ e("aside", { children: l && l.length > 0 && /* @__PURE__ */ e("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1", children: l.map((n, a) => /* @__PURE__ */ m("div", { className: "flex min-w-0 gap-1", children: [
      /* @__PURE__ */ e(d, { children: n }),
      a < l.length - 1 && /* @__PURE__ */ e("span", { className: "hidden md:inline", children: " · " })
    ] }, a)) }) })
  ] })
] });
export {
  o as ItemTeaser
};
