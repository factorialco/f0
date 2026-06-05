import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, o = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ]
}, t = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
  ]
}, r = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, d = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, w = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, p = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, s = (n, m) => String(n), l = {
  ordinalNumber: s,
  era: e({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: a,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: o,
    defaultWidth: "wide",
    formattingValues: t,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: r,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: e({
    values: w,
    defaultWidth: "wide",
    formattingValues: p,
    defaultFormattingWidth: "wide"
  })
};
export {
  l as localize
};
