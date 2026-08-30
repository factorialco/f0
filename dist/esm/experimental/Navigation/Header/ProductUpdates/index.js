import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/AlertCircle.js";
import r from "../../../../icons/app/ChevronRight.js";
import i from "../../../../icons/app/Cross.js";
import a from "../../../../icons/app/Megaphone.js";
import { Link as o } from "../../../../lib/linkHandler.js";
import { Skeleton as s } from "../../../../ui/skeleton.js";
import { ButtonInternal as c } from "../../../../components/F0Button/internal.js";
import { Carousel as l } from "../../Carousel/index.js";
import { F0Button as u } from "../../../../components/F0Button/F0Button.js";
import { DropdownMenu as d, DropdownMenuContent as f, DropdownMenuItem as p, DropdownMenuPortal as m, DropdownMenuSeparator as h, DropdownMenuTrigger as g } from "../../../../ui/dropdown-menu.js";
import { Image as _ } from "../../../../lib/imageHandler.js";
import { ProductCard as v } from "../../../../sds/UpsellingKit/ProductCard/index.js";
import { useCallback as y, useEffect as b, useState as x } from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
import * as T from "@radix-ui/react-dropdown-menu";
//#region src/experimental/Navigation/Header/ProductUpdates/index.tsx
var E = ({ currentModule: e, label: t, getUpdates: n, updatesPageUrl: r, emptyScreen: i, errorScreen: o, onOpenChange: s = () => {}, onHeaderClick: l = () => {}, onItemClick: u = () => {}, hasUnread: p = !1, crossSelling: h }) => {
	let [_, v] = x("idle"), [T, E] = x(null), [A, ...I] = T ?? [], [L, R] = x(!1);
	b(() => {
		E(null), v("idle");
	}, [e]);
	let z = y(async () => {
		try {
			v("fetching");
			let e = await n();
			v("idle"), E(e);
		} catch {
			v("error");
		}
	}, [n]);
	return /* @__PURE__ */ w(d, {
		open: L,
		onOpenChange: async (e) => {
			R(e), e && T === null && z(), s(e);
		},
		children: [/* @__PURE__ */ C(g, {
			asChild: !0,
			children: /* @__PURE__ */ C(c, {
				variant: "outline",
				icon: a,
				hideLabel: !0,
				label: t,
				pressed: L,
				append: p && /* @__PURE__ */ C(P, { className: "absolute -right-0.5 -top-[1px]" })
			})
		}), /* @__PURE__ */ C(m, { children: /* @__PURE__ */ w(f, {
			sideOffset: 8,
			collisionPadding: 20,
			align: "end",
			hideWhenDetached: !0,
			className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
			style: { maxHeight: "min(90vh, 760px)" },
			children: [
				/* @__PURE__ */ C(k, {
					title: t,
					url: r,
					onClick: l
				}),
				_ === "fetching" && /* @__PURE__ */ C(N, {}),
				/* @__PURE__ */ w("div", {
					className: "scrollbar-macos flex-1 overflow-y-auto",
					children: [
						_ === "idle" && T !== null && T.length === 0 && /* @__PURE__ */ C("div", {
							className: "p-2 pt-0",
							children: /* @__PURE__ */ C(j, {
								...i,
								buttonUrl: r
							})
						}),
						_ === "idle" && T !== null && T.length > 0 && /* @__PURE__ */ w("div", {
							className: "px-1",
							children: [/* @__PURE__ */ C(D, {
								...A,
								onClick: u
							}), T.length > 1 && /* @__PURE__ */ C(S, { children: /* @__PURE__ */ C("div", {
								className: "pb-1",
								children: I.map((e, t) => /* @__PURE__ */ C(O, {
									...e,
									onClick: u
								}, t))
							}) })]
						}),
						_ === "error" && /* @__PURE__ */ C("div", {
							className: "p-2 pt-0",
							children: /* @__PURE__ */ C(M, {
								...o,
								onClick: () => {
									z();
								}
							})
						})
					]
				}),
				_ === "idle" && h && h.isVisible && /* @__PURE__ */ C(F, {
					isVisible: h.isVisible,
					onClose: h.onClose,
					crossSelling: h,
					onDropdownClose: () => R(!1)
				})
			]
		}) })]
	});
}, D = ({ title: t, href: n, mediaUrl: r, unread: i, updated: a, onClick: s }) => {
	let c = r?.includes(".mp4");
	return /* @__PURE__ */ C(T.Item, {
		onClick: s,
		asChild: !0,
		className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		children: /* @__PURE__ */ w(o, {
			href: n,
			target: "_blank",
			referrerPolicy: "no-referrer",
			rel: "noopener noreferrer",
			className: e("flex flex-col items-stretch w-full", "text-f1-foreground no-underline"),
			children: [/* @__PURE__ */ C("div", {
				className: "px-1 pt-1",
				children: c ? /* @__PURE__ */ C("div", {
					className: "overflow-clip rounded border border-solid border-f1-border-secondary",
					children: /* @__PURE__ */ C("video", {
						src: r,
						className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
						autoPlay: !0,
						muted: !0,
						loop: !0,
						playsInline: !0
					})
				}) : /* @__PURE__ */ C("div", {
					className: "overflow-clip rounded border border-solid border-f1-border-secondary",
					children: /* @__PURE__ */ C(_, {
						fetchPriority: "high",
						src: r,
						className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
					})
				})
			}), /* @__PURE__ */ C("div", {
				className: "py-2 pl-2 pr-4",
				children: /* @__PURE__ */ w("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ w("div", {
						className: "flex-1 *:text-base",
						children: [/* @__PURE__ */ C("h3", {
							className: "font-medium",
							children: t
						}), /* @__PURE__ */ C("p", {
							className: "font-normal text-f1-foreground-secondary",
							children: a
						})]
					}), i && /* @__PURE__ */ C(P, { className: "mt-1.5" })]
				})
			})]
		})
	});
}, O = ({ title: t, href: n, updated: r, unread: i = !1, onClick: a }) => {
	let s = e("flex flex-col items-stretch gap-3 w-full");
	return /* @__PURE__ */ C(p, {
		asChild: !0,
		className: s,
		onClick: a,
		children: /* @__PURE__ */ C(o, {
			href: n,
			target: "_blank",
			referrerPolicy: "no-referrer",
			rel: "noopener noreferrer",
			className: e(s, "text-f1-foreground no-underline hover:cursor-pointer"),
			children: /* @__PURE__ */ w("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ w("div", {
					className: "flex-1 *:text-base",
					children: [/* @__PURE__ */ C("h3", {
						className: "text-pretty font-medium",
						children: t
					}), /* @__PURE__ */ C("p", {
						className: "font-normal text-f1-foreground-secondary",
						children: r
					})]
				}), i && /* @__PURE__ */ C(P, { className: "mt-1.5" })]
			})
		})
	});
}, k = ({ title: e, url: t, onClick: n }) => /* @__PURE__ */ w("a", {
	href: t,
	className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
	children: [/* @__PURE__ */ C("h2", {
		className: "text-base font-medium",
		children: e
	}), /* @__PURE__ */ C(u, {
		variant: "outline",
		size: "sm",
		icon: r,
		label: e,
		hideLabel: !0,
		onClick: n
	})]
}), A = ({ icon: t, button: n, title: r, description: i, iconWrapperClassName: a }) => /* @__PURE__ */ C("div", {
	className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12",
	children: /* @__PURE__ */ w("div", {
		className: "flex flex-col items-center gap-4",
		children: [
			/* @__PURE__ */ C("div", {
				className: e("grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block", a),
				children: t
			}),
			/* @__PURE__ */ w("div", {
				className: "flex flex-1 flex-col gap-1 text-center *:text-base",
				children: [/* @__PURE__ */ C("h3", {
					className: "text-pretty font-medium",
					children: r
				}), /* @__PURE__ */ C("p", {
					className: "font-normal text-f1-foreground-secondary",
					children: i
				})]
			}),
			n
		]
	})
}), j = ({ title: e, buttonText: n, buttonUrl: r, description: i }) => /* @__PURE__ */ C(A, {
	title: e,
	description: i,
	icon: /* @__PURE__ */ C(t, {
		icon: a,
		size: "lg",
		className: "block"
	}),
	button: /* @__PURE__ */ C(o, {
		href: r,
		children: /* @__PURE__ */ C(u, { label: n })
	})
}), M = ({ title: e, description: r, buttonText: i, onClick: a }) => /* @__PURE__ */ C(A, {
	title: e,
	description: r,
	iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
	icon: /* @__PURE__ */ C(t, {
		icon: n,
		size: "lg"
	}),
	button: /* @__PURE__ */ C(u, {
		variant: "outline",
		label: i,
		onClick: a
	})
}), N = () => /* @__PURE__ */ C("div", {
	className: "flex flex-col",
	role: "status",
	"aria-busy": "true",
	"aria-live": "polite",
	children: /* @__PURE__ */ w("div", {
		className: "p-2",
		children: [
			/* @__PURE__ */ C(s, { className: "h-56 w-full rounded" }),
			/* @__PURE__ */ C("div", {
				className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
				children: /* @__PURE__ */ w("div", {
					className: "flex flex-1 flex-col gap-2 py-1",
					children: [/* @__PURE__ */ C(s, { className: "h-3 w-2/3" }), /* @__PURE__ */ C(s, { className: "h-3 w-1/3" })]
				})
			}),
			/* @__PURE__ */ C("div", {
				className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
				children: /* @__PURE__ */ w("div", {
					className: "flex flex-1 flex-col gap-2 py-1",
					children: [/* @__PURE__ */ C(s, { className: "h-3 w-2/3" }), /* @__PURE__ */ C(s, { className: "h-3 w-1/3" })]
				})
			})
		]
	})
}), P = ({ className: t = "" }) => /* @__PURE__ */ C("div", {
	"aria-hidden": "true",
	className: e("size-2 rounded bg-f1-background-selected-bold", t)
}), F = ({ isVisible: e, onClose: t, crossSelling: n, onDropdownClose: r }) => {
	let [a, o] = x(e);
	b(() => {
		o(e);
	}, [e]);
	let s = () => {
		o(!1), t && t();
	}, c = (e) => {
		o(!1), r(), e && e();
	};
	return a && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(h, {}), /* @__PURE__ */ w("div", {
		className: "px-1 pb-2",
		children: [/* @__PURE__ */ w("div", {
			className: "flex flex-row items-center justify-between px-3",
			children: [/* @__PURE__ */ C("p", {
				className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary",
				children: n?.sectionTitle
			}), t && /* @__PURE__ */ C("div", {
				className: "relative z-10 h-6 w-6",
				children: /* @__PURE__ */ C(u, {
					variant: "ghost",
					icon: i,
					size: "sm",
					hideLabel: !0,
					onClick: s,
					label: "Close"
				})
			})]
		}), /* @__PURE__ */ C(l, {
			columns: { default: 1 },
			showDots: !0,
			showArrows: !1,
			children: n?.products.map((e) => /* @__PURE__ */ C(v, {
				...e,
				isVisible: !0,
				trackVisibility: e.trackVisibility,
				onClick: () => c(e.onClick)
			}, e.title))
		})]
	})] });
};
//#endregion
export { E as ProductUpdates };
