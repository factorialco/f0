import { jsxs as b, jsx as p } from "react/jsx-runtime";
import { useId as te, useRef as $, useState as P, useEffect as ae, useMemo as re, useCallback as d } from "react";
import { F0AvatarIcon as ie } from "../../../../components/avatars/F0AvatarIcon/index.js";
import { F0Icon as se } from "../../../../components/F0Icon/index.js";
import le from "../../../../icons/app/AlertCircle.js";
import "../../../../icons/app/Menu.js";
import ce from "../../../../icons/app/Upload.js";
import { useI18n as de } from "../../../../lib/providers/i18n/i18n-provider.js";
import { cn as pe, focusRing as ue } from "../../../../lib/utils.js";
import { useOptionalF0FormContext as me } from "../../context.js";
import { FileAttachment as ge } from "./FileAttachment.js";
const fe = /* @__PURE__ */ new Set([
  "image",
  "video",
  "audio",
  "text",
  "application"
]);
function E(e) {
  return fe.has(e) ? `${e}/*` : e;
}
const B = {
  "application/pdf": "PDF",
  "application/msword": "DOC",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
  "application/vnd.ms-excel": "XLS",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
  "application/vnd.ms-powerpoint": "PPT",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
  "application/zip": "ZIP",
  "application/json": "JSON",
  "text/plain": "TXT",
  "text/csv": "CSV",
  "text/html": "HTML",
  "text/markdown": "Markdown",
  "image/jpeg": "JPEG",
  "image/png": "PNG",
  "image/gif": "GIF",
  "image/webp": "WebP",
  "image/svg+xml": "SVG",
  "image/heic": "HEIC",
  "image/bmp": "BMP",
  "image/tiff": "TIFF",
  "video/mp4": "MP4",
  "video/webm": "WebM",
  "video/quicktime": "MOV",
  "audio/mpeg": "MP3",
  "audio/ogg": "OGG",
  "audio/wav": "WAV"
}, j = {
  "image/*": "Images",
  "video/*": "Videos",
  "audio/*": "Audio",
  "text/*": "Text files",
  "application/*": "Documents"
};
function he(e) {
  if (!e || e.length === 0) return;
  const n = [];
  for (const u of e) {
    const l = E(u);
    if (j[l])
      n.push(j[l]);
    else if (B[l])
      n.push(B[l]);
    else {
      const f = l.split("/")[1];
      f && n.push(f.toUpperCase());
    }
  }
  return n.length > 0 ? n.join(", ") : void 0;
}
function ve({
  isDragOver: e,
  hasCriticalStatus: n,
  statusType: u
}) {
  return e ? "border-f1-border-selected-bold bg-f1-background-selected" : n ? "border-f1-border-critical-bold bg-f1-background-critical/10" : u === "warning" ? "border-f1-border-warning-bold bg-f1-background" : u === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function G(e, n, u) {
  if (!e?.length) return [];
  const l = u ? Array.isArray(n) ? n : [] : typeof n == "string" && n ? [n] : [];
  if (l.length === 0) return [];
  const f = new Map(e.map((c) => [c.value, c]));
  return l.map((c) => f.get(c)).filter((c) => c != null).map((c) => ({
    key: `initial-${c.value}`,
    initialFile: c,
    value: c.value
  }));
}
function ze({
  field: e,
  formField: n,
  error: u,
  statusType: l,
  initialFiles: f
}) {
  const { forms: c } = de(), D = me(), x = D?.useUpload ?? e.useUpload, v = f ?? D?.initialFiles, N = D?.isLoadingInitialFiles ?? !1, V = te(), y = $(null), [A, C] = P(!1), i = e.multiple ?? !1, [m, h] = P(
    () => G(v, n.value, i)
  ), L = $(v != null);
  ae(() => {
    L.current || v == null || !(i ? Array.isArray(n.value) && n.value.length > 0 : n.value) || (L.current = !0, h(
      G(v, n.value, i)
    ));
  }, [v, n.value, i]);
  const [M, I] = P(null), s = c.file, R = m.length > 0, W = !(i && e.maxFiles != null && m.length >= e.maxFiles) && (i || !R), X = e.accept ? e.accept.map(E).join(",") : void 0, F = re(
    () => he(e.accept),
    [e.accept]
  ), S = d(
    (o) => e.accept && !e.accept.some((a) => {
      const t = E(a);
      return t.endsWith("/*") ? o.type.startsWith(t.replace("/*", "/")) : o.type === t;
    }) ? s.invalidFileType.replace(
      "{{types}}",
      F ?? ""
    ) : e.maxSizeMB && o.size > e.maxSizeMB * 1024 * 1024 ? s.fileTooLarge.replace(
      "{{maxSize}}",
      String(e.maxSizeMB)
    ) : null,
    [e.accept, e.maxSizeMB, s, F]
  ), k = d(
    (o) => {
      if (I(null), !i) {
        const t = o[0], r = S(t);
        if (r) {
          I(r);
          return;
        }
        x || console.warn(
          "[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config."
        );
        const g = `${t.name}-${t.size}-${Date.now()}-${Math.random()}`;
        h([{ key: g, file: t }]);
        return;
      }
      let a = null;
      h((t) => {
        const r = e.maxFiles != null ? e.maxFiles - t.length : 1 / 0;
        if (r <= 0)
          return a = s.maxFilesReached.replace(
            "{{maxFiles}}",
            String(e.maxFiles)
          ), t;
        const g = o.slice(0, r);
        o.length > r && (a = s.maxFilesReached.replace(
          "{{maxFiles}}",
          String(e.maxFiles)
        ));
        const U = [];
        for (const w of g) {
          const O = S(w);
          if (O) {
            a = O;
            continue;
          }
          x || console.warn(
            "[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config."
          ), U.push({
            key: `${w.name}-${w.size}-${Date.now()}-${Math.random()}`,
            file: w
          });
        }
        return [...t, ...U];
      }), a !== null && I(a);
    },
    [i, e.maxFiles, S, x, s]
  ), _ = d(
    (o) => {
      o.preventDefault(), o.stopPropagation(), e.disabled || C(!0);
    },
    [e.disabled]
  ), H = d((o) => {
    o.preventDefault(), o.stopPropagation(), C(!1);
  }, []), J = d(
    (o) => {
      if (o.preventDefault(), o.stopPropagation(), C(!1), e.disabled) return;
      const a = Array.from(o.dataTransfer.files);
      a.length > 0 && k(a);
    },
    [e.disabled, k]
  ), K = d(
    (o) => {
      const a = Array.from(o.target.files ?? []);
      a.length > 0 && k(a), y.current && (y.current.value = "");
    },
    [k]
  ), z = d(() => {
    e.disabled || y.current?.click();
  }, [e.disabled]), q = d(
    (o) => {
      (o.key === "Enter" || o.key === " ") && (o.preventDefault(), z());
    },
    [z]
  ), Z = d(
    (o, a) => {
      if (h(
        (t) => t.map((r) => r.key === o ? { ...r, value: a } : r)
      ), i) {
        const t = Array.isArray(n.value) ? n.value : [];
        n.onChange([...t, a]);
      } else
        n.onChange(a);
    },
    [i, n]
  ), Q = d(
    (o) => {
      const a = m.find((t) => t.key === o);
      if (h((t) => t.filter((r) => r.key !== o)), a?.value)
        if (i) {
          const t = Array.isArray(n.value) ? n.value : [];
          n.onChange(t.filter((r) => r !== a.value));
        } else
          n.onChange(void 0);
      else i || n.onChange(void 0);
      n.onBlur();
    },
    [m, i, n]
  ), Y = d((o, a) => {
    h(
      (t) => t.map(
        (r) => r.key === o ? { ...r, error: a } : r
      )
    );
  }, []), ee = A ? s.dropzoneActive : e.description ?? (i ? s.dropzoneMultiple : s.dropzone), T = !!(u || M || l === "error"), oe = T || l === "warning" || l === "info", ne = ve({
    isDragOver: A,
    hasCriticalStatus: T,
    statusType: l
  });
  return /* @__PURE__ */ b("div", { className: "flex flex-col gap-4", children: [
    N && !R && /* @__PURE__ */ b("div", { className: "flex animate-pulse flex-col gap-2 rounded-xl border border-dashed border-f1-border px-4 py-10", children: [
      /* @__PURE__ */ p("div", { className: "mx-auto h-8 w-8 rounded-full bg-f1-background-secondary" }),
      /* @__PURE__ */ p("div", { className: "mx-auto h-4 w-32 rounded bg-f1-background-secondary" })
    ] }),
    !N && W && /* @__PURE__ */ b(
      "div",
      {
        role: "button",
        tabIndex: e.disabled ? -1 : 0,
        onDragOver: _,
        onDragLeave: H,
        onDrop: J,
        onClick: z,
        onKeyDown: q,
        "aria-disabled": e.disabled,
        className: pe(
          "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-[1px] border-dashed px-4 py-10 transition-colors",
          ne,
          !e.disabled && !A && !oe && "hover:border-f1-border-hover hover:bg-f1-background-secondary",
          e.disabled && "cursor-not-allowed opacity-50",
          ue("rounded-xl")
        ),
        children: [
          /* @__PURE__ */ p(ie, { icon: ce, size: "md" }),
          /* @__PURE__ */ b("div", { className: "flex flex-col items-center gap-0.5", children: [
            /* @__PURE__ */ p("span", { className: "text-center text-base font-medium text-f1-foreground", children: ee }),
            F && /* @__PURE__ */ p("span", { className: "text-center text-base text-f1-foreground-secondary", children: s.acceptedTypes.replace(
              "{{types}}",
              F
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ p(
      "input",
      {
        ref: y,
        id: V,
        type: "file",
        accept: X,
        multiple: i,
        onChange: K,
        className: "hidden",
        "aria-hidden": "true",
        tabIndex: -1
      }
    ),
    M && /* @__PURE__ */ b("div", { className: "-mt-2 flex items-center gap-1", children: [
      /* @__PURE__ */ p(se, { icon: le, color: "critical" }),
      /* @__PURE__ */ p("p", { className: "text-sm font-medium text-f1-foreground-critical", children: M })
    ] }),
    m.length > 0 && /* @__PURE__ */ p("div", { className: "flex flex-col", children: m.map((o, a) => {
      const t = m.length, r = t === 1 ? "single" : a === 0 ? "top" : a === t - 1 ? "bottom" : "middle";
      return /* @__PURE__ */ p(
        ge,
        {
          className: a > 0 ? "-mt-px" : void 0,
          entry: o,
          useUpload: o.file ? x : void 0,
          onUploadComplete: (g) => Z(o.key, g),
          onRemove: () => Q(o.key),
          onError: (g) => Y(o.key, g),
          disabled: e.disabled,
          position: r,
          translations: {
            remove: s.remove,
            uploading: s.uploading,
            processing: s.processing,
            uploadFailed: s.uploadFailed
          }
        },
        o.key
      );
    }) })
  ] });
}
export {
  ze as FileFieldRenderer
};
