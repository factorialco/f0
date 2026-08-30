import { createF0FormTester as e } from "./createF0FormTester.js";
//#region src/patterns/F0Form/testing/createF0FormDefinitionTester.ts
function t(t, n) {
	return e({
		schema: t.schema,
		defaultValues: t.defaultValues,
		errorMap: n?.errorMap,
		onSubmit: (e) => t.onSubmit({ data: e })
	});
}
//#endregion
export { t as createF0FormDefinitionTester };
