import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/New.js";
import r from "../../../icons/app/Search.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Action as a } from "../../../ui/Action/Action.js";
import { OneEllipsis as o } from "../../../lib/OneEllipsis/PlainEllipsis.js";
import { groupThreadsByDate as s } from "./utils.js";
import { CollapsibleGroup as c } from "./components/CollapsibleGroup.js";
import { ThreadListSkeleton as l } from "./components/ThreadListSkeleton.js";
import { useCallback as u, useEffect as d, useMemo as f, useState as p } from "react";
import { createPortal as m } from "react-dom";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatHistory/F0AiChatHistory.tsx
var v = ({ onClose: v, onSelectThread: y, onNewChat: b, threads: x, isLoading: S, error: C, pinnedIds: w, onPinThread: T, onUnpinThread: E, onDeleteThread: D }) => {
	let O = i(), [k, A] = p("");
	d(() => {
		let e = (e) => {
			e.key === "Escape" && v();
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [v]);
	let j = f(() => ({
		today: O.ai.today,
		yesterday: O.ai.yesterday,
		thisMonth: O.ai.thisMonth,
		older: O.ai.older
	}), [
		O.ai.today,
		O.ai.yesterday,
		O.ai.thisMonth,
		O.ai.older
	]), M = f(() => {
		if (!k.trim()) return x;
		let e = k.toLowerCase();
		return x.filter((t) => t.title.toLowerCase().includes(e));
	}, [x, k]), N = f(() => M.filter((e) => w.has(e.id)), [M, w]), P = f(() => M.filter((e) => !w.has(e.id)), [M, w]), F = f(() => s(P), [P]), I = u((e, t) => {
		y(e, t), v();
	}, [y, v]), L = u(() => {
		b(), v();
	}, [b, v]), R = u((e) => {
		D(e);
	}, [D]), z = N.length > 0 || F.length > 0;
	return m(/* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
		onClick: v,
		"aria-hidden": "true"
	}), /* @__PURE__ */ g("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": O.ai.chatHistory,
		className: e("fixed inset-0 z-50 flex items-center justify-center", "pointer-events-none", "animate-in fade-in-0 zoom-in-95"),
		children: /* @__PURE__ */ _("div", {
			className: e("pointer-events-auto relative flex w-full max-w-[600px] flex-col", "rounded-xl bg-f1-background shadow-lg", "max-h-[min(600px,80vh)]"),
			children: [/* @__PURE__ */ _("div", {
				className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3",
				children: [/* @__PURE__ */ g(t, {
					icon: r,
					color: "secondary",
					size: "md"
				}), /* @__PURE__ */ g("input", {
					type: "text",
					value: k,
					onChange: (e) => A(e.target.value),
					placeholder: O.ai.searchChats,
					className: e("w-full", "py-2.5 pr-3", "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none", "outline-none")
				})]
			}), /* @__PURE__ */ _("div", {
				className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2",
				children: [
					/* @__PURE__ */ g(a, {
						variant: "ghost",
						size: "md",
						className: "py-1 [&>div>span>span]:w-full",
						onClick: L,
						children: /* @__PURE__ */ _("div", {
							className: "flex w-full items-center gap-2",
							children: [/* @__PURE__ */ g(t, {
								icon: n,
								color: "default",
								size: "md"
							}), /* @__PURE__ */ g(o, {
								lines: 1,
								className: "text-left",
								children: O.ai.startNewChat
							})]
						})
					}),
					S && /* @__PURE__ */ g(l, {}),
					!S && C && /* @__PURE__ */ g("p", {
						className: "py-8 text-center text-base text-f1-foreground-tertiary",
						children: C
					}),
					!S && !C && !z && /* @__PURE__ */ g("p", {
						className: "py-8 text-center text-base text-f1-foreground-tertiary",
						children: O.ai.noPreviousChats
					}),
					!S && !C && N.length > 0 && /* @__PURE__ */ g(c, {
						label: O.ai.pinnedChats,
						threads: N,
						pinnedIds: w,
						onSelect: I,
						onPin: T,
						onUnpin: E,
						onDelete: R
					}),
					!S && !C && F.map((e) => /* @__PURE__ */ g(c, {
						label: j[e.key],
						threads: e.threads,
						pinnedIds: w,
						onSelect: I,
						onPin: T,
						onUnpin: E,
						onDelete: R
					}, e.key))
				]
			})]
		})
	})] }), document.body);
};
//#endregion
export { v as F0AiChatHistory };
