import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const d = {
  narrow: ["б.з.д.", "б.з."],
  abbreviated: ["б.з.д.", "б.з."],
  wide: ["біздің заманымызға дейін", "біздің заманымыз"]
}, s = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ші тоқ.", "2-ші тоқ.", "3-ші тоқ.", "4-ші тоқ."],
  wide: ["1-ші тоқсан", "2-ші тоқсан", "3-ші тоқсан", "4-ші тоқсан"]
}, u = {
  narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
  abbreviated: [
    "қаң",
    "ақп",
    "нау",
    "сәу",
    "мам",
    "мау",
    "шіл",
    "там",
    "қыр",
    "қаз",
    "қар",
    "жел"
  ],
  wide: [
    "қаңтар",
    "ақпан",
    "наурыз",
    "сәуір",
    "мамыр",
    "маусым",
    "шілде",
    "тамыз",
    "қыркүйек",
    "қазан",
    "қараша",
    "желтоқсан"
  ]
}, m = {
  narrow: ["Қ", "А", "Н", "С", "М", "М", "Ш", "Т", "Қ", "Қ", "Қ", "Ж"],
  abbreviated: [
    "қаң",
    "ақп",
    "нау",
    "сәу",
    "мам",
    "мау",
    "шіл",
    "там",
    "қыр",
    "қаз",
    "қар",
    "жел"
  ],
  wide: [
    "қаңтар",
    "ақпан",
    "наурыз",
    "сәуір",
    "мамыр",
    "маусым",
    "шілде",
    "тамыз",
    "қыркүйек",
    "қазан",
    "қараша",
    "желтоқсан"
  ]
}, l = {
  narrow: ["Ж", "Д", "С", "С", "Б", "Ж", "С"],
  short: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  abbreviated: ["жс", "дс", "сс", "ср", "бс", "жм", "сб"],
  wide: [
    "жексенбі",
    "дүйсенбі",
    "сейсенбі",
    "сәрсенбі",
    "бейсенбі",
    "жұма",
    "сенбі"
  ]
}, g = {
  narrow: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасы",
    noon: "түс",
    morning: "таң",
    afternoon: "күндіз",
    evening: "кеш",
    night: "түн"
  },
  wide: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасы",
    noon: "түс",
    morning: "таң",
    afternoon: "күндіз",
    evening: "кеш",
    night: "түн"
  }
}, f = {
  narrow: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасында",
    noon: "түс",
    morning: "таң",
    afternoon: "күн",
    evening: "кеш",
    night: "түн"
  },
  wide: {
    am: "ТД",
    pm: "ТК",
    midnight: "түн ортасында",
    noon: "түсте",
    morning: "таңертең",
    afternoon: "күндіз",
    evening: "кеште",
    night: "түнде"
  }
}, t = {
  0: "-ші",
  1: "-ші",
  2: "-ші",
  3: "-ші",
  4: "-ші",
  5: "-ші",
  6: "-шы",
  7: "-ші",
  8: "-ші",
  9: "-шы",
  10: "-шы",
  20: "-шы",
  30: "-шы",
  40: "-шы",
  50: "-ші",
  60: "-шы",
  70: "-ші",
  80: "-ші",
  90: "-шы",
  100: "-ші"
}, w = (a, h) => {
  const e = Number(a), i = e % 10, o = e >= 100 ? 100 : null, r = t[e] || t[i] || o && t[o] || "";
  return e + r;
}, b = {
  ordinalNumber: w,
  era: n({
    values: d,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: s,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: n({
    values: u,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  }),
  day: n({
    values: l,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: g,
    defaultWidth: "any",
    formattingValues: f,
    defaultFormattingWidth: "wide"
  })
};
export {
  b as localize
};
