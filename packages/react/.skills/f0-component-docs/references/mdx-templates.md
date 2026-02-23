# MDX Documentation Templates

## Required Imports

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/blocks"
import { DoDonts } from "@/lib/storybook-utils/do-donts"
import * as ComponentStories from "./index.stories"

<Meta of={ComponentStories} />
```

## Document Structure

Before writing documentation:

1. Read the component and its subcomponents to understand functionality
2. Detect props that generate variants — skip "Variants" section if none exist
3. Write for both designers (non-technical) and developers
4. Focus on practical use cases
5. Include at least a minimal description for every field or prop

## Section Template

### Introduction

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

### Anatomy

Use the most complete story:

```mdx
## Anatomy

<Canvas of={ComponentStories.MostCompleteStory} meta={ComponentStories} />
<Controls of={ComponentStories.MostCompleteStory} />
```

Describe the general layout and structure. Add subsections for common interactive elements:

- **Primary action** — Position and visual prominence
- **Edit** — Include pencil icon, use outline button
- **Destructive** — Place far left, include trash icon and confirmation dialog, use critical button style

### Variants

Only include if the component has significant variants:

```mdx
## Variants

### Variant Name

Short description of when and why to use this variant.

<Canvas of={ComponentStories.VariantName} />
```

### Guidelines

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

### Layout

```mdx
### Layout

- Describe how elements are visually structured and prioritized
- Include layout image if needed:

<img src="docs/component-name/layout.png" alt="Layout structure" />
```

### Behavior

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

## Formatting Rules

- Capitalize component title
- Use proper heading structure (`##`, `###`, etc.)
- Always use `Canvas of={...}` to illustrate examples
- Omit "Variants" section if none exist
- Add a "Props" section if props are complex or need explanation
