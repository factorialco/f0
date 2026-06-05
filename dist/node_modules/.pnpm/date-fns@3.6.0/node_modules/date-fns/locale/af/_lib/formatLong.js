import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "yyyy/MM/dd"
}, o = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, d = {
  full: "{{date}} 'om' {{time}}",
  long: "{{date}} 'om' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: d,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
