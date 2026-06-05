import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const r = {
  narrow: ["да н.э.", "н.э."],
  abbreviated: ["да н. э.", "н. э."],
  wide: ["да нашай эры", "нашай эры"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ы кв.", "2-і кв.", "3-і кв.", "4-ы кв."],
  wide: ["1-ы квартал", "2-і квартал", "3-і квартал", "4-ы квартал"]
}, m = {
  narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
  abbreviated: [
    "студз.",
    "лют.",
    "сак.",
    "крас.",
    "май",
    "чэрв.",
    "ліп.",
    "жн.",
    "вер.",
    "кастр.",
    "ліст.",
    "снеж."
  ],
  wide: [
    "студзень",
    "люты",
    "сакавік",
    "красавік",
    "май",
    "чэрвень",
    "ліпень",
    "жнівень",
    "верасень",
    "кастрычнік",
    "лістапад",
    "снежань"
  ]
}, u = {
  narrow: ["С", "Л", "С", "К", "М", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
  abbreviated: [
    "студз.",
    "лют.",
    "сак.",
    "крас.",
    "мая",
    "чэрв.",
    "ліп.",
    "жн.",
    "вер.",
    "кастр.",
    "ліст.",
    "снеж."
  ],
  wide: [
    "студзеня",
    "лютага",
    "сакавіка",
    "красавіка",
    "мая",
    "чэрвеня",
    "ліпеня",
    "жніўня",
    "верасня",
    "кастрычніка",
    "лістапада",
    "снежня"
  ]
}, g = {
  narrow: ["Н", "П", "А", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
  abbreviated: ["нядз", "пан", "аўт", "сер", "чац", "пят", "суб"],
  wide: [
    "нядзеля",
    "панядзелак",
    "аўторак",
    "серада",
    "чацвер",
    "пятніца",
    "субота"
  ]
}, l = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дзень",
    evening: "веч.",
    night: "ноч"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дзень",
    evening: "веч.",
    night: "ноч"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўнач",
    noon: "поўдзень",
    morning: "раніца",
    afternoon: "дзень",
    evening: "вечар",
    night: "ноч"
  }
}, s = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дня",
    evening: "веч.",
    night: "ночы"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дня",
    evening: "веч.",
    night: "ночы"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўнач",
    noon: "поўдзень",
    morning: "раніцы",
    afternoon: "дня",
    evening: "вечара",
    night: "ночы"
  }
}, h = (a, o) => {
  const i = String(o?.unit), n = Number(a);
  let t;
  return i === "date" ? t = "-га" : i === "hour" || i === "minute" || i === "second" ? t = "-я" : t = (n % 10 === 2 || n % 10 === 3) && n % 100 !== 12 && n % 100 !== 13 ? "-і" : "-ы", n + t;
}, w = {
  ordinalNumber: h,
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
