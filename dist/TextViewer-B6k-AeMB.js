import { jsxs as b, jsx as e } from "react/jsx-runtime";
import { useState as _, useEffect as h } from "react";
import { u as x, S as p, p as w } from "./F0CanvasPanel-DrV1MNII.js";
import { u as y, D as g } from "./DocumentToolbar-DIamkaZI.js";
const k = 2 * 1024 * 1024, v = [
  "[&_h1]:mb-3 [&_h1]:mt-6 [&_h1]:text-2xl [&_h1]:font-semibold",
  "[&_h2]:mb-2 [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-semibold",
  "[&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold",
  "[&_h4]:mb-2 [&_h4]:mt-4 [&_h4]:font-semibold",
  "[&_p]:my-3",
  "[&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-1",
  "[&_a]:text-f1-foreground-accent [&_a]:underline",
  "[&_blockquote]:my-3 [&_blockquote]:border-0 [&_blockquote]:border-l-2 [&_blockquote]:border-solid [&_blockquote]:border-f1-border [&_blockquote]:pl-3 [&_blockquote]:text-f1-foreground-secondary",
  "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-f1-background-secondary [&_pre]:p-3",
  "[&_code]:font-mono [&_code]:text-sm",
  "[&_table]:my-3 [&_table]:border-collapse",
  "[&_th]:border [&_th]:border-solid [&_th]:border-f1-border-secondary [&_th]:px-2 [&_th]:py-1 [&_th]:text-left [&_th]:font-medium",
  "[&_td]:border [&_td]:border-solid [&_td]:border-f1-border-secondary [&_td]:px-2 [&_td]:py-1",
  "[&_hr]:my-4 [&_hr]:border-f1-border-secondary"
].join(" "), q = (o, r) => !!r?.toLowerCase().includes("markdown") || o.toLowerCase().endsWith(".md") || o.toLowerCase().endsWith(".markdown"), M = ({
  url: o,
  name: r,
  mimeType: i,
  withCredentials: l = !0,
  actions: u
}) => {
  const n = x(), a = y(), [d, c] = _(null), [f, m] = _(!1);
  return h(() => {
    let s = !1;
    return c(null), m(!1), fetch(o, { credentials: l ? "include" : "same-origin" }).then((t) => {
      if (!t.ok) throw new Error(`${t.status}`);
      return t.text();
    }).then((t) => {
      s || c(t.slice(0, k));
    }).catch(() => {
      s || m(!0);
    }), () => {
      s = !0;
    };
  }, [o, l]), /* @__PURE__ */ b("div", { className: "flex h-full w-full flex-col bg-f1-background", children: [
    /* @__PURE__ */ e(
      g,
      {
        url: o,
        filename: r,
        withCredentials: l,
        actions: u,
        zoom: a
      }
    ),
    f ? /* @__PURE__ */ e("div", { className: "flex min-h-0 grow items-center justify-center text-f1-foreground-secondary", children: n.pdfViewer.previewFailed }) : d === null ? /* @__PURE__ */ e(
      p,
      {
        role: "status",
        "aria-busy": !0,
        "aria-label": n.pdfViewer.loading,
        className: "min-h-0 w-full grow rounded-none"
      }
    ) : /* @__PURE__ */ e("div", { className: "min-h-0 grow overflow-auto", children: /* @__PURE__ */ e("div", { style: { zoom: a.scale }, children: q(r, i) ? /* @__PURE__ */ e(
      "div",
      {
        className: `mx-auto max-w-3xl px-6 py-4 text-base text-f1-foreground ${v}`,
        dangerouslySetInnerHTML: {
          __html: w(d)
        }
      }
    ) : /* @__PURE__ */ e("pre", { className: "m-0 whitespace-pre-wrap break-words px-6 py-4 font-mono text-sm text-f1-foreground", children: d }) }) })
  ] });
};
export {
  M as default
};
