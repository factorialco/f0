---
name: resource-header
description: Use to provide context and key actions for resource-specific pages (e.g., Person, Company, Team). It displays titles, metadata, status indicators, and action buttons to help users identify where they are and what they can do.
---
## Overview
The Resource header is a structural component that serves as the primary heading for resource pages. It aggregates identity information (title, description), contextual data (metadata), and functional triggers (actions) into a consistent layout.

## Props
- **title** (optional): `string` - Main heading identifying the resource.
- **description** (optional): `string` - Supporting text providing additional context.
- **metadata** (optional): `array` - Horizontal list of key-value pairs showing relevant information.
- **status** (optional): `object` - Visual indicator of the resource's current state.
- **primaryAction** (optional): `object` - Main button representing the most important action available for the resource.
- **secondaryActions** (optional): `array` - Complementary set of lower-priority actions offering additional but less frequent functionalities.
- **otherActions** (optional): `array` - Expandable menu containing additional operations and advanced options.
- **items** (optional): `array` - Additional items to be rendered within the header structure.

## Usage Examples

### Basic Resource Header
```tsx
import { ResourceHeader } from '@your-org/ui';

const MyPage = () => (
  <ResourceHeader
    title="Acme Corp"
    description="Global headquarters for manufacturing"
    status={{ label: 'Active', variant: 'success' }}
    primaryAction={{ label: 'Edit Company', onClick: () => {} }}
    metadata={[
      { label: 'Industry', value: 'Manufacturing' },
      { label: 'Size', value: '500-1000' }
    ]}
  />
);
```

### With Multiple Actions
```tsx
<ResourceHeader
  title="Jane Doe"
  secondaryActions={[
    { label: 'Message', onClick: () => {} },
    { label: 'View Profile', onClick: () => {} }
  ]}
  otherActions={[
    { label: 'Archive', onClick: () => {} },
    { label: 'Delete', variant: 'destructive', onClick: () => {} }
  ]}
/>
```

## Variants
- **Person**: Optimized for displaying individual user information, often including contact details in metadata.
- **Company**: Designed for entities, clients, or organizations, focusing on high-level business attributes.
- **Team**: Tailored for group structures, often highlighting member counts or department affiliations.

## Metadata Section
The metadata section displays key-value pairs to provide quick context. 
- Fields may reveal action options (like "copy to clipboard") on hover.
- Use metadata for data that helps identify the resource or its current state.

For Metadata component details, see the skill in ./references/metadata.md.

## Best Practices
- **Title**: Keep titles concise. If the resource name is long, ensure the component handles truncation gracefully.
- **Primary Action**: Only include one primary action to maintain a clear hierarchy.
- **Secondary Actions**: Limit to 2-3 visible actions before moving others into the `otherActions` menu.
- **Status**: Use clear, recognizable status labels and color variants that align with the system's semantic meaning.
- **Context**: Use the Resource header at the top of a page to establish the context for all content below it.

## Accessibility
- Ensure the `title` uses an appropriate heading level (usually `<h1>`) for the page.
- Action buttons must have descriptive labels for screen readers.
- Status indicators should use both color and text to convey meaning.

## Sub-components

- **Metadata**: See ./references/metadata.md