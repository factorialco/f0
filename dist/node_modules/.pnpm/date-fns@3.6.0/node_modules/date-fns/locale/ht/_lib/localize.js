import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const n = {
  narrow: ["av. J.-K", "ap. J.-K"],
  abbreviated: ["av. J.-K", "ap. J.-K"],
  wide: ["anvan Jezi Kris", "apre Jezi Kris"]
}, t = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1ye trim.", "2yèm trim.", "3yèm trim.", "4yèm trim."],
  wide: ["1ye trimès", "2yèm trimès", "3yèm trimès", "4yèm trimès"]
}, m = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "O", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "fevr.",
    "mas",
    "avr.",
    "me",
    "jen",
    "jiyè",
    "out",
    "sept.",
    "okt.",
    "nov.",
    "des."
  ],
  wide: [
    "janvye",
    "fevrye",
    "mas",
    "avril",
    "me",
    "jen",
    "jiyè",
    "out",
    "septanm",
    "oktòb",
    "novanm",
    "desanm"
  ]
}, r = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "le", "ma", "mè", "je", "va", "sa"],
  abbreviated: ["dim.", "len.", "mad.", "mèk.", "jed.", "van.", "sam."],
  wide: ["dimanch", "lendi", "madi", "mèkredi", "jedi", "vandredi", "samdi"]
}, d = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "swa",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "maten",
    afternoon: "aprèmidi",
    evening: "swa",
    night: "maten"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minwit",
    noon: "midi",
    morning: "nan maten",
    afternoon: "nan aprèmidi",
    evening: "nan aswè",
    night: "nan maten"
  }
}, o = (i, s) => {
  const e = Number(i);
  return e === 0 ? String(e) : e + (e === 1 ? "ye" : "yèm");
}, l = {
  ordinalNumber: o,
  era: a({
    values: n,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: t,
    defaultWidth: "wide",
    argumentCallback: (i) => i - 1
  }),
  month: a({
    values: m,
    defaultWidth: "wide"
  }),
  day: a({
    values: r,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: d,
    defaultWidth: "wide"
  })
};
export {
  l as localize
};
