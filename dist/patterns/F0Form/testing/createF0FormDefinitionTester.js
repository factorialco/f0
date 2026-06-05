import { createF0FormTester as a } from "./createF0FormTester.js";
function m(e, r) {
  return a({
    schema: e.schema,
    defaultValues: e.defaultValues,
    errorMap: r?.errorMap,
    // Adapt the definition's onSubmit ({ data }) signature to the tester's (data) signature
    onSubmit: (t) => e.onSubmit({ data: t })
  });
}
export {
  m as createF0FormDefinitionTester
};
