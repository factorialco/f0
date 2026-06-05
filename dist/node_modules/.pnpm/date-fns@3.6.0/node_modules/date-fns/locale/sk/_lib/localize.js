import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const e = {
  narrow: ["pred Kr.", "po Kr."],
  abbreviated: ["pred Kr.", "po Kr."],
  wide: ["pred Kristom", "po Kristovi"]
}, a = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. štvrťrok", "2. štvrťrok", "3. štvrťrok", "4. štvrťrok"]
}, r = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "máj",
    "jún",
    "júl",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  wide: [
    "január",
    "február",
    "marec",
    "apríl",
    "máj",
    "jún",
    "júl",
    "august",
    "september",
    "október",
    "november",
    "december"
  ]
}, t = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "feb",
    "mar",
    "apr",
    "máj",
    "jún",
    "júl",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  wide: [
    "januára",
    "februára",
    "marca",
    "apríla",
    "mája",
    "júna",
    "júla",
    "augusta",
    "septembra",
    "októbra",
    "novembra",
    "decembra"
  ]
}, i = {
  narrow: ["n", "p", "u", "s", "š", "p", "s"],
  short: ["ne", "po", "ut", "st", "št", "pi", "so"],
  abbreviated: ["ne", "po", "ut", "st", "št", "pi", "so"],
  wide: [
    "nedeľa",
    "pondelok",
    "utorok",
    "streda",
    "štvrtok",
    "piatok",
    "sobota"
  ]
}, d = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "polnoc",
    noon: "poludnie",
    morning: "ráno",
    afternoon: "popoludnie",
    evening: "večer",
    night: "noc"
  }
}, m = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "nap.",
    morning: "ráno",
    afternoon: "pop.",
    evening: "več.",
    night: "v n."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "napol.",
    morning: "ráno",
    afternoon: "popol.",
    evening: "večer",
    night: "v noci"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o polnoci",
    noon: "napoludnie",
    morning: "ráno",
    afternoon: "popoludní",
    evening: "večer",
    night: "v noci"
  }
}, p = (o, l) => Number(o) + ".", v = {
  ordinalNumber: p,
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
    values: r,
    defaultWidth: "wide",
    formattingValues: t,
    defaultFormattingWidth: "wide"
  }),
  day: n({
    values: i,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: d,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  v as localize
};
