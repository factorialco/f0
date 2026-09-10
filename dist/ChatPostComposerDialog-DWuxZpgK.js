import { jsx as c, jsxs as I } from "react/jsx-runtime";
import { useRef as M, useState as n, useCallback as v } from "react";
import { F as R } from "./CoachmarkProvider-CJVsgspx.js";
import { u as _, m as x } from "./F0CanvasPanel-BLeOzai7.js";
import { u as B, a as L, s as P } from "./experimental-NqrA03b7.js";
const N = 140, O = 1e4, K = ({
  onClose: d,
  searchMembers: f
}) => {
  const t = _(), { createPost: p } = B(), y = L(), a = M(null), [r, D] = n(""), [m, E] = n(""), [T, k] = n([]), [w, A] = n([]), [l, g] = n(!1), [H, u] = n(!1), s = r.trim().length > 0 || P(m).length > 0, b = r.trim().length > 0 && !l, h = v(() => {
    y.onPostCompositionCancelled({ hadDraft: s }), d();
  }, [y, s, d]), C = v(() => {
    if (s) {
      u(!0);
      return;
    }
    h();
  }, [s, h]), F = async () => {
    if (!(!p || !b)) {
      g(!0), a.current?.setError(null);
      try {
        const e = T.map((o) => w.find((i) => i.id === o)).filter((o) => !!o).map((o) => ({
          id: o.id,
          name: o.name,
          avatar: o.avatar,
          subtitle: o.subtitle,
          profileHref: o.profileHref
        }));
        await p({
          title: r.trim(),
          description: P(m).length > 0 ? m : void 0,
          mentions: e.length > 0 ? e : void 0
        }), a.current?.clear(), d();
      } catch {
        a.current?.setError(t.chat.community.publishError);
      } finally {
        g(!1);
      }
    }
  };
  return H ? /* @__PURE__ */ c(
    x,
    {
      isOpen: !0,
      onClose: () => u(!1),
      width: "sm",
      title: t.chat.community.discardTitle,
      description: t.chat.community.discardDescription,
      primaryAction: {
        label: t.chat.community.discard,
        onClick: h
      },
      secondaryAction: {
        label: t.chat.community.keepEditing,
        onClick: () => u(!1)
      },
      children: null
    }
  ) : /* @__PURE__ */ c(
    x,
    {
      isOpen: !0,
      onClose: C,
      width: "lg",
      title: t.chat.community.newPost,
      children: /* @__PURE__ */ I(
        "div",
        {
          className: "flex flex-col gap-3",
          "data-testid": "chat-post-composer-dialog",
          children: [
            /* @__PURE__ */ c(
              "input",
              {
                type: "text",
                "aria-label": t.chat.community.postTitle,
                placeholder: t.chat.community.postTitlePlaceholder,
                value: r,
                maxLength: N,
                autoFocus: !0,
                disabled: l,
                onChange: (e) => D(e.target.value),
                onKeyDown: (e) => {
                  e.key === "Enter" && e.preventDefault();
                },
                className: "w-full rounded-md border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-lg font-medium text-f1-foreground outline-none placeholder:font-normal placeholder:text-f1-foreground-tertiary focus-visible:border-f1-border-selected"
              }
            ),
            /* @__PURE__ */ c(
              R,
              {
                ref: a,
                title: t.chat.community.newPost,
                placeholder: t.chat.community.postBodyPlaceholder,
                height: "md",
                plainHtmlMode: !0,
                maxCharacters: O,
                disabled: l,
                mentionsConfig: f ? {
                  users: [],
                  onMentionQueryStringChanged: async (e) => {
                    const o = await f(e);
                    return A(o), o.map(
                      (i) => ({
                        id: i.id,
                        label: i.name,
                        image_url: i.avatar && "src" in i.avatar ? i.avatar.src ?? void 0 : void 0,
                        href: i.profileHref
                      })
                    );
                  }
                } : void 0,
                onChange: (e) => {
                  E(e.value ?? ""), k(e.mentionIds ?? []);
                },
                primaryAction: {
                  action: {
                    label: t.chat.community.publish,
                    onClick: () => {
                      F();
                    },
                    disabled: !b,
                    variant: "default"
                  }
                },
                secondaryAction: {
                  label: t.chat.community.cancel,
                  onClick: C,
                  disabled: l,
                  variant: "outline"
                }
              }
            )
          ]
        }
      )
    }
  );
};
export {
  K as ChatPostComposerDialog
};
