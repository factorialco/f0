## PageHeader

PageHeader provides essential context and actions at the top of a page. It includes the module name, breadcrumbs, status indicators, and primary/secondary action buttons.

**Props:**
- `title`: `string` (Required) - The primary title of the current view.
- `module`: `string` - The name of the parent module (e.g., "Finance").
- `breadcrumbs`: `BreadcrumbItem[]` - Path items for navigation.
- `actions`: `ActionProps[]` - Array of button configurations for page-level actions.
- `status`: `{ label: string, variant: string }` - A status badge to display next to the title.
- `navigation`: `{ onNext: () => void, onPrev: () => void }` - Callbacks for record-to-record navigation.

**Usage Example:**
```tsx
import { PageHeader } from '@f1/navigation';

const InvoiceHeader = () => {
  return (
    <PageHeader
      title="INV-2024-001"
      module="Invoices"
      status={{ label: 'Pending', variant: 'warning' }}
      actions={[
        { label: 'Edit', onClick: () => {}, variant: 'secondary' },
        { label: 'Send', onClick: () => {}, variant: 'primary' }
      ]}
    />
  );
};
```

**Edge Cases & Gotchas:**
- For complex breadcrumb logic involving dropdowns, use the `BreadcrumbSelect` component within the `breadcrumbs` prop. See the skill in ./breadcrumb-select/SKILL.md.