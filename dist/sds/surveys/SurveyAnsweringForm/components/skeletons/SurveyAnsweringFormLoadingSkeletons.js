import { jsx as e, jsxs as s, Fragment as n } from "react/jsx-runtime";
import { Skeleton as l } from "../../../../../ui/skeleton.js";
function t({
  titleWidth: i,
  descriptionWidth: a,
  answer: d
}) {
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4", children: [
    /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ e(l, { className: "h-5 rounded-sm", style: { width: i } }),
      a && /* @__PURE__ */ e(
        l,
        {
          className: "h-4 rounded-sm",
          style: { width: a }
        }
      )
    ] }),
    d
  ] });
}
const r = /* @__PURE__ */ e(l, { className: "h-10 w-full rounded-sm" }), o = /* @__PURE__ */ e(l, { className: "h-24 w-full rounded-sm" }), m = /* @__PURE__ */ e(l, { className: "h-10 w-56 max-w-full rounded-sm" });
function h() {
  return /* @__PURE__ */ e("div", { className: "grid grid-cols-5 gap-2 sm:max-w-80", children: Array.from({ length: 5 }).map((i, a) => /* @__PURE__ */ e(l, { className: "h-9 rounded-sm" }, a)) });
}
function c({ count: i }) {
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: Array.from({ length: i }).map((a, d) => /* @__PURE__ */ e(
    l,
    {
      className: "h-7 w-56 max-w-full rounded-sm",
      style: { width: `${Math.max(52, 76 - d * 7)}%` }
    },
    d
  )) });
}
function u() {
  return /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: Array.from({ length: 5 }).map((i, a) => /* @__PURE__ */ e(
    l,
    {
      className: "h-8 rounded-sm",
      style: { width: `${18 + a * 3}%` }
    },
    a
  )) });
}
function w() {
  return /* @__PURE__ */ e(
    "div",
    {
      className: "flex w-full flex-col gap-10",
      "data-testid": "survey-answering-form-loading-all-questions",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [0, 1].map((i) => /* @__PURE__ */ s("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ e(l, { className: "h-6 w-56 rounded-sm" }),
          /* @__PURE__ */ e(l, { className: "h-4 w-80 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: i === 0 ? /* @__PURE__ */ s(n, { children: [
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "65%",
              descriptionWidth: "42%",
              answer: r
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "70%",
              descriptionWidth: "55%",
              answer: o
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "58%",
              descriptionWidth: "38%",
              answer: /* @__PURE__ */ e(h, {})
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "62%",
              descriptionWidth: "46%",
              answer: /* @__PURE__ */ e(c, { count: 4 })
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "54%",
              descriptionWidth: "44%",
              answer: r
            }
          )
        ] }) : /* @__PURE__ */ s(n, { children: [
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "60%",
              descriptionWidth: "50%",
              answer: m
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "66%",
              descriptionWidth: "45%",
              answer: r
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "57%",
              descriptionWidth: "48%",
              answer: /* @__PURE__ */ e(u, {})
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "64%",
              descriptionWidth: "36%",
              answer: /* @__PURE__ */ e(c, { count: 3 })
            }
          ),
          /* @__PURE__ */ e(
            t,
            {
              titleWidth: "52%",
              descriptionWidth: "40%",
              answer: o
            }
          )
        ] }) })
      ] }, i))
    }
  );
}
function x() {
  return /* @__PURE__ */ s(
    "div",
    {
      className: "flex w-full flex-col gap-6",
      "data-testid": "survey-answering-form-loading-stepped",
      "aria-busy": "true",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ s("div", { className: "flex flex-col gap-2 px-5", children: [
          /* @__PURE__ */ e(l, { className: "h-6 w-52 rounded-sm" }),
          /* @__PURE__ */ e(l, { className: "h-4 w-72 max-w-full rounded-sm" })
        ] }),
        /* @__PURE__ */ e(
          t,
          {
            titleWidth: "74%",
            descriptionWidth: "50%",
            answer: r
          }
        )
      ]
    }
  );
}
export {
  w as SurveyAllQuestionsLoadingSkeleton,
  x as SurveySteppedLoadingSkeleton
};
