const i = (t, e = 240) => t.current ? t.current.clientHeight >= e : !1, o = (t) => {
  if (!t.current) return !0;
  const e = t.current;
  return e.scrollHeight - e.scrollTop - e.clientHeight < 1;
}, a = (t) => {
  switch (t) {
    case "xxs":
      return 80;
    case "xs":
      return 112;
    case "sm":
      return 160;
    case "md":
      return 208;
    case "lg":
      return 240;
    case "xl":
      return 288;
    case "2xl":
      return 320;
    case "3xl":
      return 384;
    case "full":
      return 1 / 0;
    case "auto":
      return 240;
    default:
      return 240;
  }
}, f = (t) => {
  if (t === "xxs") return "h-20";
  if (t === "xs") return "h-28";
  if (t === "sm") return "h-40";
  if (t === "md") return "h-52";
  if (t === "lg") return "h-60";
  if (t === "xl") return "h-72";
  if (t === "2xl") return "h-80";
  if (t === "3xl") return "h-96";
  if (t === "full") return "h-full";
  if (t === "auto") return "h-auto max-h-60";
}, d = ({
  containerRef: t,
  onHeightChange: e,
  onScrollChange: s,
  heightThreshold: n = 240
}) => {
  const u = () => {
    e(i(t, n)), s(o(t));
  };
  u();
  const r = t.current;
  if (!r) return () => {
  };
  const l = () => {
    s(o(t));
  };
  r.addEventListener("scroll", l);
  const c = new ResizeObserver(u);
  return c.observe(r), () => {
    r.removeEventListener("scroll", l), c.disconnect();
  };
}, m = ({
  editor: t,
  onChange: e,
  setEditorState: s
}) => {
  s({
    html: t.getHTML(),
    json: null
  });
  const n = [];
  if (t.state.doc.descendants((r) => {
    r.type.name === "mention" && r.attrs.id != null && n.push(String(r.attrs.id));
  }), t.isEmpty)
    e({ value: null });
  else {
    const r = t.getHTML();
    n.length > 0 ? e({
      value: r,
      mentionIds: n
    }) : e({ value: r });
  }
}, x = ({ editor: t, content: e }) => {
  if (!t) return null;
  t.commands.setContent(e);
};
export {
  i as checkContainerHeight,
  f as getHeight,
  a as getHeightThreshold,
  m as handleEditorUpdate,
  o as isScrolledToBottom,
  x as setEditorContent,
  d as setupContainerObservers
};
