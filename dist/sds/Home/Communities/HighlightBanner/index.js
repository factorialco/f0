import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { F0AvatarModule as o } from "../../../../components/avatars/F0AvatarModule/index.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
const f = ({
  title: l,
  subtitle: s,
  buttonLabel: t,
  onClick: i
}) => /* @__PURE__ */ r("div", { className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4", children: [
  /* @__PURE__ */ r("div", { className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ e(o, { module: "kudos", size: "lg" }),
    /* @__PURE__ */ r("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground", children: l }),
      /* @__PURE__ */ e("span", { className: "text-f1-foreground-secondary", children: s })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "w-full sm:w-fit [&>div]:w-full", children: /* @__PURE__ */ e(n, { label: t, variant: "outline", onClick: i }) })
] });
export {
  f as HighlightBanner
};
