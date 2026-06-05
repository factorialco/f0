import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const n = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, t = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "mai",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des."
  ],
  wide: [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
  ]
}, i = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  wide: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ]
}, d = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgenen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natten"
  }
}, o = (a, m) => Number(a) + ".", u = {
  ordinalNumber: o,
  era: e({
    values: n,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: r,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: t,
    defaultWidth: "wide"
  }),
  day: e({
    values: i,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide"
  })
};
export {
  u as localize
};
