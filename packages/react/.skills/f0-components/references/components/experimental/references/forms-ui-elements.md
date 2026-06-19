## Forms (UI Elements)

This collection includes specialized form controls and selection patterns that extend standard HTML inputs. Use these for high-affordance selections, settings lists, and visually rich configuration interfaces.

### CardSelectable
A card-based selection component that can contain text, numbers, or avatars.
- **Props**: `selected`, `onSelect`, `title`, `description`, `avatar` (Icon, Person, Team, or Emoji), `disabled`, `showNumber`.
- **Usage**: Best for "Choose a plan" or "Select a profile" patterns.

### Grouped Toggles / Radios / Checkboxes
Containers that group multiple inputs into a bordered list with dividers.
- **Usage**: Best for settings pages or mobile-friendly selection lists.

**Usage Example:**
```tsx
import { CardSelectable, GroupedToggles } from '@/components/experimental/Forms';
import { UserIcon } from 'lucide-react';

export const SettingsPage = () => {
  return (
    <div className="space-y-4">
      {/* Card Selection */}
      <CardSelectable
        title="Admin Access"
        description="Full access to all system settings"
        avatar={{ type: 'icon', icon: UserIcon }}
        selected={true}
      />

      {/* Grouped List */}
      <GroupedToggles
        items={[
          { id: '1', label: 'Email Notifications', defaultChecked: true },
          { id: '2', label: 'Push Notifications', defaultChecked: false },
        ]}
        onChange={(id, checked) => console.log(id, checked)}
      />
    </div>
  );
};
```

**Variants:**
- **Avatars**: Supports `Icon`, `Person` (image URL), `Team` (initials), and `Emoji`.
- **Indicators**: `CardSelectable` can show a toggle indicator or a simple selection border.