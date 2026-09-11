import { completeWidget, creationSteps, customWidgetIconKey } from "./creation"
import {
  addCustomWidget,
  countChanges,
  readCatalog,
  readSelection,
  saveSelection,
} from "./model"

// Isolated storage: the regression script never touches browser preferences.
const storage = new Map<string, string>()
Object.defineProperty(globalThis, "localStorage", {
  value: {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
  },
  configurable: true,
})
Object.defineProperty(globalThis, "window", {
  value: new EventTarget(),
  configurable: true,
})
function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message)
}
const before = readSelection("admin")
const flow = {
  profile: "admin" as const,
  step: 3,
  answers: ["Pending team requests", "My team", "A key number"],
}
assert(
  creationSteps.length === 3,
  "Creation only asks content, scope and layout"
)
const widget = completeWidget(flow, "custom-test")
assert(widget.title === "Pending team requests", "Name defaults to the content")
assert(customWidgetIconKey(widget) === "inbox", "Requests use the inbox icon")
addCustomWidget("admin", widget)
addCustomWidget("admin", widget)
assert(
  readCatalog("admin").custom.length === 1,
  "Repeated confirmation must not duplicate a widget"
)
assert(
  !readSelection("admin").personal.includes(widget.id),
  "Creation alone must not change the layout"
)
saveSelection("admin", {
  personal: [...before.personal, widget.id],
  employees: ["clockin"],
})
assert(
  readSelection("admin").personal.includes(widget.id),
  "Personal selection persists"
)
assert(
  readSelection("admin").employees.join() === "clockin",
  "Employee selection persists independently"
)
saveSelection("admin", { personal: before.personal, employees: ["clockin"] })
assert(
  readCatalog("admin").custom.length === 1,
  "Removing a widget preserves its catalog definition"
)
saveSelection("admin", {
  personal: [widget.id, widget.id, "unknown"],
  employees: [],
})
assert(
  readSelection("admin").personal.join() === widget.id,
  "Selections deduplicate and reject unknown ids"
)
assert(
  readSelection("admin").employees.length === 0,
  "Empty employee selection persists"
)
assert(
  countChanges(before, before) === 0,
  "Discarding to the saved snapshot clears changes"
)
assert(
  !readCatalog("employee").custom.length,
  "Personal catalogs are isolated by profile"
)
console.log("Widget catalog and scope regressions passed")
