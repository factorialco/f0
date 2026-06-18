import { jsxs as a, jsx as n } from "react/jsx-runtime";
import { F as r } from "../index-DyKGEeWw.js";
function g(e) {
  return /* @__PURE__ */ a(
    r,
    {
      display: "flex",
      flexDirection: "column",
      gap: "lg",
      padding: "lg",
      background: "secondary",
      borderRadius: "lg",
      children: [
        /* @__PURE__ */ n("p", { className: "m-0 text-sm font-semibold text-f1-foreground", children: e.question }),
        e.type === "rating" ? /* @__PURE__ */ n(
          s,
          {
            steps: e.steps ?? 5,
            minLabel: e.minLabel,
            maxLabel: e.maxLabel
          }
        ) : /* @__PURE__ */ n(o, { options: e.options })
      ]
    }
  );
}
function s({
  steps: e,
  minLabel: i,
  maxLabel: d
}) {
  const t = String(e);
  return /* @__PURE__ */ a(r, { display: "flex", flexDirection: "column", gap: "sm", children: [
    /* @__PURE__ */ n(r, { display: "grid", columns: t, gap: "sm", children: Array.from({ length: e }).map((c, l) => /* @__PURE__ */ n(
      r,
      {
        height: "8",
        border: "default",
        borderRadius: "md",
        background: "primary"
      },
      l
    )) }),
    (i || d) && /* @__PURE__ */ a(r, { display: "flex", justifyContent: "between", alignItems: "center", children: [
      /* @__PURE__ */ n("span", { className: "text-xs text-f1-foreground-secondary", children: i }),
      /* @__PURE__ */ n("span", { className: "text-xs text-f1-foreground-secondary", children: d })
    ] })
  ] });
}
function o({ options: e }) {
  return /* @__PURE__ */ n(r, { display: "flex", flexDirection: "column", gap: "md", children: e.map((i) => /* @__PURE__ */ a(
    r,
    {
      display: "flex",
      alignItems: "center",
      gap: "md",
      paddingX: "md",
      paddingY: "sm",
      border: "default",
      borderRadius: "md",
      background: "primary",
      children: [
        /* @__PURE__ */ n(
          r,
          {
            shrink: !1,
            width: "4",
            height: "4",
            border: "thick",
            borderRadius: "full"
          }
        ),
        /* @__PURE__ */ n("span", { className: "text-sm text-f1-foreground-secondary", children: i })
      ]
    },
    i
  )) });
}
export {
  g as SampleQuestion
};
