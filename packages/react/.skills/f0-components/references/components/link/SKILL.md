---
name: link
description: Versatile navigation element for clickable text or content. Use to navigate users to different pages, sections, or external resources. Use for routing and anchors; avoid for actions that trigger state changes without navigation.
---

## Overview

The Link component provides a standard way to handle navigation within the application. It supports internal routing, external links, and can wrap various types of content beyond simple text.

## Props

- **children** (optional): `ReactNode` - The clickable content or text to be rendered inside the link.
- **data-test** (optional): `string` - Data attribute for testing and automation identification.
- **href** (optional): `string` - The destination URL, path, or anchor.
- **stopPropagation** (optional): `boolean` - If true, prevents the click event from bubbling up to parent elements. Default: `false`.
- **target** (optional): `'_blank' | '_self' | '_parent' | '_top'` - Specifies where to open the linked document.
- **tooltip** (optional): `string` - Text content to display in a tooltip when the link is hovered.
- **variant** (optional): `ActionLinkVariant` - The visual style variant applied to the link.

## Usage Examples

### Basic Internal Link
```tsx
import { Link } from '@components/link';

<Link href="/settings/profile">
  Edit Profile
</Link>
```

### External Link with Tooltip
```tsx
<Link 
  href="https://docs.example.com" 
  target="_blank" 
  tooltip="View external documentation"
>
  Read Docs
</Link>
```

### Link with Event Control
```tsx
<Link 
  href="#section-1" 
  stopPropagation={true}
>
  Jump to Section
</Link>
```

## Best Practices

### Content Guidelines
- Use descriptive link text that explains the destination (e.g., "View Invoice" instead of "Click Here").
- Keep link text concise but informative.
- For external links, consider using the `target="_blank"` prop to avoid taking the user away from the application.

### Design Guidelines
- Ensure links are visually distinct from regular text.
- Use the `tooltip` prop when the destination or action might be ambiguous.
- Maintain consistent link styling across the application to build user trust.

## When to Use
- Navigating to a different page or route.
- Linking to external websites or resources.
- Creating anchor links to jump to specific sections on the same page.
- Wrapping images or cards that should act as navigation triggers.

## When Not to Use
- **Triggering Actions**: Do not use a Link for actions like "Save," "Delete," or "Submit." For these functional triggers, see the skill in ./references/button.md.
- **Empty Links**: Avoid using links without a valid `href`. If an element needs to look like a link but only triggers a JavaScript function, evaluate if a Button with a "link" variant is more appropriate.

## Related Skills
- For button-based actions, see the skill in ./references/button.md.
- For navigation menus and layouts, see the skill in ./references/navigation-menu.md.