import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const e = {
  narrow: ["M.A", "M."],
  abbreviated: ["M.A", "M."],
  wide: ["Miloddan Avvalgi", "Milodiy"]
}, t = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["CH.1", "CH.2", "CH.3", "CH.4"],
  wide: ["1-chi chorak", "2-chi chorak", "3-chi chorak", "4-chi chorak"]
}, i = {
  narrow: ["Y", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Yan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Iyun",
    "Iyul",
    "Avg",
    "Sen",
    "Okt",
    "Noy",
    "Dek"
  ],
  wide: [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr"
  ]
}, r = {
  narrow: ["Y", "D", "S", "CH", "P", "J", "SH"],
  short: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
  abbreviated: ["Yak", "Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"],
  wide: [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba"
  ]
}, o = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "y.t",
    noon: "p.",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  }
}, u = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "y.t",
    noon: "p.",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "yarim tun",
    noon: "peshin",
    morning: "ertalab",
    afternoon: "tushdan keyin",
    evening: "kechqurun",
    night: "tun"
  }
}, h = (n, d) => String(n), s = {
  ordinalNumber: h,
  era: a({
    values: e,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: t,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: a({
    values: i,
    defaultWidth: "wide"
  }),
  day: a({
    values: r,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: o,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  })
};
export {
  s as localize
};
