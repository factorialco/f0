const h = {
  about: "körülbelül",
  over: "több mint",
  almost: "majdnem",
  lessthan: "kevesebb mint"
}, i = {
  xseconds: " másodperc",
  halfaminute: "fél perc",
  xminutes: " perc",
  xhours: " óra",
  xdays: " nap",
  xweeks: " hét",
  xmonths: " hónap",
  xyears: " év"
}, v = {
  xseconds: {
    "-1": " másodperccel ezelőtt",
    1: " másodperc múlva",
    0: " másodperce"
  },
  halfaminute: {
    "-1": "fél perccel ezelőtt",
    1: "fél perc múlva",
    0: "fél perce"
  },
  xminutes: {
    "-1": " perccel ezelőtt",
    1: " perc múlva",
    0: " perce"
  },
  xhours: {
    "-1": " órával ezelőtt",
    1: " óra múlva",
    0: " órája"
  },
  xdays: {
    "-1": " nappal ezelőtt",
    1: " nap múlva",
    0: " napja"
  },
  xweeks: {
    "-1": " héttel ezelőtt",
    1: " hét múlva",
    0: " hete"
  },
  xmonths: {
    "-1": " hónappal ezelőtt",
    1: " hónap múlva",
    0: " hónapja"
  },
  xyears: {
    "-1": " évvel ezelőtt",
    1: " év múlva",
    0: " éve"
  }
}, x = (t, r, l) => {
  const e = t.match(/about|over|almost|lessthan/i), o = e ? t.replace(e[0], "") : t, c = l?.addSuffix === !0, a = o.toLowerCase(), m = l?.comparison || 0, n = c ? v[a][m] : i[a];
  let s = a === "halfaminute" ? n : r + n;
  if (e) {
    const p = e[0].toLowerCase();
    s = h[p] + " " + s;
  }
  return s;
};
export {
  x as formatDistance
};
