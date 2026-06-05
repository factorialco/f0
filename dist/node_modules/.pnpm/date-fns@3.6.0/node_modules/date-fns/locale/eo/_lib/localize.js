import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["aK", "pK"],
  abbreviated: ["a.K.E.", "p.K.E."],
  wide: ["antaŭ Komuna Erao", "Komuna Erao"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: [
    "1-a kvaronjaro",
    "2-a kvaronjaro",
    "3-a kvaronjaro",
    "4-a kvaronjaro"
  ]
}, r = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "aŭg",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  wide: [
    "januaro",
    "februaro",
    "marto",
    "aprilo",
    "majo",
    "junio",
    "julio",
    "aŭgusto",
    "septembro",
    "oktobro",
    "novembro",
    "decembro"
  ]
}, t = {
  narrow: ["D", "L", "M", "M", "Ĵ", "V", "S"],
  short: ["di", "lu", "ma", "me", "ĵa", "ve", "sa"],
  abbreviated: ["dim", "lun", "mar", "mer", "ĵaŭ", "ven", "sab"],
  wide: [
    "dimanĉo",
    "lundo",
    "mardo",
    "merkredo",
    "ĵaŭdo",
    "vendredo",
    "sabato"
  ]
}, m = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  abbreviated: {
    am: "a.t.m.",
    pm: "p.t.m.",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  wide: {
    am: "antaŭtagmeze",
    pm: "posttagmeze",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  }
}, i = (a) => Number(a) + "-a", s = {
  ordinalNumber: i,
  era: e({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: n,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return Number(a) - 1;
    }
  }),
  month: e({
    values: r,
    defaultWidth: "wide"
  }),
  day: e({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: m,
    defaultWidth: "wide"
  })
};
export {
  s as localize
};
