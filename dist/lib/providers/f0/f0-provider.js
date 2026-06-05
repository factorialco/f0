import { jsx as r } from "react/jsx-runtime";
import { useContext as p, createContext as m, useRef as P, useState as h } from "react";
import { useIsomorphicLayoutEffect as C } from "../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { FormCardValueFormatterProvider as x } from "../../../sds/ai/F0AiChat/providers/FormCardValueFormatterProvider.js";
import { ImageProvider as F } from "../../imageHandler.js";
import { LinkProvider as y } from "../../linkHandler.js";
import { PrivacyModeProvider as g } from "../../privacyMode.js";
import { cn as L } from "../../utils.js";
import { XRayProvider as M } from "../../xray.js";
import { DataCollectionStorageProvider as b } from "../datacollection/DataCollectionStorageProvider.js";
import { UserPlatformProvider as E } from "../user-platafform/UserPlatformProvider.js";
import { L10nProvider as I } from "../l10n/l10n-provider.js";
import { I18nProvider as k } from "../i18n/i18n-provider.js";
import { MotionConfig as D } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/MotionConfig/index.js";
const R = m(
  null
), S = ({ children: o, fullScreen: t = !0 }) => {
  const e = P(null), [i, n] = h(e.current);
  return C(() => {
    n(e.current);
  }, []), /* @__PURE__ */ r(R.Provider, { value: { element: i }, children: /* @__PURE__ */ r(
    "div",
    {
      ref: e,
      id: "f0-layout",
      className: L({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: o
    }
  ) });
}, j = ({
  children: o
}) => /* @__PURE__ */ r(D, { reducedMotion: "user", children: o }), d = m(
  void 0
), Q = () => p(d), T = ({
  children: o,
  layout: t,
  link: e,
  privacyModeInitiallyEnabled: i,
  image: n,
  i18n: l,
  l10n: c,
  isDev: a = !1,
  dataCollectionStorageHandler: f,
  showExperimentalWarnings: s = !1,
  renderDataTestIdAttribute: u = !1,
  formComponent: v
}) => /* @__PURE__ */ r(j, { children: /* @__PURE__ */ r(
  E,
  {
    isDev: a,
    showExperimentalWarnings: s,
    renderDataTestIdAttribute: u,
    children: /* @__PURE__ */ r(I, { ...c, children: /* @__PURE__ */ r(k, { ...l, children: /* @__PURE__ */ r(y, { ...e, children: /* @__PURE__ */ r(S, { ...t, children: /* @__PURE__ */ r(M, { children: /* @__PURE__ */ r(
      g,
      {
        initiallyEnabled: i,
        children: /* @__PURE__ */ r(F, { ...n, children: /* @__PURE__ */ r(
          b,
          {
            handler: f,
            children: /* @__PURE__ */ r(d.Provider, { value: v, children: /* @__PURE__ */ r(x, { children: o }) })
          }
        ) })
      }
    ) }) }) }) }) })
  }
) });
export {
  T as F0Provider,
  S as LayoutProvider,
  Q as useFormComponent
};
