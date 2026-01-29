import { jsx as t, jsxs as v, Fragment as he } from "react/jsx-runtime";
import { useCopilotChatInternal as z, useCopilotContext as Ce, useCopilotAction as Te, CopilotKit as Ge } from "@copilotkit/react-core";
import { Markdown as Ve, useChatContext as Ke, CopilotSidebar as We } from "@copilotkit/react-ui";
import { forwardRef as qe, useState as O, useEffect as M, useContext as ee, createContext as me, useRef as w, useCallback as ie, useMemo as Q } from "react";
import { h as K, A as fe, k as G, m as y, l as pe, j as Ye, n as _e, a as Ae, f as Xe, o as Je, p as Ze, q as Qe, r as et, u as L, s as S, B as V, t as tt, v as nt, w as rt, x as ot, y as le, z as st, D as at, F as it, E as lt, G as ye, g as Me, H as Ie, J as ct, c as ut, K as dt } from "./F0Thinking-D3-rJmRX.js";
import { randomId as ft } from "@copilotkit/shared";
const pt = {
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
}, ht = {
  duration: 0.15,
  ease: "easeOut"
}, Se = qe(({ valueToCopy: e, onCopy: n, copyTooltipLabel: o, copiedTooltipLabel: r, variant: a = "neutral", size: s = "sm", ...i }, g) => {
  const [m, c] = O(!1), l = K(), f = o ?? l.actions.copy, u = m ? r ?? "Copied" : f;
  return M(() => {
    let x = null;
    return m && (x = setTimeout(() => c(!1), 1e3)), () => {
      x && clearTimeout(x);
    };
  }, [m]), t(fe, {
    ref: g,
    variant: a,
    size: s,
    onClick: (x) => {
      x.stopPropagation(), window.navigator.clipboard.writeText(e), c(!0), n?.(x);
    },
    "aria-live": "polite",
    "aria-label": u,
    title: u,
    ...i,
    compact: !0,
    children: t(G, {
      mode: "wait",
      initial: !1,
      children: t(y.span, {
        variants: pt,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: ht,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle"
        },
        children: t(pe, {
          size: s === "sm" ? "sm" : "md",
          icon: m ? Ye : _e
        })
      }, m ? "check" : "copy")
    })
  });
});
Se.displayName = "ButtonCopy";
const Ne = me(null), Fe = ({ children: e }) => {
  const [n, o] = O(null), r = n ? {
    isOpen: !0,
    currentReaction: n.action,
    currentMessage: n.message,
    open: (a, s) => o({
      action: a,
      message: s
    }),
    close: () => o(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (a, s) => o({
      action: a,
      message: s
    }),
    close: () => o(null)
  };
  return t(Ne.Provider, {
    value: r,
    children: e
  });
}, ge = () => {
  const e = ee(Ne);
  if (e === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return e;
}, Re = ({ isGenerating: e, isLoading: n, markdownTagRenderers: o, message: r, onCopy: a }) => {
  const s = r?.content || "", i = r?.role === "assistant" && r.toolCalls?.find((u) => u.function.name === "orchestratorThinking"), g = r?.generativeUI?.(i ? {
    status: n ? "executing" : "completed"
  } : void 0), m = !s && !g, c = K(), { open: l } = ge(), [f, p] = O(null);
  return !n && !e && m ? null : v("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center gap-1",
    children: [n && !g && t(Ae, {
      title: c.ai.thinking,
      status: "executing"
    }), r && v(he, {
      children: [t("div", {
        className: "w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: t(Ve, {
          content: s,
          components: {
            ...Xe,
            ...o
          }
        })
      }), !e && !n && !!s && v("div", {
        className: "flex",
        children: [t(Se, {
          size: "md",
          variant: "ghost",
          valueToCopy: s,
          disabled: e,
          onCopy: (u) => {
            u.currentTarget.blur(), a?.(s);
          }
        }), t(fe, {
          onClick: (u) => {
            const h = f === "like" ? null : "like";
            h && l(h, r), p(h), u.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": c.actions.thumbsUp,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(pe, {
              size: "md",
              icon: f === "like" ? Je : Ze,
              color: "default"
            })
          })
        }), t(fe, {
          onClick: (u) => {
            const h = f === "dislike" ? null : "dislike";
            h && l(h, r), p(h), u.currentTarget.blur();
          },
          compact: !0,
          mode: "only",
          variant: "ghost",
          "aria-label": c.actions.thumbsDown,
          children: t("div", {
            className: "flex min-w-0 flex-1 items-center justify-center gap-1",
            children: t(pe, {
              size: "md",
              icon: f === "dislike" ? Qe : et,
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
}, mt = (e) => {
  const { labels: n } = Ke(), { messages: o } = z(), { setOpen: r, clear: a } = L(), s = K(), i = n.title === "CopilotKit", g = o.length > 0;
  return v("header", {
    className: S("flex justify-between border-0 border-solid border-f1-border-secondary px-[16px] py-3"),
    children: [t("h2", {
      className: "text-f1-foreground",
      children: i ? "" : n.title
    }), v(y.div, {
      layout: !0,
      className: "flex items-center",
      ...e,
      children: [g && t(V, {
        variant: "ghost",
        hideLabel: !0,
        label: s.ai.startNewChat,
        icon: tt,
        onClick: () => {
          a();
        }
      }), t(V, {
        variant: "ghost",
        hideLabel: !0,
        label: s.ai.closeChat,
        icon: nt,
        onClick: () => r(!1)
      })]
    })]
  });
}, gt = ({ placeholders: e, defaultPlaceholder: n, inputValue: o, inProgress: r }) => {
  const [a, s] = O(""), [i, g] = O(0), [m, c] = O(!1), l = w(null), f = w(null), p = w(null), u = e[i] ?? n;
  return M(() => {
    const h = () => {
      f.current && (clearInterval(f.current), f.current = null), p.current && (clearInterval(p.current), p.current = null), l.current && (clearTimeout(l.current), l.current = null);
    };
    if (o.length > 0 || r) {
      c(!1), s(""), h();
      return;
    }
    c(!0), s("");
    let x = 0;
    const W = 50, P = 30, H = 2e3, D = 1e3;
    return f.current = setInterval(() => {
      x < u.length ? (s(u.slice(0, x + 1)), x++) : (f.current && (clearInterval(f.current), f.current = null), l.current = setTimeout(() => {
        p.current = setInterval(() => {
          x > 0 ? (x--, s(u.slice(0, x))) : (p.current && (clearInterval(p.current), p.current = null), l.current = setTimeout(() => {
            const X = (i + 1) % Math.max(e.length, 1);
            g(X);
          }, D));
        }, P);
      }, H));
    }, W), () => {
      h();
    };
  }, [o, r, u, i, e.length]), o.length > 0 || r ? null : t(G, {
    children: t(y.div, {
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
      className: S("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "sm:text-[14px] text-[16px] leading-[20px] font-normal", "sm:pt-3 sm:px-3"),
      children: v("div", {
        className: S("overflow-hidden text-ellipsis whitespace-nowrap", "sm:whitespace-pre-wrap sm:break-words sm:overflow-visible"),
        children: [a, m && t(y.span, {
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
}, Ee = ({ submitLabel: e, inProgress: n, onSend: o, onStop: r }) => {
  const [a, s] = O(""), i = w(null), g = w(null), m = K(), { placeholders: c } = L(), l = a.trim().length > 0, f = (h) => {
    h.preventDefault(), n ? r?.() : l && (o(a.trim()), s("")), g.current?.focus();
  }, p = (h) => {
    h.key === "Enter" && !h.shiftKey && (h.preventDefault(), n || i.current?.requestSubmit());
  }, u = c.length > 1;
  return v(y.form, {
    "aria-busy": n,
    ref: i,
    className: S("relative isolate", "flex flex-row items-end sm:flex-col sm:items-stretch gap-3", "rounded-lg border border-solid border-f1-border", "transition-all hover:cursor-text", "py-px pl-3 pr-1 sm:p-0", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]", "before:rounded-[inherit] before:bg-f1-background before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]", "after:rounded-[inherit] after:blur-[5px] after:content-['']", "after:scale-90 after:opacity-0", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]", "after:transition-all after:delay-200 after:duration-300", "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"),
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
    onSubmit: f,
    children: [v("div", {
      className: S("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-2.5 sm:min-h-[20px] sm:py-0"),
      children: [t("div", {
        "aria-hidden": !0,
        className: S("col-start-1 row-start-1", "pointer-events-none invisible", "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]", "whitespace-pre-wrap break-words", "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground", "sm:mt-3 sm:px-3"),
        children: a.endsWith(`
`) ? a + "_" : a
      }), !a && !u && t("p", {
        className: S("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "sm:text-[14px] text-[16px] leading-[20px] font-normal", "sm:pt-3 sm:px-3", "overflow-hidden text-ellipsis whitespace-nowrap"),
        children: m.ai.inputPlaceholder
      }), t("textarea", {
        autoFocus: !0,
        name: "one-ai-input",
        rows: 1,
        ref: g,
        value: a,
        onChange: (h) => {
          s(h.target.value);
        },
        onKeyDown: p,
        className: S("col-start-1 row-start-1", "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px] sm:h-auto", "resize-none", "whitespace-pre-wrap break-words", "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground", "px-0 sm:mt-3 sm:px-3", "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "outline-none", a || !u ? "caret-f1-foreground" : "caret-transparent")
      }), u && t(gt, {
        placeholders: c,
        defaultPlaceholder: m.ai.inputPlaceholder,
        inputValue: a,
        inProgress: n
      })]
    }), t("div", {
      className: "flex shrink-0 flex-row-reverse p-1 sm:p-3",
      children: n ? t(V, {
        type: "submit",
        variant: "neutral",
        label: m.ai.stopAnswerGeneration,
        icon: rt,
        hideLabel: !0
      }) : t(V, {
        type: "submit",
        disabled: !l,
        variant: l ? "default" : "neutral",
        label: e || m.ai.sendMessage,
        icon: e ? void 0 : ot,
        hideLabel: !e
      })
    })]
  });
}, bt = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: o
}) => {
  const r = w(null);
  M(() => (o ? r.current && (clearTimeout(r.current), r.current = null) : e !== null && (r.current = setTimeout(
    () => {
      n();
    },
    e * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [n, o, e]);
}, vt = ({ children: e }) => {
  const { open: n, shouldPlayEntranceAnimation: o, setShouldPlayEntranceAnimation: r, autoClearMinutes: a } = L(), { reset: s } = z();
  return bt({
    reset: s,
    isOpen: n,
    autoClearMinutes: a
  }), t(G, {
    children: n && t(y.div, {
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
        o && r(!1);
      },
      children: t(y.div, {
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
};
function xt(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
const yt = ["buttonToggle"], wt = (e) => {
  const n = yt.reduce((o, r) => {
    const { [r]: a, ...s } = o;
    return s;
  }, e);
  return t(st, {
    ...n
  });
}, kt = le("Input", wt), Le = ({ onClose: e, onSubmit: n, reactionType: o, message: r }) => {
  const [a, s] = O(""), i = K(), { title: g, label: m, placeholder: c } = o === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, l = ie(() => {
    n(r, a);
  }, [a, r, n]), f = () => {
    e(r);
  };
  return M(() => {
    const p = (u) => {
      u.key === "Enter" && (u.preventDefault(), l());
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [l]), t(at, {
    position: "center",
    isOpen: !0,
    onClose: f,
    width: "md",
    title: g,
    primaryAction: {
      label: i.actions.send,
      onClick: l
    },
    secondaryAction: {
      label: i.actions.cancel,
      onClick: f
    },
    children: t("div", {
      className: "flex flex-col gap-6",
      children: t(kt, {
        autoFocus: !0,
        label: m,
        placeholder: c,
        value: a,
        onChange: (p) => s(p.trim()),
        size: "md",
        type: "text"
      })
    })
  });
}, we = ({ position: e }) => t(y.div, {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.5
  },
  exit: {
    opacity: 0
  },
  transition: {
    duration: 0.2,
    ease: "easeOut"
  },
  className: S("pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']", e === "top" ? ["top-0", "bg-gradient-to-b from-f1-background-secondary to-transparent", "after:top-0"] : ["bottom-0", "bg-gradient-to-t from-f1-background-secondary to-transparent", "after:bottom-0"])
}), Ct = 3;
function Tt(e, n = Ct) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, n);
}
const Oe = ({ greeting: e, initialMessages: n = [], suggestions: o = [] }) => {
  const { sendMessage: r } = z(), a = Q(() => Tt(o), [o]);
  return t(G, {
    mode: "popLayout",
    children: v(y.div, {
      className: "flex w-full flex-1 flex-col justify-end gap-6 sm:gap-4",
      initial: {
        opacity: 1
      },
      children: [v("div", {
        className: "pl-3",
        children: [t(y.div, {
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
          children: t(it, {
            spin: !0,
            size: "lg",
            className: "my-4"
          })
        }), e && t(y.p, {
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
        }), n.map((s) => t(y.p, {
          className: "text-[24px] font-semibold leading-[24px] text-f1-foreground",
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
          children: s.content
        }, s.id))]
      }), t("div", {
        className: "flex flex-col items-start gap-[6px] pb-5",
        children: a.map((s, i) => t(y.div, {
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
          children: t(V, {
            variant: "ghost",
            className: "border border-solid border-f1-border-secondary shadow sm:border-none sm:shadow-none",
            label: s.message,
            icon: s.icon,
            onClick: () => r({
              id: ft(),
              role: "user",
              content: s.prompt || s.message
            })
          })
        }, i))
      })]
    }, "welcome")
  });
}, At = (e) => t(Fe, {
  children: t(Mt, {
    ...e
  })
}), Mt = ({ inProgress: e, children: n, RenderMessage: o, AssistantMessage: r, UserMessage: a, ImageRenderer: s, onRegenerate: i, onCopy: g, markdownTagRenderers: m }) => {
  const c = w(null), { messages: l, interrupt: f } = z(), { threadId: p } = Ce(), { close: u, currentReaction: h, currentMessage: x, isOpen: W } = ge(), P = K(), { greeting: H, initialMessage: D, welcomeScreenSuggestions: X, onThumbsUp: te, onThumbsDown: q } = L(), J = Q(() => It(D || P.ai.defaultInitialMessage), [D, P.ai.defaultInitialMessage]), Z = l.length == 0 && (H || J.length > 0), { messagesContainerRef: ne, messagesEndRef: re, showScrollToBottom: oe, scrollToBottom: Y } = Be(), { height: I = 0 } = lt({
    ref: ne,
    box: "border-box"
  }), U = Q(() => Pe(l), [l]), [ue, de] = ye({
    threshold: 1
  }), [B, se] = ye({
    threshold: 1
  });
  return M(() => {
    Y("instant");
  }, [l.length, Y]), v(he, {
    children: [v("div", {
      className: "relative flex flex-1 flex-col overflow-hidden",
      children: [v(y.div, {
        layout: !0,
        className: S("scrollbar-macos relative isolate flex flex-1 flex-col p-[16px] pb-0", "overflow-y-scroll overflow-x-hidden"),
        ref: ne,
        children: [t("div", {
          ref: ue,
          className: "h-px flex-shrink-0",
          "aria-hidden": "true"
        }, "top-ref"), v(y.div, {
          layout: "position",
          ref: c,
          className: Z ? "flex flex-1" : "flex flex-col gap-8",
          children: [Z && t(Oe, {
            greeting: H,
            initialMessages: J,
            suggestions: X
          }), U.map((N, T) => {
            const _ = T === U.length - 1;
            return t("div", {
              className: "flex flex-col items-start justify-start gap-2",
              style: {
                minHeight: _ ? I * 0.8 : void 0
              },
              children: N.map((d, b) => {
                const A = T === U.length - 1 && b === N.length - 1;
                return Array.isArray(d) && !A ? t(Me, {
                  messages: d,
                  isActive: !1,
                  inProgress: e,
                  RenderMessage: o,
                  AssistantMessage: r
                }, `${T}-${b}`) : t(o, {
                  message: Array.isArray(d) ? d[d.length - 1] : d,
                  inProgress: e,
                  index: b,
                  isCurrentMessage: A,
                  AssistantMessage: r,
                  UserMessage: a,
                  ImageRenderer: s,
                  onRegenerate: i,
                  onCopy: g,
                  markdownTagRenderers: m
                }, `${T}-${b}`);
              })
            }, `turn-${T}`);
          }), f]
        }), t("div", {
          ref: B,
          className: "h-px flex-shrink-0",
          "aria-hidden": "true"
        }), t("footer", {
          className: "copilotKitMessagesFooter",
          ref: re,
          children: n
        }), t(G, {
          children: oe && t(y.div, {
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
              children: t(V, {
                onClick: () => Y(),
                label: P.ai.scrollToBottom,
                variant: "neutral",
                icon: Ie,
                hideLabel: !0
              })
            })
          })
        })]
      }), v(G, {
        children: [!de && t(we, {
          position: "top"
        }, "shadow-scroll-top"), !se && t(we, {
          position: "bottom"
        }, "shadow-scroll-bottom")]
      })]
    }), W && t(Le, {
      onSubmit: (N, T) => {
        (h === "like" ? te : q)?.(N, {
          threadId: p,
          feedback: T
        }), u();
      },
      onClose: (N) => {
        (h === "like" ? te : q)?.(N, {
          threadId: p,
          feedback: ""
        }), u();
      },
      reactionType: h,
      message: x
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
function Be() {
  const e = w(null), n = w(null), o = w(!1), r = w(!1), [a, s] = O(!1), i = ie((l = "smooth") => {
    n.current && e.current && (s(!1), o.current = !0, e.current.scrollIntoView({
      behavior: l
    }));
  }, []), g = () => {
    if (n.current) {
      const { scrollTop: l, scrollHeight: f, clientHeight: p } = n.current, u = 20;
      r.current = l + p + u < f;
    } else
      r.current = !1;
  }, m = () => {
    if (!n.current) {
      s(!1);
      return;
    }
    const { scrollTop: l, scrollHeight: f, clientHeight: p } = n.current, u = l < f - 3 * p;
    s(u);
  }, c = ie(() => {
    if (o.current) {
      o.current = !1;
      return;
    }
    g(), m();
  }, []);
  return ct("scroll", c, n), M(() => {
    const l = n.current;
    if (!l)
      return;
    i("instant");
    const f = new MutationObserver(() => {
      m(), i("instant");
    });
    return f.observe(l, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      f.disconnect();
    };
  }, [i]), {
    messagesEndRef: e,
    messagesContainerRef: n,
    showScrollToBottom: a,
    scrollToBottom: i
  };
}
function Pe(e) {
  if (e.length === 0)
    return [];
  console.assert(e[0].role === "user", "Invariant violation! Assistant message received before user message");
  const n = [];
  for (const [o, r] of e.entries()) {
    if (r.role === "user") {
      n.push([r]);
      continue;
    }
    const a = n[n.length - 1];
    if (xt(r) && ke(a)) {
      if (o !== e.length - 1) {
        const s = a.pop();
        a.push(r, s);
      }
      continue;
    }
    if (St(r)) {
      ke(a) ? a.at(-1).push(r) : a.push([r]);
      continue;
    }
    a.push(r);
  }
  return n;
}
function St(e) {
  return e.role === "assistant" && e.toolCalls?.some((n) => n.function.name === "orchestratorThinking") === !0;
}
function ke(e) {
  const n = e.at(-1);
  return Array.isArray(n);
}
const De = ({ message: e, ImageRenderer: n }) => {
  const o = e && "image" in e && e.image, r = w(null), s = !!ee(ce)?.setInProgress;
  if (M(() => {
    !r.current || s || r.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [s]), o) {
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
    ref: r,
    className: "my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
    children: e?.content
  });
}, Nt = (e) => t(Fe, {
  children: t(Ft, {
    ...e
  })
}), Ft = ({ inProgress: e, RenderMessage: n, AssistantMessage: o, UserMessage: r, ImageRenderer: a, onRegenerate: s, onCopy: i, markdownTagRenderers: g }) => {
  const m = w(null), { messages: c, interrupt: l, isLoading: f } = z(), p = e ?? f, u = o ?? Re, h = r ?? De, x = a ?? (({ image: d, content: b }) => t("img", {
    src: d,
    alt: b || "Assistant image",
    className: "max-w-full rounded-lg"
  })), { threadId: W } = Ce(), { setInProgress: P } = ee(ce), { close: H, currentReaction: D, currentMessage: X, isOpen: te } = ge();
  M(() => {
    P(p);
  }, [p, P]);
  const q = K(), { greeting: J, initialMessage: Z, welcomeScreenSuggestions: ne, onThumbsUp: re, onThumbsDown: oe } = L(), Y = Q(() => Rt(Z || q.ai.defaultInitialMessage), [Z, q.ai.defaultInitialMessage]), I = c.length === 0 && (J || Y.length > 0), { messagesContainerRef: U, messagesEndRef: ue, showScrollToBottom: de, scrollToBottom: B } = Be(), se = Q(() => Pe(c), [c]), N = w(c.length), T = c[c.length - 1]?.content || "", _ = w(T);
  return M(() => {
    const d = c.length > N.current, b = c.length === N.current && T !== _.current;
    if (d || b) {
      const k = c[c.length - 1]?.role === "user", F = (R = "instant") => {
        const E = U.current;
        if (E) {
          const $ = k ? 400 : 250, C = E.scrollHeight - E.scrollTop - E.clientHeight < $;
          (k || C) && B(R);
        }
      };
      if (d) {
        F("instant");
        const R = [50, 150, 400].map((E) => setTimeout(() => F("instant"), E));
        return N.current = c.length, _.current = T, () => R.forEach(clearTimeout);
      } else b && F("instant");
    }
    N.current = c.length, _.current = T;
  }, [c.length, T, B]), M(() => {
    const d = U.current;
    if (!d) return;
    let b = !0;
    const A = () => {
      b = d.scrollHeight - d.scrollTop - d.clientHeight < 150;
    }, k = () => {
      const j = [50, 150, 300, 600].map((ae) => setTimeout(() => {
        b && B("instant");
      }, ae));
      return () => j.forEach(clearTimeout);
    }, F = (C) => {
      const j = C.target;
      (j.tagName === "TEXTAREA" || j.tagName === "INPUT" && j.type === "text") && setTimeout(() => {
        B("instant"), setTimeout(() => B("instant"), 300);
      }, 100);
    }, R = (C) => {
      d._startY = C.touches[0].pageY;
    }, E = (C) => {
      const { scrollTop: j, scrollHeight: ae, clientHeight: be } = d, ze = j <= 0, He = j + be >= ae, ve = C.touches[0].pageY, Ue = d._startY || ve, xe = ve > Ue ? "down" : "up";
      (ae <= be || ze && xe === "down" || He && xe === "up") && C.cancelable && C.preventDefault();
    }, $ = new ResizeObserver(k);
    return $.observe(d), d.addEventListener("scroll", A), d.addEventListener("touchstart", R, {
      passive: !0
    }), d.addEventListener("touchmove", E, {
      passive: !1
    }), window.addEventListener("resize", k), window.addEventListener("focusin", F), window.visualViewport && (window.visualViewport.addEventListener("resize", k), window.visualViewport.addEventListener("scroll", k)), () => {
      $.disconnect(), d.removeEventListener("scroll", A), d.removeEventListener("touchstart", R), d.removeEventListener("touchmove", E), window.removeEventListener("resize", k), window.removeEventListener("focusin", F), window.visualViewport && (window.visualViewport.removeEventListener("resize", k), window.visualViewport.removeEventListener("scroll", k));
    };
  }, [B]), v(he, {
    children: [v("div", {
      ref: U,
      className: S("scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4", I ? "justify-end pt-0" : "justify-start pt-3"),
      style: {
        minHeight: 0,
        flex: "1 1 auto",
        overflowY: I ? "hidden" : "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: I ? "flex-end" : "flex-start",
        position: "relative",
        touchAction: I ? "none" : "pan-y",
        paddingTop: I ? 0 : void 0,
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        transform: "translateZ(0)",
        willChange: "scroll-position"
      },
      children: [v("div", {
        ref: m,
        className: I ? "flex flex-1" : "flex flex-col gap-8",
        style: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: I ? "100%" : void 0,
          flexGrow: 1,
          flexShrink: 1,
          alignItems: "stretch",
          paddingBottom: I ? "12px" : void 0
        },
        children: [I && t(Oe, {
          greeting: J,
          initialMessages: Y,
          suggestions: ne
        }), se.map((d, b) => t("div", {
          className: "flex flex-col items-start justify-start gap-2",
          children: d.map((A, k) => {
            const F = b === se.length - 1 && k === d.length - 1;
            if (Array.isArray(A) && !F)
              return t(Me, {
                messages: A,
                isActive: !1,
                inProgress: p,
                RenderMessage: n,
                AssistantMessage: u
              }, `${b}-${k}`);
            const R = Array.isArray(A) ? A[A.length - 1] : A, E = {
              key: `${b}-${k}`,
              message: R,
              inProgress: p,
              index: k,
              isCurrentMessage: F,
              AssistantMessage: u,
              UserMessage: h,
              ImageRenderer: x,
              onRegenerate: s,
              onCopy: i,
              markdownTagRenderers: g,
              rawData: R.rawData || {}
            }, { key: $, ...C } = E;
            return n ? t(n, {
              ...C
            }, $) : R.role === "user" ? t(h, {
              ...C
            }, $) : t(u, {
              ...C,
              isGenerating: p && F,
              isLoading: p && F && !R.content
            }, $);
          })
        }, `turn-${b}`)), l, t("div", {
          ref: ue,
          className: "h-2"
        })]
      }), t(G, {
        children: de && t(y.div, {
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
            children: t(V, {
              onClick: () => B(),
              label: q.ai.scrollToBottom,
              variant: "neutral",
              icon: Ie,
              hideLabel: !0
            })
          })
        })
      })]
    }), te && t(Le, {
      onSubmit: (d, b) => {
        (D === "like" ? re : oe)?.(d, {
          threadId: W,
          feedback: b
        }), H();
      },
      onClose: (d) => {
        (D === "like" ? re : oe)?.(d, {
          threadId: W,
          feedback: ""
        }), H();
      },
      reactionType: D,
      message: X
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
const Et = () => {
  Te({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (e) => {
      const n = e.args.message ?? "thinking", o = e.result;
      return t("div", {
        className: e.status ? "-ml-1" : void 0,
        children: t(Ae, {
          title: n,
          status: e.status === "complete" ? "completed" : e.status,
          inGroup: o?.inGroup
        })
      });
    }
  });
}, Lt = () => {
  Te({
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
        required: !1
      }]
    }],
    available: "disabled",
    render: (e) => {
      const n = e.args.sources ?? [];
      return t(ut, {
        sources: n
      });
    }
  });
}, $e = () => {
  Et(), Lt();
}, ce = me({
  inProgress: !1,
  setInProgress: () => {
  }
}), Ot = ({ enabled: e = !1, greeting: n, initialMessage: o, welcomeScreenSuggestions: r, onThumbsUp: a, onThumbsDown: s, fileValidation: i, onFilesRejected: g, onUploadFile: m, children: c, agent: l, ...f }) => t(dt, {
  enabled: e,
  greeting: n,
  initialMessage: o,
  onThumbsUp: a,
  onThumbsDown: s,
  agent: l,
  welcomeScreenSuggestions: r,
  fileValidation: i,
  onFilesRejected: g,
  onUploadFile: m,
  children: t(Bt, {
    ...f,
    children: c
  })
}), Bt = ({ children: e, ...n }) => {
  const { agent: o } = L();
  return v(Ge, {
    runtimeUrl: "/copilotkit",
    agent: o,
    ...n,
    children: [t(Pt, {}), t(Dt, {}), e]
  });
}, Pt = () => {
  const { setClearFunction: e } = L(), { reset: n } = z();
  return M(() => (e(n), () => {
    e(null);
  }), [e, n]), null;
}, Dt = () => {
  const { setSendMessageFunction: e } = L(), { sendMessage: n } = z();
  return M(() => (n && e(n), () => {
    e(null);
  }), [e, n]), null;
}, $t = () => {
  const { enabled: e, open: n, setOpen: o } = L();
  $e();
  const r = ie(({ ...a }) => t("div", {
    className: "m-[16px]",
    children: t(Ee, {
      ...a
    })
  }), []);
  return e ? t(We, {
    className: "h-full",
    defaultOpen: n,
    onSetOpen: (a) => {
      o(a);
    },
    Window: vt,
    Header: mt,
    Messages: At,
    Button: () => null,
    Input: r,
    UserMessage: De,
    AssistantMessage: Re
  }) : null;
}, jt = () => {
  const { enabled: e } = L(), [n, o] = O(!1), r = w(null);
  return $e(), M(() => {
    const a = r.current;
    if (!a) return;
    const s = (i) => {
      i.cancelable && i.preventDefault();
    };
    return a.addEventListener("touchmove", s, {
      passive: !1
    }), () => {
      a.removeEventListener("touchmove", s);
    };
  }, []), M(() => {
    const a = document.createElement("style");
    return a.innerHTML = `
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
    `, document.head.appendChild(a), () => {
      document.head.removeChild(a);
    };
  }, []), e ? t(ce.Provider, {
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
        children: t(Nt, {})
      }), t("div", {
        ref: r,
        className: S("flex-shrink-0 w-full bg-white border-t border-f1-border transition-all", "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"),
        style: {
          flexShrink: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          zIndex: 10,
          touchAction: "none"
        },
        children: t(zt, {})
      })]
    })
  }) : null;
}, zt = () => {
  const { sendMessage: e } = L(), { interrupt: n } = z(), { inProgress: o } = ee(ce);
  return t("div", {
    className: "w-full px-4 py-2",
    children: t(Ee, {
      inProgress: o,
      onSend: async (s) => (e(s), {
        id: "",
        role: "user",
        content: s
      }),
      onStop: () => {
        if (n && typeof n != "string") {
          const s = document.querySelector('[aria-label*="Stop"]');
          s && s.click();
        }
      }
    })
  });
}, Yt = le("F0AiChat", $t), _t = le("F0AiFullscreenChat", jt), Xt = le("F0AiChatProvider", Ot), Jt = {
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
}, je = me(null);
function Zt({ children: e, translations: n }) {
  return t(je.Provider, {
    value: n,
    children: e
  });
}
function Qt() {
  const e = ee(je);
  if (e === null)
    throw new Error("useAiChatTranslations must be used within an AiChatTranslationsProvider");
  return e;
}
export {
  Zt as A,
  Se as B,
  Yt as F,
  kt as I,
  Xt as a,
  _t as b,
  Jt as c,
  ce as d,
  $e as e,
  Et as f,
  Lt as g,
  Qt as u
};
