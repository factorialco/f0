import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "วันEEEEที่ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, o = {
  full: "H:mm:ss น. zzzz",
  long: "H:mm:ss น. z",
  medium: "H:mm:ss น.",
  short: "H:mm น."
}, d = {
  full: "{{date}} 'เวลา' {{time}}",
  long: "{{date}} 'เวลา' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "medium"
  }),
  dateTime: t({
    formats: d,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
