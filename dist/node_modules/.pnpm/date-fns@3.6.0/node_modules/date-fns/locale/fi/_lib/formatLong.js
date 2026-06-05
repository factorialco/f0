import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "eeee d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "d.M.y"
}, e = {
  full: "HH.mm.ss zzzz",
  long: "HH.mm.ss z",
  medium: "HH.mm.ss",
  short: "HH.mm"
}, o = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, l = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: e,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: o,
    defaultWidth: "full"
  })
};
export {
  l as formatLong
};
