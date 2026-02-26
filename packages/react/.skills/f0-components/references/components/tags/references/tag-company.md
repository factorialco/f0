## TagCompany

Displays a company entity, typically consisting of the company name and an optional logo. Use this in tables, lists, or headers to identify corporate entities.

**Props:**
- `name`: `string` (Required) - The name of the company.
- `logoUrl`: `string` (Optional) - URL for the company logo image.
- `size`: `'sm' | 'md'` (Optional) - Defaults to 'md'.

```tsx
import { TagCompany } from '@ui/tags';

export const CompanyExample = () => (
  <TagCompany 
    name="Acme Corp" 
    logoUrl="https://logo.clearbit.com/acme.com" 
  />
);
```