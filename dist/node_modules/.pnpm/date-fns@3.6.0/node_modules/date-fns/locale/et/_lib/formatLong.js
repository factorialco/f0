import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
}, e = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, d = {
  full: "{{date}} 'kell' {{time}}",
  long: "{{date}} 'kell' {{time}}",
  medium: "{{date}}. {{time}}",
  short: "{{date}}. {{time}}"
}, o = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: e,
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
