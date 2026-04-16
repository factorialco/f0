# Component Analysis Reference

Step 1 of the documentation workflow. Before writing a single line of MDX, extract everything the code can tell you — then identify the gaps that only the component creator can fill.

---

## Step 1 — Read the Source Files

Read these files in order:

1. **`F0ComponentName.tsx`** — public props, JSDoc comments, variants, conditional rendering, ARIA attributes, event handlers
2. **`types.ts`** — exported types and union values
3. **`index.tsx`** — export pattern (`experimentalComponent`, `Component({ name, type })`, or plain re-export)
4. **`F0ComponentName.stories.tsx`** — all named story exports; these become `Stories.X` in MDX
5. **`__tests__/F0ComponentName.test.tsx`** — what behavior is already tested (informs guidelines)
6. **`internal-types.ts`** (if exists) — private props to exclude from public documentation

---

## Step 2 — Extract the Public Surface

From the source files, build this inventory:

### Props inventory

For each public prop, record:

| Prop      | Type            | Default     | Required | Source            |
| --------- | --------------- | ----------- | -------- | ----------------- |
| `label`   | `string`        | —           | Yes      | `F0Button.tsx:12` |
| `variant` | `ButtonVariant` | `"default"` | —        | `types.ts:4`      |

- Mark props defined in `privateProps` array as **internal — do not document**
- If a prop has no JSDoc, note it as **undocumented — infer or ask**

### Variants inventory

List every value of every union type:

```
variant: "default" | "outline" | "neutral" | "ghost" | "critical" | "promote" | "outlinePromote"
size: "sm" | "md" | "lg"
```

### Stories inventory

List every named export from the stories file:

```
Default, Variants, Sizes, States, IconVariants, WithHref, AsyncAction, Disabled
```

These are the only valid `Stories.X` references in MDX. Do not reference stories that do not exist.

### Behaviors inventory

Note conditional rendering patterns found in the source:

- WHEN `loading={true}` → THEN renders spinner, disables interaction
- WHEN `href` is set → THEN renders as `<a>` instead of `<button>`
- WHEN `hideLabel={true}` → THEN label is visually hidden, still read by screen readers

These become the WHEN→THEN rules in the MDX Guidelines section.

---

## Step 3 — Classify Each Data Point

Use this table to decide what to do with each piece of information:

| Category                                   | Infer without asking                                                                                    | Ask the creator                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Prop types and defaults**                | Always — comes from the code                                                                            | Never                                                                |
| **Variant names**                          | Always — comes from `types.ts`                                                                          | Never                                                                |
| **ARIA attributes present in source**      | Always — read from JSX                                                                                  | Never                                                                |
| **Keyboard behavior** (Enter/Space/Escape) | Yes, for standard roles (button, dialog, listbox)                                                       | If the component uses a non-standard interaction model               |
| **Visual description of variants**         | Yes, for universal UI patterns (filled = primary, outlined = secondary, red = destructive)              | If Factorial uses a variant in a non-standard way                    |
| **Copy rules** (sentence case, verb-first) | Yes — global F0 standard applies                                                                        | Never                                                                |
| **When NOT to use**                        | Partially — infer from component type (never use Button as tab, never use Alert for transient messages) | Ask for Factorial-specific anti-patterns                             |
| **Factorial-specific placement**           | Never                                                                                                   | Ask — where does this appear in the product?                         |
| **Factorial-specific triggers**            | Never                                                                                                   | Ask — what user action or system event causes this to appear?        |
| **Business error cases**                   | Never                                                                                                   | Ask — what errors does this display in production?                   |
| **Save / creation patterns**               | Never                                                                                                   | Ask — does this confirm a save, trigger a save, or neither?          |
| **Relationship to other features**         | Never                                                                                                   | Ask — does this block navigation? Does it appear in a specific flow? |

**Rule:** If the information exists in the code → infer. If it requires knowledge of Factorial's product context → ask.

---

## Step 4 — Questions for the Creator

Ask these questions **only** when the component has Factorial-specific behavior that cannot be inferred from code. Group them and ask all at once — do not drip-feed.

### Placement and triggers

- Where in the Factorial product does this component appear? (Which pages, sections, or flows?)
- What triggers it to appear — a user action, a system state, a backend event?

### When NOT to use (Factorial context)

- Are there cases in Factorial where a developer might reach for this component but shouldn't? What should they use instead?

### Error and edge cases

- What are the real error messages or edge-case states this component displays in production?
- Are there loading, empty, or error states not covered by the current stories?

### Save and creation patterns

- When this component includes an action button, does it confirm a save that already happened, trigger a save, or navigate to a save flow?

### Navigation and blocking

- Does this component block the user from navigating away? Does it appear inside a `F0Dialog`?

### Custom usage at Factorial

- Is there a variant, size, or prop combination that Factorial uses consistently in a specific context (e.g., always `size="sm"` in table rows, always `variant="critical"` for deletion)?

---

## Output of This Step

Before moving to MDX authoring, you should have:

1. A complete props inventory with types, defaults, and required flags
2. A complete variants inventory
3. A list of all story exports (for valid `Stories.X` references)
4. A list of WHEN→THEN behavior rules extracted from source
5. A list of open questions for the creator (if any)

If you have open questions, ask them all at once before writing the MDX. If the component is universal (Button, Alert, Dialog) and has no Factorial-specific behavior, proceed directly to MDX authoring.
