import { cn as e, focusRing as t } from "../../lib/utils.js";
import { Skeleton as n } from "../../ui/skeleton.js";
import { OneEllipsis as r } from "../../lib/OneEllipsis/PlainEllipsis.js";
import { Image as i } from "../../lib/imageHandler.js";
import { Card as a, CardContent as o, CardHeader as s, CardSubtitle as c, CardTitle as l } from "../../ui/Card/Card.js";
import { F0Link as u } from "../F0Link/F0Link.js";
import { CardActions as d } from "./components/CardActions.js";
import { CardAlertWrapper as f, alertBorderColor as p } from "./components/CardAlert.js";
import { CardAvatar as m } from "./components/CardAvatar.js";
import { CardMetadata as h } from "./components/CardMetadata.js";
import { CardOptions as g } from "./components/CardOptions.js";
import { forwardRef as _, useRef as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/components/F0Card/CardInternal.tsx
var x = [
	"contain",
	"cover",
	"fit-width",
	"fit-height",
	"scale-down"
], S = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
], C = ["default", "video"], w = {
	xs: "h-24",
	sm: "h-32",
	md: "h-40",
	lg: "h-48",
	xl: "h-64"
}, T = {
	contain: "object-contain h-full w-full",
	cover: "object-cover h-full w-full",
	"fit-width": "w-full h-auto",
	"fit-height": "object-contain h-full w-auto",
	"scale-down": "object-scale-down h-full w-full"
};
function E(e) {
	return T[e];
}
var D = _(function({ compact: n = !1, avatar: _, image: x, imageFit: S = "fit-width", imageSize: C = "sm", imageAspectRatio: T = "default", blurredBackground: D = !0, title: O, description: k, metadata: A, children: j, link: M, primaryAction: N, secondaryActions: P, otherActions: F, bookmark: I, selectable: L = !1, subtleBorder: R = !1, selected: z = !1, onSelect: B, onClick: V, forceVerticalMetadata: H = !1, fullHeight: U = !1, disableOverlayLink: W = !1, alert: G }, K) {
	let q = v(null), J = !W && (!!M || !!V), Y = (e) => {
		q?.current?.click(), V?.(), e.preventDefault(), e.stopPropagation();
	}, X = /* @__PURE__ */ b(a, {
		className: e("group relative bg-f1-background shadow-none transition-all", R && "border-f1-border-secondary", n && "p-3", U && "h-full", (L || F && F.length > 0) && !z && "hover:border-f1-border", M && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", z && "border-f1-border-selected bg-f1-background-selected-secondary"),
		style: G && G.visible !== !1 && !z ? {
			borderColor: p[G.variant],
			borderWidth: "2px"
		} : void 0,
		onClick: V,
		"data-testid": "card",
		ref: G && G.visible !== !1 ? void 0 : K,
		children: [
			M && !W && /* @__PURE__ */ y(u, {
				href: M,
				variant: "unstyled",
				className: e("z-1 absolute inset-0 block rounded-xl", t()),
				"aria-label": O,
				ref: q,
				children: "\xA0"
			}),
			x && /* @__PURE__ */ b("div", {
				className: e("pointer-events-none relative -mx-3 -mt-3 mb-4 rounded-md", T === "video" ? "aspect-video" : w[C], n && "-mx-2 -mt-2 mb-3", S === "fit-height" && "flex items-center justify-center overflow-hidden", S === "fit-width" && "flex items-center justify-center overflow-hidden", S !== "fit-width" && S !== "fit-height" && "overflow-hidden"),
				children: [
					D && (S === "contain" || S === "fit-width" || S === "fit-height" || S === "scale-down") && /* @__PURE__ */ y("div", {
						className: "absolute inset-0 z-0 rounded-md",
						style: {
							backgroundImage: `url(${x})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							filter: "blur(20px)",
							opacity: .4,
							transform: "scale(1.1)"
						},
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ y(i, {
						src: x,
						alt: O,
						className: e(E(S))
					}),
					/* @__PURE__ */ y(g, {
						otherActions: F,
						selectable: L,
						selected: z,
						onSelect: B,
						bookmark: I,
						title: O,
						overlay: !0
					})
				]
			}),
			/* @__PURE__ */ b("div", {
				className: e("flex grow flex-col gap-2", J && "cursor-pointer"),
				...J ? { onClick: (e) => {
					e.target instanceof Element && e.target.closest("a[href], input, select, textarea, [aria-haspopup]:not([aria-haspopup=\"false\"])") || Y(e);
				} } : {},
				children: [
					/* @__PURE__ */ b("div", {
						className: "flex flex-row items-start justify-between gap-1",
						children: [/* @__PURE__ */ b(s, {
							...J ? {
								onClick: (e) => {
									Y(e);
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && Y(e);
								},
								role: "button",
								"aria-label": O
							} : {},
							className: e("relative flex-col gap-0 p-0", x && !n && "pt-3", n && "flex-row items-center gap-2"),
							children: [_ && /* @__PURE__ */ y(m, {
								avatar: _,
								overlay: !!x,
								compact: n
							}), /* @__PURE__ */ b("div", {
								className: e("flex flex-col gap-0"),
								children: [/* @__PURE__ */ y(l, {
									className: e("text-lg font-semibold text-f1-foreground", n && "line-clamp-1 text-base"),
									children: O
								}), k && /* @__PURE__ */ y(c, {
									className: e("text-base text-f1-foreground-secondary"),
									children: /* @__PURE__ */ y(r, {
										lines: n ? 2 : 3,
										children: k
									})
								})]
							})]
						}), !x && /* @__PURE__ */ y(g, {
							otherActions: F,
							selectable: L,
							selected: z,
							onSelect: B,
							bookmark: I,
							title: O
						})]
					}),
					A && /* @__PURE__ */ y("div", {
						className: e("relative z-10 flex flex-col gap-0.5", n && "gap-x-3 gap-y-0", H && "flex-col gap-y-0.5"),
						children: A.map((e, t) => /* @__PURE__ */ y(h, { metadata: e }, t))
					}),
					j && /* @__PURE__ */ y(o, {
						className: "pointer-events-none relative z-10 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_select]:pointer-events-auto [&_textarea]:pointer-events-auto [&_[role='button']]:pointer-events-auto [&_[tabindex]]:pointer-events-auto",
						onClick: (e) => e.stopPropagation(),
						children: j
					})
				]
			}),
			/* @__PURE__ */ y(d, {
				primaryAction: N,
				secondaryActions: P,
				compact: n
			})
		]
	});
	return G && G.visible !== !1 ? /* @__PURE__ */ y(f, {
		ref: K,
		alert: G,
		fullHeight: U,
		children: X
	}) : X;
}), O = ({ compact: t = !1 }) => /* @__PURE__ */ b(a, {
	className: e("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", t && "p-3"),
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ b(s, {
		className: e("flex flex-col gap-2.5 p-0", t && "flex-row items-center gap-2"),
		children: [/* @__PURE__ */ y(n, { className: e("h-10 w-10 rounded-full", t && "h-6 w-6") }), /* @__PURE__ */ b("div", {
			className: e("flex flex-col gap-0", t && "flex-row items-center gap-1.5"),
			children: [/* @__PURE__ */ y(l, {
				className: "flex h-6 items-center",
				children: /* @__PURE__ */ y(n, { className: e("h-4 w-20 rounded-md", t && "h-3") })
			}), /* @__PURE__ */ y(c, {
				className: "flex h-5 items-center",
				children: /* @__PURE__ */ y(n, { className: "h-3 w-12 rounded-md" })
			})]
		})]
	}), /* @__PURE__ */ y(o, {
		className: "flex flex-col gap-0",
		children: Array.from({ length: 3 }).map((e, t) => /* @__PURE__ */ b("div", {
			className: "flex h-6 items-center gap-1.5",
			children: [/* @__PURE__ */ y(n, { className: "h-4 w-4 rounded-full" }), /* @__PURE__ */ y(n, { className: "h-3 w-full max-w-20 rounded-md" })]
		}, t))
	})]
});
//#endregion
export { D as CardInternal, O as CardSkeleton, C as cardImageAspectRatios, x as cardImageFits, S as cardImageSizes };
