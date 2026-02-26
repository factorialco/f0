# Workflow and Validation

Step-by-step workflow for documenting an f0 component.

## Phase 1: Component Analysis

### Step 1.1: Locate Component Files

```
packages/react/src/components/F0ComponentName/
├── F0ComponentName.tsx       # Main component
├── index.tsx                 # Exports
├── types.ts                  # Type definitions
└── __stories__/
    ├── [Name].stories.tsx    # Stories file
    └── [Name].mdx            # Documentation (create this)
```

**IMPORTANT**: MDX filename must match stories filename:
- `F0Button.stories.tsx` -> `F0Button.mdx`
- `Card.stories.tsx` -> `Card.mdx`

### Step 1.2: Extract Component Information

From component files, extract:
1. **Props interface**: All public props with types
2. **Variants**: Visual/behavioral variants
3. **Component purpose**: From JSDoc or story description
4. **Examples**: From existing stories

### Step 1.3: List Available Stories

```tsx
// From ComponentName.stories.tsx
export const Default: Story = { ... }      // -> Stories.Default
export const Variants: Story = { ... }     // -> Stories.Variants
```

## Phase 2: Create MDX File

See [mdx-template.md](./mdx-template.md) for the full template.

## Phase 3: Update Stories File

### Remove autodocs and Hide Stories

When you create an MDX file with `<Meta of={Stories} />`:

1. **Remove `autodocs` tag** from meta
2. **Add `"!dev"` tag** to hide stories from sidebar

```tsx
// BEFORE
const meta = {
  title: "ComponentName",
  component: F0ComponentName,
  tags: ["autodocs", "stable"],
}

export const Default: Story = { ... }

// AFTER
const meta = {
  title: "ComponentName",
  component: F0ComponentName,
  tags: ["stable"],  // Remove "autodocs"
}

export const Default: Story = {
  tags: ["!dev"],  // Hide from sidebar
  ...
}
```

**Why hide stories?**
- Stories in documentation don't need sidebar entries
- Canvas components show them interactively
- Keeps sidebar clean

### Required Stories Structure

| Story Name | Tags       | Purpose                    |
|------------|------------|----------------------------|
| `Default`  | `["!dev"]` | Basic usage (in docs)      |
| `Variants` | `["!dev"]` | Visual variants (in docs)  |
| `Sizes`    | `["!dev"]` | Size variations (in docs)  |
| `States`   | `["!dev"]` | Interactive states         |
| `Snapshot` | `["!dev"]` | Visual regression (hidden) |

## Phase 4: Verify Sidebar

After creating MDX and updating stories:

```
Components/
└── ComponentName/
    └── Documentation   <- Only this should appear
```

**NOT this (wrong):**
```
Components/
└── ComponentName/
    ├── Documentation
    ├── Default         <- Should be hidden
    └── Variants        <- Should be hidden
```

## Validation Checklist

- [ ] Single MDX file with matching filename
- [ ] Uses `<Meta of={Stories} />` (NOT `<Meta title="..." />`)
- [ ] `"autodocs"` removed from stories meta
- [ ] Stories have `tags: ["!dev"]`
- [ ] `<DocsNav />` at top after title
- [ ] All tables use `<Unstyled>` with HTML `<table>`
- [ ] Props section has Canvas AND Controls
- [ ] All four sections: Overview, Guidelines, Code, Examples
- [ ] All `<Canvas of={Stories.X} />` reference existing stories
- [ ] Import uses `@factorialco/f0-react`
- [ ] Props table is complete
- [ ] At least 3 code examples
- [ ] DoDonts in Guidelines
- [ ] Keyboard table in Accessibility
- [ ] No emojis
- [ ] English throughout
