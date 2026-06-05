import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, dd. MMMM y",
  long: "dd. MMMM y",
  medium: "d. MMM y",
  short: "d. MM. yy"
}, d = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, e = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, a = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: d,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: e,
    defaultWidth: "full"
  })
};
export {
  a as formatLong
};
