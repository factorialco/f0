const t = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote",
  "ai"
], n = ["link", "unstyled", "mention"];
[
  ...t,
  ...n
];
const o = ["sm", "md", "lg"];
export {
  t as actionButtonVariants,
  n as actionLinkVariants,
  o as actionSizes
};
