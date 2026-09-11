import { advanceSetup, initialSetup, questionFor } from "./homeSetup"

// No Node imports: the legacy prototype checker also scans test sources.
const assert = {
  equal(actual: unknown, expected: unknown) {
    if (actual !== expected)
      throw new Error(`Expected ${expected}, received ${actual}`)
  },
  deepEqual(actual: unknown, expected: unknown) {
    if (JSON.stringify(actual) !== JSON.stringify(expected))
      throw new Error(`Unexpected result: ${JSON.stringify(actual)}`)
  },
}
const initial = initialSetup("admin")
assert.equal(questionFor(initial).multi, true)
const priorities = advanceSetup(
  initial,
  "My team and their requests and Hiring",
  ["payslip", "recruitment"]
)
assert.deepEqual(priorities.setup.focuses, ["team", "recruitment"])
assert.equal(priorities.setup.step, "complete")
assert.equal(priorities.widgets, undefined)
assert.equal(
  questionFor(priorities.setup).options.includes("My widgets"),
  false
)
assert.equal(priorities.setup.routine, undefined)
assert.equal(priorities.setup.report, undefined)
const routine = advanceSetup(
  { ...initial, purpose: "routine", step: "routines" },
  "Review requests",
  []
)
assert.equal(routine.artifact?.kind, "routine")
const savedRoutine = advanceSetup(routine.setup, "Save simulated routine", [])
assert.equal(savedRoutine.setup.step, "complete")
assert.equal(savedRoutine.setup.routine?.saved, true)
assert.equal(savedRoutine.setup.report, undefined)
const report = advanceSetup(
  { ...initial, purpose: "report", step: "reports" },
  "Expenses",
  []
)
const adjusted = advanceSetup(report.setup, "Change threshold to 20", [])
assert.equal(adjusted.setup.report?.threshold, 20)
assert.equal(adjusted.setup.report?.saved, false)
const invalid = advanceSetup(adjusted.setup, "Change threshold to 101", [])
assert.equal(invalid.setup.report?.threshold, 20)
assert.equal(
  advanceSetup(adjusted.setup, "Save simulated report", []).setup.report?.saved,
  true
)
console.log("Guided home and separate workflow regressions passed")
