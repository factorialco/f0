import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "d/M/yy"
}, a = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, e = {
  full: "{{date}} - {{time}}",
  long: "{{date}} - {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, d = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: a,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: e,
    defaultWidth: "full"
  })
};
export {
  d as formatLong
};
