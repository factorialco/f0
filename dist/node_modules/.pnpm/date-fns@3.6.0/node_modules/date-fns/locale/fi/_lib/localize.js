import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const u = {
  narrow: ["eaa.", "jaa."],
  abbreviated: ["eaa.", "jaa."],
  wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
}, e = {
  narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
  abbreviated: [
    "tammi",
    "helmi",
    "maalis",
    "huhti",
    "touko",
    "kesä",
    "heinä",
    "elo",
    "syys",
    "loka",
    "marras",
    "joulu"
  ],
  wide: [
    "tammikuu",
    "helmikuu",
    "maaliskuu",
    "huhtikuu",
    "toukokuu",
    "kesäkuu",
    "heinäkuu",
    "elokuu",
    "syyskuu",
    "lokakuu",
    "marraskuu",
    "joulukuu"
  ]
}, l = {
  narrow: e.narrow,
  abbreviated: e.abbreviated,
  wide: [
    "tammikuuta",
    "helmikuuta",
    "maaliskuuta",
    "huhtikuuta",
    "toukokuuta",
    "kesäkuuta",
    "heinäkuuta",
    "elokuuta",
    "syyskuuta",
    "lokakuuta",
    "marraskuuta",
    "joulukuuta"
  ]
}, i = {
  narrow: ["S", "M", "T", "K", "T", "P", "L"],
  short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
  abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
  wide: [
    "sunnuntai",
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai"
  ]
}, o = {
  narrow: i.narrow,
  short: i.short,
  abbreviated: i.abbreviated,
  wide: [
    "sunnuntaina",
    "maanantaina",
    "tiistaina",
    "keskiviikkona",
    "torstaina",
    "perjantaina",
    "lauantaina"
  ]
}, r = {
  narrow: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä"
  },
  abbreviated: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä"
  },
  wide: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyöllä",
    noon: "keskipäivällä",
    morning: "aamupäivällä",
    afternoon: "iltapäivällä",
    evening: "illalla",
    night: "yöllä"
  }
}, k = (t, s) => Number(t) + ".", h = {
  ordinalNumber: k,
  era: a({
    values: u,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: n,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: a({
    values: e,
    defaultWidth: "wide",
    formattingValues: l,
    defaultFormattingWidth: "wide"
  }),
  day: a({
    values: i,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: a({
    values: r,
    defaultWidth: "wide"
  })
};
export {
  h as localize
};
