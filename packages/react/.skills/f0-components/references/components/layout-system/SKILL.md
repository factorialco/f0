---
name: layout-system
description: Use to build responsive page structures with headers, sidebars, and organized content sections. Ideal for dashboards, data-heavy interfaces, and complex forms requiring hierarchical grouping of content blocks.
---

## Overview
The Layout System provides a responsive framework for organizing application pages. It follows a hierarchical structure where a **Page Layout** contains **Groups** (sections), which in turn contain **Blocks** (content units). This system ensures consistent spacing, alignment, and responsive behavior across different screen sizes.

## Props
- **children** (required): `ReactNode` - The main content of the page, typically composed of Groups and Blocks.
- **aside** (optional): `ReactNode` - Content for the sidebar area (e.g., navigation, filters, or secondary actions).
- **header** (optional): `ReactNode` - Content for the top header area of the page.
- **variant** (optional): `"main-aside" | string` - Determines the structural arrangement of the layout. Default is "main-aside".

## Core Components
The layout system relies on specific sub-components to manage internal structure:
- **Groups**: Represent major sections of a page and define the relationship between blocks (e.g., Grid or Masonry).
- **Blocks**: Represent individual content sections or widgets within a group.

For detailed information on these sub-components, see the following:
- For PageLayoutContentBlock, see the skill in ./references/page-layout-content-block.md
- For GridGroupLayout, see the skill in ./references/grid-group-layout.md
- For FluidGridGroupMasonry, see the skill in ./references/fluid-grid-group-masonry.md

## Usage Examples

### Basic Page Structure
```tsx
import { LayoutSystem } from './LayoutSystem';

const MyPage = () => (
  <LayoutSystem
    header={<HeaderComponent title="Dashboard" />}
    aside={<SidebarNavigation />}
    variant="main-aside"
  >
    {/* Content goes here, typically wrapped in Groups and Blocks */}
    <main>
      <h1>Welcome to the Dashboard</h1>
    </main>
  </LayoutSystem>
);
```

### Dashboard with Content Blocks
```tsx
import { LayoutSystem } from './LayoutSystem';
import { GridGroupLayout } from './GridGroupLayout';
import { PageLayoutContentBlock } from './PageLayoutContentBlock';

const Dashboard = () => (
  <LayoutSystem
    header={<PageHeader title="Analytics" />}
    aside={<FilterPanel />}
  >
    <GridGroupLayout title="Key Metrics">
      <PageLayoutContentBlock title="Revenue">
        <AreaChart data={revenueData} />
      </PageLayoutContentBlock>
      <PageLayoutContentBlock title="User Growth">
        <LineChart data={userData} />
      </PageLayoutContentBlock>
    </GridGroupLayout>
  </LayoutSystem>
);
```

## Best Practices
- **Accessibility**: Ensure the `aside` content is structured so that the main content remains easily reachable via keyboard navigation. The layout is designed to prioritize the first focusable element correctly even when the sidebar is positioned on the right.
- **Responsiveness**: Use the provided Group components (Grid or Masonry) to ensure content reflows correctly on smaller screens.
- **Nesting**: Avoid deeply nesting layouts. Stick to the Page > Group > Block hierarchy for maintainability and performance.
- **Visual Consistency**: Use `PageLayoutContentBlock` for consistent padding, titles, and descriptions within your layout sections.