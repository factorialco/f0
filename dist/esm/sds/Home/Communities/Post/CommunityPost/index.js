import { cn as e, focusRing as t } from "../../../../../lib/utils.js";
import n from "../../../../../icons/app/Comment.js";
import r from "../../../../../icons/app/EllipsisHorizontal.js";
import i from "../../../../../icons/app/Person.js";
import { useI18n as a } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as o } from "../../../../../ui/skeleton.js";
import { F0Button as s } from "../../../../../components/F0Button/F0Button.js";
import { F0AvatarIcon as c } from "../../../../../components/avatars/F0AvatarIcon/index.js";
import { F0AvatarPerson as l } from "../../../../../components/avatars/F0AvatarPerson/index.js";
import { withSkeleton as u } from "../../../../../lib/skeleton.js";
import { Dropdown as d } from "../../../../../experimental/Navigation/Dropdown/index.js";
import { getDisplayDateBasedOnDuration as f } from "../../../../../lib/date.js";
import { useDateFnsLocale as p } from "../../../../../lib/providers/l10n/use-date-fns-locale.js";
import { F0Link as m } from "../../../../../components/F0Link/F0Link.js";
import { Reactions as h } from "../../../../social/Reactions/index.js";
import { PostDescription as g } from "../PostDescription/index.js";
import { isVideo as _ } from "./video.js";
import { PostEvent as v } from "../PostEvent/index.js";
import { useEffect as y, useId as b, useRef as x, useState as S } from "react";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
//#region src/sds/Home/Communities/Post/CommunityPost/index.tsx
var E = ({ describedBy: n, controls: r, expanded: i, onClick: o }) => {
	let s = a();
	return /* @__PURE__ */ w("div", {
		className: "text-base text-f1-foreground",
		children: /* @__PURE__ */ w("button", {
			type: "button",
			className: e("inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary", t()),
			"aria-controls": r,
			"aria-describedby": n,
			"aria-expanded": i,
			onClick: o,
			children: s.actions.seeMore
		})
	});
}, D = ({ id: a, author: u, group: D, createdAt: O, title: k, description: A, onClick: j, mediaUrl: M, event: N, counters: P, reactions: F, inLabel: I, comment: L, actions: R, dropdownItems: z, noReactionsButton: ee = !1, descriptionExpandable: B = !1, noDescriptionClamp: V = !1, hideTitle: H = !1 }) => {
	let U = b(), W = b(), G = p(), K = x(null), [q, J] = S(null), [Y, X] = S(!1), Z = [P.views, P.comments].filter(Boolean).join(" · "), Q = B && q?.id === a && q.description === A, te = !Q && !V, ne = f(O, { locale: G }), re = !!j, ie = j ? () => j(a) : void 0, ae = (e) => {
		e.stopPropagation();
	}, $ = u ? `${u.firstName} ${u.lastName}` : void 0, oe = (e) => {
		e.preventDefault(), e.stopPropagation(), A && J({
			id: a,
			description: A
		});
	};
	return y(() => {
		Q && K.current?.focus();
	}, [Q]), y(() => {
		B || J(null);
	}, [B]), y(() => {
		let e = K.current;
		if (!B || !e || Q) {
			X(!1);
			return;
		}
		let t = () => {
			X(e.scrollHeight > e.clientHeight);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [
		B,
		Q,
		A
	]), /* @__PURE__ */ T("div", {
		className: e("@container flex w-full flex-col gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 md:pb-4 md:pt-3", re && "cursor-pointer hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"),
		onClick: ie,
		id: `community-post-${a}`,
		children: [
			/* @__PURE__ */ T("div", {
				className: "flex min-w-0 flex-row items-center gap-3",
				children: [
					u ? /* @__PURE__ */ w(m, {
						href: u.url || "#",
						title: $,
						className: "flex items-center leading-[0]",
						stopPropagation: !0,
						children: /* @__PURE__ */ w(l, {
							firstName: u.firstName,
							lastName: u.lastName,
							src: u.avatarUrl
						})
					}) : /* @__PURE__ */ w(c, { icon: i }),
					/* @__PURE__ */ T("div", {
						className: "flex min-w-0 flex-1 flex-col",
						children: [/* @__PURE__ */ T("div", {
							className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1",
							children: [
								u ? /* @__PURE__ */ w(m, {
									href: u.url,
									title: $,
									className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
									stopPropagation: !0,
									children: $
								}) : null,
								/* @__PURE__ */ w("span", {
									className: e("text-f1-foreground-secondary", !u && "capitalize"),
									children: I
								}),
								/* @__PURE__ */ w(m, {
									onClick: D.onClick,
									title: D.title,
									className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
									stopPropagation: !0,
									href: "#",
									children: D.title
								})
							]
						}), /* @__PURE__ */ w("span", {
							className: "text-base text-f1-foreground-secondary",
							children: ne
						})]
					}),
					/* @__PURE__ */ T("div", {
						className: "flex flex-row gap-2",
						children: [/* @__PURE__ */ T("div", {
							className: "hidden flex-row gap-2 md:flex",
							children: [R?.map((e) => /* @__PURE__ */ w(s, {
								hideLabel: !e.label,
								...e.icon && { icon: e.icon },
								variant: "outline",
								size: "md",
								onClick: e.onClick,
								label: e.label ?? "",
								title: e.label ?? ""
							}, e.label)), z?.length && /* @__PURE__ */ w(d, {
								items: z,
								icon: r,
								size: "sm"
							})]
						}), /* @__PURE__ */ w("div", {
							className: "md:hidden",
							children: /* @__PURE__ */ w(d, {
								items: [{
									label: L.label,
									onClick: L.onClick
								}, ...z ?? []],
								icon: r,
								size: "sm"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ T("div", {
				className: "flex min-w-0 flex-col gap-1 text-f1-foreground",
				children: [/* @__PURE__ */ w("p", {
					id: U,
					className: e(H ? "sr-only" : e("text-xl font-semibold", "line-clamp-2 break-words")),
					children: k
				}), A && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(g, {
					ref: K,
					id: W,
					content: A,
					collapsed: te,
					tabIndex: Q ? -1 : void 0,
					className: e(Q && t())
				}), B && !V && Y && !Q && /* @__PURE__ */ w(E, {
					describedBy: U,
					controls: W,
					expanded: Q,
					onClick: oe
				})] })]
			}),
			M && !N && /* @__PURE__ */ w("div", {
				className: "relative aspect-video w-full overflow-hidden rounded-xl @[744px]:max-w-content",
				children: _(M) ? /* @__PURE__ */ w("video", {
					controls: !0,
					className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
					onClick: ae,
					children: /* @__PURE__ */ w("source", { src: M })
				}) : /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("img", {
					src: M,
					role: "presentation",
					loading: "lazy",
					className: "aspect-video h-full w-full object-cover"
				}), /* @__PURE__ */ w(o, { className: "absolute inset-0 -z-10 h-full w-full" })] })
			}),
			N && /* @__PURE__ */ w("div", {
				className: "w-full @[744px]:max-w-content",
				children: /* @__PURE__ */ w(v, { ...N })
			}),
			/* @__PURE__ */ w("p", {
				className: "text-f1-foreground-secondary",
				children: Z
			}),
			!ee && /* @__PURE__ */ w(h, {
				items: F?.items ?? [],
				onInteraction: F?.onInteraction,
				action: {
					label: L.label,
					onClick: L.onClick,
					icon: n
				}
			})
		]
	});
}, O = ({ withEvent: e, withImage: t }) => /* @__PURE__ */ T("div", {
	className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3",
	children: [/* @__PURE__ */ w("div", {
		className: "hidden md:block",
		children: /* @__PURE__ */ w(o, { className: "aspect-square w-8 rounded-full" })
	}), /* @__PURE__ */ T("div", {
		className: "w-full",
		children: [
			/* @__PURE__ */ T("div", {
				className: "flex h-6 flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ w("div", {
						className: "md:hidden",
						children: /* @__PURE__ */ w(o, { className: "aspect-square w-4 rounded-full" })
					}),
					/* @__PURE__ */ w(o, { className: "h-2.5 w-14 rounded-2xs" }),
					/* @__PURE__ */ w(o, { className: "h-2.5 w-18 rounded-2xs" })
				]
			}),
			/* @__PURE__ */ w(o, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
			/* @__PURE__ */ w("div", {
				className: "mt-3",
				children: /* @__PURE__ */ w(g.Skeleton, {})
			}),
			t && !e && /* @__PURE__ */ w("div", {
				className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3",
				children: /* @__PURE__ */ w(o, { className: "h-full w-full rounded-2xs" })
			}),
			e && /* @__PURE__ */ w("div", {
				className: "mt-3 w-full md:w-2/3",
				children: /* @__PURE__ */ w(v.Skeleton, {})
			}),
			/* @__PURE__ */ T("div", {
				className: "mt-3 flex flex-row items-center gap-1 py-1",
				children: [/* @__PURE__ */ w(o, { className: "h-2.5 w-14 rounded-2xs" }), /* @__PURE__ */ w(o, { className: "h-2.5 w-14 rounded-2xs" })]
			})
		]
	})]
}), k = u(D, O);
//#endregion
export { D as BaseCommunityPost, k as CommunityPost, O as CommunityPostSkeleton };
