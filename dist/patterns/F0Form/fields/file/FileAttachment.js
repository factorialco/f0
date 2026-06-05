import { jsxs as F, jsx as s } from "react/jsx-runtime";
import { useState as A, useRef as M, useCallback as b, useEffect as R } from "react";
import C from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { cn as D } from "../../../../lib/utils.js";
import { F0AvatarFile as E } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { F0Button as H } from "../../../../components/F0Button/F0Button.js";
function K(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
const L = {
  single: "rounded-xl",
  top: "rounded-t-xl rounded-b-none",
  middle: "rounded-none",
  bottom: "rounded-b-xl rounded-t-none"
};
function Q({
  entry: e,
  useUpload: h,
  onUploadComplete: d,
  onRemove: t,
  onError: u,
  disabled: z,
  position: N = "single",
  className: $,
  translations: l
}) {
  const i = !!e.file, n = h?.(), c = n?.upload, f = n?.cancelUpload, k = n?.progress ?? 0, o = n?.status ?? "idle", [a, v] = A(null), p = M(!1), m = b(async () => {
    if (!(!i || !e.file || !c) && !p.current) {
      p.current = !0;
      try {
        const r = await c(e.file);
        r.type === "success" ? d(r.value) : t();
      } catch {
        const r = l.uploadFailed;
        v(r), u(r);
      }
    }
  }, [
    i,
    e.file,
    c,
    d,
    t,
    u,
    l
  ]);
  R(() => {
    i && m();
  }, [i, m]);
  const w = b(() => {
    i && (o === "uploading" || o === "processing") && f?.(), t();
  }, [i, o, f, t]), B = i && (o === "uploading" || o === "processing"), S = Math.round(k * 100), U = e.file ?? {
    name: e.initialFile?.name ?? "",
    type: e.initialFile?.type ?? ""
  }, j = e.file?.name ?? e.initialFile?.name ?? "", g = e.file?.size ?? e.initialFile?.size, x = a || (B ? o === "processing" ? l.processing : `${l.uploading} ${S}%` : g != null ? K(g) : null);
  return /* @__PURE__ */ F(
    "div",
    {
      className: D(
        "flex items-center gap-[10px] border border-solid bg-f1-background p-3",
        L[N],
        a ? "border-f1-border-critical" : "border-f1-border-secondary",
        $
      ),
      children: [
        /* @__PURE__ */ s(E, { file: U, size: "lg" }),
        /* @__PURE__ */ F("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ s("span", { className: "truncate text-sm font-medium text-f1-foreground", children: j }),
          x && /* @__PURE__ */ s("span", { className: "text-sm text-f1-foreground-secondary", children: x })
        ] }),
        !z && /* @__PURE__ */ s(
          H,
          {
            variant: "outline",
            size: "sm",
            label: l.remove,
            onClick: w,
            icon: C,
            hideLabel: !0
          }
        )
      ]
    }
  );
}
export {
  Q as FileAttachment
};
