import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["före Kristus", "efter Kristus"]
}, i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
}, o = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "maj",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, m = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sö", "må", "ti", "on", "to", "fr", "lö"],
  abbreviated: ["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  wide: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
}, d = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "morg.",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt"
  },
  abbreviated: {
    am: "f.m.",
    pm: "e.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt"
  },
  wide: {
    am: "förmiddag",
    pm: "eftermiddag",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "eftermiddag",
    evening: "kväll",
    night: "natt"
  }
}, g = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten"
  },
  abbreviated: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten"
  },
  wide: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgonen",
    afternoon: "på eftermiddagen",
    evening: "på kvällen",
    night: "på natten"
  }
}, l = (n, s) => {
  const a = Number(n), t = a % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
      case 2:
        return a + ":a";
    }
  return a + ":e";
}, u = {
  ordinalNumber: l,
  era: e({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: i,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: e({
    values: o,
    defaultWidth: "wide"
  }),
  day: e({
    values: m,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide",
    formattingValues: g,
    defaultFormattingWidth: "wide"
  })
};
export {
  u as localize
};
