import { useState as a, useCallback as o, useEffect as I } from "react";
import { readFromLocalStorage as x, writeToLocalStorage as L } from "../F0AiChat/utils/local-storage.js";
const y = "f0-ai-pinned-threads";
function P() {
  const r = x(y, []);
  return new Set(Array.isArray(r) ? r : []);
}
function d(r) {
  L(y, [...r]);
}
function N({
  enabled: r = !1,
  fetchThreads: f,
  deleteThread: l
}) {
  const [w, c] = a([]), [S, u] = a(!1), [m, h] = a(null), [T, i] = a(P), s = o(async () => {
    u(!0), h(null);
    try {
      const e = await f();
      c(e);
    } catch (e) {
      const n = e instanceof Error ? e.message : "Failed to fetch chat history";
      h(n), c([]);
    } finally {
      u(!1);
    }
  }, [f]);
  I(() => {
    r && s();
  }, [r, s]);
  const g = o((e) => {
    i((n) => {
      const t = new Set(n);
      return t.add(e), d(t), t;
    });
  }, []), p = o((e) => {
    i((n) => {
      const t = new Set(n);
      return t.delete(e), d(t), t;
    });
  }, []), E = o(
    async (e) => {
      try {
        await l(e), c((n) => n.filter((t) => t.id !== e)), i((n) => {
          if (!n.has(e)) return n;
          const t = new Set(n);
          return t.delete(e), d(t), t;
        });
      } catch {
        s();
      }
    },
    [l, s]
  );
  return {
    threads: w,
    isLoading: S,
    error: m,
    refetch: s,
    pinnedIds: T,
    pinThread: g,
    unpinThread: p,
    deleteThread: E
  };
}
export {
  N as useChatHistory
};
