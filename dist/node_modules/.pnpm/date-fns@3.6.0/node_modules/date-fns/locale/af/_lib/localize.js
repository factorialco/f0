import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["vC", "nC"],
  abbreviated: ["vC", "nC"],
  wide: ["voor Christus", "na Christus"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1ste kwartaal", "2de kwartaal", "3de kwartaal", "4de kwartaal"]
}, t = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ],
  wide: [
    "Januarie",
    "Februarie",
    "Maart",
    "April",
    "Mei",
    "Junie",
    "Julie",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ]
}, o = {
  narrow: ["S", "M", "D", "W", "D", "V", "S"],
  short: ["So", "Ma", "Di", "Wo", "Do", "Vr", "Sa"],
  abbreviated: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
  wide: [
    "Sondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrydag",
    "Saterdag"
  ]
}, u = {
  narrow: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand"
  },
  abbreviated: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand"
  },
  wide: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "middaguur",
    morning: "oggend",
    afternoon: "middag",
    evening: "laat middag",
    night: "aand"
  }
}, m = {
  narrow: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand"
  },
  abbreviated: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand"
  },
  wide: {
    am: "vm",
    pm: "nm",
    midnight: "middernag",
    noon: "uur die middag",
    morning: "uur die oggend",
    afternoon: "uur die middag",
    evening: "uur die aand",
    night: "uur die aand"
  }
}, g = (d) => {
  const e = Number(d), n = e % 100;
  if (n < 20)
    switch (n) {
      case 1:
      case 8:
        return e + "ste";
      default:
        return e + "de";
    }
  return e + "ste";
}, l = {
  ordinalNumber: g,
  era: a({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: r,
    defaultWidth: "wide",
    argumentCallback: (d) => d - 1
  }),
  month: a({
    values: t,
    defaultWidth: "wide"
  }),
  day: a({
    values: o,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: u,
    defaultWidth: "wide",
    formattingValues: m,
    defaultFormattingWidth: "wide"
  })
};
export {
  l as localize
};
