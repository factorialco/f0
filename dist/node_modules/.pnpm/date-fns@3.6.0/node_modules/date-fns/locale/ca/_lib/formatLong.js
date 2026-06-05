import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d 'de' MMMM y",
  long: "d 'de' MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, e = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, d = {
  full: "{{date}} 'a les' {{time}}",
  long: "{{date}} 'a les' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a = {
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
  a as formatLong
};
