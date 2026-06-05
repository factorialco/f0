import { buildLocalizeFn as e } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["e.m.a", "m.a.j"],
  abbreviated: ["e.m.a", "m.a.j"],
  wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, n = {
  narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jaan",
    "veebr",
    "märts",
    "apr",
    "mai",
    "juuni",
    "juuli",
    "aug",
    "sept",
    "okt",
    "nov",
    "dets"
  ],
  wide: [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember"
  ]
}, t = {
  narrow: ["P", "E", "T", "K", "N", "R", "L"],
  short: ["P", "E", "T", "K", "N", "R", "L"],
  abbreviated: [
    "pühap.",
    "esmasp.",
    "teisip.",
    "kolmap.",
    "neljap.",
    "reede.",
    "laup."
  ],
  wide: [
    "pühapäev",
    "esmaspäev",
    "teisipäev",
    "kolmapäev",
    "neljapäev",
    "reede",
    "laupäev"
  ]
}, o = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "kesköö",
    noon: "keskpäev",
    morning: "hommik",
    afternoon: "pärastlõuna",
    evening: "õhtu",
    night: "öö"
  }
}, m = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "keskööl",
    noon: "keskpäeval",
    morning: "hommikul",
    afternoon: "pärastlõunal",
    evening: "õhtul",
    night: "öösel"
  }
}, l = (a, s) => Number(a) + ".", k = {
  ordinalNumber: l,
  era: e({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: e({
    values: r,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: e({
    values: n,
    defaultWidth: "wide",
    formattingValues: n,
    defaultFormattingWidth: "wide"
  }),
  day: e({
    values: t,
    defaultWidth: "wide",
    formattingValues: t,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: e({
    values: o,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  k as localize
};
