import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const n = {
  narrow: ["o.Kr.", "m.Kr."],
  abbreviated: ["o.Kr.", "m.Kr."],
  wide: ["ovdal Kristusa", "maŋŋel Kristusa"]
}, o = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartála", "2. kvartála", "3. kvartála", "4. kvartála"]
}, i = {
  narrow: ["O", "G", "N", "C", "M", "G", "S", "B", "Č", "G", "S", "J"],
  abbreviated: [
    "ođđa",
    "guov",
    "njuk",
    "cuo",
    "mies",
    "geas",
    "suoi",
    "borg",
    "čakč",
    "golg",
    "skáb",
    "juov"
  ],
  wide: [
    "ođđajagemánnu",
    "guovvamánnu",
    "njukčamánnu",
    "cuoŋománnu",
    "miessemánnu",
    "geassemánnu",
    "suoidnemánnu",
    "borgemánnu",
    "čakčamánnu",
    "golggotmánnu",
    "skábmamánnu",
    "juovlamánnu"
  ]
}, r = {
  narrow: ["S", "V", "M", "G", "D", "B", "L"],
  short: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  abbreviated: ["sotn", "vuos", "maŋ", "gask", "duor", "bear", "láv"],
  wide: [
    "sotnabeaivi",
    "vuossárga",
    "maŋŋebárga",
    "gaskavahkku",
    "duorastat",
    "bearjadat",
    "lávvardat"
  ]
}, s = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gaskaidja",
    noon: "gaskabeaivi",
    morning: "iđđes",
    afternoon: "maŋŋel gaska.",
    evening: "eahkes",
    night: "ihkku"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeaivvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabea.",
    evening: "eahkes",
    night: "ihkku"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeavvi",
    morning: "iđđes",
    afternoon: "maŋŋel gaskabeaivvi",
    evening: "eahkes",
    night: "ihkku"
  }
}, u = (e, t) => Number(e) + ".", g = {
  ordinalNumber: u,
  era: a({
    values: n,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: o,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: a({
    values: i,
    defaultWidth: "wide"
  }),
  day: a({
    values: r,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: s,
    defaultWidth: "wide"
  })
};
export {
  g as localize
};
