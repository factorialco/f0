---
name: section-header
description: Use to organize and present content into distinct sections within an interface. Provides a consistent structure for hierarchical information using titles, descriptions, and optional actions. Use when grouping related content or fields to improve page scannability.
---

## Overview
The Section Header is a structural component used to divide layouts into logical parts. It helps users navigate complex pages by providing clear visual anchors and context for the content that follows.

## Props
- **action** (optional): `object` - An action element, typically a button or icon button, displayed on the right side of the header.
- **description** (optional): `string` - Supporting text that provides additional context or instructions for the section.
- **link** (optional): `object` - A navigation link associated with the section, usually for "View all" or "Learn more" patterns.
- **separator** (optional): `string` - Defines the visual style or presence of a line separator between the header and the content.
- **title** (optional): `string` - The primary heading text for the section.

## Usage Examples

### Basic Section Header
```tsx
import { SectionHeader } from '@factorial/ui';

export const SimpleSection = () => (
  <SectionHeader 
    title="Personal Information" 
    description="Manage your contact details and emergency contacts."
  />
);
```

### With Action and Link
```tsx
import { SectionHeader } from '@factorial/ui';

export const ActionSection = () => (
  <SectionHeader
    title="Documents"
    description="Upload and manage employee files."
    action={{ label: 'Upload PDF', onClick: () => console.log('Upload') }}
    link={{ label: 'View all documents', href: '/documents' }}
  />
);
```

## Best Practices

### Content Guidelines
- **Be Concise**: Keep titles short and descriptive (usually 1-3 words).
- **Contextual Descriptions**: Use the description prop to explain the purpose of the section if the title isn't self-explanatory.
- **Action Clarity**: If using an `action`, ensure the label clearly describes what will happen (e.g., "Add Member" instead of "Submit").

### Design Guidelines
- **Hierarchy**: Use Section Headers to break up long forms or dashboard views.
- **Consistency**: Maintain a consistent level of detail across multiple section headers on the same page.
- **Spacing**: Ensure there is adequate white space between the Section Header and the content it introduces.

## Related Skills
- For Button components used in the `action` prop, see the skill in ./references/button.md
- For Link components used in the `link` prop, see the skill in ./references/link.md
- For layout containers, see the skill in ./references/box.md