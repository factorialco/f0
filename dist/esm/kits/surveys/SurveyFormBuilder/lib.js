//#region src/kits/surveys/SurveyFormBuilder/lib.ts
var e = (e) => {
	switch (e) {
		case "1-5": return [
			,
			,
			,
			,
			,
		].fill(0).map((e, t) => ({
			value: t + 1,
			label: (t + 1).toString()
		}));
		case "1-10": return Array(10).fill(0).map((e, t) => ({
			value: t + 1,
			label: (t + 1).toString()
		}));
		case "0-10": return Array(11).fill(0).map((e, t) => ({
			value: t,
			label: t.toString()
		}));
		case "emojis": return [
			{
				value: 1,
				label: "😠"
			},
			{
				value: 2,
				label: "😐"
			},
			{
				value: 3,
				label: "😊"
			},
			{
				value: 4,
				label: "😍"
			},
			{
				value: 5,
				label: "🤩"
			}
		];
	}
}, t = (e) => {
	if (!e || e.length === 0) return null;
	let t = e.length, n = e.every((e) => /^\d+$/.test(e.label.trim()));
	return t === 5 && n ? "1-5" : t === 10 && n ? "1-10" : t === 11 && n ? "0-10" : t === 5 && !n ? "emojis" : null;
}, n = (t) => {
	switch (t) {
		case "rating": return {
			value: void 0,
			options: e("1-5")
		};
		case "select":
		case "multi-select": return { options: [{
			value: "option-1",
			label: "New option 1"
		}] };
		case "dropdown-single":
		case "dropdown-multi": return {};
		case "text":
		case "longText": return { value: "" };
		case "numeric": return { value: 0 };
		case "link": return { value: "" };
		case "date": return { value: /* @__PURE__ */ new Date() };
		case "file": return { value: null };
		case "checkbox": return {
			value: null,
			label: ""
		};
		default: throw Error(`Unsupported question type: ${t}`);
	}
}, r = (e) => `new-${e}-${Date.now()}`, i = [
	"text",
	"longText",
	"select",
	"multi-select",
	"numeric",
	"link",
	"date",
	"file",
	"checkbox"
], a = (e) => {
	if (!e) return i[0];
	let t = i.find((t) => e?.includes(t));
	if (!t) throw Error(`No default question type found for allowed question types: ${e.join(", ")}`);
	return t;
};
//#endregion
export { t as detectRatingOptionType, n as getDefaultParamsForQuestionType, a as getDefaultQuestionTypeToAdd, r as getNewElementId, e as getRatingOptions };
