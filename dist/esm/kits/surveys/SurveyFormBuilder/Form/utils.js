//#region src/kits/surveys/SurveyFormBuilder/Form/utils.ts
function e(e) {
	return e.flatMap((e) => e.type === "section" ? [
		{
			type: "section-header",
			id: `section-header-${e.section.id}`,
			section: e.section
		},
		...(e.section.questions ?? []).map((e) => ({
			type: "question",
			id: `question-${e.id}`,
			question: e
		})),
		{
			type: "section-end",
			id: `section-end-${e.section.id}`,
			sectionId: e.section.id
		}
	] : [{
		type: "question",
		id: `question-${e.question.id}`,
		question: e.question
	}]);
}
function t(e) {
	let t = [], n = null, r = [];
	for (let i of e) i.type === "section-header" ? (n && t.push({
		type: "section",
		section: {
			...n,
			questions: r
		}
	}), n = i.section, r = []) : i.type === "section-end" ? n && (t.push({
		type: "section",
		section: {
			...n,
			questions: r
		}
	}), n = null, r = []) : n ? r.push(i.question) : t.push({
		type: "question",
		question: i.question
	});
	return n && t.push({
		type: "section",
		section: {
			...n,
			questions: r
		}
	}), t;
}
function n(e, t) {
	let n = [], r = null, i = [];
	function a() {
		if (!r) return;
		let e = -1;
		for (let n = i.length - 1; n >= 0; n--) if (i[n].type === "question" && t.has(i[n].id)) {
			e = n;
			break;
		}
		if (e === -1) n.push({
			type: "section-end",
			id: `section-end-${r}`,
			sectionId: r
		}), n.push(...i);
		else {
			for (let t = 0; t <= e; t++) n.push(i[t]);
			n.push({
				type: "section-end",
				id: `section-end-${r}`,
				sectionId: r
			});
			for (let t = e + 1; t < i.length; t++) n.push(i[t]);
		}
		i = [], r = null;
	}
	for (let t of e) t.type === "section-header" ? (a(), r = t.section.id, n.push(t)) : r ? i.push(t) : n.push(t);
	return a(), n;
}
function r(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (n.type === "section") {
		let e = n.section.questions;
		e?.length && t.add(`question-${e[e.length - 1].id}`);
	}
	return t;
}
//#endregion
export { r as computeSectionEndIds, e as flattenElements, n as injectSectionEnds, t as reconstructElements };
