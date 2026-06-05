import { useState as A, useRef as E, useMemo as N, useEffect as R, useCallback as d } from "react";
import { filterByMimeType as _ } from "./file-utils.js";
import { useI18n as b } from "../../../lib/providers/i18n/i18n-provider.js";
const j = 4e3;
function q(p) {
  const [f, l] = A([]), [U, F] = A(null), i = E(
    null
  ), x = E(null), a = b(), m = p?.onUploadFiles, n = p?.allowedMimeTypes, o = p?.maxFiles, I = N(() => {
    if (n)
      return Array.isArray(n) ? n.join(",") : n;
  }, [n]), v = o !== void 0 && f.length >= o, T = E(0);
  R(() => {
    T.current = f.length;
  }, [f]);
  const g = d((e) => {
    i.current && clearTimeout(i.current), F(e), i.current = setTimeout(() => {
      F(null), i.current = null;
    }, j);
  }, []);
  R(
    () => () => {
      i.current && clearTimeout(i.current);
    },
    []
  );
  const h = d(
    async (e) => {
      if (e.length === 0 || !m) return;
      const s = _(e, n);
      if (s.length === 0) return;
      if (o !== void 0 && T.current + s.length > o) {
        g(
          a.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(o)
          )
        );
        return;
      }
      const c = s.map((r) => ({
        id: crypto.randomUUID(),
        file: r,
        status: "uploading"
      })), B = c.map((r) => r.id);
      l((r) => [...r, ...c]);
      const M = (r) => l(
        (u) => u.map(
          (t) => B.includes(t.id) ? { ...t, status: "error", errorMessage: r } : t
        )
      );
      try {
        const r = await m(s);
        if (!Array.isArray(r) || r.length !== s.length) {
          M(a.ai.fileUploadError);
          return;
        }
        l(
          (u) => u.map((t) => {
            const y = c.findIndex((C) => C.id === t.id);
            return y === -1 ? t : r[y] ? {
              ...t,
              status: "uploaded",
              uploadedFile: r[y]
            } : {
              ...t,
              status: "error",
              errorMessage: a.ai.fileUploadError
            };
          })
        );
      } catch (r) {
        const u = r instanceof Error && r.message ? r.message : a.ai.fileUploadError;
        M(u);
      }
    },
    [
      m,
      o,
      n,
      a.ai.tooManyFilesError,
      a.ai.fileUploadError,
      g
    ]
  ), w = d(
    async (e) => {
      await h(Array.from(e.target.files ?? [])), e.target.value = "";
    },
    [h]
  ), S = d((e) => {
    l((s) => s.filter((c) => c.id !== e));
  }, []), k = d(() => {
    l([]);
  }, []);
  return {
    attachedFiles: f,
    fileInputRef: x,
    onUploadFiles: m,
    acceptValue: I,
    isAtMaxFiles: v,
    maxFiles: o,
    processFiles: h,
    handleFileSelect: w,
    handleRemoveFile: S,
    clearFiles: k,
    transientError: U,
    showTransientError: g
  };
}
export {
  q as useFileAttachments
};
