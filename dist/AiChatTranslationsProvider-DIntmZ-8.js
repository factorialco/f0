import { jsx as t, jsxs as v, Fragment as he } from "react/jsx-runtime";
import { useCopilotChatInternal as G, useCopilotContext as Ce, useCopilotAction as de, CopilotKit as je } from "@copilotkit/react-core";
import { Markdown as He, useChatContext as ze, CopilotSidebar as Ge } from "@copilotkit/react-ui";
import { forwardRef as Ve, useState as B, useEffect as T, useContext as ne, createContext as me, useRef as w, useCallback as le, useMemo as te } from "react";
import { h as K, A as pe, k as J, m as x, l as fe, j as We, n as qe, a as ge, f as Ke, o as Ye, p as _e, q as Xe, r as Je, u as R, s as F, B as q, t as Ze, v as Qe, w as et, x as tt, y as nt, z as rt, F as st, D as ot, g as Te, E as Ae, G as at, H as ve, c as it, J as lt } from "./F0Thinking-kaKpUHH5.js";
import { randomId as ct } from "@copilotkit/shared";
const ut = {
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
}, dt = {
  duration: 0.15,
  ease: "easeOut"
}, Me = Ve(({ valueToCopy: e, onCopy: n, copyTooltipLabel: a, copiedTooltipLabel: s, variant: r = "neutral", size: o = "sm", ...i }, g) => {
  const [m, u] = B(!1), l = K(), p = a ?? l.actions.copy, c = m ? s ?? "Copied" : p;
  return T(() => {
    let b = null;
    return m && (b = setTimeout(() => u(!1), 1e3)), () => {
      b && clearTimeout(b);
    };
  }, [m]), t(pe, {
    ref: g,
    variant: r,
    size: o,
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
      children: t(x.span, {
        variants: ut,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: dt,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle"
        },
        children: t(fe, {
          size: o === "sm" ? "sm" : "md",
          icon: m ? We : qe
        })
      }, m ? "check" : "copy")
    })
  });
});
Me.displayName = "ButtonCopy";
const Ie = me(null), Se = ({ children: e }) => {
  const [n, a] = B(null), s = n ? {
    isOpen: !0,
    currentReaction: n.action,
    currentMessage: n.message,
    open: (r, o) => a({
      action: r,
      message: o
    }),
    close: () => a(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (r, o) => a({
      action: r,
      message: o
    }),
    close: () => a(null)
  };
  return t(Ie.Provider, {
    value: s,
    children: e
  });
}, be = () => {
  const e = ne(Ie);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, Ne = ({ isGenerating: e, isLoading: n, markdownTagRenderers: a, message: s, onCopy: r }) => {
  const o = s?.content || "", i = s?.role === "assistant" && s.toolCalls?.find((c) => c.function.name === "orchestratorThinking"), g = s?.generativeUI?.(i ? {
    status: n ? "executing" : "completed"
  } : void 0), m = !o && !g, u = K(), { open: l } = be(), [p, d] = B(null);
  return !n && !e && m ? null : v("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center gap-1",
    children: [n && !g && t(ge, {
      title: u.ai.thinking,
      status: "executing"
    }), s && v(he, {
      children: [t("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: t(He, {
          content: o,
          components: {
            ...Ke,
            ...a
          }
        })
      }), !e && !n && !!o && v("div", {
        className: "flex",
        children: [t(Me, {
          size: "md",
          variant: "ghost",
          valueToCopy: o,
          disabled: e,
          onCopy: (c) => {
            c.currentTarget.blur(), r?.(o);
          }
        }), t(pe, {
          onClick: (c) => {
            const f = p === "like" ? null : "like";
            f && l(f, s), d(f), c.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": u.actions.thumbsUp,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(fe, {
              size: "md",
              icon: p === "like" ? Ye : _e,
              color: "default"
            })
          })
        }), t(pe, {
          onClick: (c) => {
            const f = p === "dislike" ? null : "dislike";
            f && l(f, s), d(f), c.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": u.actions.thumbsDown,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(fe, {
              size: "md",
              icon: p === "dislike" ? Xe : Je,
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
}, pt = (e) => {
  const { labels: n } = ze(), { messages: a } = G(), { setOpen: s, clear: r } = R(), o = K(), i = n.title === "CopilotKit", g = a.length > 0;
  return v("header", {
    className: F("flex justify-between border-0 border-solid border-f1-border-secondary px-[16px] py-3"),
    children: [t("h2", {
      className: "text-f1-foreground",
      children: i ? "" : n.title
    }), v(x.div, {
      layout: !0,
      className: "flex items-center",
      ...e,
      children: [g && t(q, {
        variant: "ghost",
        hideLabel: !0,
        label: o.ai.startNewChat,
        icon: Ze,
        onClick: () => {
          r();
        }
      }), t(q, {
        variant: "ghost",
        hideLabel: !0,
        label: o.ai.closeChat,
        icon: Qe,
        onClick: () => s(!1)
      })]
    })]
  });
}, ft = ({ placeholders: e, defaultPlaceholder: n, inputValue: a, inProgress: s }) => {
  const [r, o] = B(""), [i, g] = B(0), [m, u] = B(!1), l = w(null), p = w(null), d = w(null), c = e[i] ?? n;
  return T(() => {
    const f = () => {
      p.current && (clearInterval(p.current), p.current = null), d.current && (clearInterval(d.current), d.current = null), l.current && (clearTimeout(l.current), l.current = null);
    };
    if (a.length > 0 || s) {
      u(!1), o(""), f();
      return;
    }
    u(!0), o("");
    let b = 0;
    const Y = 50, D = 30, V = 2e3, $ = 1e3;
    return p.current = setInterval(() => {
      b < c.length ? (o(c.slice(0, b + 1)), b++) : (p.current && (clearInterval(p.current), p.current = null), l.current = setTimeout(() => {
        d.current = setInterval(() => {
          b > 0 ? (b--, o(c.slice(0, b))) : (d.current && (clearInterval(d.current), d.current = null), l.current = setTimeout(() => {
            const Z = (i + 1) % Math.max(e.length, 1);
            g(Z);
          }, $));
        }, D);
      }, V));
    }, Y), () => {
      f();
    };
  }, [a, s, c, i, e.length]), a.length > 0 || s ? null : t(J, {
    children: t(x.div, {
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
      className: F("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "sm:text-[14px] text-[16px] leading-[20px] font-normal", "sm:pt-3 sm:px-3"),
      children: v("div", {
        className: F("overflow-hidden text-ellipsis whitespace-nowrap", "sm:whitespace-pre-wrap sm:break-words sm:overflow-visible"),
        children: [r, m && t(x.span, {
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
}, Fe = ({ submitLabel: e, inProgress: n, onSend: a, onStop: s }) => {
  const [r, o] = B(""), i = w(null), g = w(null), m = K(), { placeholders: u } = R(), l = r.trim().length > 0, p = (f) => {
    f.preventDefault(), n ? s?.() : l && (a(r.trim()), o("")), g.current?.focus();
  }, d = (f) => {
    f.key === "Enter" && !f.shiftKey && (f.preventDefault(), n || i.current?.requestSubmit());
  }, c = u.length > 1;
  return v(x.form, {
    "aria-busy": n,
    ref: i,
    className: F("relative isolate", "flex flex-row items-end gap-2 sm:flex-col sm:items-stretch sm:gap-3", "rounded-lg border border-solid border-f1-border", "transition-all hover:cursor-text", "py-px pl-3 pr-1 sm:p-0", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-background before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:scale-90 after:opacity-0", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:transition-all after:delay-200 after:duration-300", "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"),
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
        className: F("col-start-1 row-start-1", "pointer-events-none invisible", "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px]", "whitespace-pre-wrap break-words", "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground", "sm:mt-3 sm:px-3"),
        children: r.endsWith(`
`) ? r + "_" : r
      }), !r && !c && t("p", {
        className: F("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "sm:text-[14px] text-[16px] leading-[20px] font-normal", "sm:pt-3 sm:px-3", "overflow-hidden text-ellipsis whitespace-nowrap", "sm:whitespace-normal sm:overflow-visible"),
        children: m.ai.inputPlaceholder
      }), t("textarea", {
        autoFocus: !0,
        name: "one-ai-input",
        rows: 1,
        ref: g,
        value: r,
        onChange: (f) => {
          o(f.target.value);
        },
        onKeyDown: d,
        className: F("col-start-1 row-start-1", "min-h-[20px] max-h-[120px] sm:min-h-[40px] sm:max-h-[240px] sm:h-auto", "resize-none", "whitespace-pre-wrap break-words", "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground", "px-0 sm:mt-3 sm:px-3", "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "outline-none", r || !c ? "caret-f1-foreground" : "caret-transparent")
      }), c && t(ft, {
        placeholders: u,
        defaultPlaceholder: m.ai.inputPlaceholder,
        inputValue: r,
        inProgress: n
      })]
    }), t("div", {
      className: "flex shrink-0 flex-row-reverse p-1 sm:p-2 sm:pt-0",
      children: n ? t(q, {
        type: "submit",
        variant: "neutral",
        label: m.ai.stopAnswerGeneration,
        icon: et,
        hideLabel: !0
      }) : t(q, {
        type: "submit",
        disabled: !l,
        variant: l ? "default" : "neutral",
        label: e || m.ai.sendMessage,
        icon: e ? void 0 : tt,
        hideLabel: !e
      })
    })]
  });
}, ht = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: a
}) => {
  const s = w(null);
  T(() => (a ? s.current && (clearTimeout(s.current), s.current = null) : e !== null && (s.current = setTimeout(
    () => {
      n();
    },
    e * 60 * 1e3
  )), () => {
    s.current && (clearTimeout(s.current), s.current = null);
  }), [n, a, e]);
}, mt = ({ children: e }) => {
  const { open: n, shouldPlayEntranceAnimation: a, setShouldPlayEntranceAnimation: s, autoClearMinutes: r } = R(), { reset: o } = G();
  return ht({
    reset: o,
    isOpen: n,
    autoClearMinutes: r
  }), t(J, {
    children: n && t(x.div, {
      "aria-hidden": !n,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: a ? {
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
        a && s(!1);
      },
      children: t(x.div, {
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
          duration: a ? 0.3 : 0.05,
          ease: "easeOut",
          delay: a ? 0.2 : 0
        },
        children: e
      })
    }, "chat-window")
  });
};
function gt(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
const vt = ["buttonToggle"], bt = (e) => {
  const n = vt.reduce((a, s) => {
    const { [s]: r, ...o } = a;
    return o;
  }, e);
  return t(nt, {
    ...n
  });
}, Re = ({ onClose: e, onSubmit: n, reactionType: a, message: s }) => {
  const [r, o] = B(""), i = K(), { title: g, label: m, placeholder: u } = a === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, l = le(() => {
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
  }, [l]), t(rt, {
    position: "center",
    isOpen: !0,
    onClose: p,
    width: "md",
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
      children: t(bt, {
        autoFocus: !0,
        label: m,
        placeholder: u,
        value: r,
        onChange: (d) => o(d.trim()),
        size: "md",
        type: "text"
      })
    })
  });
}, xt = 3;
function wt(e, n = xt) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, n);
}
const Ee = ({ greeting: e, initialMessages: n = [], suggestions: a = [] }) => {
  const { sendMessage: s } = G(), r = te(() => wt(a), [a]);
  return t(J, {
    mode: "popLayout",
    children: v(x.div, {
      className: "flex w-full flex-1 flex-col justify-end gap-6 sm:gap-4",
      initial: {
        opacity: 1
      },
      children: [v("div", {
        className: "pl-3",
        children: [t(x.div, {
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
          children: t(st, {
            spin: !0,
            size: "lg",
            className: "my-4"
          })
        }), e && t(x.p, {
          className: "text-lg font-semibold leading-[24px] text-f1-foreground-secondary",
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
        }), n.map((o) => t(x.p, {
          className: "text-[24px] font-semibold leading-[24px] text-f1-foreground sm:text-lg",
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
          children: o.content
        }, o.id))]
      }), t("div", {
        className: "flex flex-col items-start gap-[6px] pb-5",
        children: r.map((o, i) => t(x.div, {
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
          children: t(q, {
            variant: "ghost",
            className: "border border-solid border-f1-border-secondary shadow sm:border-none sm:shadow-none",
            label: o.message,
            icon: o.icon,
            onClick: () => s({
              id: ct(),
              role: "user",
              content: o.prompt || o.message
            })
          })
        }, i))
      })]
    }, "welcome")
  });
}, yt = (e) => t(Se, {
  children: t(kt, {
    ...e
  })
}), kt = ({ inProgress: e, children: n, RenderMessage: a, AssistantMessage: s, UserMessage: r, ImageRenderer: o, onRegenerate: i, onCopy: g, markdownTagRenderers: m }) => {
  const u = w(null), { messages: l, interrupt: p } = G(), { threadId: d } = Ce(), { close: c, currentReaction: f, currentMessage: b, isOpen: Y } = be(), D = K(), { greeting: V, initialMessage: $, welcomeScreenSuggestions: Z, onThumbsUp: re, onThumbsDown: _ } = R(), Q = te(() => Ct($ || D.ai.defaultInitialMessage), [$, D.ai.defaultInitialMessage]), ee = l.length == 0 && (V || Q.length > 0), { messagesContainerRef: se, messagesEndRef: oe, showScrollToBottom: ae, scrollToBottom: X } = Le(), { height: A = 0 } = ot({
    ref: se,
    box: "border-box"
  }), W = te(() => Be(l), [l]);
  return T(() => {
    X("instant");
  }, [l.length, X]), v(he, {
    children: [v(x.div, {
      layout: !0,
      className: F("scrollbar-macos relative isolate flex flex-1 flex-col pl-[16px] pr-[8px] pt-[16px]", "overflow-y-scroll overflow-x-hidden"),
      ref: se,
      children: [v(x.div, {
        layout: "position",
        ref: u,
        className: ee ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [ee && t(Ee, {
          greeting: V,
          initialMessages: Q,
          suggestions: Z
        }), W.map((U, E) => {
          const L = E === W.length - 1;
          return t("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: L ? A * 0.8 : void 0
            },
            children: U.map((P, O) => {
              const j = E === W.length - 1 && O === U.length - 1;
              return Array.isArray(P) && !j ? t(Te, {
                messages: P,
                isActive: !1,
                inProgress: e,
                RenderMessage: a,
                AssistantMessage: s
              }, `${E}-${O}`) : t(a, {
                message: Array.isArray(P) ? P[P.length - 1] : P,
                inProgress: e,
                index: O,
                isCurrentMessage: j,
                AssistantMessage: s,
                UserMessage: r,
                ImageRenderer: o,
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
        children: ae && t(x.div, {
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
            children: t(q, {
              onClick: () => X(),
              label: D.ai.scrollToBottom,
              variant: "neutral",
              icon: Ae,
              hideLabel: !0
            })
          })
        })
      })]
    }), Y && t(Re, {
      onSubmit: (U, E) => {
        (f === "like" ? re : _)?.(U, {
          threadId: d,
          feedback: E
        }), c();
      },
      onClose: (U) => {
        (f === "like" ? re : _)?.(U, {
          threadId: d,
          feedback: ""
        }), c();
      },
      reactionType: f,
      message: b
    })]
  });
};
function Ct(e) {
  const n = [];
  return e && (Array.isArray(e) ? n.push(...e) : n.push(e)), n.map((a) => ({
    id: a,
    role: "assistant",
    content: a
  }));
}
function Le() {
  const e = w(null), n = w(null), a = w(!1), s = w(!1), [r, o] = B(!1), i = le((l = "smooth") => {
    n.current && e.current && (o(!1), a.current = !0, e.current.scrollIntoView({
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
      o(!1);
      return;
    }
    const { scrollTop: l, scrollHeight: p, clientHeight: d } = n.current, c = l < p - 3 * d;
    o(c);
  }, u = le(() => {
    if (a.current) {
      a.current = !1;
      return;
    }
    g(), m();
  }, []);
  return at("scroll", u, n), T(() => {
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
function Be(e) {
  if (e.length === 0)
    return [];
  console.assert(e[0].role === "user", "Invariant violation! Assistant message received before user message");
  const n = [];
  for (const [a, s] of e.entries()) {
    if (s.role === "user") {
      n.push([s]);
      continue;
    }
    const r = n[n.length - 1];
    if (gt(s) && ke(r)) {
      if (a !== e.length - 1) {
        const o = r.pop();
        r.push(s, o);
      }
      continue;
    }
    if (Tt(s)) {
      ke(r) ? r.at(-1).push(s) : r.push([s]);
      continue;
    }
    r.push(s);
  }
  return n;
}
function Tt(e) {
  return e.role === "assistant" && e.toolCalls?.some((n) => n.function.name === "orchestratorThinking") === !0;
}
function ke(e) {
  const n = e.at(-1);
  return Array.isArray(n);
}
const Pe = ({ message: e, ImageRenderer: n }) => {
  const a = e && "image" in e && e.image, s = w(null), o = !!ne(ce)?.setInProgress;
  if (T(() => {
    !s.current || o || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [o]), a) {
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
}, At = (e) => t(Se, {
  children: t(Mt, {
    ...e
  })
}), Mt = ({ inProgress: e, RenderMessage: n, AssistantMessage: a, UserMessage: s, ImageRenderer: r, onRegenerate: o, onCopy: i, markdownTagRenderers: g }) => {
  const m = w(null), { messages: u, interrupt: l, isLoading: p } = G(), d = e ?? p, c = a ?? Ne, f = s ?? Pe, b = r ?? (({ image: h, content: y }) => t("img", {
    src: h,
    alt: y || "Assistant image",
    className: "max-w-full rounded-lg"
  })), { threadId: Y } = Ce(), { setInProgress: D } = ne(ce), { close: V, currentReaction: $, currentMessage: Z, isOpen: re } = be();
  T(() => {
    D(d);
  }, [d, D]);
  const _ = K(), { greeting: Q, initialMessage: ee, welcomeScreenSuggestions: se, onThumbsUp: oe, onThumbsDown: ae } = R(), X = te(() => It(ee || _.ai.defaultInitialMessage), [ee, _.ai.defaultInitialMessage]), A = u.length === 0 && (Q || X.length > 0), { messagesContainerRef: W, messagesEndRef: U, showScrollToBottom: E, scrollToBottom: L } = Le(), P = te(() => Be(u), [u]), O = w(u.length), j = u[u.length - 1]?.content || "", ue = w(j);
  return T(() => {
    const h = u.length > O.current, y = u.length === O.current && j !== ue.current;
    if (h || y) {
      const k = u[u.length - 1]?.role === "user", I = (S = "instant") => {
        const N = W.current;
        if (N) {
          const H = k ? 400 : 250, C = N.scrollHeight - N.scrollTop - N.clientHeight < H;
          (k || C) && L(S);
        }
      };
      if (h) {
        I("instant");
        const S = [50, 150, 400].map((N) => setTimeout(() => I("instant"), N));
        return O.current = u.length, ue.current = j, () => S.forEach(clearTimeout);
      } else y && I("instant");
    }
    O.current = u.length, ue.current = j;
  }, [u.length, j, L]), T(() => {
    const h = W.current;
    if (!h) return;
    let y = !0;
    const M = () => {
      y = h.scrollHeight - h.scrollTop - h.clientHeight < 150;
    }, k = () => {
      const z = [50, 150, 300, 600].map((ie) => setTimeout(() => {
        y && L("instant");
      }, ie));
      return () => z.forEach(clearTimeout);
    }, I = (C) => {
      const z = C.target;
      (z.tagName === "TEXTAREA" || z.tagName === "INPUT" && z.type === "text") && setTimeout(() => {
        L("instant"), setTimeout(() => L("instant"), 300);
      }, 100);
    }, S = (C) => {
      h._startY = C.touches[0].pageY;
    }, N = (C) => {
      const { scrollTop: z, scrollHeight: ie, clientHeight: xe } = h, De = z <= 0, $e = z + xe >= ie, we = C.touches[0].pageY, Ue = h._startY || we, ye = we > Ue ? "down" : "up";
      (ie <= xe || De && ye === "down" || $e && ye === "up") && C.cancelable && C.preventDefault();
    }, H = new ResizeObserver(k);
    return H.observe(h), h.addEventListener("scroll", M), h.addEventListener("touchstart", S, {
      passive: !0
    }), h.addEventListener("touchmove", N, {
      passive: !1
    }), window.addEventListener("resize", k), window.addEventListener("focusin", I), window.visualViewport && (window.visualViewport.addEventListener("resize", k), window.visualViewport.addEventListener("scroll", k)), () => {
      H.disconnect(), h.removeEventListener("scroll", M), h.removeEventListener("touchstart", S), h.removeEventListener("touchmove", N), window.removeEventListener("resize", k), window.removeEventListener("focusin", I), window.visualViewport && (window.visualViewport.removeEventListener("resize", k), window.visualViewport.removeEventListener("scroll", k));
    };
  }, [L]), v(he, {
    children: [v("div", {
      ref: W,
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
        children: [A && t(Ee, {
          greeting: Q,
          initialMessages: X,
          suggestions: se
        }), P.map((h, y) => t("div", {
          className: "flex flex-col items-start justify-start gap-2",
          children: h.map((M, k) => {
            const I = y === P.length - 1 && k === h.length - 1;
            if (Array.isArray(M) && !I)
              return t(Te, {
                messages: M,
                isActive: !1,
                inProgress: d,
                RenderMessage: n,
                AssistantMessage: c
              }, `${y}-${k}`);
            const S = Array.isArray(M) ? M[M.length - 1] : M, N = {
              key: `${y}-${k}`,
              message: S,
              inProgress: d,
              index: k,
              isCurrentMessage: I,
              AssistantMessage: c,
              UserMessage: f,
              ImageRenderer: b,
              onRegenerate: o,
              onCopy: i,
              markdownTagRenderers: g,
              rawData: S.rawData || {}
            }, { key: H, ...C } = N;
            return n ? t(n, {
              ...C
            }, H) : S.role === "user" ? t(f, {
              ...C
            }, H) : t(c, {
              ...C,
              isGenerating: d && I,
              isLoading: d && I && !S.content
            }, H);
          })
        }, `turn-${y}`)), l, t("div", {
          ref: U,
          className: "h-2"
        })]
      }), t(J, {
        children: E && t(x.div, {
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
            children: t(q, {
              onClick: () => L(),
              label: _.ai.scrollToBottom,
              variant: "neutral",
              icon: Ae,
              hideLabel: !0
            })
          })
        })
      })]
    }), re && t(Re, {
      onSubmit: (h, y) => {
        ($ === "like" ? oe : ae)?.(h, {
          threadId: Y,
          feedback: y
        }), V();
      },
      onClose: (h) => {
        ($ === "like" ? oe : ae)?.(h, {
          threadId: Y,
          feedback: ""
        }), V();
      },
      reactionType: $,
      message: Z
    })]
  });
};
function It(e) {
  const n = [];
  return e && (Array.isArray(e) ? n.push(...e) : n.push(e)), n.map((a) => ({
    id: a,
    role: "assistant",
    content: a
  }));
}
const ce = me({
  inProgress: !1,
  setInProgress: () => {
  }
}), St = ({ enabled: e = !1, greeting: n, initialMessage: a, welcomeScreenSuggestions: s, onThumbsUp: r, onThumbsDown: o, children: i, agent: g, ...m }) => t(lt, {
  enabled: e,
  greeting: n,
  initialMessage: a,
  onThumbsUp: r,
  onThumbsDown: o,
  agent: g,
  welcomeScreenSuggestions: s,
  children: t(Nt, {
    ...m,
    children: i
  })
}), Nt = ({ children: e, ...n }) => {
  const { agent: a } = R();
  return v(je, {
    runtimeUrl: "/copilotkit",
    agent: a,
    ...n,
    children: [t(Ft, {}), t(Rt, {}), e]
  });
}, Ft = () => {
  const { setClearFunction: e } = R(), { reset: n } = G();
  return T(() => (e(n), () => {
    e(null);
  }), [e, n]), null;
}, Rt = () => {
  const { setSendMessageFunction: e } = R(), { sendMessage: n } = G();
  return T(() => (n && e(n), () => {
    e(null);
  }), [e, n]), null;
}, Et = () => {
  const { enabled: e, open: n, setOpen: a } = R();
  de({
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
      children: t(ge, {
        title: r.args.message ?? "thinking",
        status: r.status === "complete" ? "completed" : r.status,
        inGroup: r.result?.inGroup
      })
    })
  }), de({
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
    render: (r) => t(it, {
      sources: r.args.sources || []
    })
  });
  const s = le(({ ...r }) => t("div", {
    className: "m-[16px] mt-0",
    children: t(Fe, {
      ...r
    })
  }), []);
  return e ? t(Ge, {
    className: "h-full",
    defaultOpen: n,
    onSetOpen: (r) => {
      a(r);
    },
    Window: mt,
    Header: pt,
    Messages: yt,
    Button: () => null,
    Input: s,
    UserMessage: Pe,
    AssistantMessage: Ne
  }) : null;
}, Lt = () => {
  const { enabled: e } = R(), [n, a] = B(!1), s = w(null);
  return T(() => {
    const r = s.current;
    if (!r) return;
    const o = (i) => {
      i.cancelable && i.preventDefault();
    };
    return r.addEventListener("touchmove", o, {
      passive: !1
    }), () => {
      r.removeEventListener("touchmove", o);
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
  }, []), de({
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
      children: t(ge, {
        title: r.args.message ?? "thinking",
        status: r.status === "complete" ? "completed" : r.status,
        inGroup: r.result?.inGroup
      })
    })
  }), e ? t(ce.Provider, {
    value: {
      inProgress: n,
      setInProgress: a
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
        children: t(At, {})
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
        children: t(Bt, {})
      })]
    })
  }) : null;
}, Bt = () => {
  const { sendMessage: e } = R(), { interrupt: n } = G(), { inProgress: a } = ne(ce);
  return t("div", {
    className: "w-full px-4 py-2",
    children: t(Fe, {
      inProgress: a,
      onSend: async (o) => (e(o), {
        id: "",
        role: "user",
        content: o
      }),
      onStop: () => {
        if (n && typeof n != "string") {
          const o = document.querySelector('[aria-label*="Stop"]');
          o && o.click();
        }
      }
    })
  });
}, zt = ve("F0AiChat", Et), Gt = ve("F0AiChat", Lt), Vt = ve("F0AiChatProvider", St), Wt = {
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
}, Oe = me(null);
function qt({ children: e, translations: n }) {
  return t(Oe.Provider, {
    value: n,
    children: e
  });
}
function Kt() {
  const e = ne(Oe);
  if (e === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return e;
}
export {
  qt as A,
  Me as B,
  zt as F,
  bt as I,
  Vt as a,
  Gt as b,
  Wt as c,
  ce as d,
  Kt as u
};
