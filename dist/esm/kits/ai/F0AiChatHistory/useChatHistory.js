import { readFromLocalStorage as e, writeToLocalStorage as t } from "../../../lib/local-storage.js";
import { useCallback as n, useEffect as r, useState as i } from "react";
//#region src/kits/ai/F0AiChatHistory/useChatHistory.ts
var a = "f0-ai-pinned-threads";
function o() {
	let t = e(a, []);
	return new Set(Array.isArray(t) ? t : []);
}
function s(e) {
	t(a, [...e]);
}
function c({ enabled: e = !1, fetchThreads: t, deleteThread: a, pinThread: c, unpinThread: l }) {
	let [u, d] = i([]), [f, p] = i(!1), [m, h] = i(null), [g, _] = i(o), [v, y] = i(() => /* @__PURE__ */ new Set()), b = n(async () => {
		p(!0), h(null);
		try {
			let e = await t();
			d(e);
		} catch (e) {
			let t = e instanceof Error ? e.message : "Failed to fetch chat history";
			h(t), d([]);
		} finally {
			p(!1);
		}
	}, [t]);
	r(() => {
		e && b();
	}, [e, b]);
	let x = n((e, t) => {
		_((n) => {
			if (t === n.has(e)) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), s(r), r;
		});
	}, []), S = n((e, t) => {
		y((n) => {
			if (t === n.has(e)) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []), C = n((e, t) => {
		let n = t ? c : l;
		x(e, t), n && (S(e, !0), n(e).catch(() => x(e, !t)).finally(() => S(e, !1)));
	}, [
		c,
		l,
		x,
		S
	]);
	return {
		threads: u,
		isLoading: f,
		error: m,
		refetch: b,
		pinnedIds: g,
		pendingIds: v,
		pinThread: n((e) => C(e, !0), [C]),
		unpinThread: n((e) => C(e, !1), [C]),
		deleteThread: n(async (e) => {
			S(e, !0);
			try {
				await a(e), d((t) => t.filter((t) => t.id !== e)), _((t) => {
					if (!t.has(e)) return t;
					let n = new Set(t);
					return n.delete(e), s(n), n;
				});
			} catch {
				b();
			} finally {
				S(e, !1);
			}
		}, [
			a,
			b,
			S
		])
	};
}
//#endregion
export { c as useChatHistory };
