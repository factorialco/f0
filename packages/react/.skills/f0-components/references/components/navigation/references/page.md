## Page

The Page component is the foundational layout wrapper for all views. It coordinates the PageHeader, navigation, and content area to ensure a consistent user experience across the application.

**Props:**
- `header`: `ReactNode` - Usually a `PageHeader` component.
- `breadcrumbs`: `BreadcrumbItem[]` - Navigation path to be passed to the internal breadcrumb component.
- `status`: `StatusProps` - Displays a status indicator (e.g., "Draft", "Published") in the header area.
- `navigation`: `NavigationProps` - Controls for sequential navigation (e.g., "Previous" and "Next" buttons).
- `embedded`: `boolean` - If true, removes outer padding and shadows for use inside modals or panels.

**Usage Example:**
```tsx
import { Page, PageHeader } from '@f1/navigation';

const UserSettings = () => {
  return (
    <Page
      header={<PageHeader title="Settings" />}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Settings' }]}
    >
      <section>Settings Content</section>
    </Page>
  );
};
```

**Edge Cases & Gotchas:**
- When `embedded` is true, the Page component will not take up the full viewport height, allowing it to fit inside container elements.