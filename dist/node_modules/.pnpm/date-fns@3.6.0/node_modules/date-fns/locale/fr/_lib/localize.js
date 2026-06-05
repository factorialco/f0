import { buildLocalizeFn as r } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant Jésus-Christ", "après Jésus-Christ"]
}, d = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
  wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
}, s = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ],
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ]
}, u = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ]
}, l = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin"
  }
}, v = (n, i) => {
  const a = Number(n), e = i?.unit;
  if (a === 0) return "0";
  const m = ["year", "week", "hour", "minute", "second"];
  let t;
  return a === 1 ? t = e && m.includes(e) ? "ère" : "er" : t = "ème", a + t;
}, c = ["MMM", "MMMM"], M = {
  preprocessor: (n, i) => n.getDate() === 1 || !i.some(
    (e) => e.isToken && c.includes(e.value)
  ) ? i : i.map(
    (e) => e.isToken && e.value === "do" ? { isToken: !0, value: "d" } : e
  ),
  ordinalNumber: v,
  era: r({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: r({
    values: s,
    defaultWidth: "wide"
  }),
  day: r({
    values: u,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: l,
    defaultWidth: "wide"
  })
};
export {
  M as localize
};
