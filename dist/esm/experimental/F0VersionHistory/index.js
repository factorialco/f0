"use client";
import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { ScrollArea as n } from "../../ui/scrollarea.js";
import { OneEllipsis as r } from "../../lib/OneEllipsis/OneEllipsis.js";
import { CurrentVersionIndicator as i } from "./CurrentVersionIndicator/index.js";
import { VersionItem as a } from "./VersionItem/index.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/experimental/F0VersionHistory/index.tsx
function c({ title: e, versions: t, currentVersion: c, activeVersionId: l }) {
	return /* @__PURE__ */ s("nav", {
		className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
		"aria-label": e,
		children: [/* @__PURE__ */ o(r, {
			tag: "h2",
			lines: 1,
			className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
			children: e
		}), /* @__PURE__ */ o(n, {
			className: "h-full flex-1",
			children: /* @__PURE__ */ s("div", {
				className: "flex flex-col gap-1",
				children: [c && /* @__PURE__ */ o(i, {
					title: c.title,
					onClick: c.onClick,
					isActive: l === "current"
				}), t.map((e) => /* @__PURE__ */ o(a, {
					author: e.author,
					timestamp: e.timestamp,
					onClick: e.onClick,
					isActive: l === e.id
				}, e.id))]
			})
		})]
	});
}
var l = e(t("F0VersionHistory", c));
//#endregion
export { l as F0VersionHistory };
