# MDX Documentation Template

This reference contains the full MDX template for f0 component documentation.

## Meta Tag Format

Use `<Meta of={Stories} />` to attach the MDX to the stories file:

```mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./F0ComponentName.stories";

<Meta of={Stories} />
```

**DO NOT** use `<Meta title="..." />` - this creates a separate page!

## Full MDX Structure

Create ONE MDX file: `__stories__/[StoriesFilename].mdx`

The file has 4 main sections: **Overview**, **Guidelines**, **Code**, **Examples**.

````mdx
import { Canvas, Meta, Controls, Unstyled } from "@storybook/addon-docs/blocks";
import * as Stories from "./ComponentName.stories";
import { DoDonts } from "@/lib/storybook-utils/do-donts";
import { DocsNav } from "@/lib/storybook-utils/docs-nav";

<Meta of={Stories} />

# ComponentName

[1-2 sentence description of what the component does]

## <br />

<br />
<DocsNav />
---

# Overview

## Purpose

- [Primary objective of the component]
- [Key benefit it provides]
- [Problem it solves]
- [Value for end users]

## Anatomy

<Canvas of={Stories.Default} />

<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Element</th>
      <th className="text-left">Description</th>
      <th className="text-left">Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Container</code></td>
      <td>Main wrapper</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
</Unstyled>

## Variants

<Canvas of={Stories.Variants} />

<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Variant</th>
      <th className="text-left">Description</th>
      <th className="text-left">When to use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>default</code></td>
      <td>Primary style</td>
      <td>Main actions</td>
    </tr>
  </tbody>
</table>
</Unstyled>

## States

<Canvas of={Stories.States} />

---

# Guidelines

## Design Best Practices

### When to use

- [Specific scenario where component is best]
- [Context where it provides value]

### When NOT to use

- [Inappropriate scenario]: Use [Alternative] instead

### How to use

- [Key implementation guideline]
- [UX consideration]

## Content Best Practices

- [Text content guideline]
- [Tone recommendations]

<DoDonts
  do={{
    description: "[Correct usage example]",
  }}
  dont={{
    description: "[Incorrect usage example]",
  }}
/>

## Accessibility

<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Key</th>
      <th className="text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><kbd>Enter</kbd></td>
      <td>Activate</td>
    </tr>
  </tbody>
</table>
</Unstyled>

---

# Code

## Import

```tsx
import { F0ComponentName } from "@factorialco/f0-react";
```

## Props

<Canvas of={Stories.Default} />

<Controls of={Stories.Default} />

### Props Reference

<Unstyled>
<table className="mb-8 w-full dark:text-f1-foreground-inverse/80">
  <thead>
    <tr>
      <th className="text-left">Prop</th>
      <th className="text-left">Type</th>
      <th className="text-left">Default</th>
      <th className="text-left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code> <span className="text-red-500">*</span></td>
      <td><code>string</code></td>
      <td>-</td>
      <td>Button text</td>
    </tr>
  </tbody>
</table>
</Unstyled>

---

# Examples

## Basic Usage

<Canvas of={Stories.Default} />

```tsx
<F0ComponentName label="Example" />
```

## With Feature

<Canvas of={Stories.WithFeature} />

```tsx
<F0ComponentName label="Example" feature={true} />
```

## Advanced Usage

<Canvas of={Stories.Advanced} />

```tsx
<F0ComponentName
  label="Advanced"
  variant="outline"
  onClick={() => console.log("clicked")}
/>
```
````
