import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { F0AvatarAlert as n } from "../avatars/F0AvatarAlert/index.js";
import { F0AvatarEmoji as i } from "../avatars/F0AvatarEmoji/index.js";
import { withDataTestId as p } from "../../lib/data-testid/index.js";
import { UpsellingButton as u } from "../../sds/UpsellingKit/UpsellingButton/index.js";
import { F0Button as c } from "../F0Button/F0Button.js";
function d({
  title: a,
  description: s,
  variant: t = "default",
  emoji: f,
  actions: r,
  ...o
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: "flex flex-col items-center justify-center gap-5 p-8",
      ...o,
      children: [
        t === "default" && /* @__PURE__ */ l(i, { emoji: f, size: "lg" }),
        t !== "default" && /* @__PURE__ */ l(n, { type: t, size: "lg" }),
        /* @__PURE__ */ m("div", { className: "flex flex-col items-center justify-center gap-0.5", children: [
          /* @__PURE__ */ l("p", { className: "text-center text-lg font-medium text-f1-foreground", children: a }),
          s && /* @__PURE__ */ l("p", { className: "max-w-96 text-center text-f1-foreground-secondary", children: s })
        ] }),
        r && /* @__PURE__ */ l("div", { className: "flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full", children: r.map((e) => e.type === "upsell" ? /* @__PURE__ */ l(
          u,
          {
            label: e.label,
            onRequest: () => Promise.resolve(e.onClick()),
            errorMessage: e.errorMessage,
            successMessage: e.successMessage,
            loadingState: e.loadingState,
            nextSteps: e.nextSteps,
            closeLabel: e.closeLabel
          },
          e.label
        ) : /* @__PURE__ */ l(
          c,
          {
            label: e.label,
            variant: e.variant,
            onClick: e.onClick,
            icon: e.icon
          },
          e.label
        )) })
      ]
    }
  );
}
const j = p(d);
export {
  j as OneEmptyState
};
