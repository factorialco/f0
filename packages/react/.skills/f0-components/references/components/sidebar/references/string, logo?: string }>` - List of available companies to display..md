## CompanySelector

The `CompanySelector` component provides a specialized dropdown interface for switching between different company or organization contexts within the sidebar. Use this when the application supports multi-tenancy or when a user has access to multiple business entities.

**Props:**
- `companies`: `Array<{ id: string, name: string, logo?: string }>` - List of available companies to display.
- `selectedCompanyId`: `string` - The ID of the currently active company.
- `onSelect`: `(id: string) => void` - Callback function triggered when a company is selected.
- `isLoading`: `boolean` (optional) - Displays a skeleton or loading state when fetching company data.
- `isCollapsible`: `boolean` (optional) - Whether the selector changes appearance when the sidebar is collapsed.

```tsx
import { CompanySelector } from './Sidebar/CompanySelector';

const MySidebar = () => {
  const companies = [
    { id: '1', name: 'Acme Corp', logo: '/logos/acme.png' },
    { id: '2', name: 'Global Industries' }
  ];

  return (
    <CompanySelector 
      companies={companies} 
      selectedCompanyId="1"
      onSelect={(id) => console.log('Selected:', id)}
    />
  );
};
```

**Edge Cases & Gotchas:**
- If only one company exists, the component may render as a static header rather than a clickable dropdown (Single Entry mode).
- Ensure logos are optimized for small dimensions (typically 24x24px or 32x32px).