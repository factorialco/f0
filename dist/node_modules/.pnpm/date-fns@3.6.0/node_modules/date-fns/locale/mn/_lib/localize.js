import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const t = {
  narrow: ["НТӨ", "НТ"],
  abbreviated: ["НТӨ", "НТ"],
  wide: ["нийтийн тооллын өмнөх", "нийтийн тооллын"]
}, n = {
  narrow: ["I", "II", "III", "IV"],
  abbreviated: ["I улирал", "II улирал", "III улирал", "IV улирал"],
  wide: ["1-р улирал", "2-р улирал", "3-р улирал", "4-р улирал"]
}, i = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII"
  ],
  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар"
  ],
  wide: [
    "Нэгдүгээр сар",
    "Хоёрдугаар сар",
    "Гуравдугаар сар",
    "Дөрөвдүгээр сар",
    "Тавдугаар сар",
    "Зургаадугаар сар",
    "Долоодугаар сар",
    "Наймдугаар сар",
    "Есдүгээр сар",
    "Аравдугаар сар",
    "Арваннэгдүгээр сар",
    "Арван хоёрдугаар сар"
  ]
}, o = {
  narrow: [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII"
  ],
  abbreviated: [
    "1-р сар",
    "2-р сар",
    "3-р сар",
    "4-р сар",
    "5-р сар",
    "6-р сар",
    "7-р сар",
    "8-р сар",
    "9-р сар",
    "10-р сар",
    "11-р сар",
    "12-р сар"
  ],
  wide: [
    "нэгдүгээр сар",
    "хоёрдугаар сар",
    "гуравдугаар сар",
    "дөрөвдүгээр сар",
    "тавдугаар сар",
    "зургаадугаар сар",
    "долоодугаар сар",
    "наймдугаар сар",
    "есдүгээр сар",
    "аравдугаар сар",
    "арваннэгдүгээр сар",
    "арван хоёрдугаар сар"
  ]
}, r = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"],
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
  wide: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"]
}, I = {
  narrow: ["Н", "Д", "М", "Л", "П", "Б", "Б"],
  short: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
  abbreviated: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
  wide: ["ням", "даваа", "мягмар", "лхагва", "пүрэв", "баасан", "бямба"]
}, d = {
  narrow: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө"
  },
  abbreviated: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө"
  },
  wide: {
    am: "ү.ө.",
    pm: "ү.х.",
    midnight: "шөнө дунд",
    noon: "үд дунд",
    morning: "өглөө",
    afternoon: "өдөр",
    evening: "орой",
    night: "шөнө"
  }
}, l = (a, u) => String(a), m = {
  ordinalNumber: l,
  era: e({
    values: t,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: n,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: i,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: r,
    defaultWidth: "wide",
    formattingValues: I,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: e({
    values: d,
    defaultWidth: "wide"
  })
};
export {
  m as localize
};
