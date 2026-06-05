import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const t = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, r = {
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
}, d = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["su", "må", "ty", "on", "to", "fr", "lau"],
  abbreviated: ["sun", "mån", "tys", "ons", "tor", "fre", "laur"],
  wide: [
    "sundag",
    "måndag",
    "tysdag",
    "onsdag",
    "torsdag",
    "fredag",
    "laurdag"
  ]
}, i = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natta"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natta"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgonen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natta"
  }
}, o = (e, m) => Number(e) + ".", l = {
  ordinalNumber: o,
  era: a({
    values: t,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: n,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: a({
    values: r,
    defaultWidth: "wide"
  }),
  day: a({
    values: d,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: i,
    defaultWidth: "wide"
  })
};
export {
  l as localize
};
