import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, d 'de' MMMM y",
  long: "d 'de' MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, d = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, e = {
  full: "{{date}} 'ás' {{time}}",
  long: "{{date}} 'ás' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, s = {
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
  s as formatLong
};
