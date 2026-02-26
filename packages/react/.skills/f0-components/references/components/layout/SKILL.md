---
name: layout
description: Structural templates for organizing page content. Use to establish consistent containers, spacing, and visual hierarchy. Supports Standard and Two-Column configurations for responsive web design.
---

## Overview
Layouts serve as the foundation for page structure, providing consistent containers that adhere to design system rules for spacing and responsiveness. They control the behavior of the outer container without dictating the specific arrangement of elements within the sections they define.

## Props
- **children** (optional): `React.ReactNode` - The content or components to be rendered within the layout structure.

## Layout Variants

### StandardLayout
The default structural template used throughout the application. Use this for general-purpose pages that require a single primary content container.

```tsx
import { StandardLayout } from './Layout';

const MyPage = () => (
  <StandardLayout>
    <ContentBlock />
  </StandardLayout>
);
```

### TwoColumnLayout
Organizes content into two distinct areas. Use this when you need to separate essential content from supplementary information.
- **Primary Column**: For essential, high-priority content.
- **Secondary Column**: For sidebars, navigation, or supplementary metadata.

```tsx
import { TwoColumnLayout } from './Layout';

const MyDashboard = () => (
  <TwoColumnLayout>
    <MainFeed />
    <SidebarActions />
  </TwoColumnLayout>
);
```

## Best Practices
- **Container Focus**: Layouts should only manage the outer shell and responsive behavior. Avoid putting specific business logic or complex internal styling inside the Layout component itself.
- **Accessibility**: The "Skip to main content" link must be the first focusable element in the DOM, regardless of whether the main content area is visually positioned on the left or right.
- **Consistency**: Always use these predefined layouts rather than creating custom CSS grids for top-level page structures to ensure visual hierarchy remains consistent across the application.

## Related Skills
- For navigation components often placed within layouts, see the skill in ./references/navigation.md
- For skip link implementation and accessibility patterns, see the skill in ./references/skip-link.md
- For spacing tokens used within these containers, see the skill in ./references/design-tokens.md