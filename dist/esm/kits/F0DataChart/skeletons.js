import { Skeleton as e } from "../../ui/skeleton.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/F0DataChart/skeletons.tsx
function i({ children: t, showLegend: i = !0, horizontal: a = !1 }) {
	return a ? /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col px-4 py-3",
		children: [
			/* @__PURE__ */ r("div", {
				className: "flex min-h-0 flex-1 gap-2",
				children: [/* @__PURE__ */ r("div", {
					className: "flex flex-col justify-between py-1",
					children: [
						/* @__PURE__ */ n(e, { className: "h-2.5 w-12 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-10 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-14 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-11 rounded-sm" })
					]
				}), /* @__PURE__ */ n("div", {
					className: "relative min-h-0 flex-1",
					children: /* @__PURE__ */ n("div", {
						className: "relative h-full w-full",
						children: t
					})
				})]
			}),
			/* @__PURE__ */ r("div", {
				className: "ml-16 flex justify-between pt-1",
				children: [
					/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-6 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-7 rounded-sm" })
				]
			}),
			i && /* @__PURE__ */ r("div", {
				className: "flex items-center justify-center gap-4 pt-3",
				children: [/* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-10 rounded-sm" })]
				}), /* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-12 rounded-sm" })]
				})]
			})
		]
	}) : /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col px-4 py-3",
		children: [
			/* @__PURE__ */ r("div", {
				className: "flex min-h-0 flex-1 gap-2",
				children: [/* @__PURE__ */ r("div", {
					className: "flex flex-col justify-between py-1",
					children: [
						/* @__PURE__ */ n(e, { className: "h-2.5 w-6 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-7 rounded-sm" }),
						/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" })
					]
				}), /* @__PURE__ */ n("div", {
					className: "relative min-h-0 flex-1",
					children: /* @__PURE__ */ n("div", {
						className: "relative h-full w-full",
						children: t
					})
				})]
			}),
			/* @__PURE__ */ r("div", {
				className: "ml-9 flex justify-between pt-1",
				children: [
					/* @__PURE__ */ n(e, { className: "h-2.5 w-6 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-8 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-7 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-6 rounded-sm" }),
					/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" })
				]
			}),
			i && /* @__PURE__ */ r("div", {
				className: "flex items-center justify-center gap-4 pt-3",
				children: [/* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-10 rounded-sm" })]
				}), /* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-12 rounded-sm" })]
				})]
			})
		]
	});
}
function a({ orientation: a = "vertical", stacked: o = !1, showLegend: s = !0 } = {}) {
	return a === "horizontal" ? /* @__PURE__ */ n(i, {
		showLegend: s,
		horizontal: !0,
		children: /* @__PURE__ */ n("div", {
			className: "flex h-full flex-col gap-2",
			children: o ? /* @__PURE__ */ r(t, { children: [
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-full w-1/2 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-1/4 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-[15%] rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-full w-1/3 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-1/5 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-[12%] rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-full w-3/5 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-1/6 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-[10%] rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-full w-2/5 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-1/4 rounded" }),
						/* @__PURE__ */ n(e, { className: "h-full w-[8%] rounded" })
					]
				})
			] }) : /* @__PURE__ */ r(t, { children: [
				/* @__PURE__ */ n(e, { className: "w-3/4 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "w-1/2 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "w-full flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "w-1/3 flex-1 rounded" })
			] })
		})
	}) : o ? /* @__PURE__ */ n(i, {
		showLegend: s,
		children: /* @__PURE__ */ r("div", {
			className: "flex h-full items-end gap-2",
			children: [
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[15%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/4 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/3 w-full rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[10%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/5 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/4 w-full rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[12%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/4 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-2/5 w-full rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[8%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/5 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/6 w-full rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[10%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/6 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/4 w-full rounded" })
					]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex flex-1 flex-col gap-0.5",
					children: [
						/* @__PURE__ */ n(e, { className: "h-[12%] w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/5 w-full rounded" }),
						/* @__PURE__ */ n(e, { className: "h-1/3 w-full rounded" })
					]
				})
			]
		})
	}) : /* @__PURE__ */ n(i, {
		showLegend: s,
		children: /* @__PURE__ */ r("div", {
			className: "flex h-full items-end gap-2",
			children: [
				/* @__PURE__ */ n(e, { className: "h-3/4 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "h-1/2 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "h-full flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "h-1/3 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "h-2/3 flex-1 rounded" }),
				/* @__PURE__ */ n(e, { className: "h-3/4 flex-1 rounded" })
			]
		})
	});
}
var o = {
	smooth: "M0 60 Q25 45 50 50 T100 35 T150 42 T200 20",
	linear: "M0 60 L40 45 L80 50 L120 35 L160 42 L200 20",
	step: "M0 60 H40 V45 H80 V52 H120 V32 H160 V40 H200 V20"
}, s = [
	[0, 60],
	[40, 45],
	[80, 50],
	[120, 35],
	[160, 42],
	[200, 20]
];
function c({ lineType: t = "linear", showArea: a = !0, showDots: c = !1, showLegend: l = !0 } = {}) {
	let u = o[t], d = `${u} V80 H0 Z`, f = `line-sk-grad-${t}`;
	return /* @__PURE__ */ n(i, {
		showLegend: l,
		children: /* @__PURE__ */ r("div", {
			className: "relative h-full w-full",
			children: [/* @__PURE__ */ r("svg", {
				viewBox: "0 0 200 80",
				preserveAspectRatio: "none",
				className: "h-full w-full",
				children: [
					a && /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ r("linearGradient", {
						id: f,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ n("stop", {
							offset: "0%",
							stopColor: "currentColor",
							stopOpacity: "0.10",
							className: "text-f1-foreground-secondary"
						}), /* @__PURE__ */ n("stop", {
							offset: "100%",
							stopColor: "currentColor",
							stopOpacity: "0"
						})]
					}) }),
					a && /* @__PURE__ */ n("path", {
						d,
						fill: `url(#${f})`
					}),
					/* @__PURE__ */ n("path", {
						d: u,
						fill: "none",
						strokeWidth: "2",
						vectorEffect: "non-scaling-stroke",
						stroke: "currentColor",
						strokeOpacity: "0.15",
						className: "text-f1-foreground-secondary"
					})
				]
			}), c && s.map(([t, r]) => /* @__PURE__ */ n(e, {
				className: "absolute size-2 rounded-full",
				style: {
					left: `${t / 200 * 100}%`,
					top: `${r / 80 * 100}%`,
					transform: "translate(-50%, -50%)"
				}
			}, `${t}-${r}`))]
		})
	});
}
var l = [
	[10, 64],
	[26, 52],
	[42, 58],
	[56, 38],
	[70, 46],
	[84, 28],
	[98, 50],
	[112, 34],
	[126, 20],
	[140, 40],
	[154, 26],
	[168, 14],
	[182, 32],
	[196, 18]
];
function u({ showLegend: t = !0 } = {}) {
	return /* @__PURE__ */ n(i, {
		showLegend: t,
		children: /* @__PURE__ */ n("div", {
			className: "relative h-full w-full",
			children: l.map(([t, r]) => /* @__PURE__ */ n(e, {
				className: "absolute size-2 rounded-full",
				style: {
					left: `${t / 200 * 100}%`,
					top: `${r / 80 * 100}%`,
					transform: "translate(-50%, -50%)"
				}
			}, `${t}-${r}`))
		})
	});
}
var d = [
	{
		sizePct: 100,
		label: "w-8"
	},
	{
		sizePct: 80,
		label: "w-6"
	},
	{
		sizePct: 58,
		label: "w-7"
	},
	{
		sizePct: 38,
		label: "w-5"
	},
	{
		sizePct: 22,
		label: "w-6"
	}
];
function f({ orient: t = "horizontal", sort: i = "descending", showLegend: a = !0 } = {}) {
	let o = i === "ascending" ? [...d].reverse() : d;
	if (t === "vertical") {
		let t = (100 - 3 * (o.length - 1)) / o.length;
		return /* @__PURE__ */ r("div", {
			className: "flex h-full animate-pulse flex-col px-4 py-3",
			children: [
				/* @__PURE__ */ n("div", {
					className: "min-h-0 flex-1",
					children: /* @__PURE__ */ n("svg", {
						viewBox: "0 0 100 100",
						preserveAspectRatio: "none",
						className: "h-full w-full",
						children: o.map((e, r) => {
							let i = r * (t + 3), a = e.sizePct, o = (100 - a) / 2;
							return /* @__PURE__ */ n("rect", {
								x: o,
								y: i,
								width: a,
								height: t,
								rx: "2",
								className: "fill-f1-background-secondary"
							}, r);
						})
					})
				}),
				/* @__PURE__ */ n("div", {
					className: "flex justify-center gap-4 pt-1.5",
					children: o.map((t, r) => /* @__PURE__ */ n(e, { className: `h-2.5 flex-shrink-0 rounded-sm ${t.label}` }, r))
				}),
				a && /* @__PURE__ */ n("div", {
					className: "flex items-center justify-center gap-4 pt-1.5",
					children: /* @__PURE__ */ r("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-14 rounded-sm" })]
					})
				})
			]
		});
	}
	let s = (100 - 3 * (o.length - 1)) / o.length;
	return /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col px-4 py-3",
		children: [
			/* @__PURE__ */ n("div", {
				className: "min-h-0 flex-1",
				children: /* @__PURE__ */ n("svg", {
					viewBox: "0 0 100 100",
					preserveAspectRatio: "none",
					className: "h-full w-full",
					children: o.map((e, t) => {
						let r = t * (s + 3), i = e.sizePct, a = (100 - i) / 2;
						return /* @__PURE__ */ n("rect", {
							x: r,
							y: a,
							width: s,
							height: i,
							rx: "2",
							className: "fill-f1-background-secondary"
						}, t);
					})
				})
			}),
			/* @__PURE__ */ n("div", {
				className: "flex gap-1.5 pt-1.5",
				children: o.map((t, r) => /* @__PURE__ */ n("div", {
					className: "flex flex-1 justify-center",
					children: /* @__PURE__ */ n(e, { className: `h-2.5 flex-shrink-0 rounded-sm ${t.label}` })
				}, r))
			}),
			a && /* @__PURE__ */ n("div", {
				className: "flex items-center justify-center gap-4 pt-1.5",
				children: /* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-14 rounded-sm" })]
				})
			})
		]
	});
}
function p({ showLegend: t = !0, innerRadius: i = 0 } = {}) {
	let a = i > 0 ? i / 100 * 40 : 0;
	return /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col items-center px-4 py-3",
		children: [/* @__PURE__ */ n("div", {
			className: "flex min-h-0 flex-1 items-center justify-center",
			children: /* @__PURE__ */ r("svg", {
				viewBox: "0 0 100 100",
				className: "h-full max-h-[200px] w-full max-w-[200px]",
				children: [
					/* @__PURE__ */ n("circle", {
						cx: "50",
						cy: "50",
						r: 40,
						className: "fill-f1-background-secondary"
					}),
					/* @__PURE__ */ n("line", {
						x1: "50",
						y1: "50",
						x2: "50",
						y2: 10,
						stroke: "currentColor",
						strokeWidth: "1.5",
						className: "text-f1-background"
					}),
					/* @__PURE__ */ n("line", {
						x1: "50",
						y1: "50",
						x2: 84.8,
						y2: 70,
						stroke: "currentColor",
						strokeWidth: "1.5",
						className: "text-f1-background"
					}),
					/* @__PURE__ */ n("line", {
						x1: "50",
						y1: "50",
						x2: 21.6,
						y2: 78.4,
						stroke: "currentColor",
						strokeWidth: "1.5",
						className: "text-f1-background"
					}),
					/* @__PURE__ */ n("line", {
						x1: "50",
						y1: "50",
						x2: 50 - 40 * .34,
						y2: 50 - 40 * .94,
						stroke: "currentColor",
						strokeWidth: "1.5",
						className: "text-f1-background"
					}),
					a > 0 && /* @__PURE__ */ n("circle", {
						cx: "50",
						cy: "50",
						r: a,
						className: "fill-f1-background"
					})
				]
			})
		}), t && /* @__PURE__ */ r("div", {
			className: "flex items-center justify-center gap-4 pt-3",
			children: [
				/* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-10 rounded-sm" })]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-12 rounded-sm" })]
				}),
				/* @__PURE__ */ r("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-8 rounded-sm" })]
				})
			]
		})]
	});
}
function m({ showLegend: t = !0 } = {}) {
	let i = [
		1,
		.75,
		.5,
		.25
	], a = (e) => Array.from({ length: 6 }, (t, n) => {
		let r = Math.PI * 2 * n / 6 - Math.PI / 2;
		return `${50 + e * Math.cos(r)},${45 + e * Math.sin(r)}`;
	}).join(" "), o = Array.from({ length: 6 }, (e, t) => {
		let n = Math.PI * 2 * t / 6 - Math.PI / 2;
		return {
			x: 50 + 35 * Math.cos(n),
			y: 45 + 35 * Math.sin(n)
		};
	});
	return /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col items-center px-4 py-3",
		children: [/* @__PURE__ */ n("div", {
			className: "flex min-h-0 flex-1 items-center justify-center",
			children: /* @__PURE__ */ r("svg", {
				viewBox: "0 0 100 100",
				className: "h-full max-h-[220px] w-full max-w-[220px]",
				children: [
					i.map((e) => /* @__PURE__ */ n("polygon", {
						points: a(35 * e),
						fill: "none",
						strokeWidth: "0.5",
						stroke: "currentColor",
						strokeOpacity: "0.15",
						className: "text-f1-foreground-secondary"
					}, e)),
					o.map((e, t) => /* @__PURE__ */ n("line", {
						x1: 50,
						y1: 45,
						x2: e.x,
						y2: e.y,
						strokeWidth: "0.5",
						stroke: "currentColor",
						strokeOpacity: "0.15",
						className: "text-f1-foreground-secondary"
					}, t)),
					/* @__PURE__ */ n("polygon", {
						points: a(21),
						className: "fill-f1-background-secondary",
						strokeWidth: "1",
						stroke: "currentColor",
						strokeOpacity: "0.2"
					})
				]
			})
		}), t && /* @__PURE__ */ r("div", {
			className: "flex items-center justify-center gap-4 pt-3",
			children: [/* @__PURE__ */ r("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-10 rounded-sm" })]
			}), /* @__PURE__ */ r("div", {
				className: "flex items-center gap-1.5",
				children: [/* @__PURE__ */ n(e, { className: "size-2.5 rounded-full" }), /* @__PURE__ */ n(e, { className: "h-2.5 w-12 rounded-sm" })]
			})]
		})]
	});
}
function h() {
	let t = 225 * Math.PI / 180, i = -45 * Math.PI / 180, a = 50 + 35 * Math.cos(t), o = 50 - 35 * Math.sin(t), s = 50 + 35 * Math.cos(i), c = 50 - 35 * Math.sin(i), l = t - (t - i) * .5, u = 50 + 35 * Math.cos(l), d = 50 - 35 * Math.sin(l);
	return /* @__PURE__ */ r("div", {
		className: "relative flex h-full animate-pulse items-center justify-center px-4 py-3",
		children: [/* @__PURE__ */ r("svg", {
			viewBox: "0 0 100 100",
			className: "h-full max-h-[200px] w-full max-w-[200px]",
			children: [/* @__PURE__ */ n("path", {
				d: `M ${a} ${o} A 35 35 0 1 1 ${s} ${c}`,
				fill: "none",
				strokeWidth: 8,
				strokeLinecap: "round",
				stroke: "currentColor",
				strokeOpacity: "0.1",
				className: "text-f1-foreground-secondary"
			}), /* @__PURE__ */ n("path", {
				d: `M ${a} ${o} A 35 35 0 0 1 ${u} ${d}`,
				fill: "none",
				strokeWidth: 8,
				strokeLinecap: "round",
				className: "stroke-f1-background-secondary"
			})]
		}), /* @__PURE__ */ r("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ n(e, { className: "h-6 w-14 rounded-sm" }), /* @__PURE__ */ n(e, { className: "mt-2 h-3 w-16 rounded-sm" })]
		})]
	});
}
function g() {
	let t = 76 / 5, i = 83 / 4, a = [
		[
			.9,
			.4,
			.6,
			.2,
			.7
		],
		[
			.3,
			.8,
			.5,
			.7,
			.4
		],
		[
			.6,
			.2,
			.9,
			.3,
			.8
		],
		[
			.4,
			.7,
			.3,
			.6,
			.5
		]
	];
	return /* @__PURE__ */ r("div", {
		className: "flex h-full animate-pulse flex-col px-4 py-3",
		children: [/* @__PURE__ */ n("div", {
			className: "min-h-0 flex-1",
			children: /* @__PURE__ */ r("svg", {
				viewBox: "0 0 100 100",
				preserveAspectRatio: "none",
				className: "h-full w-full",
				children: [
					Array.from({ length: 4 }, (e, t) => /* @__PURE__ */ n("rect", {
						x: 0,
						y: t * 23.75 + i / 2 - 1.5,
						width: 9,
						height: 3,
						rx: 1,
						className: "fill-f1-background-secondary"
					}, `y-${t}`)),
					Array.from({ length: 4 }, (e, r) => Array.from({ length: 5 }, (e, o) => /* @__PURE__ */ n("rect", {
						x: 12 + o * 18.2,
						y: r * 23.75,
						width: t,
						height: i,
						rx: 2,
						className: "fill-f1-background-secondary",
						opacity: a[r]?.[o] ?? .5
					}, `${r}-${o}`))),
					Array.from({ length: 5 }, (e, r) => /* @__PURE__ */ n("rect", {
						x: 12 + r * 18.2 + t / 2 - 4,
						y: 95,
						width: 8,
						height: 3,
						rx: 1,
						className: "fill-f1-background-secondary"
					}, `x-${r}`))
				]
			})
		}), /* @__PURE__ */ r("div", {
			className: "flex items-center justify-center gap-2 pt-2",
			children: [
				/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" }),
				/* @__PURE__ */ n(e, { className: "h-2.5 w-20 rounded-sm" }),
				/* @__PURE__ */ n(e, { className: "h-2.5 w-5 rounded-sm" })
			]
		})]
	});
}
//#endregion
export { a as BarChartSkeleton, f as FunnelChartSkeleton, h as GaugeChartSkeleton, g as HeatmapChartSkeleton, c as LineChartSkeleton, p as PieChartSkeleton, m as RadarChartSkeleton, u as ScatterChartSkeleton };
