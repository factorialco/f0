import { buildLocalizeFn as t } from "../../_lib/buildLocalizeFn.js";
const a = {
  narrow: ["p.m.ē", "m.ē"],
  abbreviated: ["p. m. ē.", "m. ē."],
  wide: ["pirms mūsu ēras", "mūsu ērā"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
  wide: [
    "pirmais ceturksnis",
    "otrais ceturksnis",
    "trešais ceturksnis",
    "ceturtais ceturksnis"
  ]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. cet.", "2. cet.", "3. cet.", "4. cet."],
  wide: [
    "pirmajā ceturksnī",
    "otrajā ceturksnī",
    "trešajā ceturksnī",
    "ceturtajā ceturksnī"
  ]
}, i = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "febr.",
    "marts",
    "apr.",
    "maijs",
    "jūn.",
    "jūl.",
    "aug.",
    "sept.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "janvāris",
    "februāris",
    "marts",
    "aprīlis",
    "maijs",
    "jūnijs",
    "jūlijs",
    "augusts",
    "septembris",
    "oktobris",
    "novembris",
    "decembris"
  ]
}, s = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "febr.",
    "martā",
    "apr.",
    "maijs",
    "jūn.",
    "jūl.",
    "aug.",
    "sept.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "janvārī",
    "februārī",
    "martā",
    "aprīlī",
    "maijā",
    "jūnijā",
    "jūlijā",
    "augustā",
    "septembrī",
    "oktobrī",
    "novembrī",
    "decembrī"
  ]
}, d = {
  narrow: ["S", "P", "O", "T", "C", "P", "S"],
  short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
  abbreviated: [
    "svētd.",
    "pirmd.",
    "otrd.",
    "trešd.",
    "ceturtd.",
    "piektd.",
    "sestd."
  ],
  wide: [
    "svētdiena",
    "pirmdiena",
    "otrdiena",
    "trešdiena",
    "ceturtdiena",
    "piektdiena",
    "sestdiena"
  ]
}, o = {
  narrow: ["S", "P", "O", "T", "C", "P", "S"],
  short: ["Sv", "P", "O", "T", "C", "Pk", "S"],
  abbreviated: [
    "svētd.",
    "pirmd.",
    "otrd.",
    "trešd.",
    "ceturtd.",
    "piektd.",
    "sestd."
  ],
  wide: [
    "svētdienā",
    "pirmdienā",
    "otrdienā",
    "trešdienā",
    "ceturtdienā",
    "piektdienā",
    "sestdienā"
  ]
}, m = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rīts",
    afternoon: "diena",
    evening: "vakars",
    night: "nakts"
  },
  abbreviated: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rīts",
    afternoon: "pēcpusd.",
    evening: "vakars",
    night: "nakts"
  },
  wide: {
    am: "am",
    pm: "pm",
    midnight: "pusnakts",
    noon: "pusdienlaiks",
    morning: "rīts",
    afternoon: "pēcpusdiena",
    evening: "vakars",
    night: "nakts"
  }
}, u = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rītā",
    afternoon: "dienā",
    evening: "vakarā",
    night: "naktī"
  },
  abbreviated: {
    am: "am",
    pm: "pm",
    midnight: "pusn.",
    noon: "pusd.",
    morning: "rītā",
    afternoon: "pēcpusd.",
    evening: "vakarā",
    night: "naktī"
  },
  wide: {
    am: "am",
    pm: "pm",
    midnight: "pusnaktī",
    noon: "pusdienlaikā",
    morning: "rītā",
    afternoon: "pēcpusdienā",
    evening: "vakarā",
    night: "naktī"
  }
}, p = (e, c) => Number(e) + ".", v = {
  ordinalNumber: p,
  era: t({
    values: a,
    defaultWidth: "wide"
  }),
  quarter: t({
    values: n,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: t({
    values: i,
    defaultWidth: "wide",
    formattingValues: s,
    defaultFormattingWidth: "wide"
  }),
  day: t({
    values: d,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: t({
    values: m,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  })
};
export {
  v as localize
};
