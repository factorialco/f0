import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { Link as n, isExternalHref as r } from "../../../../lib/linkHandler.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { Carousel as a, CarouselContent as o, CarouselControls as s, CarouselItem as c, useCarouselPaging as l } from "../../../../ui/carousel.js";
import { F0AvatarPerson as u } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { useDateFnsLocale as d } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { PostDescription as f } from "../Post/PostDescription/index.js";
import { useCallback as p, useRef as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { format as _ } from "date-fns";
//#region src/sds/Home/Communities/F0CommunityPostsCarousel/index.tsx
var v = "aspect-video", y = "after:absolute after:inset-0 after:z-[1] after:rounded-xl after:content-['']", b = "h-96", x = (e, t) => t > 0 ? Math.max(1, Math.floor(e / t)) : 1, S = (e) => {
	let t = Number.parseFloat(window.getComputedStyle(e).lineHeight);
	if (t > 0) return t;
	let n = e.firstElementChild, r = n ? Number.parseFloat(window.getComputedStyle(n).lineHeight) : NaN;
	return r > 0 ? r : 0;
}, C = ({ content: e }) => {
	let t = m(null), n = m(null), r = p((e) => {
		if (n.current?.disconnect(), n.current = null, !e || typeof ResizeObserver > "u") return;
		let r = () => {
			let n = t.current;
			if (!n) return;
			let r = e.clientHeight, i = x(r, S(n));
			n.style.webkitLineClamp = String(i);
			for (let e = 0; i > 1 && e < 40 && !(n.getBoundingClientRect().height <= r); e += 1) --i, n.style.webkitLineClamp = String(i);
		};
		r(), n.current = new ResizeObserver(r), n.current.observe(e);
	}, []);
	return /* @__PURE__ */ h("div", {
		ref: r,
		className: "min-h-0 flex-1 overflow-hidden",
		children: /* @__PURE__ */ h(f, {
			ref: t,
			content: e,
			collapsed: !0
		})
	});
}, w = ({ post: a }) => {
	let o = d(), s = [
		_(a.createdAt, "MMM d", { locale: o }),
		a.counters?.visits,
		a.counters?.comments
	].filter(Boolean).join(" · "), c = a.href ? /* @__PURE__ */ h(n, {
		href: a.href,
		onClick: a.onClick,
		className: e("no-underline visited:text-f1-foreground", y, t()),
		...r(a.href) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: /* @__PURE__ */ h("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	}) : /* @__PURE__ */ h("button", {
		type: "button",
		onClick: a.onClick,
		className: e("cursor-pointer border-none bg-transparent p-0 text-left", y, t()),
		children: /* @__PURE__ */ h("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	});
	return /* @__PURE__ */ g("article", {
		className: e("relative isolate flex flex-col rounded-xl p-4", b, "border border-solid border-f1-border-secondary bg-f1-background", "transition-colors hover:border-f1-border-hover"),
		children: [a.imageUrl ? /* @__PURE__ */ g("div", {
			className: e("relative overflow-hidden rounded-md", "-mx-3 -mt-3", v),
			children: [/* @__PURE__ */ h("img", {
				src: a.imageUrl,
				role: "presentation",
				loading: "lazy",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ h(i, { className: "absolute inset-0 -z-10 h-full w-full" })]
		}) : null, /* @__PURE__ */ g("div", {
			className: e("flex min-h-0 grow flex-col gap-2", a.imageUrl && "pt-3"),
			children: [
				c,
				a.description ? /* @__PURE__ */ h(C, { content: a.description }) : null,
				/* @__PURE__ */ g("div", {
					className: "mt-auto flex flex-row items-center gap-3 pt-2",
					children: [a.author ? /* @__PURE__ */ h(u, {
						firstName: a.author.firstName,
						lastName: a.author.lastName,
						src: a.author.avatarUrl
					}) : null, /* @__PURE__ */ g("div", {
						className: "flex min-w-0 flex-col",
						children: [a.author ? /* @__PURE__ */ h("span", {
							className: "truncate font-medium text-f1-foreground",
							children: `${a.author.firstName} ${a.author.lastName}`
						}) : null, s ? /* @__PURE__ */ h("span", {
							className: "truncate text-f1-foreground-secondary",
							children: s
						}) : null]
					})]
				})
			]
		})]
	});
}, T = ({ withImage: t }) => /* @__PURE__ */ g("div", {
	className: e("flex flex-col rounded-xl border border-solid border-f1-border-secondary p-4", b),
	children: [t ? /* @__PURE__ */ h(i, { className: e("-mx-3 -mt-3 rounded-md", v) }) : null, /* @__PURE__ */ g("div", {
		className: e("flex min-h-0 grow flex-col gap-2", t && "pt-3"),
		children: [
			/* @__PURE__ */ h(i, { className: "h-5 w-3/4 rounded-2xs" }),
			/* @__PURE__ */ g("div", {
				className: "flex min-h-0 flex-1 flex-col gap-2 overflow-hidden",
				children: [
					/* @__PURE__ */ h(i, { className: "h-3 w-full rounded-2xs" }),
					/* @__PURE__ */ h(i, { className: "h-3 w-5/6 rounded-2xs" }),
					/* @__PURE__ */ h(i, { className: "h-3 w-2/3 rounded-2xs" })
				]
			}),
			/* @__PURE__ */ g("div", {
				className: "mt-auto flex flex-row items-center gap-3 pt-2",
				children: [/* @__PURE__ */ h(i, { className: "h-8 w-8 rounded-full" }), /* @__PURE__ */ g("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ h(i, { className: "h-3 w-24 rounded-2xs" }), /* @__PURE__ */ h(i, { className: "h-3 w-32 rounded-2xs" })]
				})]
			})
		]
	})]
}), E = (e) => e.length === 0 || e.some((e) => e.imageUrl), D = "basis-full @lg:basis-1/2", O = ({ posts: e, loading: t, expectedItemsCount: n }) => {
	let { isPageInFlight: r } = l(), i = t || r ? n : 0;
	return /* @__PURE__ */ g(o, {
		"aria-busy": t || r || void 0,
		children: [t ? null : e.map((e) => /* @__PURE__ */ h(c, {
			className: D,
			children: /* @__PURE__ */ h(w, { post: e })
		}, e.id)), Array.from({ length: i }, (t, n) => /* @__PURE__ */ h(c, {
			className: D,
			children: /* @__PURE__ */ h(T, { withImage: E(e) })
		}, `placeholder-${n}`))]
	});
}, k = ({ posts: e, labels: t, loading: n = !1, expectedItemsCount: r = 2, pagination: i }) => /* @__PURE__ */ g(a, {
	opts: {
		align: "start",
		containScroll: "trimSnaps",
		slidesToScroll: "auto"
	},
	className: "@container",
	paging: i,
	children: [/* @__PURE__ */ h(O, {
		posts: e,
		loading: n,
		expectedItemsCount: r
	}), /* @__PURE__ */ h(s, { labels: t })]
});
//#endregion
export { k as F0CommunityPostsCarousel };
