import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const e = {
  narrow: ["pr.n.e.", "AD"],
  abbreviated: ["pr. Kr.", "po. Kr."],
  wide: ["Prije Krista", "Poslije Krista"]
}, a = {
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
    "sij",
    "velj",
    "ožu",
    "tra",
    "svi",
    "lip",
    "srp",
    "kol",
    "ruj",
    "lis",
    "stu",
    "pro"
  ],
  wide: [
    "siječanj",
    "veljača",
    "ožujak",
    "travanj",
    "svibanj",
    "lipanj",
    "srpanj",
    "kolovoz",
    "rujan",
    "listopad",
    "studeni",
    "prosinac"
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
    "sij",
    "velj",
    "ožu",
    "tra",
    "svi",
    "lip",
    "srp",
    "kol",
    "ruj",
    "lis",
    "stu",
    "pro"
  ],
  wide: [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenog",
    "prosinca"
  ]
}, i = {
  narrow: ["N", "P", "U", "S", "Č", "P", "S"],
  short: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
  abbreviated: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"],
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
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "poslije podne",
    evening: "navečer",
    night: "noću"
  }
}, u = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "popodne",
    evening: "navečer",
    night: "noću"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "ponoć",
    noon: "podne",
    morning: "ujutro",
    afternoon: "poslije podne",
    evening: "navečer",
    night: "noću"
  }
}, s = (o, p) => Number(o) + ".", j = {
  ordinalNumber: s,
  era: n({
    values: e,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: a,
    defaultWidth: "wide",
    argumentCallback: (o) => o - 1
  }),
  month: n({
    values: t,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide"
  }),
  day: n({
    values: i,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: u,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  })
};
export {
  j as localize
};
