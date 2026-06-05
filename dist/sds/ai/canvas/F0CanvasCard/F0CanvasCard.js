import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { F0AvatarModule as u } from "../../../../components/avatars/F0AvatarModule/index.js";
import { cn as c } from "../../../../lib/utils.js";
import { F0AvatarFile as x } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { useI18n as b } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as m } from "../../../../components/F0Button/F0Button.js";
function C({
  avatar: l,
  title: f,
  description: s,
  isActive: r = !1,
  action: e,
  children: p
}) {
  const d = b(), i = e.type === "open", a = i ? r ? e.onClose : e.onOpen : void 0;
  return /* @__PURE__ */ n(
    "div",
    {
      className: c(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        i && "cursor-pointer",
        r ? "border-f1-border-hover" : "border-f1-border-secondary"
      ),
      onClick: a,
      children: [
        /* @__PURE__ */ n("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          l?.type === "module" && /* @__PURE__ */ o(u, { module: l.module, size: "lg" }),
          l?.type === "file" && /* @__PURE__ */ o(x, { file: l.file, size: "lg" }),
          /* @__PURE__ */ n("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o(t, { className: "text-lg font-semibold text-f1-foreground", children: f }),
            s && /* @__PURE__ */ o(t, { className: "text-base text-f1-foreground-secondary", children: s })
          ] }),
          e.type === "open" && e.showButton !== !1 && /* @__PURE__ */ o(
            m,
            {
              variant: "outline",
              size: "md",
              label: r ? d.actions.close : d.ai.reportCard.openButton,
              onClick: r ? e.onClose : e.onOpen
            }
          ),
          e.type === "custom" && /* @__PURE__ */ o(
            m,
            {
              variant: "outline",
              size: "md",
              icon: e.icon,
              label: e.label,
              hideLabel: e.hideLabel,
              onClick: e.onClick
            }
          )
        ] }),
        p
      ]
    }
  );
}
C.displayName = "F0CanvasCard";
export {
  C as F0CanvasCard
};
