import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["до н.е.", "н.е."],
  abbreviated: ["до н. е.", "н. е."],
  wide: ["до нашої ери", "нашої ери"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, m = {
  // ДСТУ 3582:2013
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "травень",
    "червень",
    "липень",
    "серпень",
    "вересень",
    "жовтень",
    "листопад",
    "грудень"
  ]
}, u = {
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня"
  ]
}, g = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
  wide: [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота"
  ]
}, l = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранок",
    afternoon: "день",
    evening: "вечір",
    night: "ніч"
  }
}, s = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  }
}, h = (t, o) => {
  const i = String(o?.unit), a = Number(t);
  let n;
  return i === "date" ? a === 3 || a === 23 ? n = "-є" : n = "-е" : i === "minute" || i === "second" || i === "hour" ? n = "-а" : n = "-й", a + n;
}, w = {
  ordinalNumber: h,
  era: e({
    values: r,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: e({
    values: m,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: g,
    defaultWidth: "wide"
  }),
  dayPeriod: e({
    values: l,
    defaultWidth: "any",
    formattingValues: s,
    defaultFormattingWidth: "wide"
  })
};
export {
  w as localize
};
