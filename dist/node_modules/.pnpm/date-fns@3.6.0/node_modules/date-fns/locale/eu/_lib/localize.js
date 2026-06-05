import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["k.a.", "k.o."],
  abbreviated: ["k.a.", "k.o."],
  wide: ["kristo aurretik", "kristo ondoren"]
}, i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1H", "2H", "3H", "4H"],
  wide: [
    "1. hiruhilekoa",
    "2. hiruhilekoa",
    "3. hiruhilekoa",
    "4. hiruhilekoa"
  ]
}, n = {
  narrow: ["u", "o", "m", "a", "m", "e", "u", "a", "i", "u", "a", "a"],
  abbreviated: [
    "urt",
    "ots",
    "mar",
    "api",
    "mai",
    "eka",
    "uzt",
    "abu",
    "ira",
    "urr",
    "aza",
    "abe"
  ],
  wide: [
    "urtarrila",
    "otsaila",
    "martxoa",
    "apirila",
    "maiatza",
    "ekaina",
    "uztaila",
    "abuztua",
    "iraila",
    "urria",
    "azaroa",
    "abendua"
  ]
}, t = {
  narrow: ["i", "a", "a", "a", "o", "o", "l"],
  short: ["ig", "al", "as", "az", "og", "or", "lr"],
  abbreviated: ["iga", "ast", "ast", "ast", "ost", "ost", "lar"],
  wide: [
    "igandea",
    "astelehena",
    "asteartea",
    "asteazkena",
    "osteguna",
    "ostirala",
    "larunbata"
  ]
}, o = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "ge",
    noon: "eg",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goiza",
    afternoon: "arratsaldea",
    evening: "arratsaldea",
    night: "gaua"
  }
}, d = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "ge",
    noon: "eg",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gauerdia",
    noon: "eguerdia",
    morning: "goizean",
    afternoon: "arratsaldean",
    evening: "arratsaldean",
    night: "gauean"
  }
}, u = (e, g) => Number(e) + ".", m = {
  ordinalNumber: u,
  era: a({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: i,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: a({
    values: n,
    defaultWidth: "wide"
  }),
  day: a({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: o,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  })
};
export {
  m as localize
};
