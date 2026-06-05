const a = (e) => {
  switch (e) {
    case "1-5":
      return new Array(5).fill(0).map((l, t) => ({
        value: t + 1,
        label: (t + 1).toString()
      }));
    case "1-10":
      return new Array(10).fill(0).map((l, t) => ({
        value: t + 1,
        label: (t + 1).toString()
      }));
    case "emojis":
      return [
        { value: 1, label: "😠" },
        { value: 2, label: "😐" },
        { value: 3, label: "😊" },
        { value: 4, label: "😍" },
        { value: 5, label: "🤩" }
      ];
  }
}, u = (e) => {
  if (!e || e.length === 0) return null;
  const l = e.length, t = e.every((n) => /^\d+$/.test(n.label.trim()));
  return l === 5 && t ? "1-5" : l === 10 && t ? "1-10" : l === 5 && !t ? "emojis" : null;
}, c = (e) => {
  switch (e) {
    case "rating":
      return {
        value: 0,
        options: a("1-5")
      };
    case "select":
    case "multi-select":
      return {
        options: [
          {
            value: "option-1",
            label: "New option 1"
          }
        ]
      };
    case "dropdown-single":
    case "dropdown-multi":
      return {};
    case "text":
    case "longText":
      return {
        value: ""
      };
    case "numeric":
      return {
        value: 0
      };
    case "link":
      return {
        value: ""
      };
    case "date":
      return {
        value: /* @__PURE__ */ new Date()
      };
    case "file":
      return {
        value: null
      };
    case "checkbox":
      return {
        value: null,
        label: ""
      };
    default:
      throw new Error(`Unsupported question type: ${e}`);
  }
}, o = (e) => `new-${e}-${Date.now()}`, r = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
  "file",
  "checkbox"
], s = (e) => {
  if (!e)
    return r[0];
  const l = r.find(
    (t) => e?.includes(t)
  );
  if (!l)
    throw new Error(
      `No default question type found for allowed question types: ${e.join(", ")}`
    );
  return l;
};
export {
  u as detectRatingOptionType,
  c as getDefaultParamsForQuestionType,
  s as getDefaultQuestionTypeToAdd,
  o as getNewElementId,
  a as getRatingOptions
};
