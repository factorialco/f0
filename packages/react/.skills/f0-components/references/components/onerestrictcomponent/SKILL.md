---
name: one-restrict-component
description: Conditionally renders children based on the current application route. Use to restrict UI elements to specific pages or hide them from certain paths, such as internal tools, debug overlays, or route-specific navigation.
---

## Overview
`OneRestrictComponent` acts as a wrapper that evaluates the current URL against a set of allowed or disallowed route patterns. It is primarily used for layout management and feature visibility without requiring complex manual route checking logic within functional components.

## Props
- **allowedRoutes** (optional): `string[]` - A list of route paths or patterns where the children are permitted to render.
- **disallowedRoutes** (optional): `string[]` - A list of route paths or patterns where the children must be hidden.
- **children** (required): `React.ReactNode` - The content to be conditionally rendered based on the route rules.

## Usage Examples

### Allowed Routes
Only renders the component when the user is on the dashboard or settings pages.
```tsx
import { OneRestrictComponent } from '@one/core';

const DashboardHeader = () => (
  <OneRestrictComponent allowedRoutes={['/dashboard', '/settings']}>
    <Breadcrumbs />
  </OneRestrictComponent>
);
```

### Disallowed Routes
Hides the component on the login and registration pages, but shows it everywhere else.
```tsx
import { OneRestrictComponent } from '@one/core';

const GlobalFooter = () => (
  <OneRestrictComponent disallowedRoutes={['/login', '/register']}>
    <footer>Standard Footer Content</footer>
  </OneRestrictComponent>
);
```

### Combined Restrictions
Renders only if the route is in the allowed list AND NOT in the disallowed list.
```tsx
import { OneRestrictComponent } from '@one/core';

const InternalTool = () => (
  <OneRestrictComponent 
    allowedRoutes={['/admin/*']} 
    disallowedRoutes={['/admin/login']}
  >
    <DebugConsole />
  </OneRestrictComponent>
);
```

## Best Practices
- **Path Matching**: Ensure route strings match the format used by your application's router (e.g., leading slashes).
- **Precedence**: When both props are provided, the component typically evaluates `disallowedRoutes` first to ensure restricted areas remain hidden.
- **Granularity**: Use this for UI visibility, not for security. Sensitive data should still be protected by server-side checks or dedicated Auth Guards.

## Related Skills
- For general routing patterns and navigation hooks, see the skill in ./references/one-router.md
- For user-based permission restrictions, see the skill in ./references/one-auth-component.md