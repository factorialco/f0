# Skill: f0-component-docs

Storybook story and MDX documentation generation templates for F0 React components. Load this skill when creating or updating component documentation, stories, or interaction tests.

## When to Use

- Creating new Storybook stories for a component
- Writing MDX documentation for a component
- Adding interaction tests (play functions) to stories
- Documenting a component's anatomy, variants, and guidelines

---

## Part 1: Story Generation (`index.stories.tsx`)

### Required Imports

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
```

Import the component from its entry point (e.g., `import { MyComponent } from "./index"`).

### Meta Definition

```tsx
const meta = {
  title: "ComponentCategory/ComponentName",
  component: ComponentUnderTest,
  tags: ["autodocs", "stable"],
  // or ["autodocs", "experimental"] for experimental components
} satisfies Meta<typeof ComponentUnderTest>

export default meta
type Story = StoryObj<typeof meta>
```

- Set `title` based on file path: `src/components/Input/index.tsx` → `Components/Input`
- Include `tags: ['autodocs']` to enable automatic documentation
- Add `'stable'` or `'experimental'` tag as appropriate

### Story Generation

Create at least these stories:

1. **Default** — Basic usage with minimal required props
2. **Variant stories** — One per significant variant (based on props analysis)
3. **Edge case stories** — Empty states, long text, loading, error states
4. **Snapshot** — For Chromatic visual regression testing:

```tsx
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {/* Include all meaningful variants */}
    </div>
  ),
}
```

### ArgTypes for Union Types

For properties with limited options, use the const array from the component:

```tsx
argTypes: {
  color: {
    control: "select",
    options: colors, // from the component's const array
  },
}
```

For union types without a const array, use `table`:

```tsx
argTypes: {
  color: {
    table: {
      type: {
        summary: "Color = 'a' | 'b' | 'c'",
      },
    },
  },
}
```

### Play Functions (Interaction Tests)

Add `play` functions for interactive stories. Analyze the component to identify:

- Interactive elements (buttons, inputs, selects)
- Key states and user flows
- Edge cases worth testing

```tsx
export const Default: Story = {
  args: {
    /* ... */
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("User interaction description", async () => {
      // Simulate user actions
      await userEvent.click(canvas.getByRole("button"))
      // Verify expected behavior
      await expect(canvas.getByText("Result")).toBeVisible()
    })
  },
}
```

Guidelines for play functions:

- Use `step` to group logical actions
- Simulate real user interactions (`userEvent.click`, `userEvent.type`, etc.)
- Verify DOM changes, visual states, and component reactions
- For forms: fill fields, simulate submission, verify validations
- For buttons: simulate click, verify state changes
- For components with internal state: simulate actions that change state, verify DOM result

---

## Part 2: MDX Documentation (`index.mdx`)

### Required Imports

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/blocks"
import { DoDonts } from "@/lib/storybook-utils/do-donts"
import * as ComponentStories from "./index.stories"

<Meta of={ComponentStories} />
```

### Document Structure

Before writing documentation:

1. Read the component and its subcomponents to understand what it does
2. Detect props that generate variants — skip "Variants" section if none exist
3. Write for both designers (non-technical) and developers
4. Focus on practical use cases
5. Every field or prop should include at least a minimal description

### Section Template

#### Introduction

```mdx
# Component Title

## Introduction

### Definition

A short description of what the component is and its role within the interface.

### Purpose

- Key objectives the component fulfills
- Use bullet lists with `-`
- Keep descriptions concise and action-oriented
```

#### Anatomy

Use the most complete story for anatomy:

```mdx
## Anatomy

<Canvas of={ComponentStories.MostCompleteStory} meta={ComponentStories} />
<Controls of={ComponentStories.MostCompleteStory} />
```

Describe the general layout and structure. Add subsections for common interactive elements:

- **Primary action** — Position and visual prominence
- **Edit** — Should include pencil icon, uses outline button
- **Destructive** — Placed far left, includes trash icon and confirmation dialog, uses critical button style

#### Variants

Only include if the component has significant variants:

```mdx
## Variants

### Variant Name

Short description of when and why to use this variant.

<Canvas of={ComponentStories.VariantName} />
```

#### Guidelines

```mdx
## Guidelines

### Content Best Practices

- Titles: short (2-5 words), no punctuation
- Descriptions: 1-2 sentences, meaningful
- Action verbs in [verb + noun] format
- Capitalize only the first word unless proper noun

### Design Best Practices

<DoDonts
  do={{
    description: "Use this component when:",
    guidelines: [
      "Guideline for correct usage",
      "Another correct usage scenario",
    ],
    children: <img src="docs/component-name/do.png" />,
  }}
  dont={{
    description: "Don't use this component when:",
    guidelines: ["Incorrect usage scenario", "Another incorrect scenario"],
    children: <img src="docs/component-name/dont.png" />,
  }}
/>
```

#### Layout

```mdx
### Layout

- Describe how elements are visually structured and prioritized
- Include layout image if needed:

<img src="docs/component-name/layout.png" alt="Layout structure" />
```

#### Behavior

Document dynamic interactions:

```mdx
## Behavior

<Canvas of={ComponentStories.WithActions} />

On hover, the following may be shown:

- **Inline Edit**: Edit field directly
- **Quick Copy**: Copy value
- **Side Panel**: Open detail view or complex editor
- **Tooltip Info**: Show extra context when needed
```

### Formatting Rules

- Component title must be capitalized
- Use proper heading structure (`##`, `###`, etc.)
- Always use `Canvas of={...}` to illustrate examples
- Omit "Variants" section if none exist
- Add a "Props" section if props are complex or need explanation

---

## Quality Checklist

Before submitting documentation:

- [ ] All required sections are present (Introduction, Anatomy, Guidelines at minimum)
- [ ] Code examples are working and up to date
- [ ] Images have proper alt text
- [ ] Props are fully documented
- [ ] Accessibility guidelines are included
- [ ] Interactive examples are working (play functions)
- [ ] All variants are documented
- [ ] Best practices are clearly stated
- [ ] Snapshot story exists with `withSnapshot({})` for Chromatic
- [ ] Story docs cover all component properties
