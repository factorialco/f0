import { buildLocalizeFn as i } from "../../_lib/buildLocalizeFn.js";
const o = {
  narrow: ["пр.н.е.", "н.е."],
  abbreviated: ["преди н. е.", "н. е."],
  wide: ["преди новата ера", "новата ера"]
}, s = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-во тримес.", "2-ро тримес.", "3-то тримес.", "4-то тримес."],
  wide: [
    "1-во тримесечие",
    "2-ро тримесечие",
    "3-то тримесечие",
    "4-то тримесечие"
  ]
}, l = {
  abbreviated: [
    "яну",
    "фев",
    "мар",
    "апр",
    "май",
    "юни",
    "юли",
    "авг",
    "сеп",
    "окт",
    "ное",
    "дек"
  ],
  wide: [
    "януари",
    "февруари",
    "март",
    "април",
    "май",
    "юни",
    "юли",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември"
  ]
}, c = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вто", "сря", "чет", "пет", "съб"],
  wide: [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота"
  ]
}, f = {
  wide: {
    am: "преди обяд",
    pm: "след обяд",
    midnight: "в полунощ",
    noon: "на обяд",
    morning: "сутринта",
    afternoon: "следобед",
    evening: "вечерта",
    night: "през нощта"
  }
};
function m(e) {
  return e === "year" || e === "week" || e === "minute" || e === "second";
}
function w(e) {
  return e === "quarter";
}
function n(e, u, r, t, a) {
  const d = w(u) ? a : m(u) ? t : r;
  return e + "-" + d;
}
const b = (e, u) => {
  const r = Number(e), t = u?.unit;
  if (r === 0)
    return n(0, t, "ев", "ева", "ево");
  if (r % 1e3 === 0)
    return n(r, t, "ен", "на", "но");
  if (r % 100 === 0)
    return n(r, t, "тен", "тна", "тно");
  const a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return n(r, t, "ви", "ва", "во");
      case 2:
        return n(r, t, "ри", "ра", "ро");
      case 7:
      case 8:
        return n(r, t, "ми", "ма", "мо");
    }
  return n(r, t, "ти", "та", "то");
}, v = {
  ordinalNumber: b,
  era: i({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: s,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: i({
    values: l,
    defaultWidth: "wide"
  }),
  day: i({
    values: c,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: f,
    defaultWidth: "wide"
  })
};
export {
  v as localize
};
