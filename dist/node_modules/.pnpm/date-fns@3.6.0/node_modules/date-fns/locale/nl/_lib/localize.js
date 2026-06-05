import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const n = {
  narrow: ["v.C.", "n.C."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["voor Christus", "na Christus"]
}, d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
}, r = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mei",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, t = {
  narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
  short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
  abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
  wide: [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag"
  ]
}, i = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  }
}, o = (e, s) => Number(e) + "e", h = {
  ordinalNumber: o,
  era: a({
    values: n,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: a({
    values: r,
    defaultWidth: "wide"
  }),
  day: a({
    values: t,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: i,
    defaultWidth: "wide"
  })
};
export {
  h as localize
};
