# Clarifying Questions

Interactive panel that replaces the chat textarea to collect structured user input. The agent sends a question with predefined options, the user selects their answer(s), and a formatted summary is sent back as a chat message.

```
factorial-agent                          f0 (frontend)
─────────────────                        ──────────────
askClarifyingQuestion tool               useClarifyingQuestionAction hook
  │                                        │
  │  emitFrontendTool(                     │  useCopilotAction("ClarifyingQuestion")
  │    "ClarifyingQuestion",               │    │
  │    { steps: [...] }                    │    ▼
  │  )                                     │  ClarifyingQuestionController
  │                                        │    │  manages multi-step state
  ▼                                        │    ▼
CopilotKit stream  ──────────────────────▶ │  ClarifyingQuestionPanel (replaces textarea)
                                           │    │  user selects options
                                           │    ▼
                                           │  buildSummaryMessage()
                                           │    │
                                           ▼    ▼
                                          sendMessage(summary)  ──▶  back to agent
```

## Step schema

Each step describes one question screen. The agent sends an array of steps for multi-step flows or a single-element array for one question.

```typescript
interface Step {
  question: string // Question text (max 3 visible lines)
  options: Array<{ id: string; label: string }> // 2–6 selectable options
  selectionMode?: "single" | "multiple" // Default: "single"
  optional?: boolean // Allow skipping. Default: false
  allowCustomAnswer?: boolean // Show free-text input. Default: false
}
```

### Selection modes

| Mode         | UI            | Behavior                                        |
| ------------ | ------------- | ----------------------------------------------- |
| `"single"`   | Radio buttons | One option at a time. Selecting clears previous |
| `"multiple"` | Checkboxes    | Any combination of options                      |

### Custom answer behavior

When `allowCustomAnswer: true`:

- **Single mode**: Focusing the text input deselects any predefined option. Selecting a predefined option deactivates the custom answer. Only one source can be active.
- **Multiple mode**: Custom answer coexists with checkbox selections. The user can check options AND type a custom answer simultaneously.

### Optional steps

When `optional: true`, the confirm button is enabled even without any selection. The summary will show `(skipped)` for that step.

## Calling from the agent

The agent uses the `askClarifyingQuestion` Mastra tool. This tool is available in `factorial-agent/src/mastra/one/tools/ask-clarifying-question.ts` and can be added to any skill's `dataTools` array.

### Single question

```typescript
askClarifyingQuestion({
  steps: [
    {
      question: "What time period should the report cover?",
      options: [
        { id: "this-month", label: "This month" },
        { id: "last-month", label: "Last month" },
        { id: "this-quarter", label: "This quarter" },
        { id: "this-year", label: "This year" },
      ],
      selectionMode: "single",
    },
  ],
})
```

### Multi-step flow

```typescript
askClarifyingQuestion({
  steps: [
    {
      question: "Which leave types would you like to include?",
      options: [
        { id: "vacation", label: "Vacation days" },
        { id: "sick", label: "Sick leave" },
        { id: "personal", label: "Personal days" },
      ],
      selectionMode: "multiple",
    },
    {
      question: "What time period?",
      options: [
        { id: "this-month", label: "This month" },
        { id: "this-year", label: "This year" },
      ],
      selectionMode: "single",
      optional: true,
      allowCustomAnswer: true,
    },
    {
      question: "Export format?",
      options: [
        { id: "pdf", label: "PDF" },
        { id: "csv", label: "CSV" },
      ],
      selectionMode: "single",
    },
  ],
})
```

### Tool return value

The tool returns immediately after emitting the frontend action:

```typescript
{
  success: true,
  data: "Clarifying question presented to user — ..."
}
```

The agent should NOT repeat the question or list options in text. It should wait for the user's response message.

## Response format

When the user confirms, a formatted message is sent back to the agent as a regular chat message:

```
**Which leave types would you like to include?**
Vacation days
Sick leave

**What time period?**
(own answer) Last 6 months

**Export format?**
PDF
```

- Each question block is separated by double blank lines
- Questions are bold
- Answers listed below the question
- Custom answers prefixed with the `custom` translation (default: "own answer")
- Skipped questions show the `skipped` translation

## Multi-step navigation

When `steps.length > 1`, the panel shows step navigation:

- Step counter: "1 of 3" (translatable via `stepOf`)
- Back button (disabled on first step)
- Next button (disabled on last step or when selection is invalid)
- The confirm button label changes: "Next" for intermediate steps, "Submit" for the final step

User selections are preserved when navigating back and forth.

## Frontend architecture

```
ClarifyingQuestionPanel/
├── index.tsx                    ← barrel re-export
├── ClarifyingQuestionPanel.tsx  ← animated wrapper + orchestrator
├── StepHeader.tsx               ← question + step navigation
├── RadioIndicator.tsx           ← shared radio circle component
├── OptionRow.tsx                ← unified option (radio or checkbox)
├── CustomAnswerRow.tsx          ← always-visible text input
├── OptionsList.tsx              ← scrollable options container
└── ConfirmFooter.tsx            ← submit/next button
```

### Data flow

1. `useClarifyingQuestionAction` registers the CopilotKit action
2. When triggered, `ClarifyingQuestionController` (render-only component) manages state
3. State is pushed to `AiChatStateProvider` via `setClarifyingQuestion()`
4. `ChatTextarea` reads `clarifyingQuestion` from context
5. `AnimatePresence` swaps between `ClarifyingQuestionPanel` and the normal textarea
6. On final confirm, `buildSummaryMessage()` formats the response and `sendMessage()` delivers it
7. `clarifyingQuestion` is set to `null`, textarea reappears
