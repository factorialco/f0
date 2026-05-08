# CardTaskAI - Edge Cases & Design Rules

## Overview

This document defines behavior rules for CardTaskAI component when dealing with edge cases like very long titles, many options, or unusual content.

## Rules

### 1. Title Behavior

| Case                           | Rule                        | Implementation        |
| ------------------------------ | --------------------------- | --------------------- |
| **Normal length** (< 50 chars) | Display fully               | Default behavior      |
| **Long title** (> 50 chars)    | Truncate to 1 line with `…` | CSS `truncate` class  |
| **Multi-line attempt**         | Force single line only      | CSS prevents wrapping |
| **Empty title**                | Display empty space         | Component allows it   |

**Classes used:** `truncate min-w-0`

### 2. Description Behavior

| Case                 | Rule                        | Implementation        |
| -------------------- | --------------------------- | --------------------- |
| **Normal length**    | Display fully               | Default behavior      |
| **Long description** | Truncate to 1 line with `…` | CSS `truncate` class  |
| **Empty/undefined**  | Hidden (not rendered)       | Conditional rendering |

**Classes used:** `truncate min-w-0`

### 3. Options List Behavior

| Case            | Rule                        | Implementation                     |
| --------------- | --------------------------- | ---------------------------------- |
| **No options**  | Hide options container      | Conditional: `options?.length > 0` |
| **1-5 options** | Show all, no scrolling      | Default flex column                |
| **6+ options**  | Show all, scrolling allowed | Flexible, no max-height limit      |
| **Long labels** | Wrap to multiple lines      | Allow natural text wrapping        |

**Gap between options:** `gap-0` (no vertical spacing)

### 4. Card Growth

| Dimension     | Behavior                     | Notes                                         |
| ------------- | ---------------------------- | --------------------------------------------- |
| **Width**     | Flexible, responds to parent | No max-width constraint                       |
| **Height**    | Grows with content           | Dynamic based on options count & label length |
| **Icon size** | Fixed 40×40px                | Does not scale                                |

### 5. Spacing Constraints

```
Wrapper:           gap-[4px] (icon ↔ content)
Header:            h-[32px], pl-[4px]
Title margin:      m-0, mt-[4px]
Options gap:       gap-0 (no spacing between options)
```

## Testing Edge Cases

Use the `LongLabel` story in Storybook to test:

- Title with 100+ characters
- Description with long text
- Multiple long options

## Future Considerations

- Consider adding `max-h-[400px]` with scrolling if > 10 options
- Consider adding tooltip for truncated titles
- Consider responsive sizing for mobile vs desktop
