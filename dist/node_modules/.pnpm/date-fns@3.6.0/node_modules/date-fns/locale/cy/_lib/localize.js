import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["C", "O"],
  abbreviated: ["CC", "OC"],
  wide: ["Cyn Crist", "Ar ôl Crist"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Ch1", "Ch2", "Ch3", "Ch4"],
  wide: ["Chwarter 1af", "2ail chwarter", "3ydd chwarter", "4ydd chwarter"]
}, o = {
  narrow: ["I", "Ch", "Ma", "E", "Mi", "Me", "G", "A", "Md", "H", "T", "Rh"],
  abbreviated: [
    "Ion",
    "Chwe",
    "Maw",
    "Ebr",
    "Mai",
    "Meh",
    "Gor",
    "Aws",
    "Med",
    "Hyd",
    "Tach",
    "Rhag"
  ],
  wide: [
    "Ionawr",
    "Chwefror",
    "Mawrth",
    "Ebrill",
    "Mai",
    "Mehefin",
    "Gorffennaf",
    "Awst",
    "Medi",
    "Hydref",
    "Tachwedd",
    "Rhagfyr"
  ]
}, i = {
  narrow: ["S", "Ll", "M", "M", "I", "G", "S"],
  short: ["Su", "Ll", "Ma", "Me", "Ia", "Gw", "Sa"],
  abbreviated: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
  wide: [
    "dydd Sul",
    "dydd Llun",
    "dydd Mawrth",
    "dydd Mercher",
    "dydd Iau",
    "dydd Gwener",
    "dydd Sadwrn"
  ]
}, t = {
  narrow: {
    am: "b",
    pm: "h",
    midnight: "hn",
    noon: "hd",
    morning: "bore",
    afternoon: "prynhawn",
    evening: "gyda'r nos",
    night: "nos"
  },
  abbreviated: {
    am: "yb",
    pm: "yh",
    midnight: "hanner nos",
    noon: "hanner dydd",
    morning: "bore",
    afternoon: "prynhawn",
    evening: "gyda'r nos",
    night: "nos"
  },
  wide: {
    am: "y.b.",
    pm: "y.h.",
    midnight: "hanner nos",
    noon: "hanner dydd",
    morning: "bore",
    afternoon: "prynhawn",
    evening: "gyda'r nos",
    night: "nos"
  }
}, h = {
  narrow: {
    am: "b",
    pm: "h",
    midnight: "hn",
    noon: "hd",
    morning: "yn y bore",
    afternoon: "yn y prynhawn",
    evening: "gyda'r nos",
    night: "yn y nos"
  },
  abbreviated: {
    am: "yb",
    pm: "yh",
    midnight: "hanner nos",
    noon: "hanner dydd",
    morning: "yn y bore",
    afternoon: "yn y prynhawn",
    evening: "gyda'r nos",
    night: "yn y nos"
  },
  wide: {
    am: "y.b.",
    pm: "y.h.",
    midnight: "hanner nos",
    noon: "hanner dydd",
    morning: "yn y bore",
    afternoon: "yn y prynhawn",
    evening: "gyda'r nos",
    night: "yn y nos"
  }
}, s = (a, y) => {
  const n = Number(a);
  if (n < 20)
    switch (n) {
      case 0:
        return n + "fed";
      case 1:
        return n + "af";
      case 2:
        return n + "ail";
      case 3:
      case 4:
        return n + "ydd";
      case 5:
      case 6:
        return n + "ed";
      case 7:
      case 8:
      case 9:
      case 10:
      case 12:
      case 15:
      case 18:
        return n + "fed";
      case 11:
      case 13:
      case 14:
      case 16:
      case 17:
      case 19:
        return n + "eg";
    }
  else if (n >= 50 && n <= 60 || n === 80 || n >= 100)
    return n + "fed";
  return n + "ain";
}, u = {
  ordinalNumber: s,
  era: e({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: o,
    defaultWidth: "wide"
  }),
  day: e({
    values: i,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: t,
    defaultWidth: "wide",
    formattingValues: h,
    defaultFormattingWidth: "wide"
  })
};
export {
  u as localize
};
