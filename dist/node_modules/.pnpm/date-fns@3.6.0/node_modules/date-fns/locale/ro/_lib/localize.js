import { buildLocalizeFn as i } from "../../_lib/buildLocalizeFn.js";
const e = {
  narrow: ["Î", "D"],
  abbreviated: ["Î.d.C.", "D.C."],
  wide: ["Înainte de Cristos", "După Cristos"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: [
    "primul trimestru",
    "al doilea trimestru",
    "al treilea trimestru",
    "al patrulea trimestru"
  ]
}, r = {
  narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
    "ian",
    "feb",
    "mar",
    "apr",
    "mai",
    "iun",
    "iul",
    "aug",
    "sep",
    "oct",
    "noi",
    "dec"
  ],
  wide: [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie"
  ]
}, m = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["du", "lu", "ma", "mi", "jo", "vi", "sâ"],
  abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "sâm"],
  wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"]
}, t = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "ami",
    morning: "dim",
    afternoon: "da",
    evening: "s",
    night: "n"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  }
}, o = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  }
}, d = (a, u) => String(a), s = {
  ordinalNumber: d,
  era: i({
    values: e,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: n,
    defaultWidth: "wide",
    argumentCallback: (a) => a - 1
  }),
  month: i({
    values: r,
    defaultWidth: "wide"
  }),
  day: i({
    values: m,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: t,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  })
};
export {
  s as localize
};
