import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { cva as p } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0AvatarPerson as c } from "../../../components/avatars/F0AvatarPerson/index.js";
import { F0AvatarPulse as d } from "../../../components/avatars/F0AvatarPulse/F0AvatarPulse.js";
import { OneSwitch as x } from "../../../experimental/AiPromotionChat/OneSwitch.js";
import g from "../../../icons/app/Menu.js";
import { withDataTestId as v } from "../../../lib/data-testid/index.js";
import { experimentalComponent as u } from "../../../lib/experimental.js";
import { cn as a } from "../../../lib/utils.js";
import { useSidebar as N } from "../../../patterns/ApplicationFrame/FrameProvider.js";
import { F0OneSwitch as y } from "../../ai/F0OneSwitch/F0OneSwitch.js";
import { F0Button as b } from "../../../components/F0Button/F0Button.js";
const w = p({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
    }
  },
  defaultVariants: {
    period: "morning"
  }
});
function r({
  children: l,
  header: e,
  period: m,
  embedded: n = !1
}) {
  const { sidebarState: s, toggleSidebar: f, isSmallScreen: o } = N();
  return /* @__PURE__ */ i(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${n ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: w({ period: m }) }),
        e && /* @__PURE__ */ i("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ i("div", { className: "@5xl:px-page flex flex-row items-center gap-2 px-5 py-4", children: [
            (o || s === "hidden") && /* @__PURE__ */ t(
              b,
              {
                variant: "ghost",
                onClick: () => f(),
                label: "Open main menu",
                icon: g,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ i(
              "div",
              {
                className: a(
                  "flex flex-row items-center",
                  o ? "gap-1.5" : "gap-3"
                ),
                children: [
                  e?.onPulseClick ? /* @__PURE__ */ t(
                    d,
                    {
                      src: e.employeeAvatar,
                      firstName: e.employeeFirstName,
                      lastName: e.employeeLastName,
                      pulse: e.pulse,
                      onPulseClick: e.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    c,
                    {
                      src: e.employeeAvatar,
                      firstName: e.employeeFirstName,
                      lastName: e.employeeLastName,
                      size: o ? "small" : e.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: a(
                          o ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: e.title
                      }
                    ),
                    e.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: a(
                          o ? "text-md" : "text-lg",
                          "text-f1-foreground-secondary"
                        ),
                        children: e.description
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ i("div", { children: [
            /* @__PURE__ */ t(y, {}),
            /* @__PURE__ */ t(x, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: a(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              o && "-mt-3"
            ),
            children: l
          }
        )
      ]
    }
  );
}
r.displayName = "DaytimePage";
const V = v(
  u("DaytimePage", r)
);
export {
  V as DaytimePage
};
