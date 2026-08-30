//#region src/components/RichText/F0RichTextEditor/utils/helpers.ts
var e = (e, t = 240) => e.current ? e.current.clientHeight >= t : !1, t = (e) => {
	if (!e.current) return !0;
	let t = e.current;
	return t.scrollHeight - t.scrollTop - t.clientHeight < 1;
}, n = {
	xxs: {
		threshold: 80,
		className: "h-20"
	},
	xs: {
		threshold: 112,
		className: "h-28"
	},
	sm: {
		threshold: 160,
		className: "h-40"
	},
	md: {
		threshold: 208,
		className: "h-52"
	},
	lg: {
		threshold: 240,
		className: "h-60"
	},
	xl: {
		threshold: 288,
		className: "h-72"
	},
	"2xl": {
		threshold: 320,
		className: "h-80"
	},
	"3xl": {
		threshold: 384,
		className: "h-96"
	},
	full: {
		threshold: Infinity,
		className: "h-full"
	},
	auto: {
		threshold: 240,
		className: "h-auto max-h-60"
	}
}, r = (e) => n[e]?.threshold ?? 240, i = (e) => n[e]?.className, a = ({ containerRef: n, onHeightChange: r, onScrollChange: i, heightThreshold: a = 240 }) => {
	let o = () => {
		r(e(n, a)), i(t(n));
	};
	o();
	let s = n.current;
	if (!s) return () => {};
	let c = () => {
		i(t(n));
	};
	s.addEventListener("scroll", c);
	let l = new ResizeObserver(o);
	return l.observe(s), () => {
		s.removeEventListener("scroll", c), l.disconnect();
	};
}, o = ({ editor: e, onChange: t }) => {
	if (e.isEmpty) {
		t({ value: null });
		return;
	}
	let n = e.getHTML(), r = [];
	e.state.doc.descendants((e) => {
		e.type.name === "mention" && r.push(String(e.attrs.id));
	}), t(r.length > 0 ? {
		value: n,
		mentionIds: r
	} : { value: n });
};
//#endregion
export { i as getHeight, r as getHeightThreshold, o as handleEditorUpdate, a as setupContainerObservers };
