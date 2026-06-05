import { buildMatchFn as i } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const r = /\d+/i, e = /\d+/i, n = {
  narrow: /^(нтө|нт)/i,
  abbreviated: /^(нтө|нт)/i,
  wide: /^(нийтийн тооллын өмнө|нийтийн тооллын)/i
}, s = {
  any: [/^(нтө|нийтийн тооллын өмнө)/i, /^(нт|нийтийн тооллын)/i]
}, d = {
  narrow: /^(iv|iii|ii|i)/i,
  abbreviated: /^(iv|iii|ii|i) улирал/i,
  wide: /^[1-4]-р улирал/i
}, o = {
  any: [/^(i(\s|$)|1)/i, /^(ii(\s|$)|2)/i, /^(iii(\s|$)|3)/i, /^(iv(\s|$)|4)/i]
}, h = {
  narrow: /^(xii|xi|x|ix|viii|vii|vi|v|iv|iii|ii|i)/i,
  abbreviated: /^(1-р сар|2-р сар|3-р сар|4-р сар|5-р сар|6-р сар|7-р сар|8-р сар|9-р сар|10-р сар|11-р сар|12-р сар)/i,
  wide: /^(нэгдүгээр сар|хоёрдугаар сар|гуравдугаар сар|дөрөвдүгээр сар|тавдугаар сар|зургаадугаар сар|долоодугаар сар|наймдугаар сар|есдүгээр сар|аравдугаар сар|арван нэгдүгээр сар|арван хоёрдугаар сар)/i
}, c = {
  narrow: [
    /^i$/i,
    /^ii$/i,
    /^iii$/i,
    /^iv$/i,
    /^v$/i,
    /^vi$/i,
    /^vii$/i,
    /^viii$/i,
    /^ix$/i,
    /^x$/i,
    /^xi$/i,
    /^xii$/i
  ],
  any: [
    /^(1|нэгдүгээр)/i,
    /^(2|хоёрдугаар)/i,
    /^(3|гуравдугаар)/i,
    /^(4|дөрөвдүгээр)/i,
    /^(5|тавдугаар)/i,
    /^(6|зургаадугаар)/i,
    /^(7|долоодугаар)/i,
    /^(8|наймдугаар)/i,
    /^(9|есдүгээр)/i,
    /^(10|аравдугаар)/i,
    /^(11|арван нэгдүгээр)/i,
    /^(12|арван хоёрдугаар)/i
  ]
}, P = {
  narrow: /^[ндмлпбб]/i,
  short: /^(ня|да|мя|лх|пү|ба|бя)/i,
  abbreviated: /^(ням|дав|мяг|лха|пүр|баа|бям)/i,
  wide: /^(ням|даваа|мягмар|лхагва|пүрэв|баасан|бямба)/i
}, m = {
  narrow: [/^н/i, /^д/i, /^м/i, /^л/i, /^п/i, /^б/i, /^б/i],
  any: [/^ня/i, /^да/i, /^мя/i, /^лх/i, /^пү/i, /^ба/i, /^бя/i]
}, l = {
  narrow: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i,
  any: /^(ү\.ө\.|ү\.х\.|шөнө дунд|үд дунд|өглөө|өдөр|орой|шөнө)/i
}, u = {
  any: {
    am: /^ү\.ө\./i,
    pm: /^ү\.х\./i,
    midnight: /^шөнө дунд/i,
    noon: /^үд дунд/i,
    morning: /өглөө/i,
    afternoon: /өдөр/i,
    evening: /орой/i,
    night: /шөнө/i
  }
}, p = {
  ordinalNumber: t({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: i({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: i({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: i({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: i({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: i({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  p as match
};
