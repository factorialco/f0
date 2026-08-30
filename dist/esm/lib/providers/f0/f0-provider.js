import { XRayProvider as e } from "../../xray.js";
import { UserPlatformProvider as t } from "../user-platafform/UserPlatformProvider.js";
import { cn as n } from "../../utils.js";
import { I18nProvider as r } from "../i18n/i18n-provider.js";
import { LinkProvider as i } from "../../linkHandler.js";
import { ImageProvider as a } from "../../imageHandler.js";
import { PrivacyModeProvider as o } from "../../privacyMode.js";
import { L10nProvider as s } from "../l10n/l10n-provider.js";
import { DataCollectionStorageProvider as c } from "../datacollection/DataCollectionStorageProvider.js";
import { DialogsAlikeLayoutProvider as l } from "../dialogs-alike/DialogsAlikeLayoutProvider.js";
import { FormOverlaysProvider as u } from "../form-overlays/FormOverlaysProvider.js";
import { FormCardValueFormatterProvider as d } from "../../../kits/ai/F0AiChat/providers/FormCardValueFormatterProvider.js";
import { ToastProvider as f } from "../../../hooks/toast/ToastProvider.js";
import { CoachmarkProvider as p } from "../../../experimental/Overlays/F0Coachmark/CoachmarkProvider.js";
import { createContext as m, useContext as h, useRef as g, useState as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { MotionConfig as b } from "motion/react";
import { useIsomorphicLayoutEffect as x } from "usehooks-ts";
//#region src/lib/providers/f0/f0-provider.tsx
var S = m(null), C = ({ children: e, fullScreen: t = !0 }) => {
	let r = g(null), [i, a] = _(r.current);
	return x(() => {
		a(r.current);
	}, []), /* @__PURE__ */ v(S.Provider, {
		value: { element: i },
		children: /* @__PURE__ */ y("div", {
			ref: r,
			id: "f0-layout",
			className: n({ "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t }),
			children: [e, /* @__PURE__ */ v("div", {
				id: "f0-overlay-root",
				className: "contents"
			})]
		})
	});
}, w = ({ children: e }) => /* @__PURE__ */ v(b, {
	reducedMotion: "user",
	children: e
}), T = m(void 0), E = () => h(T), D = ({ children: n, layout: m, link: h, privacyModeInitiallyEnabled: g, image: _, i18n: y, l10n: b, hourCycle: x, isDev: S = !1, dataCollectionStorageHandler: E, showExperimentalWarnings: D = !1, renderDataTestIdAttribute: O = !1, formComponent: k }) => /* @__PURE__ */ v(w, { children: /* @__PURE__ */ v(t, {
	isDev: S,
	showExperimentalWarnings: D,
	renderDataTestIdAttribute: O,
	hourCycle: x,
	children: /* @__PURE__ */ v(s, {
		...b,
		children: /* @__PURE__ */ v(r, {
			...y,
			children: /* @__PURE__ */ v(i, {
				...h,
				children: /* @__PURE__ */ v(C, {
					...m,
					children: /* @__PURE__ */ v(e, { children: /* @__PURE__ */ v(o, {
						initiallyEnabled: g,
						children: /* @__PURE__ */ v(a, {
							..._,
							children: /* @__PURE__ */ v(c, {
								handler: E,
								children: /* @__PURE__ */ v(l, { children: /* @__PURE__ */ v(f, {
									portalTargets: {
										mobile: "#f0-overlay-root",
										desktop: "#f0-overlay-root"
									},
									children: /* @__PURE__ */ v(u, { children: /* @__PURE__ */ v(T.Provider, {
										value: k,
										children: /* @__PURE__ */ v(d, { children: /* @__PURE__ */ v(p, { children: n }) })
									}) })
								}) })
							})
						})
					}) })
				})
			})
		})
	})
}) });
//#endregion
export { D as F0Provider, C as LayoutProvider, E as useFormComponent };
