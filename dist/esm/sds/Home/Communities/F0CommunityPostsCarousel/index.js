import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { Link as n, isExternalHref as r } from "../../../../lib/linkHandler.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { Carousel as a, CarouselContent as o, CarouselControls as s, CarouselItem as c } from "../../../../ui/carousel.js";
import { F0AvatarPerson as l } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { useDateFnsLocale as u } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { PostDescription as d } from "../Post/PostDescription/index.js";
import { useCallback as f, useRef as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { format as g } from "date-fns";
//#region src/sds/Home/Communities/F0CommunityPostsCarousel/index.tsx
var _ = "aspect-video", v = "after:absolute after:inset-0 after:z-[1] after:rounded-xl after:content-['']", y = "h-96", b = (e, t) => t > 0 ? Math.max(1, Math.floor(e / t)) : 1, x = (e) => {
	let t = Number.parseFloat(window.getComputedStyle(e).lineHeight);
	if (t > 0) return t;
	let n = e.firstElementChild, r = n ? Number.parseFloat(window.getComputedStyle(n).lineHeight) : NaN;
	return r > 0 ? r : 0;
}, S = ({ content: e }) => {
	let t = p(null), n = p(null), r = f((e) => {
		if (n.current?.disconnect(), n.current = null, !e || typeof ResizeObserver > "u") return;
		let r = () => {
			let n = t.current;
			if (!n) return;
			let r = e.clientHeight, i = b(r, x(n));
			n.style.webkitLineClamp = String(i);
			for (let e = 0; i > 1 && e < 40 && !(n.getBoundingClientRect().height <= r); e += 1) --i, n.style.webkitLineClamp = String(i);
		};
		r(), n.current = new ResizeObserver(r), n.current.observe(e);
	}, []);
	return /* @__PURE__ */ m("div", {
		ref: r,
		className: "min-h-0 flex-1 overflow-hidden",
		children: /* @__PURE__ */ m(d, {
			ref: t,
			content: e,
			collapsed: !0
		})
	});
}, C = ({ post: a }) => {
	let o = u(), s = [
		g(a.createdAt, "MMM d", { locale: o }),
		a.counters?.visits,
		a.counters?.comments
	].filter(Boolean).join(" · "), c = a.href ? /* @__PURE__ */ m(n, {
		href: a.href,
		onClick: a.onClick,
		className: e("no-underline visited:text-f1-foreground", v, t()),
		...r(a.href) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: /* @__PURE__ */ m("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	}) : /* @__PURE__ */ m("button", {
		type: "button",
		onClick: a.onClick,
		className: e("cursor-pointer border-none bg-transparent p-0 text-left", v, t()),
		children: /* @__PURE__ */ m("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	});
	return /* @__PURE__ */ h("article", {
		className: e("relative isolate flex flex-col rounded-xl p-4", y, "border border-solid border-f1-border-secondary bg-f1-background", "transition-colors hover:border-f1-border-hover"),
		children: [a.imageUrl ? /* @__PURE__ */ h("div", {
			className: e("relative overflow-hidden rounded-md", "-mx-3 -mt-3", _),
			children: [/* @__PURE__ */ m("img", {
				src: a.imageUrl,
				role: "presentation",
				loading: "lazy",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ m(i, { className: "absolute inset-0 -z-10 h-full w-full" })]
		}) : null, /* @__PURE__ */ h("div", {
			className: e("flex min-h-0 grow flex-col gap-2", a.imageUrl && "pt-3"),
			children: [
				c,
				a.description ? /* @__PURE__ */ m(S, { content: a.description }) : null,
				/* @__PURE__ */ h("div", {
					className: "mt-auto flex flex-row items-center gap-3 pt-2",
					children: [a.author ? /* @__PURE__ */ m(l, {
						firstName: a.author.firstName,
						lastName: a.author.lastName,
						src: a.author.avatarUrl
					}) : null, /* @__PURE__ */ h("div", {
						className: "flex min-w-0 flex-col",
						children: [a.author ? /* @__PURE__ */ m("span", {
							className: "truncate font-medium text-f1-foreground",
							children: `${a.author.firstName} ${a.author.lastName}`
						}) : null, s ? /* @__PURE__ */ m("span", {
							className: "truncate text-f1-foreground-secondary",
							children: s
						}) : null]
					})]
				})
			]
		})]
	});
}, w = ({ withImage: t }) => /* @__PURE__ */ h("div", {
	className: e("flex flex-col rounded-xl border border-solid border-f1-border-secondary p-4", y),
	children: [t ? /* @__PURE__ */ m(i, { className: e("-mx-3 -mt-3 rounded-md", _) }) : null, /* @__PURE__ */ h("div", {
		className: e("flex min-h-0 grow flex-col gap-2", t && "pt-3"),
		children: [
			/* @__PURE__ */ m(i, { className: "h-5 w-3/4 rounded-2xs" }),
			/* @__PURE__ */ h("div", {
				className: "flex min-h-0 flex-1 flex-col gap-2 overflow-hidden",
				children: [
					/* @__PURE__ */ m(i, { className: "h-3 w-full rounded-2xs" }),
					/* @__PURE__ */ m(i, { className: "h-3 w-5/6 rounded-2xs" }),
					/* @__PURE__ */ m(i, { className: "h-3 w-2/3 rounded-2xs" })
				]
			}),
			/* @__PURE__ */ h("div", {
				className: "mt-auto flex flex-row items-center gap-3 pt-2",
				children: [/* @__PURE__ */ m(i, { className: "h-8 w-8 rounded-full" }), /* @__PURE__ */ h("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ m(i, { className: "h-3 w-24 rounded-2xs" }), /* @__PURE__ */ m(i, { className: "h-3 w-32 rounded-2xs" })]
				})]
			})
		]
	})]
}), T = (e) => e.length === 0 || e.some((e) => e.imageUrl), E = ({ posts: e, labels: t, loading: n = !1, expectedItemsCount: r = 2, pagination: i }) => {
	let l = n ? Array.from({ length: r }, (t, n) => /* @__PURE__ */ m(w, { withImage: T(e) }, n)) : e.map((e) => /* @__PURE__ */ m(C, { post: e }, e.id));
	return /* @__PURE__ */ h(a, {
		opts: {
			align: "start",
			containScroll: "trimSnaps",
			slidesToScroll: "auto"
		},
		className: "@container",
		...n ? { "aria-busy": !0 } : {},
		children: [/* @__PURE__ */ m(o, { children: l.map((e, t) => /* @__PURE__ */ m(c, {
			className: "basis-full @lg:basis-1/2",
			children: e
		}, t)) }), /* @__PURE__ */ m(s, {
			labels: t,
			paging: i
		})]
	});
};
//#endregion
export { E as F0CommunityPostsCarousel };
