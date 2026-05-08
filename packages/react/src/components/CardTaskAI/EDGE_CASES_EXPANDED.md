# CardTaskAI - Edge Cases & Design Rules

## Overview

This document defines behavior rules for CardTaskAI component when dealing with edge cases like very long titles, missing data, or unusual content.

---

## Section 0: Required Fields & Validation

### Field Requirements

| Field               | Required    | Behavior                                      | Runtime Check      |
| ------------------- | ----------- | --------------------------------------------- | ------------------ |
| **title**           | ✅ Yes      | Non-empty string                              | Warning if missing |
| **icon**            | ✅ Yes      | Valid React element                           | Error if missing   |
| **options**         | ❌ No       | Can be empty array                            | Shows empty card   |
| **assignee option** | ✅ Yes      | At least one in options                       | Warning if none    |
| **option.id**       | ✅ Yes      | Unique ID per option                          | Error if duplicate |
| **option.label**    | Conditional | Required for text, automation, form, document | Warning if invalid |

### Validation Approach

- **Runtime checks** with console warnings
- **Fallback behavior** instead of hard crashes
- **Type safety** via TypeScript in development
- **Graceful degradation** in production

---

## Section 1: Title Behavior

| Case                           | Rule                        | Implementation    |
| ------------------------------ | --------------------------- | ----------------- |
| **Normal** (<50 chars)         | Display fully               | Default           |
| **Long** (>50 chars)           | Truncate + `…`              | CSS `truncate`    |
| **Multi-line attempt**         | Force single line           | CSS prevents wrap |
| **Empty string**               | ⚠️ Warning logged           | Show empty space  |
| **null/undefined**             | ⚠️ Runtime error + fallback | Show "Untitled"   |
| **Special chars** (emoji, etc) | Display as-is               | Allow naturally   |

**Classes:** `truncate min-w-0`

---

## Section 2: Description Behavior

| Case                  | Rule            | Implementation     |
| --------------------- | --------------- | ------------------ |
| **Normal**            | Display fully   | Default            |
| **Long** (>200 chars) | Truncate + `…`  | CSS `truncate`     |
| **Empty/undefined**   | Hidden          | Conditional render |
| **Contains HTML**     | Sanitize/escape | React handles it   |

**Classes:** `truncate min-w-0`

---

## Section 3: Assignee Option Edge Cases

| Case                    | Rule                      | Implementation               |
| ----------------------- | ------------------------- | ---------------------------- |
| **Missing firstName**   | Show lastName only        | Graceful fallback            |
| **Missing lastName**    | Show firstName only       | Graceful fallback            |
| **Both missing**        | 🔴 Error: Show skeleton   | Runtime warning + F0Skeleton |
| **Invalid src (image)** | Use initials fallback     | F0AvatarPerson handles       |
| **deactivated: true**   | Show dimmed avatar        | F0AvatarPerson supports      |
| **No assignee option**  | 🔴 Error: Card incomplete | Warning logged               |

---

## Section 4: Options List Behavior

| Case             | Rule                | Implementation            |
| ---------------- | ------------------- | ------------------------- |
| **No options**   | Hide container      | Conditional: `length > 0` |
| **Empty label**  | Show skeleton       | F0Skeleton fallback       |
| **1-5 options**  | Show all            | Default flex column       |
| **6-50 options** | Show all            | Allow scroll if needed    |
| **50+ options**  | Show all            | Might be slow - warn      |
| **Long labels**  | Wrap naturally      | Multi-line allowed        |
| **Invalid type** | 🟡 Fallback to text | Log warning               |

**Gap:** `gap-0` (no spacing between options)

---

## Section 5: Specific Option Type Edge Cases

### Text Option

- ✅ Missing label → Show F0Skeleton
- ✅ Very long label → Wraps naturally
- ✅ Contains markdown → Displayed as plain text

### Automation Option

- ✅ No label → Show "Automation in progress"
- ✅ Label optional → Works without it
- ✅ Click handler optional → Not clickable

### Form Option

- ✅ Missing label → Show F0Skeleton
- ✅ No onClick → Not interactive

### Document Option

- ✅ Missing label → Show F0Skeleton
- ✅ Missing fileType → Show generic icon
- ✅ Invalid fileType → Use Paperclip icon
- ✅ No onClick → Not clickable

### Tags Option

- ✅ No tags in array → Show empty section or hide
- ✅ Long tag label → Truncates in F0TagRaw
- ✅ 10+ tags → Wraps naturally
- ✅ Duplicate IDs → Warns in console

