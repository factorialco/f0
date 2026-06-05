import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["pr.n.e.", "AD"],
  abbreviated: ["pr. Hr.", "po. Hr."],
  wide: ["Prije Hrista", "Poslije Hrista"]
}, t = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, r = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12."
  ],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "avg",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  wide: [
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "juni",
    "juli",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar"
  ]
}, i = {
  narrow: [
    "1.",
    "2.",
    "3.",
    "4.",
    "5.",
    "6.",
    "7.",
    "8.",
    "9.",
    "10.",
    "11.",
    "12."
  ],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "avg",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  wide: [
    "januar",
    "februar",
    "mart",
    "april",
    "maj",
    "juni",
    "juli",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar"
  ]
}, u = {
  narrow: ["N", "P", "U", "S", "Č", "P", "S"],
  short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
  abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
  wide: [
    "nedjelja",
    "ponedjeljak",
    "utorak",
    "srijeda",
    "četvrtak",
    "petak",
    "subota"
  ]
}, d = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "poslije podne",
    evening: "uveče",
    night: "noću"
  }
}, m = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "popodne",
    evening: "uveče",
    night: "noću"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutru",
    afternoon: "poslije podne",
    evening: "uveče",
    night: "noću"
  }
}, p = (n, l) => {
  const a = Number(n);
  return String(a) + ".";
}, v = {
  ordinalNumber: p,
  era: e({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: t,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: r,
    defaultWidth: "wide",
    formattingValues: i,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: u,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  v as localize
};
