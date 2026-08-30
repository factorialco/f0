import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { Link as n, isExternalHref as r } from "../../../../lib/linkHandler.js";
import { Skeleton as i } from "../../../../ui/skeleton.js";
import { Carousel as a, CarouselContent as o, CarouselControls as s, CarouselItem as c } from "../../../../ui/carousel.js";
import { F0AvatarPerson as l } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { useDateFnsLocale as u } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { PostDescription as d } from "../Post/PostDescription/index.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { format as m } from "date-fns";
//#region src/sds/Home/Communities/F0CommunityPostsCarousel/index.tsx
var h = "aspect-[2/1]", g = "after:absolute after:inset-0 after:z-[1] after:rounded-xl after:content-['']", _ = ({ post: a }) => {
	let o = u(), s = [
		m(a.createdAt, "MMM d", { locale: o }),
		a.counters?.visits,
		a.counters?.comments
	].filter(Boolean).join(" · "), c = a.href ? /* @__PURE__ */ f(n, {
		href: a.href,
		onClick: a.onClick,
		className: e("no-underline visited:text-f1-foreground", g, t()),
		...r(a.href) ? {
			target: "_blank",
			rel: "noreferrer"
		} : {},
		children: /* @__PURE__ */ f("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	}) : /* @__PURE__ */ f("button", {
		type: "button",
		onClick: a.onClick,
		className: e("cursor-pointer border-none bg-transparent p-0 text-left", g, t()),
		children: /* @__PURE__ */ f("h3", {
			className: "m-0 text-lg font-semibold text-f1-foreground",
			children: a.title
		})
	});
	return /* @__PURE__ */ p("article", {
		className: e("relative isolate flex h-full flex-col gap-3 rounded-xl p-4", "border border-solid border-f1-border-secondary bg-f1-background", "transition-colors hover:border-f1-border-hover"),
		children: [
			a.imageUrl ? /* @__PURE__ */ p("div", {
				className: e("relative overflow-hidden rounded-lg", "-mx-3 -mt-3", h),
				children: [/* @__PURE__ */ f("img", {
					src: a.imageUrl,
					role: "presentation",
					loading: "lazy",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ f(i, { className: "absolute inset-0 -z-10 h-full w-full" })]
			}) : null,
			c,
			a.description ? /* @__PURE__ */ f(d, {
				content: a.description,
				collapsed: !0
			}) : null,
			/* @__PURE__ */ p("div", {
				className: "mt-auto flex flex-row items-center gap-2 pt-2",
				children: [a.author ? /* @__PURE__ */ f(l, {
					firstName: a.author.firstName,
					lastName: a.author.lastName,
					src: a.author.avatarUrl
				}) : null, /* @__PURE__ */ p("div", {
					className: "flex min-w-0 flex-col",
					children: [a.author ? /* @__PURE__ */ f("span", {
						className: "truncate font-medium text-f1-foreground",
						children: `${a.author.firstName} ${a.author.lastName}`
					}) : null, s ? /* @__PURE__ */ f("span", {
						className: "truncate text-f1-foreground-secondary",
						children: s
					}) : null]
				})]
			})
		]
	});
}, v = ({ withImage: t }) => /* @__PURE__ */ p("div", {
	className: "flex h-full flex-col gap-3 rounded-xl border border-solid border-f1-border-secondary p-4",
	children: [
		t ? /* @__PURE__ */ f(i, { className: e("-mx-3 -mt-3 rounded-lg", h) }) : null,
		/* @__PURE__ */ f(i, { className: "h-5 w-3/4 rounded-2xs" }),
		/* @__PURE__ */ f(i, { className: "h-3 w-full rounded-2xs" }),
		/* @__PURE__ */ f(i, { className: "h-3 w-5/6 rounded-2xs" }),
		/* @__PURE__ */ f(i, { className: "h-3 w-2/3 rounded-2xs" }),
		/* @__PURE__ */ p("div", {
			className: "mt-auto flex flex-row items-center gap-2 pt-2",
			children: [/* @__PURE__ */ f(i, { className: "h-8 w-8 rounded-full" }), /* @__PURE__ */ p("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ f(i, { className: "h-3 w-24 rounded-2xs" }), /* @__PURE__ */ f(i, { className: "h-3 w-32 rounded-2xs" })]
			})]
		})
	]
}), y = (e) => e.length === 0 || e.some((e) => e.imageUrl), b = ({ posts: e, labels: t, loading: n = !1, expectedItemsCount: r = 2, pagination: i }) => {
	let l = n ? Array.from({ length: r }, (t, n) => /* @__PURE__ */ f(v, { withImage: y(e) }, n)) : e.map((e) => /* @__PURE__ */ f(_, { post: e }, e.id));
	return /* @__PURE__ */ p(a, {
		opts: {
			align: "start",
			containScroll: "trimSnaps",
			slidesToScroll: "auto"
		},
		className: "@container",
		...n ? { "aria-busy": !0 } : {},
		children: [/* @__PURE__ */ f(o, { children: l.map((e, t) => /* @__PURE__ */ f(c, {
			className: "basis-full @lg:basis-1/2",
			children: e
		}, t)) }), /* @__PURE__ */ f(s, {
			labels: t,
			paging: i
		})]
	});
};
//#endregion
export { b as F0CommunityPostsCarousel };