---

## Section 6: Card Growth Constraints

| Dimension             | Behavior           | Limits                |
| --------------------- | ------------------ | --------------------- |
| **Width**             | Responds to parent | No max-width          |
| **Height**            | Grows with content | Future: max-h-[600px] |
| **Icon**              | Fixed 40×40px      | Never scales          |
| **Title lines**       | Max 1 line         | Truncates             |
| **Description lines** | Max 1 line         | Truncates             |

---

## Section 7: Spacing Rules

```
Wrapper gap:       gap-[4px] (icon ↔ content)
Header height:     h-[32px]
Header padding:    pl-[4px]
Title margin:      m-0, mt-[4px]
Options gap:       gap-0 (no spacing)
```

---

## Critical Edge Cases That Break Component

### ❌ Case 1: Missing Required Icon

```tsx
// CRASHES: icon is required
<CardTaskAI title="Task" options={[...]} />

// ✅ FIX: Always provide icon
<CardTaskAI
  icon={<Icon />}
  title="Task"
  options={[...]}
/>
```

### ❌ Case 2: No Assignee in Options

```tsx
// BREAKS: assignee is required
options: [
  { type: "single-task", id: "1", label: "Docs" },
  // Missing assignee!
]

// ✅ FIX: Always include assignee first
options: [
  { type: "assignee", id: "0", firstName: "John", lastName: "Doe" },
  { type: "single-task", id: "1", label: "Docs" },
]
```

### ❌ Case 3: Missing Assignee Data

```tsx
// FAILS: Missing firstName/lastName
{
  type: "assignee",
  id: "0",
  // firstName & lastName missing!
}

// ✅ FIX: Always provide both names
{
  type: "assignee",
  id: "0",
  firstName: "John",
  lastName: "Doe"
}
```

### ❌ Case 4: Duplicate Option IDs

```tsx
// BREAKS: IDs must be unique
options: [
  { type: "single-task", id: "1", label: "A" },
  { type: "single-task", id: "1", label: "B" }, // Duplicate ID!
]

// ✅ FIX: Use unique IDs
options: [
  { type: "single-task", id: "1", label: "A" },
  { type: "single-task", id: "2", label: "B" },
]
```

### ❌ Case 5: Extremely Long Title

```tsx
// Creates huge card
title: "This is an extremely long title that will cause the card to grow to an unreasonable size if not truncated..."

// ✅ FIX: Automatically truncated by CSS
// No action needed, component handles it
```

### ❌ Case 6: Empty Options Array

```tsx
// Shows empty card (not great UX)
options: []

// ✅ FIX: Always provide at least assignee
options: [{ type: "assignee", id: "0", firstName: "John", lastName: "Doe" }]
```

### ❌ Case 7: Option Without Label

```tsx
// Shows empty option
{
  type: "single-task",
  id: "1",
  label: ""  // Empty!
}

// ✅ FIX: Use undefined for skeleton, or provide label
{
  type: "single-task",
  id: "1",
  label: "Required information"
}
```

### ❌ Case 8: Invalid Option Type

```tsx
// Type mismatch
{
  type: "invalid_type",  // 🔴 Not in union type
  id: "1"
}

// ✅ FIX: Use valid type
{
  type: "single-task",  // ✅ Valid
  id: "1",
  label: "Content"
}
```

---

## Testing Checklist

### Unit Tests to Add

- [ ] Missing icon → logs error
- [ ] Missing assignee → logs warning
- [ ] Duplicate IDs → logs warning
- [ ] Empty title → logs warning
- [ ] Long title → truncates properly
- [ ] 50+ options → renders without crashing
- [ ] Missing labels → shows skeleton
- [ ] Invalid option type → fallback to text

### Storybook Stories to Add

- [ ] `MissingData` - Shows skeletons
- [ ] `ManyOptions` - 20+ options
- [ ] `LongContent` - Long title + description
- [ ] `EdgeCaseErrors` - Invalid combinations
- [ ] `EmptyAssignee` - Missing name parts

---

## Future Improvements

1. **Add Zod validation** for runtime schema checks
2. **Add tooltip component** for truncated titles
3. **Add max-height with scroll** for 10+ options
4. **Add loading states** during data fetch
5. **Add animations** for skeleton transitions
6. **Add i18n support** for error messages
7. **Add optional `testID`** on all interactive elements
8. **Add accessibility alerts** for missing data
