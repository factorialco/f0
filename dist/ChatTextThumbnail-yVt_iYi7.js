import { jsx as l } from "react/jsx-runtime";
import { useState as i, useRef as a, useEffect as x } from "react";
const h = 4096, p = ({
  url: n,
  onError: u,
  onRendered: c
}) => {
  const [f, s] = i(null), e = a(u);
  e.current = u;
  const o = a(c);
  return o.current = c, x(() => {
    let r = !1;
    return fetch(n).then((t) => {
      if (!t.ok) throw new Error(`${t.status}`);
      return t.text();
    }).then((t) => {
      if (!r) {
        if (t.trim() === "") {
          e.current();
          return;
        }
        s(t.slice(0, h)), o.current();
      }
    }).catch(() => {
      r || e.current();
    }), () => {
      r = !0;
    };
  }, [n]), f === null ? null : /* @__PURE__ */ l("pre", { className: "m-0 whitespace-pre-wrap break-words bg-f1-background p-3 text-left font-mono text-xs leading-5 text-f1-foreground-secondary", children: f });
};
export {
  p as default
};
