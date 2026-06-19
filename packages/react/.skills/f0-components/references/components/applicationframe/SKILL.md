---
name: application-frame
description: A high-level layout component used to define the primary shell of a web application. Use this to structure the main interface, including sidebars, content areas, and integrated AI features.
---

## Overview
The `ApplicationFrame` serves as the foundational layout wrapper for applications. It manages the spatial relationship between the navigation sidebar, the main content area, and optional AI-specific modules or promotional banners.

## Props
- **ai** (optional): `object` - Configuration and state for integrated AI assistant features.
- **aiPromotion** (optional): `object` - Data and configuration for displaying AI-related promotional content or onboarding.
- **children** (optional): `React.ReactNode` - The primary content to be rendered in the main viewport.
- **sidebar** (optional): `React.ReactNode` - The navigation component to be rendered in the side panel.

## Usage Examples

### Basic Application Layout
Use this pattern for standard internal tools or dashboards requiring a persistent sidebar.

```tsx
import { ApplicationFrame } from './ApplicationFrame';
import { Sidebar } from './Sidebar';

export const AppShell = () => {
  return (
    <ApplicationFrame 
      sidebar={<Sidebar />}
    >
      <div>Your main application content goes here.</div>
    </ApplicationFrame>
  );
};
```

### Layout with AI Promotion
Use this variant when introducing users to AI capabilities within the application context.

```tsx
import { ApplicationFrame } from './ApplicationFrame';

export const AIEnabledApp = () => {
  return (
    <ApplicationFrame
      aiPromotion={{
        title: "Try our new AI assistant",
        description: "Get insights faster with automated analysis."
      }}
    >
      <DashboardContent />
    </ApplicationFrame>
  );
};
```

## Variants

### Default
The standard configuration providing a responsive container for the sidebar and main content.

### With AI Promotion
Includes a specialized header or banner area designed to highlight AI features without obstructing the main workflow.

### Fullscreen With Actions
A specialized state for focused tasks (like document editing or data analysis) where the frame provides specific action triggers and maximizes the content area.

## Best Practices
- **Sidebar Consistency**: Ensure the `sidebar` prop receives a consistent navigation component across different routes to prevent layout shifts.
- **Content Overflow**: The `children` area should handle its own scrolling if the content exceeds the viewport height, though the frame typically manages the outer container.
- **AI Integration**: Use the `ai` prop to pass down global AI state or configuration that needs to be accessible at the frame level.

## Related Skills
- For Sidebar components, see the skill in ./references/sidebar.md
- For AI integration patterns and hooks, see the skill in ./references/ai-integration.md
- For Page Header patterns, see the skill in ./references/page-header.md