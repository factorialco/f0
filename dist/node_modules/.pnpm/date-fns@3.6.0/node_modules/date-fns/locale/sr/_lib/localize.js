import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const a = {
  narrow: ["пр.н.е.", "АД"],
  abbreviated: ["пр. Хр.", "по. Хр."],
  wide: ["Пре Христа", "После Христа"]
}, i = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. кв.", "2. кв.", "3. кв.", "4. кв."],
  wide: ["1. квартал", "2. квартал", "3. квартал", "4. квартал"]
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
    "јан",
    "феб",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "сеп",
    "окт",
    "нов",
    "дец"
  ],
  wide: [
    "јануар",
    "фебруар",
    "март",
    "април",
    "мај",
    "јун",
    "јул",
    "август",
    "септембар",
    "октобар",
    "новембар",
    "децембар"
  ]
}, o = {
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
    "јан",
    "феб",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "сеп",
    "окт",
    "нов",
    "дец"
  ],
  wide: [
    "јануар",
    "фебруар",
    "март",
    "април",
    "мај",
    "јун",
    "јул",
    "август",
    "септембар",
    "октобар",
    "новембар",
    "децембар"
  ]
}, r = {
  narrow: ["Н", "П", "У", "С", "Ч", "П", "С"],
  short: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
  abbreviated: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
  wide: [
    "недеља",
    "понедељак",
    "уторак",
    "среда",
    "четвртак",
    "петак",
    "субота"
  ]
}, d = {
  narrow: {
    am: "АМ",
    pm: "ПМ",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу"
  },
  abbreviated: {
    am: "АМ",
    pm: "ПМ",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "после подне",
    evening: "увече",
    night: "ноћу"
  }
}, m = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "поподне",
    evening: "увече",
    night: "ноћу"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "поноћ",
    noon: "подне",
    morning: "ујутру",
    afternoon: "после подне",
    evening: "увече",
    night: "ноћу"
  }
}, g = (e, u) => Number(e) + ".", h = {
  ordinalNumber: g,
  era: n({
    values: a,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: i,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: n({
    values: t,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  }),
  day: n({
    values: r,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: m,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  })
};
export {
  h as localize
};
