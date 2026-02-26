---
name: icons
description: Manage the icon library and generate icon components from SVG assets. Use when adding new iconography to the system or updating existing icons across React and React Native packages. Do not use for complex illustrations or one-off images.
---
## Overview
The icon system uses a single source of truth for SVG assets which are then transformed into framework-specific components (React, React Native, etc.).

## Architecture
- **Source of Truth**: `packages/core/assets/icons` contains all raw SVG files.
- **Distribution**: SVGs are organized into three distinct directories within the core assets folder to categorize iconography.
- **Generated Components**: Framework-specific components are located in `packages/[package-name]/src/icons` (e.g., `packages/react/src/icons`).

## Adding a New Icon

### 1. Prepare the SVG
Ensure the SVG file meets the following requirements:
- Cleaned of unnecessary metadata (use tools like SVGO).
- Uses `currentColor` for fills/strokes to allow for dynamic coloring.
- Follows the established naming convention (kebab-case).

### 2. Add Asset
Place the new SVG file into the appropriate subdirectory within `packages/core/assets/icons`.

### 3. Generate Components
Run the generation script within the target package directory to create the component wrappers.

```bash
# Navigate to the package (e.g., React)
cd packages/react

# Run the generation command
pnpm generate-icons
```

## Usage
Generated icons are exported as individual components.

```tsx
import { ChevronRightIcon } from '@your-scope/react/icons';

const MyComponent = () => (
  <ChevronRightIcon size={24} color="blue" />
);
```

### Props
- **size** (optional): `number | string` - Sets the width and height of the icon. Defaults to 24.
- **color** (optional): `string` - Sets the fill or stroke color using CSS color values or design tokens. Defaults to 'currentColor'.
- **className** (optional): `string` - Additional CSS classes for styling (React only).
- **style** (optional): `CSSProperties` - Inline styles for the icon container.

## Best Practices
- **Consistency**: Always use the `pnpm generate-icons` command rather than manually creating icon components to ensure consistency across packages.
- **Naming**: Use descriptive, functional names (e.g., `edit.svg` instead of `pencil.svg`) where possible.
- **Optimization**: Ensure SVGs do not contain hardcoded hex codes; use `currentColor` to support theme switching.

For styling icons with design tokens, see the skill in ./references/design-tokens.md.
For using icons within buttons, see the skill in ./references/button.md.

## Sub-components

- **Add a new icon**: See ./references/add-a-new-icon.md