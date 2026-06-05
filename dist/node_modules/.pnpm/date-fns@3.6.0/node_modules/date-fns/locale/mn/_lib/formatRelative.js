const t = {
  lastWeek: "'өнгөрсөн' eeee 'гарагийн' p 'цагт'",
  yesterday: "'өчигдөр' p 'цагт'",
  today: "'өнөөдөр' p 'цагт'",
  tomorrow: "'маргааш' p 'цагт'",
  nextWeek: "'ирэх' eeee 'гарагийн' p 'цагт'",
  other: "P"
}, r = (e, o, a, p) => t[e];
export {
  r as formatRelative
};
