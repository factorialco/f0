import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["пр.н.е.", "н.е."],
  abbreviated: ["пред н. е.", "н. е."],
  wide: ["пред нашата ера", "нашата ера"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ви кв.", "2-ри кв.", "3-ти кв.", "4-ти кв."],
  wide: ["1-ви квартал", "2-ри квартал", "3-ти квартал", "4-ти квартал"]
}, n = {
  abbreviated: [
    "јан",
    "фев",
    "мар",
    "апр",
    "мај",
    "јун",
    "јул",
    "авг",
    "септ",
    "окт",
    "ноем",
    "дек"
  ],
  wide: [
    "јануари",
    "февруари",
    "март",
    "април",
    "мај",
    "јуни",
    "јули",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември"
  ]
}, o = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["не", "по", "вт", "ср", "че", "пе", "са"],
  abbreviated: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
  wide: [
    "недела",
    "понеделник",
    "вторник",
    "среда",
    "четврток",
    "петок",
    "сабота"
  ]
}, s = {
  wide: {
    am: "претпладне",
    pm: "попладне",
    midnight: "полноќ",
    noon: "напладне",
    morning: "наутро",
    afternoon: "попладне",
    evening: "навечер",
    night: "ноќе"
  }
}, u = (t, l) => {
  const e = Number(t), r = e % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return e + "-ви";
      case 2:
        return e + "-ри";
      case 7:
      case 8:
        return e + "-ми";
    }
  return e + "-ти";
}, w = {
  ordinalNumber: u,
  era: a({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: a({
    values: n,
    defaultWidth: "wide"
  }),
  day: a({
    values: o,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: s,
    defaultWidth: "wide"
  })
};
export {
  w as localize
};
