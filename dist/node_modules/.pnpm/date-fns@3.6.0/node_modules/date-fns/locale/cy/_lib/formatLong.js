import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
}, a = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, d = {
  full: "{{date}} 'am' {{time}}",
  long: "{{date}} 'am' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, o = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: a,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: d,
    defaultWidth: "full"
  })
};
export {
  o as formatLong
};
