---
name: changelog
description: Use to display a chronological list of software updates, version history, and release notes. Ideal for communicating product evolution, new features, and bug fixes to users or stakeholders.
---

## Overview
The Changelog component provides a structured, readable format for presenting versioned updates. It categorizes changes into types such as "Features" and "Bug Fixes" and associates them with specific version numbers and release dates.

## Props/API
- **version** (required): `string` - The semantic version number (e.g., "1.371.1").
- **date** (required): `string` - The release date of the version.
- **changes** (required): `Array<{ type: 'feature' | 'fix' | 'improvement', description: string }>` - A list of specific changes included in the release.
- **isLatest** (optional): `boolean` - Highlights the entry as the most recent release.
- **className** (optional): `string` - Additional CSS classes for custom styling.

## Usage Example
```tsx
import { Changelog } from './Changelog';

const MyReleaseHistory = () => {
  const updates = [
    {
      version: "1.371.1",
      date: "2026-02-19",
      changes: [
        { type: 'fix', description: "Resolved alignment issues in the navigation bar." },
        { type: 'feature', description: "Added support for multi-factor authentication." }
      ]
    }
  ];

  return (
    <div>
      {updates.map((update) => (
        <Changelog 
          key={update.version}
          version={update.version}
          date={update.date}
          changes={update.changes}
        />
      ))}
    </div>
  );
};
```

## Variants
### Features
Used to highlight new functionality or significant enhancements added to the product.

### Bug Fixes
Used to list resolved issues, stability improvements, and patches.

## Best Practices
- **Be Concise**: Write change descriptions that are brief but descriptive enough for users to understand the impact.
- **Chronological Order**: Always display the most recent version at the top of the list.
- **Consistent Versioning**: Use Semantic Versioning (SemVer) to help users understand the scope of changes (Major.Minor.Patch).
- **Group by Type**: Group changes within a version by their category (e.g., all Features together, then all Bug Fixes).

## Accessibility
- Ensure high contrast between the version text and the background.
- Use semantic HTML headings (e.g., `<h3>` for version numbers) to allow screen reader users to navigate by release.
- If using icons for change types, ensure they have appropriate `aria-label` attributes.

## Related Skills
- For displaying status labels or change categories, see the skill in ./references/badge.md
- For vertical list layouts, see the skill in ./references/list.md
- For date formatting utilities, see the skill in ./references/use-date-formatter.md