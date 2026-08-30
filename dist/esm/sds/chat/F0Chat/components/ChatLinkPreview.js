import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useF0ChatEmit as n } from "../providers/F0ChatProvider.js";
import { ClampText as r } from "./ClampText.js";
import { FadeInImage as i } from "./FadeInImage.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatLinkPreview.tsx
var s = (e) => {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}, c = (n, r, i, a) => e("flex w-full flex-col overflow-hidden rounded-xl text-left no-underline", "bg-f1-background-secondary", "transition-shadow hover:ring-1 hover:ring-inset hover:ring-f1-border-secondary", t("focus-visible:ring-inset"), !i && "rounded-t-sm", !a && "rounded-b-sm", i && !r && (n ? "rounded-tr-xs" : "rounded-tl-xs")), l = ({ preview: t, compact: n }) => /* @__PURE__ */ o("div", {
	className: "flex min-w-0 flex-col gap-0.5 p-2.5",
	children: [
		t.title && /* @__PURE__ */ a(r, {
			className: "text-base font-medium text-f1-foreground",
			children: t.title
		}),
		t.description && /* @__PURE__ */ a("span", {
			className: e("text-sm text-f1-foreground-secondary", n ? "line-clamp-1" : "line-clamp-2"),
			children: t.description
		}),
		/* @__PURE__ */ a(r, {
			className: "text-sm text-f1-foreground",
			children: s(t.url)
		})
	]
}), u = ({ previews: e, isMine: t = !1, isFirstOfRun: r = !0 }) => {
	let s = n();
	if (e.length === 0) return null;
	let u = e.length > 1;
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col gap-1 p-1 pb-0",
		children: e.map((n, d) => /* @__PURE__ */ o("a", {
			href: n.url,
			onClick: () => s.onLinkPreviewClicked(),
			target: "_blank",
			rel: "noopener noreferrer",
			className: c(t, r, d === 0, d === e.length - 1),
			children: [!u && n.imageUrl && /* @__PURE__ */ a(i, {
				src: n.imageUrl,
				alt: "",
				className: "h-40 w-full bg-f1-background-secondary object-cover"
			}), /* @__PURE__ */ a(l, {
				preview: n,
				compact: u
			})]
		}, `${n.url}-${d}`))
	});
};
//#endregion
export { u as ChatLinkPreview };
