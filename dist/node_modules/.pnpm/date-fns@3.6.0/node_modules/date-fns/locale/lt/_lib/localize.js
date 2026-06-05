import { buildLocalizeFn as i } from "../../_lib/buildLocalizeFn.js";
const e = {
  narrow: ["pr. Kr.", "po Kr."],
  abbreviated: ["pr. Kr.", "po Kr."],
  wide: ["prieš Kristų", "po Kristaus"]
}, t = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I k.", "II k.", "III k.", "IV k."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
}, n = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod."
  ],
  wide: [
    "sausis",
    "vasaris",
    "kovas",
    "balandis",
    "gegužė",
    "birželis",
    "liepa",
    "rugpjūtis",
    "rugsėjis",
    "spalis",
    "lapkritis",
    "gruodis"
  ]
}, s = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
    "saus.",
    "vas.",
    "kov.",
    "bal.",
    "geg.",
    "birž.",
    "liep.",
    "rugp.",
    "rugs.",
    "spal.",
    "lapkr.",
    "gruod."
  ],
  wide: [
    "sausio",
    "vasario",
    "kovo",
    "balandžio",
    "gegužės",
    "birželio",
    "liepos",
    "rugpjūčio",
    "rugsėjo",
    "spalio",
    "lapkričio",
    "gruodžio"
  ]
}, o = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienis",
    "pirmadienis",
    "antradienis",
    "trečiadienis",
    "ketvirtadienis",
    "penktadienis",
    "šeštadienis"
  ]
}, d = {
  narrow: ["S", "P", "A", "T", "K", "P", "Š"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
  wide: [
    "sekmadienį",
    "pirmadienį",
    "antradienį",
    "trečiadienį",
    "ketvirtadienį",
    "penktadienį",
    "šeštadienį"
  ]
}, p = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  }
}, u = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "priešpiet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popietė",
    evening: "vakaras",
    night: "naktis"
  }
}, g = (a, v) => Number(a) + "-oji", m = {
  ordinalNumber: g,
  era: i({
    values: e,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: t,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: i({
    values: n,
    defaultWidth: "wide",
    formattingValues: s,
    defaultFormattingWidth: "wide"
  }),
  day: i({
    values: o,
    defaultWidth: "wide",
    formattingValues: d,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: i({
    values: p,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  })
};
export {
  m as localize
};
