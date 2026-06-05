import { jsx as d } from "react/jsx-runtime";
import { useState as u, useEffect as m } from "react";
import { cn as g } from "../../../../lib/utils.js";
const x = 35, p = 22, v = 400, D = 2500, T = 220, y = ({ messages: t, onClick: a }) => {
  const [r, h] = u(0), [l, f] = u(0), [n, i] = u("starting"), s = t[r] ?? "";
  m(() => {
    t.length > 0 && r >= t.length && (h(0), f(0), i("starting"));
  }, [t.length, r]), m(() => {
    let e;
    if (n === "starting")
      e = setTimeout(() => i("writing"), v);
    else if (n === "writing")
      l < s.length ? e = setTimeout(() => f((o) => o + 1), x) : i("holding");
    else if (n === "holding") {
      if (t.length <= 1) return;
      e = setTimeout(() => i("erasing"), D);
    } else n === "erasing" && (l > 0 ? e = setTimeout(() => f((o) => o - 1), p) : e = setTimeout(() => {
      h((o) => (o + 1) % t.length), i("starting");
    }, T));
    return () => {
      e && clearTimeout(e);
    };
  }, [n, l, s.length, t.length]);
  const c = !!a;
  return /* @__PURE__ */ d("div", { className: "flex w-full flex-1 items-center justify-center px-4", children: /* @__PURE__ */ d(
    "p",
    {
      role: c ? "button" : void 0,
      tabIndex: c ? 0 : void 0,
      onClick: a,
      onKeyDown: c ? (e) => {
        (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a?.());
      } : void 0,
      className: g(
        "bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
        c && g(
          "cursor-pointer transition-transform duration-200",
          "hover:scale-[1.02] focus-visible:scale-[1.02]",
          "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
        )
      ),
      style: { minHeight: 28 },
      "aria-label": s,
      children: s.slice(0, l)
    },
    r
  ) });
};
export {
  y as WelcomeScreen
};
