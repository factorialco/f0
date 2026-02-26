---
name: avatars
description: Display visual representations of users, teams, companies, or entities. Use for profile pictures, entity identification, status indicators, and grouped lists of participants.
---
## Overview
The Avatar system is a polymorphic component suite designed to represent different entities consistently. It handles fallback logic (like initials when images are missing), status indicators (pulses), and grouping (lists).

## Props
- **type** (required): `enum` - The type of the avatar (person, team, company, file, flag, etc.)
- **avatar** (required): `object` - Configuration object for polymorphic rendering
- **firstName** (required): `string` - The first name of the person
- **lastName** (required): `string` - The last name of the person
- **name** (required): `string` - The company or team name (used for initials if no image provided)
- **src** (optional): `string` - URL of the image/logo
- **size** (optional): `enum` - The size of the avatar (default: "xs")
- **badge** (optional): `ReactNode` - Badge to display on the avatar
- **deactivated** (optional): `boolean` - Whether the person is deactivated (displays a specific icon)
- **pulse** (optional): `enum` - The pulse status to display
- **onPulseClick** (optional): `function` - Callback when the pulse indicator is clicked
- **emoji** (optional): `string` - Emoji character to display
- **file** (optional): `{ name: string, type: string }` - File definition for file avatars
- **flag** (optional): `string` - Country code/flag name
- **icon** (optional): `enum` - Icon identifier to display
- **date** (optional): `Date` - Date object for date-based avatars
- **avatars** (optional): `array` - Array of avatar configurations for `AvatarList`
- **max** (optional): `number` - Maximum number of avatars to display in a list before truncating
- **remainingCount** (optional): `number` - Explicit count for the overflow indicator in lists
- **layout** (optional): `union` - The layout style of the avatar list
- **noTooltip** (optional): `boolean` - Whether to hide tooltips (default: false)
- **aria-label** (optional): `string` - Accessibility label

## Usage Examples

### Person Avatar
```tsx
import { AvatarPerson } from '@components/avatars';

<AvatarPerson 
  firstName="Jane" 
  lastName="Doe" 
  src="https://example.com/photo.jpg" 
  size="md" 
/>
```

### Company Avatar with Badge
```tsx
import { AvatarCompany } from '@components/avatars';

<AvatarCompany 
  name="Acme Corp" 
  badge={<ModuleIcon />} 
  size="sm" 
/>
```

### Avatar List (Stack)
```tsx
import { AvatarList } from '@components/avatars';

const users = [
  { type: 'person', firstName: 'Alice', lastName: 'Smith' },
  { type: 'person', firstName: 'Bob', lastName: 'Jones' },
  { type: 'person', firstName: 'Charlie', lastName: 'Brown' }
];

<AvatarList 
  avatars={users} 
  max={2} 
  size="xs" 
/>
```

## Variants

### Entity Avatars
- **AvatarPerson**: Displays user photos or initials. Supports `deactivated` state.
- **AvatarTeam**: Represents groups or internal teams.
- **AvatarCompany**: Represents external organizations.

### Utility Avatars
- **AvatarFile**: Displays file type icons based on extension.
- **AvatarFlag**: Displays country flags.
- **AvatarEmoji**: Displays a single emoji in a circular container.
- **AvatarDate**: Displays a calendar-style date representation.
- **AvatarIcon**: Displays a specific system icon.

### Status & Feedback
- **AvatarPulse**: Adds an animated status ring (pulse) to the avatar.
- **AvatarAlert**: Specialized avatar for notification or alert contexts.

## Best Practices
- **Fallback Logic**: Always provide `firstName`/`lastName` or `name`. The component automatically generates initials if `src` fails or is missing.
- **Sizing**: Use consistent sizes within the same UI section (e.g., all avatars in a table row should be "xs").
- **Lists**: Use `AvatarList` for multiple entities to handle spacing and overflow logic automatically.
- **Deactivation**: Use the `deactivated` prop for offboarded users rather than removing their avatar, to maintain historical context.

## Accessibility
- Provide `aria-label` when the avatar is used without accompanying text (e.g., in a tight header or icon-only list).
- For `AvatarEmoji` or `AvatarIcon`, ensure the label describes the meaning, not just the visual (e.g., "Status: Busy" instead of "Red Circle").

## Related Skills
- For Badge components used within avatars, see the skill in ./references/badges.md
- For Icon sets used in AvatarIcon, see the skill in ./references/icons.md

## Sub-components

- **Avatar**: See ./references/avatar.md
- **AvatarAlert**: See ./references/avataralert.md
- **AvatarCompany**: See ./references/avatarcompany.md
- **AvatarDate**: See ./references/avatardate.md
- **AvatarEmoji**: See ./references/avataremoji.md
- **AvatarFile**: See ./references/avatarfile.md
- **AvatarFlag**: See ./references/avatarflag.md
- **AvatarIcon**: See ./references/avataricon.md
- **AvatarList**: See ./references/avatarlist.md
- **AvatarModule**: See ./references/avatarmodule.md
- **AvatarPerson**: See ./references/avatarperson.md
- **AvatarPulse**: See ./references/avatarpulse.md
- **AvatarTeam**: See ./references/avatarteam.md