import { jsx as t, jsxs as v, Fragment as fe } from "react/jsx-runtime";
import { g as G, A as de, h as J, m as w, i as pe, j as Te, k as je, a as me, f as Ge, l as Ve, n as We, o as qe, p as Ke, u as R, q as F, B as K, r as Ye, s as _e, t as Xe, v as Je, w as ke, x as Ze, y as Qe, b as et, z as tt, F as nt, D as rt, E as Ae, G as st, H as ge, c as ot, J as at } from "./F0MessageSources-BYW44c9n.js";
import { useCopilotChatInternal as V, useCopilotContext as Me, useCopilotAction as he, CopilotKit as it } from "@copilotkit/react-core";
import { Markdown as lt, useChatContext as ct, CopilotSidebar as ut } from "@copilotkit/react-ui";
import { forwardRef as dt, useState as B, useEffect as T, useContext as ne, createContext as ve, useRef as y, useCallback as le, useMemo as te } from "react";
import { randomId as pt } from "@copilotkit/shared";
const ht = {
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0.5,
    opacity: 0
  }
}, ft = {
  duration: 0.15,
  ease: "easeOut"
}, Ie = dt(({ valueToCopy: e, onCopy: n, copyTooltipLabel: o, copiedTooltipLabel: s, variant: r = "neutral", size: a = "sm", ...i }, g) => {
  const [m, u] = B(!1), l = G(), p = o ?? l.actions.copy, c = m ? s ?? "Copied" : p;
  return T(() => {
    let b = null;
    return m && (b = setTimeout(() => u(!1), 1e3)), () => {
      b && clearTimeout(b);
    };
  }, [m]), t(de, {
    ref: g,
    variant: r,
    size: a,
    onClick: (b) => {
      b.stopPropagation(), window.navigator.clipboard.writeText(e), u(!0), n?.(b);
    },
    "aria-live": "polite",
    "aria-label": c,
    title: c,
    ...i,
    compact: !0,
    children: t(J, {
      mode: "wait",
      initial: !1,
      children: t(w.span, {
        variants: ht,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: ft,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle"
        },
        children: t(pe, {
          size: a === "sm" ? "sm" : "md",
          icon: m ? Te : je
        })
      }, m ? "check" : "copy")
    })
  });
});
Ie.displayName = "ButtonCopy";
const Ne = ve(null), Se = ({ children: e }) => {
  const [n, o] = B(null), s = n ? {
    isOpen: !0,
    currentReaction: n.action,
    currentMessage: n.message,
    open: (r, a) => o({
      action: r,
      message: a
    }),
    close: () => o(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (r, a) => o({
      action: r,
      message: a
    }),
    close: () => o(null)
  };
  return t(Ne.Provider, {
    value: s,
    children: e
  });
}, be = () => {
  const e = ne(Ne);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, Fe = ({ isGenerating: e, isLoading: n, markdownTagRenderers: o, message: s, onCopy: r }) => {
  const a = s?.content || "", i = s?.role === "assistant" && s.toolCalls?.find((c) => c.function.name === "orchestratorThinking"), g = s?.generativeUI?.(i ? {
    status: n ? "executing" : "completed"
  } : void 0), m = !a && !g, u = G(), { open: l } = be(), [p, d] = B(null);
  return !n && !e && m ? null : v("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center gap-1",
    children: [n && !g && t(me, {
      title: u.ai.thinking,
      status: "executing"
    }), s && v(fe, {
      children: [t("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: t(lt, {
          content: a,
          components: {
            ...Ge,
            ...o
          }
        })
      }), !e && !n && !!a && v("div", {
        className: "flex",
        children: [t(Ie, {
          size: "md",
          variant: "ghost",
          valueToCopy: a,
          disabled: e,
          onCopy: (c) => {
            c.currentTarget.blur(), r?.(a);
          }
        }), t(de, {
          onClick: (c) => {
            const h = p === "like" ? null : "like";
            h && l(h, s), d(h), c.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": u.actions.thumbsUp,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(pe, {
              size: "md",
              icon: p === "like" ? Ve : We,
              color: "default"
            })
          })
        }), t(de, {
          onClick: (c) => {
            const h = p === "dislike" ? null : "dislike";
            h && l(h, s), d(h), c.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": u.actions.thumbsDown,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(pe, {
              size: "md",
              icon: p === "dislike" ? qe : Ke,
              color: "default"
            })
          })
        })]
      })]
    }), !!g && t("div", {
      className: "w-full",
      children: g
    })]
  });
}, mt = () => null, gt = (e) => {
  const { labels: n } = ct(), { messages: o } = V(), { setOpen: s, clear: r } = R(), a = G(), i = n.title === "CopilotKit", g = o.length > 0;
  return v("header", {
    className: F("flex justify-between border-0 border-solid border-f1-border-secondary p-[16px]"),
    children: [t("h2", {
      className: "text-f1-foreground",
      children: i ? "" : n.title
    }), v(w.div, {
      layout: !0,
      className: "flex items-center",
      ...e,
      children: [g && t(K, {
        variant: "ghost",
        hideLabel: !0,
        label: a.ai.startNewChat,
        icon: Ye,
        onClick: () => {
          r();
        }
      }), t(K, {
        variant: "ghost",
        hideLabel: !0,
        label: a.ai.closeChat,
        icon: _e,
        onClick: () => s(!1)
      })]
    })]
  });
}, vt = ({ placeholders: e, defaultPlaceholder: n, inputValue: o, inProgress: s }) => {
  const [r, a] = B(""), [i, g] = B(0), [m, u] = B(!1), l = y(null), p = y(null), d = y(null), c = e[i] ?? n;
  return T(() => {
    const h = () => {
      p.current && (clearInterval(p.current), p.current = null), d.current && (clearInterval(d.current), d.current = null), l.current && (clearTimeout(l.current), l.current = null);
    };
    if (o.length > 0 || s) {
      u(!1), a(""), h();
      return;
    }
    u(!0), a("");
    let b = 0;
    const Y = 50, D = 30, W = 2e3, $ = 1e3;
    return p.current = setInterval(() => {
      b < c.length ? (a(c.slice(0, b + 1)), b++) : (p.current && (clearInterval(p.current), p.current = null), l.current = setTimeout(() => {
        d.current = setInterval(() => {
          b > 0 ? (b--, a(c.slice(0, b))) : (d.current && (clearInterval(d.current), d.current = null), l.current = setTimeout(() => {
            const Z = (i + 1) % Math.max(e.length, 1);
            g(Z);
          }, $));
        }, D);
      }, W));
    }, Y), () => {
      h();
    };
  }, [o, s, c, i, e.length]), o.length > 0 || s ? null : t(J, {
    children: t(w.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        duration: 0.4
      },
      className: F("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "text-[14px] leading-[20px] font-normal", "sm:pt-3 sm:px-3"),
      children: v("div", {
        className: F("overflow-hidden text-ellipsis whitespace-nowrap", "sm:whitespace-pre-wrap sm:break-words sm:overflow-visible"),
        children: [r, m && t(w.span, {
          animate: {
            opacity: [1, 0]
          },
          transition: {
            duration: 0.8,
            repeat: 1 / 0,
            ease: "easeInOut"
          },
          children: "|"
        })]
      })
    })
  });
}, Re = ({ submitLabel: e, inProgress: n, onSend: o, onStop: s }) => {
  const [r, a] = B(""), i = y(null), g = y(null), m = G(), { placeholders: u } = R(), l = r.trim().length > 0, p = (h) => {
    h.preventDefault(), n ? s?.() : l && (o(r.trim()), a("")), g.current?.focus();
  }, d = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), n || i.current?.requestSubmit());
  }, c = u.length > 1;
  return v(w.form, {
    "aria-busy": n,
    ref: i,
    className: F("relative isolate", "flex flex-row items-end gap-2 sm:flex-col sm:items-stretch sm:gap-3", "rounded-lg border border-solid border-f1-border", "transition-all hover:cursor-text", "py-1 pl-3 pr-1 sm:p-0", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-background before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:scale-90 after:opacity-0", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:transition-all after:delay-200 after:duration-300", "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"),
    animate: {
      "--gradient-angle": ["0deg", "360deg"]
    },
    transition: {
      duration: 6,
      ease: "linear",
      repeat: 1 / 0
    },
    style: {
      "--gradient-angle": "180deg"
    },
    onClick: () => {
      g.current?.focus();
    },
    onSubmit: p,
    children: [v("div", {
      className: F("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-2.5 sm:min-h-[40px] sm:py-0"),
      children: [t("div", {
        "aria-hidden": !0,
        className: F("col-start-1 row-start-1", "pointer-events-none invisible", "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px]", "whitespace-pre-wrap break-words", "text-[16px] text-f1-foreground sm:text-base", "sm:mt-3 sm:px-3"),
        children: r.endsWith(`
`) ? r + "_" : r
      }), !r && !c && t("p", {
        className: F("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "text-[14px] leading-[20px] font-normal", "sm:pt-3 sm:px-3", "overflow-hidden text-ellipsis whitespace-nowrap", "sm:whitespace-normal sm:overflow-visible"),
        children: m.ai.inputPlaceholder
      }), t("textarea", {
        autoFocus: !0,
        name: "one-ai-input",
        rows: 1,
        ref: g,
        value: r,
        onChange: (h) => {
          a(h.target.value);
        },
        onKeyDown: d,
        className: F("col-start-1 row-start-1", "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px] sm:h-auto", "resize-none", "whitespace-pre-wrap break-words", "text-[14px] leading-[20px] font-normal text-f1-foreground", "px-0 sm:mt-3 sm:px-3", "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "outline-none transition-all", r || !c ? "caret-f1-foreground" : "caret-transparent")
      }), c && t(vt, {
        placeholders: u,
        defaultPlaceholder: m.ai.inputPlaceholder,
        inputValue: r,
        inProgress: n
      })]
    }), t("div", {
      className: "flex shrink-0 flex-row-reverse p-1 sm:p-2 sm:pt-0",
      children: n ? t(K, {
        type: "submit",
        variant: "neutral",
        label: m.ai.stopAnswerGeneration,
        icon: Xe,
        hideLabel: !0
      }) : t(K, {
        type: "submit",
        disabled: !l,
        variant: l ? "default" : "neutral",
        label: e || m.ai.sendMessage,
        icon: e ? void 0 : Je,
        hideLabel: !e
      })
    })]
  });
}, bt = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: o
}) => {
  const s = y(null);
  T(() => (o ? s.current && (clearTimeout(s.current), s.current = null) : e !== null && (s.current = setTimeout(
    () => {
      n();
    },
    e * 60 * 1e3
  )), () => {
    s.current && (clearTimeout(s.current), s.current = null);
  }), [n, o, e]);
}, wt = ({ children: e }) => {
  const { open: n, shouldPlayEntranceAnimation: o, setShouldPlayEntranceAnimation: s, autoClearMinutes: r } = R(), { reset: a } = V();
  return bt({
    reset: a,
    isOpen: n,
    autoClearMinutes: r
  }), t(J, {
    children: n && t(w.div, {
      "aria-hidden": !n,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: o ? {
        opacity: 0,
        width: 0
      } : !1,
      animate: {
        opacity: 1,
        width: 360
      },
      exit: {
        opacity: 0,
        width: 0
      },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        o && s(!1);
      },
      children: t(w.div, {
        className: "relative flex h-full w-[360px] flex-col overflow-hidden",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: o ? 0.3 : 0.05,
          ease: "easeOut",
          delay: o ? 0.2 : 0
        },
        children: e
      })
    }, "chat-window")
  });
}, qt = ({ text: e, confirmationText: n, onConfirm: o, cancelText: s, onCancel: r }) => v("div", {
  className: "flex flex-col gap-2",
  children: [e && t("p", {
    children: e
  }), v("div", {
    className: "flex gap-2",
    children: [t(ke, {
      type: "button",
      variant: "outline",
      size: "sm",
      icon: Te,
      onClick: o,
      label: n
    }), t(ke, {
      type: "button",
      variant: "ghost",
      size: "sm",
      onClick: r,
      label: s
    })]
  })]
});
function yt(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
const xt = ["buttonToggle"], kt = (e) => {
  const n = xt.reduce((o, s) => {
    const { [s]: r, ...a } = o;
    return a;
  }, e);
  return t(Ze, {
    ...n
  });
}, Ee = ({ onClose: e, onSubmit: n, reactionType: o, message: s }) => {
  const [r, a] = B(""), i = G(), { title: g, label: m, placeholder: u } = o === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, l = le(() => {
    n(s, r);
  }, [r, s, n]), p = () => {
    e(s);
  };
  return T(() => {
    const d = (c) => {
      c.key === "Enter" && (c.preventDefault(), l());
    };
    return document.addEventListener("keydown", d), () => {
      document.removeEventListener("keydown", d);
    };
  }, [l]), t(Qe, {
    position: "center",
    isOpen: !0,
    onClose: p,
    width: "sm",
    title: g,
    primaryAction: {
      label: i.actions.send,
      onClick: l
    },
    secondaryAction: {
      label: i.actions.cancel,
      onClick: p
    },
    children: t("div", {
      className: "flex flex-col gap-6",
      children: t(kt, {
        autoFocus: !0,
        label: m,
        placeholder: u,
        value: r,
        onChange: (d) => a(d.trim()),
        size: "md",
        type: "text"
      })
    })
  });
}, Le = ({ messages: e }) => {
  const n = G();
  return t(et, {
    icon: tt,
    title: n.ai.thoughtsGroupTitle,
    children: t("div", {
      className: "flex flex-col gap-2 pl-7",
      children: e.map((o, s) => t("div", {
        children: o.role === "assistant" && o.generativeUI?.({
          status: "complete",
          result: {
            inGroup: !0
          }
        })
      }, s))
    })
  });
}, Ct = 3;
function Tt(e, n = Ct) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, n);
}
const Be = ({ greeting: e, initialMessages: n = [], suggestions: o = [] }) => {
  const { sendMessage: s } = V(), r = te(() => Tt(o), [o]);
  return t(J, {
    mode: "popLayout",
    children: v(w.div, {
      className: "flex w-full flex-1 flex-col justify-end gap-4",
      initial: {
        opacity: 1
      },
      children: [v("div", {
        className: "pl-3",
        children: [t(w.div, {
          className: "flex w-fit justify-center",
          initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(6px)"
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          },
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.4
          },
          children: t(nt, {
            spin: !0,
            size: "lg",
            className: "my-4"
          })
        }), e && t(w.p, {
          className: "text-lg font-semibold text-f1-foreground-secondary",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            y: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
          },
          transition: {
            duration: 0.2,
            ease: "easeOut",
            delay: 0.5
          },
          children: e
        }), n.map((a) => t(w.p, {
          className: "text-lg font-semibold text-f1-foreground",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            y: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
          },
          transition: {
            duration: 0.2,
            ease: "easeOut",
            delay: 0.7
          },
          children: a.content
        }, a.id))]
      }), t("div", {
        className: "flex flex-col items-start gap-2 px-3 pb-1 sm:px-0 sm:pb-0",
        children: r.map((a, i) => t(w.div, {
          className: "w-full",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            y: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
          },
          transition: {
            duration: 0.1,
            ease: "easeOut",
            delay: 0.9 + i * 0.1
          },
          children: t("div", {
            children: t(K, {
              variant: "ghost",
              className: "border border-solid border-f1-border shadow sm:border-none sm:shadow-none",
              label: a.message,
              icon: a.icon,
              onClick: () => s({
                id: pt(),
                role: "user",
                content: a.prompt || a.message
              })
            })
          })
        }, i))
      })]
    }, "welcome")
  });
}, At = (e) => t(Se, {
  children: t(Mt, {
    ...e
  })
}), Mt = ({ inProgress: e, children: n, RenderMessage: o, AssistantMessage: s, UserMessage: r, ImageRenderer: a, onRegenerate: i, onCopy: g, markdownTagRenderers: m }) => {
  const u = y(null), { messages: l, interrupt: p } = V(), { threadId: d } = Me(), { close: c, currentReaction: h, currentMessage: b, isOpen: Y } = be(), D = G(), { greeting: W, initialMessage: $, welcomeScreenSuggestions: Z, onThumbsUp: re, onThumbsDown: _ } = R(), Q = te(() => It($ || D.ai.defaultInitialMessage), [$, D.ai.defaultInitialMessage]), ee = l.length == 0 && (W || Q.length > 0), { messagesContainerRef: se, messagesEndRef: oe, showScrollToBottom: ae, scrollToBottom: X } = Pe(), { height: A = 0 } = rt({
    ref: se,
    box: "border-box"
  }), q = te(() => Oe(l), [l]);
  return T(() => {
    X("instant");
  }, [l.length, X]), v(fe, {
    children: [v(w.div, {
      layout: !0,
      className: F("scrollbar-macos relative isolate flex flex-1 flex-col pl-[16px] pr-[8px] pt-[16px]", "overflow-y-scroll overflow-x-hidden"),
      ref: se,
      children: [v(w.div, {
        layout: "position",
        ref: u,
        className: ee ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [ee && t(Be, {
          greeting: W,
          initialMessages: Q,
          suggestions: Z
        }), q.map((H, E) => {
          const L = E === q.length - 1;
          return t("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: L ? A * 0.8 : void 0
            },
            children: H.map((P, O) => {
              const U = E === q.length - 1 && O === H.length - 1;
              return Array.isArray(P) && !U ? t(Le, {
                messages: P,
                isActive: !1,
                inProgress: e,
                RenderMessage: o,
                AssistantMessage: s
              }, `${E}-${O}`) : t(o, {
                message: Array.isArray(P) ? P[P.length - 1] : P,
                inProgress: e,
                index: O,
                isCurrentMessage: U,
                AssistantMessage: s,
                UserMessage: r,
                ImageRenderer: a,
                onRegenerate: i,
                onCopy: g,
                markdownTagRenderers: m
              }, `${E}-${O}`);
            })
          }, `turn-${E}`);
        }), p]
      }), t("footer", {
        className: "copilotKitMessagesFooter",
        ref: oe,
        children: n
      }), t(J, {
        children: ae && t(w.div, {
          className: "sticky bottom-2 z-10 flex justify-center",
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.2
          },
          children: t("div", {
            className: "rounded bg-f1-background",
            children: t(K, {
              onClick: () => X(),
              label: D.ai.scrollToBottom,
              variant: "neutral",
              icon: Ae,
              hideLabel: !0
            })
          })
        })
      })]
    }), Y && t(Ee, {
      onSubmit: (H, E) => {
        (h === "like" ? re : _)?.(H, {
          threadId: d,
          feedback: E
        }), c();
      },
      onClose: (H) => {
        (h === "like" ? re : _)?.(H, {
          threadId: d,
          feedback: ""
        }), c();
      },
      reactionType: h,
      message: b
    })]
  });
};
function It(e) {
  const n = [];
  return e && (Array.isArray(e) ? n.push(...e) : n.push(e)), n.map((o) => ({
    id: o,
    role: "assistant",
    content: o
  }));
}
function Pe() {
  const e = y(null), n = y(null), o = y(!1), s = y(!1), [r, a] = B(!1), i = le((l = "smooth") => {
    n.current && e.current && (a(!1), o.current = !0, e.current.scrollIntoView({
      behavior: l
    }));
  }, []), g = () => {
    if (n.current) {
      const { scrollTop: l, scrollHeight: p, clientHeight: d } = n.current, c = 20;
      s.current = l + d + c < p;
    } else
      s.current = !1;
  }, m = () => {
    if (!n.current) {
      a(!1);
      return;
    }
    const { scrollTop: l, scrollHeight: p, clientHeight: d } = n.current, c = l < p - 3 * d;
    a(c);
  }, u = le(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    g(), m();
  }, []);
  return st("scroll", u, n), T(() => {
    const l = n.current;
    if (!l)
      return;
    i("instant");
    const p = new MutationObserver(() => {
      m(), i("instant");
    });
    return p.observe(l, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      p.disconnect();
    };
  }, [i]), {
    messagesEndRef: e,
    messagesContainerRef: n,
    showScrollToBottom: r,
    scrollToBottom: i
  };
}
function Oe(e) {
  if (e.length === 0)
    return [];
  console.assert(e[0].role === "user", "Invariant violation! Assistant message received before user message");
  const n = [];
  for (const [o, s] of e.entries()) {
    if (s.role === "user") {
      n.push([s]);
      continue;
    }
    const r = n[n.length - 1];
    if (yt(s) && Ce(r)) {
      if (o !== e.length - 1) {
        const a = r.pop();
        r.push(s, a);
      }
      continue;
    }
    if (Nt(s)) {
      Ce(r) ? r.at(-1).push(s) : r.push([s]);
      continue;
    }
    r.push(s);
  }
  return n;
}
function Nt(e) {
  return e.role === "assistant" && e.toolCalls?.some((n) => n.function.name === "orchestratorThinking") === !0;
}
function Ce(e) {
  const n = e.at(-1);
  return Array.isArray(n);
}
const De = ({ message: e, ImageRenderer: n }) => {
  const o = e && "image" in e && e.image, s = y(null), a = !!ne(ce)?.setInProgress;
  if (T(() => {
    !s.current || a || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [a]), o) {
    const i = e;
    return t("div", {
      className: "copilotKitMessage copilotKitUserMessage",
      children: t(n, {
        image: i.image,
        content: i.content
      })
    });
  }
  return t("div", {
    ref: s,
    className: "my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
    children: e?.content
  });
}, St = (e) => t(Se, {
  children: t(Ft, {
    ...e
  })
}), Ft = ({ inProgress: e, RenderMessage: n, AssistantMessage: o, UserMessage: s, ImageRenderer: r, onRegenerate: a, onCopy: i, markdownTagRenderers: g }) => {
  const m = y(null), { messages: u, interrupt: l, isLoading: p } = V(), d = e ?? p, c = o ?? Fe, h = s ?? De, b = r ?? (({ image: f, content: x }) => t("img", {
    src: f,
    alt: x || "Assistant image",
    className: "max-w-full rounded-lg"
  })), { threadId: Y } = Me(), { setInProgress: D } = ne(ce), { close: W, currentReaction: $, currentMessage: Z, isOpen: re } = be();
  T(() => {
    D(d);
  }, [d, D]);
  const _ = G(), { greeting: Q, initialMessage: ee, welcomeScreenSuggestions: se, onThumbsUp: oe, onThumbsDown: ae } = R(), X = te(() => Rt(ee || _.ai.defaultInitialMessage), [ee, _.ai.defaultInitialMessage]), A = u.length === 0 && (Q || X.length > 0), { messagesContainerRef: q, messagesEndRef: H, showScrollToBottom: E, scrollToBottom: L } = Pe(), P = te(() => Oe(u), [u]), O = y(u.length), U = u[u.length - 1]?.content || "", ue = y(U);
  return T(() => {
    const f = u.length > O.current, x = u.length === O.current && U !== ue.current;
    if (f || x) {
      const k = u[u.length - 1]?.role === "user", I = (N = "instant") => {
        const S = q.current;
        if (S) {
          const z = k ? 400 : 250, C = S.scrollHeight - S.scrollTop - S.clientHeight < z;
          (k || C) && L(N);
        }
      };
      if (f) {
        I("instant");
        const N = [50, 150, 400].map((S) => setTimeout(() => I("instant"), S));
        return O.current = u.length, ue.current = U, () => N.forEach(clearTimeout);
      } else x && I("instant");
    }
    O.current = u.length, ue.current = U;
  }, [u.length, U, L]), T(() => {
    const f = q.current;
    if (!f) return;
    let x = !0;
    const M = () => {
      x = f.scrollHeight - f.scrollTop - f.clientHeight < 150;
    }, k = () => {
      const j = [50, 150, 300, 600].map((ie) => setTimeout(() => {
        x && L("instant");
      }, ie));
      return () => j.forEach(clearTimeout);
    }, I = (C) => {
      const j = C.target;
      (j.tagName === "TEXTAREA" || j.tagName === "INPUT" && j.type === "text") && setTimeout(() => {
        L("instant"), setTimeout(() => L("instant"), 300);
      }, 100);
    }, N = (C) => {
      f._startY = C.touches[0].pageY;
    }, S = (C) => {
      const { scrollTop: j, scrollHeight: ie, clientHeight: we } = f, He = j <= 0, Ue = j + we >= ie, ye = C.touches[0].pageY, ze = f._startY || ye, xe = ye > ze ? "down" : "up";
      (ie <= we || He && xe === "down" || Ue && xe === "up") && C.cancelable && C.preventDefault();
    }, z = new ResizeObserver(k);
    return z.observe(f), f.addEventListener("scroll", M), f.addEventListener("touchstart", N, {
      passive: !0
    }), f.addEventListener("touchmove", S, {
      passive: !1
    }), window.addEventListener("resize", k), window.addEventListener("focusin", I), window.visualViewport && (window.visualViewport.addEventListener("resize", k), window.visualViewport.addEventListener("scroll", k)), () => {
      z.disconnect(), f.removeEventListener("scroll", M), f.removeEventListener("touchstart", N), f.removeEventListener("touchmove", S), window.removeEventListener("resize", k), window.removeEventListener("focusin", I), window.visualViewport && (window.visualViewport.removeEventListener("resize", k), window.visualViewport.removeEventListener("scroll", k));
    };
  }, [L]), v(fe, {
    children: [v("div", {
      ref: q,
      className: F("scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4", A ? "justify-end pt-0" : "justify-start pt-3"),
      style: {
        minHeight: 0,
        flex: "1 1 auto",
        overflowY: A ? "hidden" : "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: A ? "flex-end" : "flex-start",
        position: "relative",
        touchAction: A ? "none" : "pan-y",
        paddingTop: A ? 0 : void 0,
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        transform: "translateZ(0)",
        willChange: "scroll-position"
      },
      children: [v("div", {
        ref: m,
        className: A ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: A ? "100%" : void 0,
          flexGrow: 1,
          flexShrink: 1,
          alignItems: "stretch",
          paddingBottom: A ? "12px" : void 0
        },
        children: [A && t(Be, {
          greeting: Q,
          initialMessages: X,
          suggestions: se
        }), P.map((f, x) => t("div", {
          className: "flex flex-col items-start justify-start gap-2",
          children: f.map((M, k) => {
            const I = x === P.length - 1 && k === f.length - 1;
            if (Array.isArray(M) && !I)
              return t(Le, {
                messages: M,
                isActive: !1,
                inProgress: d,
                RenderMessage: n,
                AssistantMessage: c
              }, `${x}-${k}`);
            const N = Array.isArray(M) ? M[M.length - 1] : M, S = {
              key: `${x}-${k}`,
              message: N,
              inProgress: d,
              index: k,
              isCurrentMessage: I,
              AssistantMessage: c,
              UserMessage: h,
              ImageRenderer: b,
              onRegenerate: a,
              onCopy: i,
              markdownTagRenderers: g,
              rawData: N.rawData || {}
            }, { key: z, ...C } = S;
            return n ? t(n, {
              ...C
            }, z) : N.role === "user" ? t(h, {
              ...C
            }, z) : t(c, {
              ...C,
              isGenerating: d && I,
              isLoading: d && I && !N.content
            }, z);
          })
        }, `turn-${x}`)), l, t("div", {
          ref: H,
          className: "h-2"
        })]
      }), t(J, {
        children: E && t(w.div, {
          className: "sticky bottom-20 z-10 flex justify-center",
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.2
          },
          children: t("div", {
            className: "rounded bg-f1-background",
            children: t(K, {
              onClick: () => L(),
              label: _.ai.scrollToBottom,
              variant: "neutral",
              icon: Ae,
              hideLabel: !0
            })
          })
        })
      })]
    }), re && t(Ee, {
      onSubmit: (f, x) => {
        ($ === "like" ? oe : ae)?.(f, {
          threadId: Y,
          feedback: x
        }), W();
      },
      onClose: (f) => {
        ($ === "like" ? oe : ae)?.(f, {
          threadId: Y,
          feedback: ""
        }), W();
      },
      reactionType: $,
      message: Z
    })]
  });
};
function Rt(e) {
  const n = [];
  return e && (Array.isArray(e) ? n.push(...e) : n.push(e)), n.map((o) => ({
    id: o,
    role: "assistant",
    content: o
  }));
}
const ce = ve({
  inProgress: !1,
  setInProgress: () => {
  }
}), Et = ({ enabled: e = !1, greeting: n, initialMessage: o, welcomeScreenSuggestions: s, onThumbsUp: r, onThumbsDown: a, children: i, agent: g, ...m }) => t(at, {
  enabled: e,
  greeting: n,
  initialMessage: o,
  onThumbsUp: r,
  onThumbsDown: a,
  agent: g,
  welcomeScreenSuggestions: s,
  children: t(Lt, {
    ...m,
    children: i
  })
}), Lt = ({ children: e, ...n }) => {
  const { agent: o } = R();
  return v(it, {
    runtimeUrl: "/copilotkit",
    agent: o,
    ...n,
    children: [t(Bt, {}), t(Pt, {}), e]
  });
}, Bt = () => {
  const { setClearFunction: e } = R(), { reset: n } = V();
  return T(() => (e(n), () => {
    e(null);
  }), [e, n]), null;
}, Pt = () => {
  const { setSendMessageFunction: e } = R(), { sendMessage: n } = V();
  return T(() => (n && e(n), () => {
    e(null);
  }), [e, n]), null;
}, Ot = () => {
  const { enabled: e, open: n, setOpen: o } = R();
  he({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (r) => t("div", {
      className: r.status ? "-ml-1" : void 0,
      children: t(me, {
        title: r.args.message ?? "thinking",
        status: r.status === "complete" ? "completed" : r.status,
        inGroup: r.result?.inGroup
      })
    })
  }), he({
    name: "messageSources",
    description: "Attach information sources to the assistant's response. Use this to show where the AI got its information from.",
    parameters: [{
      name: "sources",
      type: "object[]",
      description: "Array of source objects with title and link properties. Example: [{title: 'Documentation', link: 'https://example.com'}]",
      required: !0,
      attributes: [{
        name: "title",
        type: "string",
        description: "The title or name of the source",
        required: !0
      }, {
        name: "link",
        type: "string",
        description: "The URL link to the source",
        required: !0
      }, {
        name: "icon",
        type: "string",
        description: "The icon name to display for the source",
        required: !1
      }, {
        name: "targetBlank",
        type: "boolean",
        description: "Whether to open the link in a new tab",
        required: !1,
        default: !1
      }]
    }],
    available: "disabled",
    render: (r) => t(ot, {
      sources: r.args.sources || []
    })
  });
  const s = le(({ ...r }) => t("div", {
    className: "m-[16px] mt-0",
    children: t(Re, {
      ...r
    })
  }), []);
  return e ? t(ut, {
    className: "h-full",
    defaultOpen: n,
    onSetOpen: (r) => {
      o(r);
    },
    Window: wt,
    Header: gt,
    Messages: At,
    Button: mt,
    Input: s,
    UserMessage: De,
    AssistantMessage: Fe
  }) : null;
}, Dt = () => {
  const { enabled: e } = R(), [n, o] = B(!1), s = y(null);
  return T(() => {
    const r = s.current;
    if (!r) return;
    const a = (i) => {
      i.cancelable && i.preventDefault();
    };
    return r.addEventListener("touchmove", a, {
      passive: !1
    }), () => {
      r.removeEventListener("touchmove", a);
    };
  }, []), T(() => {
    const r = document.createElement("style");
    return r.innerHTML = `
      html, body {
        overflow: hidden !important;
        height: 100% !important;
        width: 100% !important;
        margin: 0;
        padding: 0;
      }
      #root {
        height: 100% !important;
        width: 100% !important;
        overflow: hidden !important;
        display: flex;
        flex-direction: column;
      }
      /* Hide scrollbars */
      ::-webkit-scrollbar {
        display: none !important;
      }
      * {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
        -webkit-tap-highlight-color: transparent;
      }
    `, document.head.appendChild(r), () => {
      document.head.removeChild(r);
    };
  }, []), he({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (r) => t("div", {
      className: r.status ? "-ml-1" : void 0,
      children: t(me, {
        title: r.args.message ?? "thinking",
        status: r.status === "complete" ? "completed" : r.status,
        inGroup: r.result?.inGroup
      })
    })
  }), e ? t(ce.Provider, {
    value: {
      inProgress: n,
      setInProgress: o
    },
    children: v("div", {
      className: "bg-white",
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        overscrollBehavior: "none"
      },
      children: [t("div", {
        style: {
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: t(St, {})
      }), t("div", {
        ref: s,
        className: F("flex-shrink-0 w-full bg-white border-t border-f1-border transition-all", "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"),
        style: {
          flexShrink: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          touchAction: "none"
        },
        children: t($t, {})
      })]
    })
  }) : null;
}, $t = () => {
  const { sendMessage: e } = R(), { interrupt: n } = V(), { inProgress: o } = ne(ce);
  return t("div", {
    className: "w-full px-4 py-2",
    children: t(Re, {
      inProgress: o,
      onSend: async (a) => (e(a), {
        id: "",
        role: "user",
        content: a
      }),
      onStop: () => {
        if (n && typeof n != "string") {
          const a = document.querySelector('[aria-label*="Stop"]');
          a && a.click();
        }
      }
    })
  });
}, Kt = ge("F0AiChat", Ot), Yt = ge("F0AiChat", Dt), _t = ge("F0AiChatProvider", Et), Xt = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    exportTable: "Download table",
    generatedTableFilename: "OneGeneratedTable",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work"
      }
    },
    ask: "Ask One"
  }
}, $e = ve(null);
function Jt({ children: e, translations: n }) {
  return t($e.Provider, {
    value: n,
    children: e
  });
}
function Zt() {
  const e = ne($e);
  if (e === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return e;
}
export {
  Jt as A,
  Ie as B,
  Re as C,
  Kt as F,
  qt as H,
  kt as I,
  _t as a,
  Yt as b,
  Xt as c,
  ce as d,
  Zt as u
};
