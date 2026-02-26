## Metadata

The Metadata component is a sub-component of the Resource Header used to display key-value pairs of contextual information. It is designed to provide quick insights into a resource (such as a Person, Company, or Team) and supports interactive elements that appear on hover.

Use Metadata within a Resource Header to display secondary but important information like email addresses, phone numbers, IDs, or status tags.

**Props:**
- `label`: `string` (Required) - The key or description of the data point (e.g., "Email", "Status").
- `value`: `React.ReactNode` (Required) - The actual data to be displayed. Can be a string, link, or custom component.
- `icon`: `React.ReactNode` (Optional) - An icon displayed next to the label or value to provide visual context.
- `actions`: `MetadataAction[]` (Optional) - An array of action objects that appear when the user hovers over the metadata field.
  - `MetadataAction` shape: `{ icon: React.ReactNode, onClick: () => void, label: string }`
- `href`: `string` (Optional) - If provided, the value will be rendered as a clickable link.
- `variant`: `'default' | 'emphasized'` (Default: `'default'`) - Determines the visual weight of the metadata.

**Usage Examples:**

### Basic Metadata
```tsx
import { Metadata } from './resource-header';

export const ContactInfo = () => (
  <Metadata 
    label="Email" 
    value="alex.smith@company.com" 
  />
);
```

### Metadata with Hover Actions
```tsx
import { Metadata } from './resource-header';
import { CopyIcon, ExternalLinkIcon } from './icons';

export const ProfileMetadata = () => (
  <Metadata
    label="Employee ID"
    value="EMP-9904"
    actions={[
      { 
        icon: <CopyIcon />, 
        label: "Copy ID", 
        onClick: () => navigator.clipboard.writeText("EMP-9904") 
      }
    ]}
  />
);
```

### Metadata as a Link
```tsx
import { Metadata } from './resource-header';

export const WebsiteMetadata = () => (
  <Metadata
    label="Website"
    value="www.company.com"
    href="https://www.company.com"
  />
);
```

**Best Practices & Gotchas:**
- **Hover Interactions:** Remember that `actions` are only visible on hover. Ensure that critical functionality is not hidden behind a hover state if the application is frequently used on touch devices.
- **Content Length:** Metadata values should be concise. If a value is too long, it may break the layout of the Resource Header. Use truncation or tooltips for exceptionally long strings.
- **Consistency:** When using multiple Metadata components in a row, try to keep the labels consistent in casing (e.g., all Title Case).
- **Related Components:** This component is intended to be used inside the `ResourceHeader`. For the main header implementation, see the skill in ./resource-header/SKILL.md.