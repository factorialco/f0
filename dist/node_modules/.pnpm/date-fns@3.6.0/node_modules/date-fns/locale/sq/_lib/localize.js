import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const a = {
  narrow: ["P", "M"],
  abbreviated: ["PK", "MK"],
  wide: ["Para Krishtit", "Mbas Krishtit"]
}, i = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["4-mujori I", "4-mujori II", "4-mujori III", "4-mujori IV"]
}, m = {
  narrow: ["J", "S", "M", "P", "M", "Q", "K", "G", "S", "T", "N", "D"],
  abbreviated: [
    "Jan",
    "Shk",
    "Mar",
    "Pri",
    "Maj",
    "Qer",
    "Kor",
    "Gus",
    "Sht",
    "Tet",
    "Nën",
    "Dhj"
  ],
  wide: [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nëntor",
    "Dhjetor"
  ]
}, o = {
  narrow: ["D", "H", "M", "M", "E", "P", "S"],
  short: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
  abbreviated: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Sht"],
  wide: ["Dielë", "Hënë", "Martë", "Mërkurë", "Enjte", "Premte", "Shtunë"]
}, d = {
  narrow: {
    am: "p",
    pm: "m",
    midnight: "m",
    noon: "d",
    morning: "mëngjes",
    afternoon: "dite",
    evening: "mbrëmje",
    night: "natë"
  },
  abbreviated: {
    am: "PD",
    pm: "MD",
    midnight: "mesnëtë",
    noon: "drek",
    morning: "mëngjes",
    afternoon: "mbasdite",
    evening: "mbrëmje",
    night: "natë"
  },
  wide: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesnëtë",
    noon: "drek",
    morning: "mëngjes",
    afternoon: "mbasdite",
    evening: "mbrëmje",
    night: "natë"
  }
}, s = {
  narrow: {
    am: "p",
    pm: "m",
    midnight: "m",
    noon: "d",
    morning: "në mëngjes",
    afternoon: "në mbasdite",
    evening: "në mbrëmje",
    night: "në mesnatë"
  },
  abbreviated: {
    am: "PD",
    pm: "MD",
    midnight: "mesnatë",
    noon: "drek",
    morning: "në mëngjes",
    afternoon: "në mbasdite",
    evening: "në mbrëmje",
    night: "në mesnatë"
  },
  wide: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesnatë",
    noon: "drek",
    morning: "në mëngjes",
    afternoon: "në mbasdite",
    evening: "në mbrëmje",
    night: "në mesnatë"
  }
}, u = (r, t) => {
  const n = Number(r);
  return t?.unit === "hour" ? String(n) : n === 1 ? n + "-rë" : n === 4 ? n + "t" : n + "-të";
}, h = {
  ordinalNumber: u,
  era: e({
    values: a,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: i,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: e({
    values: m,
    defaultWidth: "wide"
  }),
  day: e({
    values: o,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide",
    formattingValues: s,
    defaultFormattingWidth: "wide"
  })
};
export {
  h as localize
};
