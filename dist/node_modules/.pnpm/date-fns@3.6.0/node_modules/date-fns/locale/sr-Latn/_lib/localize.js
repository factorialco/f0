import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const a = {
  narrow: ["pr.n.e.", "AD"],
  abbreviated: ["pr. Hr.", "po. Hr."],
  wide: ["Pre Hrista", "Posle Hrista"]
}, o = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, t = {
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
    "jun",
    "jul",
    "avgust",
    "septembar",
    "oktobar",
    "novembar",
    "decembar"
  ]
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
    "jun",
    "jul",
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
    "nedelja",
    "ponedeljak",
    "utorak",
    "sreda",
    "četvrtak",
    "petak",
    "subota"
  ]
}, i = {
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
    afternoon: "posle podne",
    evening: "uveče",
    night: "noću"
  }
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
    afternoon: "posle podne",
    evening: "uveče",
    night: "noću"
  }
}, m = (n, p) => Number(n) + ".", v = {
  ordinalNumber: m,
  era: e({
    values: a,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: o,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: t,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: u,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide",
    formattingValues: i,
    defaultFormattingWidth: "wide"
  })
};
export {
  v as localize
};
