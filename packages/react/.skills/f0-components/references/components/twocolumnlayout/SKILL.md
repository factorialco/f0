---
name: two-column-layout
description: A layout component that splits the viewport into a main content area and a side column. Use for dashboards, profile pages, and views requiring supplementary side content like filters, navigation, or widgets.
---

## Overview
The `TwoColumnLayout` provides a consistent structure for pages that require a primary content area paired with a secondary sidebar. It supports flexible positioning of the main column and optional sticky behavior for the side content.

## Props
- **children** (required): `ReactNode` - The primary content displayed in the main column.
- **sideContent** (required): `ReactNode` - The secondary content displayed in the side column (e.g., charts, forms, or navigation).
- **mainColumnPosition** (optional): `"left" | "right"` - Determines the horizontal placement of the main column. Defaults to "left".
- **sticky** (optional): `boolean` - When true, the side column remains fixed in the viewport during scrolling. Defaults to false.

## Usage Examples

### Basic Layout
Standard configuration with the main content on the left and supplementary content on the right.

```tsx
import { TwoColumnLayout } from './TwoColumnLayout';

const MyPage = () => (
  <TwoColumnLayout 
    sideContent={<SidebarWidgets />}
  >
    <MainDashboardContent />
  </TwoColumnLayout>
);
```

### Main Column Right
Use this variant when the primary focus should be on the right side of the layout.

```tsx
<TwoColumnLayout 
  mainColumnPosition="right"
  sideContent={<NavigationMenu />}
>
  <ArticleContent />
</TwoColumnLayout>
```

### Sticky Sidebar
Ideal for long-form content where navigation or tools in the side column must remain accessible.

```tsx
<TwoColumnLayout 
  sticky={true}
  sideContent={<TableOfContents />}
>
  <LongDocumentationText />
</TwoColumnLayout>
```

## Best Practices
- **Content Hierarchy**: Place the most critical information in the `children` prop (main column).
- **Sticky Constraints**: Use `sticky={true}` only when the side content is shorter than the viewport height to avoid clipping issues.
- **Accessibility**: When `mainColumnPosition` is set to "right", ensure the DOM order remains logical for screen readers. The main content should typically receive focus first if it contains the primary page heading.

## Related Skills
- For Chart components used within the side column, see the skill in ./references/charts.md
- For Form widgets and input patterns, see the skill in ./references/form-widget.md
- For Profile-specific layout patterns, see the skill in ./references/profile-template.md