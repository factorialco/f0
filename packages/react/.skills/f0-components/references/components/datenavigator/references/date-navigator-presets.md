## Date Navigator Presets

Presets provide predefined, semantic date ranges that allow users to select common timeframes (e.g., "Last 7 Days", "This Quarter") with a single click. They simplify the user experience by removing the need for manual range selection.

Use Presets for standard reporting views where users frequently access specific rolling windows or fiscal periods.

**Props:**
- `presets`: `Array<string | PresetDefinition>` (Required) - An array of preset identifiers. Can use predefined strings or custom objects.
- `hideNavigation`: `boolean` (Optional) - If `true`, hides the standard increment/decrement arrows, forcing users to use presets or the calendar. Default: `false`.
- `onPresetClick`: `(preset: PresetDefinition) => void` (Optional) - Callback executed when a user selects a preset.

**Predefined Preset Keys:**
- `today`, `yesterday`, `last7Days`, `last30Days`, `thisMonth`, `lastMonth`, `thisQuarter`, `thisYear`.

**PresetDefinition Object:**
- `label`: `string` - The display name.
- `granularity`: `GranularityDefinitionKey` - The granularity to switch to when selected.
- `range`: `{ from: Date, to: Date }` - The specific date range the preset covers.

```tsx
import { DateNavigator, PRESETS } from '@company/ui';

const customPresets = [
  'today',
  'last7Days',
  {
    label: 'Last 6 Months',
    granularity: 'month',
    range: { 
      from: new Date(2023, 0, 1), 
      to: new Date(2023, 5, 30) 
    }
  }
];

export const PresetExample = () => (
  <DateNavigator 
    presets={customPresets}
    hideNavigation={false}
    onValueChange={(val) => console.log('Selected Preset Range:', val)}
  />
);
```

**Edge Cases & Gotchas:**
- **Granularity Overrides**: Selecting a preset often changes the active granularity of the `DateNavigator`. Ensure your application state handles unexpected granularity shifts.
- **Timezone Consistency**: Presets like "Today" are calculated based on the client's local time unless a specific timezone prop is passed to the parent provider.
- **Reference Skill**: For details on available granularities, see the skill in ./date-navigator/SKILL.md.