import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const n = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "despois de cristo"]
}, o = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, i = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "xan",
    "feb",
    "mar",
    "abr",
    "mai",
    "xun",
    "xul",
    "ago",
    "set",
    "out",
    "nov",
    "dec"
  ],
  wide: [
    "xaneiro",
    "febreiro",
    "marzo",
    "abril",
    "maio",
    "xuño",
    "xullo",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "decembro"
  ]
}, t = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "me", "xo", "ve", "sa"],
  abbreviated: ["dom", "lun", "mar", "mer", "xov", "ven", "sab"],
  wide: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"]
}, d = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tarde",
    night: "noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tardiña",
    night: "noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "mañá",
    afternoon: "tarde",
    evening: "tardiña",
    night: "noite"
  }
}, r = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoite",
    noon: "mediodía",
    morning: "da mañá",
    afternoon: "da tarde",
    evening: "da tardiña",
    night: "da noite"
  }
}, m = (a, s) => Number(a) + "º", g = {
  ordinalNumber: m,
  era: e({
    values: n,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: o,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: i,
    defaultWidth: "wide"
  }),
  day: e({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide"
  })
};
export {
  g as localize
};
