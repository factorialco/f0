## Add a New Icon

This skill provides the procedural knowledge required to add new SVG icons to the core library and generate the corresponding platform-specific components (React, React Native). Use this workflow when the design system requires a new icon asset that is not currently available in the library.

### Architecture Overview
The icon library uses a "Source of Truth" model to ensure consistency across different frameworks:
- **Source of Truth**: `packages/core/assets/icons` contains all raw SVG files.
- **Generation**: Platform packages (like `packages/react`) consume these SVGs and transform them into native components.

### Workflow: Adding an Icon

1.  **Add the SVG File**:
    Place your new `.svg` file into the appropriate subdirectory within `packages/core/assets/icons`. There are typically three directories categorized by icon style or usage; ensure the new icon matches the existing category.

2.  **Naming Convention**:
    - Use **kebab-case** for filenames (e.g., `chevron-down.svg`, `user-profile-active.svg`).
    - Do not include "icon" in the filename, as the generator usually appends this or handles the naming context.

3.  **SVG Requirements**:
    - Ensure the SVG is optimized (remove metadata, hidden layers, and editor-specific tags).
    - Use a consistent `viewBox` (standard is usually `0 0 24 24`).
    - Ensure paths are flattened and use `fill="currentColor"` or `stroke="currentColor"` to allow for dynamic coloring.

4.  **Generate Components**:
    After adding the SVG to the core assets, you must trigger the generation script in the specific platform package.
    ```bash
    # Navigate to the platform package
    cd packages/react

    # Run the generation command
    pnpm generate-icons
    ```
    This will populate `packages/react/src/icons` with the new React components.

### Generated Component API
Once generated, the icons follow a standard interface. While specific props depend on the generator configuration, they typically include:

**Props:**
- `size`: `number | string` — Sets the width and height of the icon. Default is usually `24`.
- `color`: `string` — Sets the color of the icon (maps to `fill` or `stroke`). Default is `currentColor`.
- `className`: `string` — Optional CSS class for custom styling.
- `style`: `CSSProperties` — Optional inline styles.

### Usage Example
After generation, the icon can be imported and used like any other React component:

```tsx
import React from 'react';
// Import from the generated icons directory
import { AddCircleIcon } from '@your-package/react/icons';

export const IconExample = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <AddCircleIcon size={20} color="#0070f3" />
      <span>Add New Item</span>
    </div>
  );
};
```

### Best Practices & Gotchas
- **Do Not Edit Generated Files**: Never manually edit files inside `packages/react/src/icons`. These are ephemeral and will be overwritten every time `pnpm generate-icons` is executed.
- **Core First**: Always start by adding the SVG to `packages/core`. If you only add it to a platform package, it will be lost and won't be available to other platforms (e.g., React Native).
- **Optimization**: Use tools like SVGO before adding the file to the repository to keep the bundle size small and the paths clean.